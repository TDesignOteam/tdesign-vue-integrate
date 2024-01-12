import { App } from 'vue';
import * as componentsCommon from 'components/common';
import * as componentsVue3 from 'components/vue3';

export function install(app: App, config?: Record<string, unknown>): void {
  const components = { ...componentsCommon, ...componentsVue3 };
  Object.keys(components).forEach((key) => {
    /plugin/i.test(key) ? app.use(components[key]) : app.use(components[key], config);
  });
}

export * from 'components/common';
export * from 'components/vue3';

// export * from './src/components';
// export * from './src/common';

export default {
  install,
  version: typeof PKG_VERSION === 'undefined' ? '' : PKG_VERSION, // eslint-disable-line
};
