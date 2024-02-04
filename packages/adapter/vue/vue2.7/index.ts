import Vue, { h as H, getCurrentInstance as getCurrentInstanceInner } from "vue";
import type { VNode, VueConstructor, PluginObject } from "vue";
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

const createApp = (rootComp: VueConstructor, rootProps: Record<string, any> = {}) => {
  const comp = Vue.extend(rootComp)
  const ins = new comp({ propsData: rootProps });
  const mount = (el: string | HTMLElement) => {
    ins.$mount(el);
    return ins;
  };
  return { ...ins, mount };
};

const pluginInstall = (app: VueConstructor, plugin: Plugin, path1: string, path2: string = '') => {
  if(path2) {
    const path1Obj = app.prototype[path1]
    if(path1Obj) {
      path1Obj[path2] = plugin;
    }
  } else {
    app.prototype[path1] = plugin;
  }
};

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
  createApp,
  pluginInstall
}
