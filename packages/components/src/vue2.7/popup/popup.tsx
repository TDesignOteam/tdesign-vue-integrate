import { isObject } from 'lodash-es';
import { isString } from 'lodash-es';
import { debounce } from 'lodash-es';
import { isArray } from 'lodash-es';
import { createPopper } from '@popperjs/core';
import type { Placement } from '@popperjs/core';
import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  onUpdated,
  provide,
  ref,
  toRefs,
  Transition,
  watch,
} from '@td/adapter-vue';
import type {
  InjectionKey,
  Ref,
} from '@td/adapter-vue';

import { off, on, once, getIEVersion } from '@td/adapter-utils';
import setStyle from '@td/shared/_common/js/utils/set-style';
import { useContent, useTNodeJSX, useCommonClassName, usePrefixClass, useVModel } from '@td/adapter-hooks';

import props from '@td/intel/components/popup/props';
import type { PopupTriggerEvent, PopupVisibleChangeContext, TdPopupProps } from '@td/intel/components/popup/type';

import Container from './container';

import {
  getPopperPlacement, attachListeners, triggers, defaultVisibleDelay,
} from './utils';


const POPUP_ATTR_NAME = 'data-td-popup';
const POPUP_PARENT_ATTR_NAME = 'data-td-popup-parent';

const injectionKey = '__T_POPUP';

export default defineComponent({
  name: 'TPopup',
  props: {
    ...props,
    expandAnimation: {
      type: Boolean,
    },
    updateScrollTop: {
      type: Function,
    },
  },
  setup(props, { expose }) {
    const popupInject = inject(injectionKey, undefined);
    /** popperjs instance */
    const popper = ref<ReturnType<typeof createPopper> | null>(null);
    /** timeout id */
    const timeout = ref(null);
    const hasDocumentEvent = ref(false);
    /** if a trusted action (opening or closing) is prevented, increase this flag */
    const visibleState = ref(0);
    const mouseInRange = ref(false);
    /** mark popup as clicked when mousedown, reset after mouseup */
    const contentClicked = ref(false);
    /** is popup leaving */
    const isLeaving = ref(false);

    const containerRef = ref<{ updateContent: () => void, unmountContent: () => void } | null>(null);
    const popperRef = ref(null);
    const overlayRef = ref(null);

    const classPrefix = usePrefixClass();
    const { STATUS } = useCommonClassName();

    const overlayClasses = computed(() => (
      [
        `${classPrefix.value}__content`,
        {
          [`${classPrefix.value}__content--text`]: props.content === 'string',
          [`${classPrefix.value}__content--arrow`]: props.showArrow,
          [STATUS.value.disabled]: props.disabled,
        },
        props.overlayInnerClassName,
      ]
    ));

    const hasTrigger = computed(() => (
      triggers.reduce((map, trigger) => ({
        ...map,
        [trigger]: props.trigger?.includes(trigger),
      }),
      {}
    )));

    const normalizedDelay = computed(() =>{
      const delay = [].concat(props.delay ?? defaultVisibleDelay);
      return {
        open: delay[0],
        close: delay[1] ?? delay[0],
      };
    });

    watch(() => props.visible, (visible) => {
      if (visible) {
        preventClosing(true);
        if (!hasDocumentEvent.value) {
          on(document, 'mousedown', handleDocumentClick, true);
          hasDocumentEvent.value = true;
        }
        // focus trigger esc 隐藏浮层
        const instance = getCurrentInstance();
        const triggerEl = instance?.vnode.el;

        if (triggerEl && hasTrigger.value.focus) {
          once(triggerEl, 'keydown', (ev: KeyboardEvent) => {
            if (ev.code === 'Escape') {
              handleClose({ trigger: 'keydown-esc' });
            }
          });
        }
        nextTick(() => {
          popupMounted();
        });
      } else {
        preventClosing(false);
        // destruction is delayed until after animation ends
        off(document, 'mousedown', handleDocumentClick, true);
        hasDocumentEvent.value = false;
        mouseInRange.value = false;
      }
    });

    watch(() => props.overlayInnerStyle, () => {
      updateOverlayInnerStyle();
      updatePopper();
    });

    watch(() => props.placement, () => {
      popper.value?.destroy();
      popper.value = null;
      updatePopper();
    });

    // sync lock state recursively
    watch(contentClicked, (clicked) => {
      if ((this as any).popup) {
        (this as any).popup.contentClicked = clicked;
      }
    });
  
    watch(() => props.trigger, () => {
      // focus trigger esc 隐藏浮层
      const instance = getCurrentInstance();
      const triggerEl = instance?.vnode.el;

      const trigger = attachListeners(triggerEl);
      const updateTrigger = () => {
        trigger.clean();
        
        if (hasTrigger.value.hover) {
          trigger.add('mouseenter', () => handleOpen({ trigger: 'trigger-element-hover' }));
          trigger.add('mouseleave', () => handleClose({ trigger: 'trigger-element-hover' }));
        } else if (hasTrigger.value.focus) {
          trigger.add('focusin', () => handleOpen({ trigger: 'trigger-element-focus' }));
          trigger.add('focusout', () => handleClose({ trigger: 'trigger-element-blur' }));
        } else if (hasTrigger.value.click) {
          trigger.add('click', (e: MouseEvent) => {
            handleToggle({ e, trigger: 'trigger-element-click' });
            // ie9-10 trigger propagation
            if (getIEVersion() < 11) {
              handleDocumentClick(e);
            }
          });
        } else if (hasTrigger.value['context-menu']) {
          trigger.add('contextmenu', (e: MouseEvent) => {
            e.preventDefault();
            // MouseEvent.button
            // 2: Secondary button pressed, usually the right button
            e.button === 2 && handleToggle({ trigger: 'context-menu' });
          });
        }
      };
      updateTrigger()
    }, { immediate: true });

    onUpdated(() => {
      containerRef.value?.updateContent();
    });

    onBeforeUnmount(() => {
      if (props.visible) {
        (this as any).popup?.preventClosing(false);
      }
      destroyPopper();
      off(document, 'mousedown', handleDocumentClick, true);
      clearTimeout(timeout.value);
    });

    const updatePopper = () => {
      // focus trigger esc 隐藏浮层
      const instance = getCurrentInstance();
      const triggerEl = instance?.vnode.el;

      const popperEl = popperRef.value;

      if (!popperEl || !props.visible) return;
      if (popper.value) {
        popper.value.update();
        return;
      }
      popper.value = createPopper(triggerEl, popperEl, {
        modifiers:
          getIEVersion() > 9
            ? []
            : [
              {
                name: 'computeStyles',
                options: {
                  // 默认为 true，即使用 transform 定位，开启 gpu 加速
                  // ie9 不支持 transform，需要添加 -ms- 前缀，@popperjs/core 没有添加这个样式，
                  // 在 ie9 下则去掉 gpu 优化加速，使用 top, right, bottom, left 定位
                  gpuAcceleration: false,
                },
              },
            ],
        placement: getPopperPlacement(props.placement as TdPopupProps['placement']),
        onFirstUpdate: () => {
          nextTick(updatePopper);
        },
        ...props.popperOptions,
      });
    };

    // popup弹出第一次初始化
    // 露事件
    const popupMounted = () => {
      // 用于select定位事件
      const overlayEl = overlayRef.value;
      if (overlayEl) {
        this.updateScrollTop?.(overlayEl);
      }
    };

    const getOverlayStyle = () => {
      const { overlayStyle } = this;
      const triggerEl = this.$el as HTMLElement;
      const overlayEl = overlayRef.value;

      if (typeof overlayStyle === 'function') {
        return overlayStyle(triggerEl, overlayEl);
      }
      if (typeof overlayStyle === 'object') {
        return overlayStyle;
      }
    };

    const updateOverlayInnerStyle = () => {
      const { overlayInnerStyle } = this;
      const triggerEl = this.$el as HTMLElement;
      const overlayEl = overlayRef.value;

      if (!triggerEl || !overlayEl) return;
      if (typeof overlayInnerStyle === 'function') {
        setStyle(overlayEl, overlayInnerStyle(triggerEl, overlayEl));
      } else if (typeof overlayInnerStyle === 'object') {
        setStyle(overlayEl, overlayInnerStyle);
      }
    };

    /**
     * destroy popper IF NEEDED
     */
    const destroyPopper = () => {
      if (popperRef.value) {
        popperRef.value.destroy();
        popperRef.value = null;
      }
      if (this.destroyOnClose) {
        containerRef.value?.unmountContent();
      }
    };

    const handleToggle = (context: PopupVisibleChangeContext) => {
      this.emitPopVisible(!props.visible, context);
    };

    const handleOnScroll = (e: WheelEvent) => {
      const { scrollTop, clientHeight, scrollHeight } = e.target as HTMLDivElement;
      // 防止多次触发添加截流
      const debounceOnScrollBottom = debounce((e) => emitEvent(this, 'scroll-to-bottom', { e }), 100);

      // windows 下 scrollTop 会出现小数，这里取整
      if (clientHeight + Math.floor(scrollTop) === scrollHeight) {
        // touch bottom
        debounceOnScrollBottom(e);
      }
      emitEvent(this, 'scroll', { e });
    };

    const handleOpen = (context: Pick<PopupVisibleChangeContext, 'trigger'>) => {
      clearTimeout(timeout.value);
      timeout.value = setTimeout(
        () => {
          this.emitPopVisible(true, context);
        },
        this.hasTrigger.click ? 0 : this.normalizedDelay.open,
      );
    },
    const handleClose = (context: Pick<PopupVisibleChangeContext, 'trigger'>) => {
      clearTimeout(timeout.value);
      timeout.value = setTimeout(
        () => {
          this.emitPopVisible(false, context);
        },
        this.hasTrigger.click ? 0 : this.normalizedDelay.close,
      );
    },
    const handleDocumentClick = (ev?: MouseEvent) => {
      // Make sure content's mousedown event fires first
      setTimeout(() => {
        if (this.contentClicked) {
          // clear the flag after mousedown
          setTimeout(() => {
            this.contentClicked = false;
          });
          return;
        }
        const triggerEl = this.$el as HTMLElement;
        // ignore document event when clicking trigger element
        if (triggerEl.contains(ev.target as Node)) return;
        // ignore document event if popper panel clicked
        const popperEl = this.$refs.popper as HTMLDivElement;
        if (popperEl?.contains(ev.target as Node)) return;
        this.visibleState = 0;
        this.emitPopVisible(false, { trigger: 'document', e: ev });
      });
    },
    const emitPopVisible = (visible: boolean, context: PopupVisibleChangeContext) => {
      if (this.disabled || visible === !!props.visible) return;
      if (!visible && this.visibleState > 1) return;
      if (visible && mouseInRange.value) return;
      this.$emit('visible-change', visible, context);
      if (typeof this.onVisibleChange === 'function') {
        this.onVisibleChange(visible, context);
      }
    };
    const onMouseEnter = () => {
      if (this.destroyOnClose && this.isLeaving) {
        // 如果 popup 在关闭的时候会被销毁，那在它消失的过程中，不响应鼠标进入事件，因为否则不会触发 mouseleave
        return;
      }
      mouseInRange.value = true;
      this.handleOpen({});
    };

    const onMouseLeave = (ev: MouseEvent)  =>{
      // 子元素存在打开的 popup 时，ui 可能重叠，而 dom 节点多是并列关系
      // 需要做碰撞检测去阻止父级 popup 关闭
      if (this.visibleState > 1) {
        const rect = (this.$refs.popper as HTMLElement).getBoundingClientRect();
        if (ev.x > rect.x && ev.x < rect.x + rect.width && ev.y > rect.y && ev.y < rect.y + rect.height) return;
      }
      mouseInRange.value = false;
      handleClose({});

      // parent can no longer monitor mouse leave
      const parent = (this as any).popup;
      if (parent?.mouseInRange) {
        parent.onMouseLeave(ev);
      }
    };

    const onBeforeEnter = () => {
      if (props.visible) {
        updatePopper();
      }
    };

    const onAfterEnter = () => {
      if (props.visible) {
        updatePopper();
      }
    };

    const onLeave = () => {
      this.isLeaving = true;
    };

    const onAfterLeave = () => {
      this.isLeaving = false;
      this.destroyPopper();
    };
    
    const preventClosing = (preventing: boolean) => {
      const parent = (this as any).popup;
      parent?.preventClosing(preventing);
      if (preventing) {
        this.visibleState += 1;
      } else if (this.visibleState) {
        this.visibleState -= 1;
        if (!this.visibleState) {
          this.emitPopVisible(false, {});
          if (parent?.hasTrigger.hover && !parent?.mouseInRange) {
            parent.emitPopVisible(false, {});
          }
        }
      }
    };

    return () => {
      const {
        visible, destroyOnClose, hasTrigger, handleOnScroll,
      } = this;
      const ref = renderContent(this, 'default', 'triggerElement');
      const content = renderTNodeJSX(this, 'content');
      const hidePopup = this.hideEmptyPopup && ['', undefined, null].includes(content);
      const overlay = visible || !destroyOnClose
        ? h(
          'div',
          {
            class: [this.componentName, this.overlayClassName],
            ref: 'popperRef',
            style: [
              hidePopup && { visibility: 'hidden', pointerEvents: 'none' },
              { zIndex: this.zIndex },
              this.getOverlayStyle(),
            ],
            directives: destroyOnClose
              ? undefined
              : [
                      {
                        name: 'show',
                        rawName: 'v-show',
                        value: visible && !hidePopup,
                        expression: 'visible',
                      } as VNodeDirective,
              ],
            on: {
              mousedown: () => {
                this.contentClicked = true;
              },
              ...(hasTrigger.hover && {
                mouseenter: this.onMouseEnter,
                mouseleave: this.onMouseLeave,
              }),
            },
          },
          [
            h(
              'div',
              {
                class: this.overlayClasses,
                ref: 'overlayRef',
                on: {
                  scroll(e: WheelEvent) {
                    handleOnScroll(e);
                  },
                },
              },
              [content, this.showArrow && h('div', { class: `${this.componentName}__arrow` })],
            ),
          ],
        )
        : null;
      return (
        <Container
          ref="containerRef"
          onContentMounted={() => {
            if (visible) {
              updatePopper();
              this.updateOverlayInnerStyle();
            }
          }}
          onResize={() => {
            if (visible) {
              updatePopper();
            }
          }}
          parent={this}
          visible={visible}
          attach={() => ({ attach: this.attach, current: this.$el })}
        >
          <transition
            slot="content"
            name={this.expandAnimation ? `${this.componentName}--animation-expand` : `${this.componentName}--animation`}
            appear
            onBeforeEnter={this.onBeforeEnter}
            onAfterEnter={this.onAfterEnter}
            onLeave={this.onLeave}
            onAfterLeave={this.onAfterLeave}
          >
            {overlay}
          </transition>
          {ref}
        </Container>
        );
    }
  },
});
