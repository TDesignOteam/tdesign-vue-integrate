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

const pluginInstall = (app: VueConstructor, plugin: Plugin, ...paths: string[]) => {
  let lastObject = app.prototype;
  for (let i = 0; i < paths.length - 1; i++) {
    const path = paths[i];
    if (!path) throw new Error(`Path ${i} is empty`);
    if (!(path in lastObject)) {
      lastObject[path] = {};
    }
    lastObject = lastObject[path];
  }
  const lastPath = paths[paths.length - 1];
  if (!lastPath) throw new Error('Last path is empty');
  lastObject[lastPath] = plugin;
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
