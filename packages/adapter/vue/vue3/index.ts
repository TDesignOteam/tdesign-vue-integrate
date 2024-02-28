import * as Vue from "vue";
import { getCurrentInstance, h as H } from "vue";
import type { App, Plugin, VNode } from "vue";

const getVNode = (node: VNode) => {
  return node
}

const pluginInstall = (app: App, plugin: Plugin, ...paths: string[]) => {
  let lastObject = app.config.globalProperties;
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

const createElement = H;

const isVue3 = true;
const isVue2 = false;

export * from 'vue';
export {
  getCurrentInstance,
  getVNode,
  createElement,
  H,
  pluginInstall,
  isVue3,
  isVue2,
};

export default Vue;
