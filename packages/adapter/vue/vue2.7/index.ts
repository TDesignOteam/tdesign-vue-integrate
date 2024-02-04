import Vue, { h as H, getCurrentInstance as getCurrentInstanceInner } from "vue";
import type { VNode} from "vue";
import clone from "lodash/clone";
import merge from "lodash/merge";
import Teleport from "./components/Teleport";

function getCurrentInstance() {
  const innerInstance = getCurrentInstanceInner()?.proxy;
  const instance = innerInstance ? {
    ...innerInstance,
    props: innerInstance.$props,
    vnode: innerInstance.$vnode,
    emit: innerInstance.$emit.bind(innerInstance),
    slots: innerInstance.$scopedSlots
  } : undefined

  return instance;
}

function getVNode(node: VNode) {
  return {
    ...node,
    props: node.componentOptions?.propsData,
    children: { default: () => node.componentOptions?.children }
  }
}

function cloneVNode(node: VNode, extraProps: Record<string, string | number | Array<string | number>>) {
  return merge(clone(node), extraProps)
}

export interface JSXRenderContext {
  defaultNode?: VNode | string;
  params?: Record<string, any>;
  // 是否不打印 LOG
  silent?: boolean;
}

export type OptionsType = VNode | JSXRenderContext | string;

const isVNode = (obj: OptionsType) => {
  const vNode = H('span', '');
  const VNode = vNode.constructor;
  return obj instanceof VNode;
};

const Transition = Vue.component('Transition');
const TransitionGroup = Vue.component('TransitionGroup');

export * from 'vue'
export {
  getVNode,
  getCurrentInstance,
  H,
  cloneVNode,
  isVNode,
  Teleport,
  Transition,
  TransitionGroup,
}
