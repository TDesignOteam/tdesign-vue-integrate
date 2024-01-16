import { App } from 'vue';
import * as COMMON from "./src/common";
import * as VUE3 from "./src/vue3";


export function install(app: App, config?: Record<string, unknown>): void {
  const components = { ...COMMON, ...VUE3 };
  Object.keys(components).forEach((key) => {
    /plugin/i.test(key) ? app.use(components[key]) : app.use(components[key], config);
  });
}

export * from "./src/common";
export * from "./src/vue3";

export default {
  install,
  version: typeof PKG_VERSION === 'undefined' ? '' : PKG_VERSION, // eslint-disable-line
};
