import { defineComponent, ref, computed, H, watch,getCurrentInstance } from "vue";
import { createPopper } from "@popperjs/core";
import { debounce } from "lodash-es";
import { on, off, once, getIEVersion, setStyle } from "@td/adapter-utils";
import {
  useTNodeJSX,
  useContent,
  usePrefixClass,
  useCommonClassName,
} from "@td/adapter-hooks";
import Container from "./container";
import {
  getPopperPlacement,
  attachListeners,
  triggers,
  defaultVisibleDelay,
} from "./utils";

import props from "@td/intel/components/popup/props";

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
  setup(props, {}) {
    const popper = ref(null);
    const timeout = ref(null);
    const hasDocumentEvent = ref(null);
    const visibleState = ref(0);
    const mouseInRange = ref(false);
    const contentClicked = ref(false);
    const isLeaving = ref(false);

    const componentName = usePrefixClass("popup");
    const { STATUS: commonCls } = useCommonClassName();

    const overlayClasses = computed(() => [
      `${componentName.value}__content`,
      {
        [`${componentName.value}__content--text`]: props.content === "string",
        [`${componentName.value}__content--arrow`]: props.showArrow,
        [commonCls.value.disabled]: props.disabled,
      },
      props.overlayInnerClassName,
    ]);

    const hasTrigger = computed(() => {
      return triggers.reduce(
        (map, trigger) => ({
          ...map,
          [trigger]: props.trigger?.includes(trigger),
        }),
        {} as any
      );
    });
    const normalizedDelay = computed(() => {
      const delay = [].concat(props.delay ?? defaultVisibleDelay);
      return {
        open: delay[0],
        close: delay[1] ?? delay[0],
      };
    });

    const  preventClosing =(preventing: boolean)=> {
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
    },
    watch(
      () => props.visible,
      () => {
        const { hasTrigger, $el: triggerEl } = getCurrentInstance()?.proxy;
        if (props.visible) {
          this.preventClosing(true);
          if (!this.hasDocumentEvent) {
            on(document, "mousedown", this.handleDocumentClick, true);
            this.hasDocumentEvent = true;
          }
          // focus trigger esc 隐藏浮层
          if (triggerEl && hasTrigger.focus) {
            once(triggerEl, "keydown", (ev: KeyboardEvent) => {
              if (ev.code === "Escape") {
                this.handleClose({ trigger: "keydown-esc" });
              }
            });
          }
          this.$nextTick(() => {
            this.popupMounted();
          });
        } else {
          this.preventClosing(false);
          // destruction is delayed until after animation ends
          off(document, "mousedown", this.handleDocumentClick, true);
          this.hasDocumentEvent = false;
          this.mouseInRange = false;
        }
      }
    );
    return () => {
      const renderContent = useContent();

      return <div>1</div>;
    };
  },
  // provide(this: any) {
  //   return {
  //     [injectionKey]: this,
  //   };
  // },

  // inject: {
  //   popup: {
  //     from: injectionKey,
  //     default: undefined,
  //   },
  // },
});
