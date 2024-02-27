import { computed, H, inject, getCurrentInstance, ref, provide } from '@td/adapter-vue';
import { isFunction, cloneDeep, isString, mergeWith as _mergeWith, merge, isArray }  from "lodash-es";

import type { GlobalConfigProvider } from '@td/intel/components/config-provider/type';

import defaultConfig from '@td/shared/_common/js/global-config/default-config';
import defaultZhLocale from '@td/shared/_common/js/global-config/locale/zh_CN';


import type { InjectionKey, ComputedRef } from '@td/adapter-vue';


export type ConfigProviderProps = {
  globalConfig: GlobalConfigProvider;
};

export enum EAnimationType {
  ripple = 'ripple',
  expand = 'expand',
  fade = 'fade',
}

// 这是为了解决在非component里调用useConfig hook时发出的警告
// https://github.com/Tencent/tdesign-vue-next/issues/2025
const globalConfigCopy = ref<GlobalConfigProvider>();

export const defaultGlobalConfig = merge(defaultConfig, defaultZhLocale);

export type Locale = typeof defaultZhLocale;

export const configProviderInjectKey: InjectionKey<ComputedRef<GlobalConfigProvider>> = Symbol('configProvide');

export const mergeWith = (defaultGlobalConfig: GlobalConfigProvider, injectConfig: GlobalConfigProvider) =>
  _mergeWith(defaultGlobalConfig, injectConfig, (objValue, srcValue) => {
    if (isArray(objValue)) {
      return srcValue;
    }
  });


  export function useConfig<T extends keyof GlobalConfigProvider>(
    componentName: T | undefined = undefined,
    componentLocale?: GlobalConfigProvider[T],
  ) {
    const injectGlobalConfig = getCurrentInstance() ? inject(configProviderInjectKey, null) : globalConfigCopy;
    const mergedGlobalConfig = computed(() => injectGlobalConfig?.value || (defaultGlobalConfig as GlobalConfigProvider));
    const globalConfig = computed(() => Object.assign({}, mergedGlobalConfig.value[componentName], componentLocale));
  
    const classPrefix = computed(() => {
      return mergedGlobalConfig.value.classPrefix;
    });
  
    // 处理正则表达式
    const t = function <T>(pattern: T, ...args: any[]) {
      const [data] = args;
      if (isString(pattern)) {
        if (!data) return pattern;
        const regular = /\{\s*([\w-]+)\s*\}/g;
        const translated = pattern.replace(regular, (match, key) => {
          if (data) {
            return String(data[key]);
          }
          return '';
        });
        return translated;
      }
      if (isFunction(pattern)) {
        // 重要：组件的渲染必须存在参数 h，不能移除
        if (!args.length) return pattern(H);
        return pattern(...args);
      }
      return '';
    };
  
    return {
      t,
      global: globalConfig,
      globalConfig,
      classPrefix,
    };
  }



/**
 * provide globalConfig
 * @param {ConfigProviderProps} props
 * @returns {ComputedRef<GlobalConfigProvider>}
 */

// vue23:!
export const useProvideConfig = (props: ConfigProviderProps) => {
  const defaultData = cloneDeep(defaultGlobalConfig);
  const mergedGlobalConfig = computed(() => mergeWith(defaultData, props.globalConfig));

  provide(configProviderInjectKey, mergedGlobalConfig);

  if (!globalConfigCopy.value) {
    globalConfigCopy.value = mergedGlobalConfig.value;
  }

  return mergedGlobalConfig;
};
