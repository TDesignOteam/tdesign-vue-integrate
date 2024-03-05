import Vue, {
  defineComponent,
  onMounted,
  ref,
  getCurrentInstance,
} from "@td/adapter-vue";
import raf from "raf";
import { isFunction } from "lodash-es";
import { getAttach, removeDom } from "@td/adapter-utils";

import { useTNodeJSX } from "@td/adapter-hooks";
import type { TdPopupProps } from "@td/intel/components/popup/type";

import type { PropType } from "@td/adapter-vue";

function isContentRectChanged(rect1: DOMRectReadOnly, rect2: DOMRectReadOnly) {
  if (!rect1 || !rect2) return;
  if (["width", "height", "x", "y"].some((k) => rect1[k] !== rect2[k])) {
    return true;
  }
  return false;
}

function observeResize(elm: Element, cb: (rect: DOMRectReadOnly) => void) {
  if (!window?.ResizeObserver || !elm) return;
  let prevContentRect = null as unknown as DOMRectReadOnly;
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

const Trigger = defineComponent({
  name: "TPopupTrigger",
  emits: ["resize"],
  setup(props, { emit, slots }) {
    const renderTNodeJSX = useTNodeJSX();

    onMounted(() => {
      // TODO
      //     if (!this.$el || (typeof process !== 'undefined' && process.env?.NODE_ENV === 'test')) return;
      // this.$on(
      //   'hook:destroyed',
      //   observeResize(this.$el, (ev) => {
      //     emit('resize', ev);
      //   })
      // );
    });
    return () => {
      const children = renderTNodeJSX("default");
      if (children.length > 1 || !children[0]?.tag) {
        return <span>{children}</span>;
      }
      return children[0];
    };
  },
});

export default defineComponent({
  name: "TPopupContainer",
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
  },
  emits: ["contentMounted"],
  setup(props, { emit, slots }) {
    const content = ref(null);
    const mountContent = () => {
      if (content.value) return;
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const parent = getCurrentInstance()?.proxy;
      const elm = document.createElement("div");
      elm.style.cssText =
        "position: absolute; top: 0px; left: 0px; width: 100%";
      elm.appendChild(document.createElement("div"));
      content.value = new (parent?.$root?.constructor as any)({
        parent,
        render() {
          return parent?.$slots.content;
        },
        mounted() {
          emit("contentMounted");
          const content = parent?.$el.children[0];
          if (content) {
            this.$on(
              "hook:destroyed",
              observeResize(content, () => {
                parent?.$emit("resize");
              })
            );
          }
        },
        destroyed() {
          content.value = null;
          removeDom(elm);
        },
      });
      const { attach, current } = props.attach?.() || {};
      const currentAttach = attach === "CURRENT_NODE" ? current : attach;
      // @ts-ignore
      getAttach(currentAttach, this.$refs?.triggerRef?.$el).appendChild(elm);
      //TODO
      // content.value?.$mount(elm.children[0]);
    };

    //TODO
    // const unmountContent = () => {
    //   if (isFunction(this.content?.$destroy)) {
    //     this.content.$destroy();
    //   }
    // };
    // const updateContent = () => {
    //   this.content?.$forceUpdate();
    // };

    onMounted(() => {
      if (props.visible) {
        raf(mountContent);
      }
    });

    return () => {
      const renderTNodeJSX = useTNodeJSX();

      return (
        <Trigger ref="triggerRef" onResize={() => emit("resize")}>
          {renderTNodeJSX("default")}
        </Trigger>
      );
    };
  },
});
