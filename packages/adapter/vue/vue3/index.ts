import { VNode, getCurrentInstance, h as H } from "vue";
import type { App, Plugin } from "vue";

const getVNode = (node: VNode) => {
  return node
}

const pluginInstall = (app: App, plugin: Plugin, path1: string, path2: string = '') => {
  if(path2) {
    const path1Obj = app.config.globalProperties[path1]
    if(path1Obj) {
      path1Obj[path2] = plugin;
    }
  } else {
    app.config.globalProperties[path1] = plugin;
  }
};

export * from 'vue';
export {
  getCurrentInstance,
  getVNode,
  H,
  pluginInstall
};

