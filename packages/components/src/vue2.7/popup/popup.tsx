import {
  computed,
  defineComponent,
  ref,
  H,
  onMounted,
  watch,
  nextTick,
  provide,
  inject,
  getCurrentInstance,
  onUpdated,
  onBeforeUnmount,
} from "@td/adapter-vue";
import { createPopper } from "@popperjs/core";
import type { Instance } from "@popperjs/core";
import { debounce } from "lodash-es";
import { on, off, once, getIEVersion, setStyle } from "@td/adapter-utils";
import {
  usePrefixClass,
  useCommonClassName,
  useTNodeJSX,
  useContent,
} from "@td/adapter-hooks";
import props from "@td/intel/components/popup/props";
import Container from "./container";
import {
  getPopperPlacement,
  attachListeners,
  triggers,
  defaultVisibleDelay,
} from "./utils";

import type {
  PopupVisibleChangeContext,
  TdPopupProps,
} from "@td/intel/components/popup/type";

const injectionKey = "__T_POPUP";

export default defineComponent({
  name: "TPopup",
  props: {
    ...props,
    expandAnimation: {
      type: Boolean,
    },
    updateScrollTop: {
      type: Function,
    },
  },
  setup(props, { attrs, slots }) {
    const popper = ref<HTMLDivElement>();
    // container instance
    const container = ref<HTMLDivElement>();
    const overlay = ref<HTMLDivElement>();

    // popperjs instance
    const popperInstance = ref<Instance>();
    // timeout id
    const timeout = ref<NodeJS.Timeout>();
    const hasDocumentEvent = ref(false);
    // if a trusted action (opening or closing) is prevented, increase this flag
    const visibleState = ref(0);
    const mouseInRange = ref(false);
    // mark popup as clicked when mousedown, reset after mouseup
    const contentClicked = ref(false);
    // is popup leaving
    const isLeaving = ref(false);
    const instance = getCurrentInstance();

    const componentName = usePrefixClass("popup");
    const { STATUS: statusClassName } = useCommonClassName();
    const renderContent = useContent();
    const renderTNodeJSX = useTNodeJSX();

    provide(injectionKey, instance);

    const popup = inject("popup", {
      from: injectionKey,
      default: undefined,
    });

    const overlayClasses = computed(() => {
      return [
        `${componentName.value}__content`,
        {
          [`${componentName.value}__content--text`]: props.content === "string",
          [`${componentName.value}__content--arrow`]: props.showArrow,
          [statusClassName.value.disabled]: props.disabled,
        },
        props.overlayInnerClassName,
      ];
    });

    const hasTrigger = computed(() => {
      return triggers.reduce(
        (map, trigger) => ({
          ...map,
          [trigger]: props.trigger?.includes(trigger),
        }),
        {} as any
      );
    });

    const handleDocumentClick = (ev?: MouseEvent) => {
      // Make sure content's mousedown event fires first
      setTimeout(() => {
        if (contentClicked.value) {
          // clear the flag after mousedown
          setTimeout(() => {
            contentClicked.value = false;
          });
          return;
        }
        // const a = instance
        const triggerEl = this.$el as HTMLElement;
        // ignore document event when clicking trigger element
        if (triggerEl.contains(ev?.target as Node)) return;
        // ignore document event if popper panel clicked
        const popperEl = popper.value;
        if (popperEl?.contains(ev?.target as Node)) return;
        visibleState.value = 0;
        emitPopVisible(false, { trigger: "document", e: ev });
      });
    };

    const handleClose = (
      context: Pick<PopupVisibleChangeContext, "trigger">
    ) => {
      clearTimeout(timeout.value);
      timeout.value = setTimeout(
        () => {
          emitPopVisible(false, context);
        },
        hasTrigger.value.click ? 0 : normalizedDelay.value.close
      );
    };

    const popupMounted = () => {
      // 用于select定位事件
      const overlayEl = overlay.value;
      if (overlayEl) {
        // TODO
        // updateScrollTop?.(overlayEl);
      }
    };
    const updateOverlayInnerStyle = () => {
      const { overlayInnerStyle } = props;
      const triggerEl = this.$el as HTMLElement;
      const overlayEl = overlay.value as HTMLElement;

      if (!triggerEl || !overlayEl) return;
      if (typeof overlayInnerStyle === "function") {
        setStyle(overlayEl, overlayInnerStyle(triggerEl, overlayEl));
      } else if (typeof overlayInnerStyle === "object") {
        setStyle(overlayEl, overlayInnerStyle);
      }
    };

    const getOverlayStyle = () => {
      const { overlayStyle } = props;
      const instance = getCurrentInstance();

      const triggerEl = instance?.$slots?.default?.[0] as HTMLElement;
      const overlayEl = overlay.value as HTMLElement;

      if (typeof overlayStyle === "function") {
        return overlayStyle(triggerEl, overlayEl);
      }
      if (typeof overlayStyle === "object") {
        return overlayStyle;
      }
    };

    const updatePopper = () => {
      const { $el: triggerEl } = this;
      const popperEl = popper.value;

      if (!popperEl || !props.visible) return;
      if (popperInstance.value) {
        popperInstance.value.update();
        return;
      }
      popperInstance.value = createPopper(triggerEl, popperEl, {
        modifiers:
          getIEVersion() > 9
            ? []
            : [
                {
                  name: "computeStyles",
                  options: {
                    // 默认为 true，即使用 transform 定位，开启 gpu 加速
                    // ie9 不支持 transform，需要添加 -ms- 前缀，@popperjs/core 没有添加这个样式，
                    // 在 ie9 下则去掉 gpu 优化加速，使用 top, right, bottom, left 定位
                    gpuAcceleration: false,
                  },
                },
              ],
        placement: getPopperPlacement(props.placement),
        onFirstUpdate: () => {
          nextTick(updatePopper);
        },
        ...props.popperOptions,
      });
    };

    watch(
      () => props.visible,
      (visible) => {
        const { $el: triggerEl } = this;
        if (visible) {
          preventClosing(true);
          if (!hasDocumentEvent.value) {
            on(document, "mousedown", handleDocumentClick, true);
            hasDocumentEvent.value = true;
          }
          // focus trigger esc 隐藏浮层
          if (triggerEl && hasTrigger.value.focus) {
            once(triggerEl, "keydown", (ev: KeyboardEvent) => {
              if (ev.code === "Escape") {
                handleClose({ trigger: "keydown-esc" });
              }
            });
          }
          nextTick(() => {
            popupMounted();
          });
        } else {
          preventClosing(false);
          // destruction is delayed until after animation ends
          off(document, "mousedown", handleDocumentClick, true);
          hasDocumentEvent.value = false;
          mouseInRange.value = false;
        }
      }
    );

    watch(
      () => props.overlayInnerStyle,
      () => {
        updateOverlayInnerStyle();
        updatePopper();
      }
    );

    watch(
      () => props.placement,
      () => {
        // TODO
        // popper?.destroy();
        popper.value = null;
        updatePopper();
      }
    );
    watch(
      () => contentClicked.value,
      (clicked) => {
        if (popup) {
          contentClicked.value = clicked;
        }
      }
    );

    onUpdated(() => {
      // container?.value.updateContent();
    });

    onBeforeUnmount(() => {
      if (props.visible) {
        (this as any).popup?.preventClosing(false);
      }
      destroyPopper();
      off(document, "mousedown", handleDocumentClick, true);
      clearTimeout(timeout.value);
    });

    const normalizedDelay = computed(() => {
      // @ts-expect-error
      const delay = [].concat(props.delay ?? defaultVisibleDelay);
      return {
        open: delay[0],
        close: delay[1] ?? delay[0],
      };
    });

    const preventClosing = (preventing: boolean) => {
      // TODO
      const parent = popup;
      parent?.preventClosing(preventing);
      if (preventing) {
        visibleState.value += 1;
      } else if (visibleState.value) {
        visibleState.value -= 1;
        if (!visibleState.value) {
          emitPopVisible(false, {});
          if (parent?.hasTrigger.hover && !parent?.mouseInRange) {
            parent.emitPopVisible(false, {});
          }
        }
      }
    };
    const handleOpen = (
      context: Pick<PopupVisibleChangeContext, "trigger">
    ) => {
      clearTimeout(timeout.value);
      timeout.value = setTimeout(
        () => {
          emitPopVisible(true, context);
        },
        hasTrigger.value.click ? 0 : normalizedDelay.value.open
      );
    };

    const onMouseEnter = () => {
      if (props.destroyOnClose && isLeaving.value) {
        // 如果 popup 在关闭的时候会被销毁，那在它消失的过程中，不响应鼠标进入事件，因为否则不会触发 mouseleave
        return;
      }
      mouseInRange.value = true;
      handleOpen({});
    };

    const onMouseLeave = (ev: MouseEvent) => {
      // 子元素存在打开的 popup 时，ui 可能重叠，而 dom 节点多是并列关系
      // 需要做碰撞检测去阻止父级 popup 关闭
      if (visibleState.value > 1) {
        const rect = (popper.value as HTMLElement).getBoundingClientRect();
        if (
          ev.x > rect.x &&
          ev.x < rect.x + rect.width &&
          ev.y > rect.y &&
          ev.y < rect.y + rect.height
        )
          return;
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
      if (props.visible) updatePopper();
    };
    const onLeave = () => {
      isLeaving.value = true;
    };
    const onAfterLeave = () => {
      isLeaving.value = false;
      destroyPopper();
    };

    const destroyPopper = () => {
      if (popperInstance.value) {
        popperInstance.value.destroy();
        popperInstance.value = null;
      }
      if (props.destroyOnClose) {
        container.value.unmountContent();
      }
    };

    const handleOnScroll = (e: WheelEvent) => {
      const { scrollTop, clientHeight, scrollHeight } =
        e.target as HTMLDivElement;
      // 防止多次触发添加截流
      const debounceOnScrollBottom = debounce(
        (e) => props.onScrollToBottom?.({ e }),
        100
      );

      // windows 下 scrollTop 会出现小数，这里取整
      if (clientHeight + Math.floor(scrollTop) === scrollHeight) {
        // touch bottom
        debounceOnScrollBottom(e);
      }
      props.onScroll?.({ e });
    };

    const emitPopVisible = (
      visible: boolean,
      context: PopupVisibleChangeContext
    ) => {
      if (props.disabled || visible === !!props.visible) return;
      if (!visible && visibleState.value > 1) return;
      if (visible && mouseInRange.value) return;
      props.onVisibleChange?.(visible, context);
      if (typeof props.onVisibleChange === "function") {
        props.onVisibleChange(visible, context);
      }
    };

    const handleToggle = (context: PopupVisibleChangeContext) => {
      emitPopVisible(!props.visible, context);
    };

    onMounted(() => {
      // const instance =
      console.log(container.value, "instance");
      // const trigger = attachListeners(this.$el);
      // const updateTrigger = () => {
      //   trigger.clean();
      //   if (hasTrigger.value.hover) {
      //     trigger.add("mouseenter", () =>
      //       handleOpen({ trigger: "trigger-element-hover" })
      //     );
      //     trigger.add("mouseleave", () =>
      //       handleClose({ trigger: "trigger-element-hover" })
      //     );
      //   } else if (hasTrigger.value.focus) {
      //     trigger.add("focusin", () =>
      //       handleOpen({ trigger: "trigger-element-focus" })
      //     );
      //     trigger.add("focusout", () =>
      //       handleClose({ trigger: "trigger-element-blur" })
      //     );
      //   } else if (hasTrigger.value.click) {
      //     trigger.add("click", (e: MouseEvent) => {
      //       handleToggle({ e, trigger: "trigger-element-click" });
      //       // ie9-10 trigger propagation
      //       if (getIEVersion() < 11) {
      //         handleDocumentClick(e);
      //       }
      //     });
      //   } else if (hasTrigger.value["context-menu"]) {
      //     trigger.add("contextmenu", (e: MouseEvent) => {
      //       e.preventDefault();
      //       // MouseEvent.button
      //       // 2: Secondary button pressed, usually the right button
      //       e.button === 2 && handleToggle({ trigger: "context-menu" });
      //     });
      //   }
      // };
      // updateTrigger();
      // TODO
      // this.$watch("trigger", updateTrigger);
    });
    return () => {
      const ref = renderContent("default", "triggerElement");
      const content = renderTNodeJSX("content");
      const hidePopup =
        props.hideEmptyPopup && ["", undefined, null].includes(content);
      const overlay =
        props.visible || !props.destroyOnClose
          ? H(
              "div",
              {
                class: [componentName.value, props.overlayClassName],
                ref: "popper",
                style: [
                  hidePopup && { visibility: "hidden", pointerEvents: "none" },
                  { zIndex: props.zIndex },
                  getOverlayStyle(),
                ],
                directives: props.destroyOnClose
                  ? undefined
                  : [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: props.visible && !hidePopup,
                        expression: "visible",
                      },
                    ],
                on: {
                  mousedown: () => {
                    contentClicked.value = true;
                  },
                  ...(hasTrigger.value.hover && {
                    mouseenter: onMouseEnter,
                    mouseleave: onMouseLeave,
                  }),
                },
              },
              [
                H(
                  "div",
                  {
                    class: overlayClasses.value,
                    ref: "overlay",
                    on: {
                      scroll(e: WheelEvent) {
                        handleOnScroll(e);
                      },
                    },
                  },
                  [
                    content,
                    props.showArrow &&
                      H("div", { class: `${componentName.value}__arrow` }),
                  ]
                ),
              ]
            )
          : null;
      // return <div>111</div>;
      return (
        <Container
          ref="container"
          onContentMounted={() => {
            if (props.visible) {
              updatePopper();
              updateOverlayInnerStyle();
            }
          }}
          onResize={() => {
            if (props.visible) {
              updatePopper();
            }
          }}
          // parent={this}
          visible={props.visible}
          // attach={() => ({ attach: props.attach, current: this.$el })}
        >
          <transition
            slot="content"
            name={
              props.expandAnimation
                ? `${componentName.value}--animation-expand`
                : `${componentName.value}--animation`
            }
            appear
            onBeforeEnter={onBeforeEnter}
            onAfterEnter={onAfterEnter}
            onLeave={onLeave}
            onAfterLeave={onAfterLeave}
          >
            {overlay}
          </transition>
          {ref}
        </Container>
      );
    };
  },
});
