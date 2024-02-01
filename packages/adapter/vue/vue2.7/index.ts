import * as Vue from "vue";
import { h as H } from "vue";
import type { VNode} from "vue";
import clone from "lodash/clone";
import merge from "lodash/merge";

function getCurrentInstance() {
  const innerInstance = Vue.getCurrentInstance()?.proxy;
  const instance = innerInstance ? {
    ...innerInstance,
    props: innerInstance.$props,
    vnode: innerInstance.$vnode,
    emit: innerInstance.$emit.bind(innerInstance)
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

export * from 'vue'
export {
  getVNode,
  getCurrentInstance,
  H,
  cloneVNode,
  isVNode
}
