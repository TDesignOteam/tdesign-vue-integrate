import * as Vue from "vue";
import { h as H } from "vue";
import type { VNode} from "vue";

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

export * from 'vue'
export {
  getVNode,
  getCurrentInstance,
  H,
}
