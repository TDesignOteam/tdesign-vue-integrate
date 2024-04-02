import Vue, {
  getCurrentInstance,
  defineComponent,
  ref,
  onMounted,
  onBeforeUnmount,
  watch,
  onUpdated,
} from "@td/adapter-vue";
import raf from "raf";
import { isFunction } from "lodash-es";
import { getAttach, removeDom } from "@td/adapter-utils";
import type { TdPopupProps } from "@td/intel/components/popup/type";

import type { PropType, ComponentInternalInstance } from "@td/adapter-vue";

function isContentRectChanged(rect1: DOMRectReadOnly, rect2: DOMRectReadOnly) {
  if (!rect1 || !rect2) return;
  if (["width", "height", "x", "y"].some((k) => rect1[k] !== rect2[k])) {
    return true;
  }
  return false;
}

function observeResize(elm: Element, cb: (rect: DOMRectReadOnly) => void) {
  if (!window?.ResizeObserver || !elm) return;
  let prevContentRect: DOMRectReadOnly;
  const ro = new ResizeObserver((entries = []) => {
    const { contentRect } = entries[0] || {};
    if (isContentRectChanged(contentRect, prevContentRect)) {
      prevContentRect = contentRect;
      cb(contentRect);
      return;
    }
    // omit initial change
    if (!prevContentRect) {
      prevContentRect = contentRect;
    }
  });

  ro.observe(elm);
  return function () {
    ro.unobserve(elm);
  };
}

function useElement<T = HTMLElement>(
  getter: (instance: ComponentInternalInstance) => T
) {
  const instance = getCurrentInstance();
  const el = ref<T>();

  onMounted(() => {
    el.value = getter(instance);
  });
  onUpdated(() => {
    const newEl = getter(instance);
    if (el.value !== newEl) {
      el.value = newEl;
    }
  });

  return el;
}

const Trigger = defineComponent({
  name: "TPopupTrigger",
  emits: ["resize"],
  setup(props, { emit, slots }) {
    const instance = getCurrentInstance();
    const contentRect = ref(null);
    console.log(111, "el");

    // const el = useElement((vm) => {
    //   const containerNode = vm.parent.vnode;
    //   console.log(containerNode, "el");
    //   // skip the first text node due to `Fragment`
    //   return containerNode.el.nextElementSibling;
    // });
    onMounted(() => {
      if (
        !instance?.$el ||
        (typeof process !== "undefined" && process.env?.NODE_ENV === "test")
      )
        return;
      instance?.$on(
        "hook:destroyed",
        observeResize(instance?.$el, (ev) => {
          emit("resize", ev);
        })
      );
    });

    return () => {
      const children = slots.default?.() || [];
      if (children.length > 1 || children[0]?.type === Text) {
        return <span>{children}</span>;
      }
      return children[0];
    };
  },
});

const Container = defineComponent({
  name: "TPopupContainer",
  emits: ["resize"],
  props: {
    parent: Object,
    visible: Boolean,
    // support attach to current node when current is equal to `CURRENT_NODE`
    attach: [Function] as PropType<
      () => {
        attach: TdPopupProps["attach"];
        current: HTMLElement;
      }
    >,
    forwardRef: Function as PropType<(el: HTMLElement) => void>,
  },
  setup(props, ctx) {
    const content = ref();
    const instance = getCurrentInstance();
    onMounted(() => {
      if (props.visible) {
        raf(mountContent);
      }
    });

    watch(
      () => props.visible,
      (visible) => {
        if (visible) {
          mountContent();
        }
      }
    );

    onBeforeUnmount(() => {
      if (typeof process !== "undefined" && process.env?.NODE_ENV === "test")
        return;
      unmountContent();
    });

    const mountContent = () => {
      if (content.value) return;
      const parent = props?.parent;
      const elm = document.createElement("div");
      elm.style.cssText =
        "position: absolute; top: 0px; left: 0px; width: 100%";
      elm.appendChild(document.createElement("div"));
      content.value = new (this.$root.constructor as any)({
        parent,
        render() {
          return parent.$slots.content;
        },
        mounted() {
          parent.$emit("contentMounted");
          const content = this.$el.children[0];
          if (content) {
            this.$on(
              "hook:destroyed",
              observeResize(content, () => {
                parent.$emit("resize");
              })
            );
          }
        },
        destroyed() {
          parent.content = null;
          removeDom(elm);
        },
      });
      const { attach, current } = props.attach?.();
      const currentAttach = attach === "CURRENT_NODE" ? current : attach;
      // @ts-ignore
      getAttach(currentAttach, this.$refs?.triggerRef?.$el).appendChild(elm);
      content.value.$mount(elm.children[0]);
    };
    const unmountContent = () => {
      if (isFunction(content.value?.$destroy)) {
        content.value.$destroy();
      }
    };
    const updateContent = () => {
      content.value?.$forceUpdate();
    };
    return () => {
      return (
        <Trigger ref="triggerRef" onResize={() => ctx.emit("resize")}>
          {ctx.slots.default}
        </Trigger>
      );
    };
  },
});
export default Container;
