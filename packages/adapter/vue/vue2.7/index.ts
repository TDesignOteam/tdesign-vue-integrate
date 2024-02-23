import Vue, { h as H, getCurrentInstance as getCurrentInstanceInner } from "vue";
import type { VNode, VueConstructor, Ref } from "vue";
import clone from "lodash/clone";
import merge from "lodash/merge";
import omit from "lodash/omit";
import lowerFirst from "lodash/lowerFirst";
import Teleport from "./components/Teleport";

const getCurrentInstance = ()  => {
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

const getVNode = (node: VNode)  => {
  return {
    ...node,
    props: node.componentOptions?.propsData,
    children: { default: () => node.componentOptions?.children }
  }
}

const cloneVNode = (node: VNode, extraProps: Record<string, string | number | Array<string | number>>)  => {
  return merge(clone(node), extraProps)
}

export interface JSXRenderContext {
  defaultNode?: VNode | string;
  params?: Record<string, any>;
  // 是否不打印 LOG
  silent?: boolean;
}

export type OptionsType = VNode | JSXRenderContext | string;

const isVNode = (obj: OptionsType)  => {
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

// vue23:?? 临时写的方法，待讨论
const createElement = (type: string, props: Record<string, any> = {}, children?: any) => {
  const innerData = omit(props, ['key' ,'ref', 'class', 'style']);
  const event: Record<string, any> = {};

  for (const key in innerData) {
    if(key.startsWith('on')) {
      event[lowerFirst(key.slice(2))] = innerData[key]
    }
  }

  return H(type, {
    key: props.key,
    ref: props.ref,
    class: props.class,
    style: props.style,
    attrs: innerData,
    props: innerData,
    on: event,
  }, children)
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
  createElement,
  pluginInstall
}
