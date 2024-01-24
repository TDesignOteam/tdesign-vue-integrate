import { computed, h, inject, getCurrentInstance, ref, provide } from 'vue';
import isFunction from 'lodash/isFunction';
import cloneDeep from 'lodash/cloneDeep';
import isString from 'lodash/isString';

import { InjectionKey, ComputedRef } from 'vue';
import _mergeWith from 'lodash/mergeWith';
import merge from 'lodash/merge';
import defaultConfig from 'shared/_common/js/global-config/default-config';
import defaultZhLocale from 'shared/_common/js/global-config/locale/zh_CN';
// import { GlobalConfigProvider } from './type';
import isArray from 'lodash/isArray';

export enum EAnimationType {
  ripple = 'ripple',
  expand = 'expand',
  fade = 'fade',
}

export const defaultGlobalConfig = merge(defaultConfig, defaultZhLocale);

export type Locale = typeof defaultZhLocale;

export const configProviderInjectKey: InjectionKey<ComputedRef<any>> = Symbol('configProvide');

export const mergeWith = (defaultGlobalConfig: any, injectConfig: any) =>
  _mergeWith(defaultGlobalConfig, injectConfig, (objValue, srcValue) => {
    if (isArray(objValue)) {
      return srcValue;
    }
  });



  const globalConfigCopy = ref<any>();
 
  
  /**
   * component globalConfig
   * @param componentName
   * @returns {t, globalConfig}
   * useConfig('pagination')
   */
  export function useConfig<T extends keyof any>(
    componentName: T = undefined,
    componentLocale?: any[T],
  ) {
    const injectGlobalConfig = getCurrentInstance() ? inject(configProviderInjectKey, null) : globalConfigCopy;
    const mergedGlobalConfig = computed(() => injectGlobalConfig?.value || (defaultGlobalConfig as any));
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
        if (!args.length) return pattern(h);
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
  export const provideConfig = (props: any) => {
    const defaultData = cloneDeep(defaultGlobalConfig);
    const mergedGlobalConfig = computed(() => mergeWith(defaultData, props.globalConfig));
  
    provide(configProviderInjectKey, mergedGlobalConfig);
  
    if (!globalConfigCopy.value) {
      globalConfigCopy.value = mergedGlobalConfig.value;
    }
  
    return mergedGlobalConfig;
  };
  

















export function usePrefixClass(componentName?: string) {
  const { classPrefix } = useConfig('classPrefix');
  return computed(() => {
    return componentName ? `${classPrefix.value}-${componentName}` : classPrefix.value;
  });
}

export function useCommonClassName() {
  const { classPrefix } = useConfig('classPrefix');

  return {
    SIZE: computed(() => ({
      small: `${classPrefix.value}-size-s`,
      medium: `${classPrefix.value}-size-m`,
      large: `${classPrefix.value}-size-l`,
      default: '',
      xs: `${classPrefix.value}-size-xs`,
      xl: `${classPrefix.value}-size-xl`,
      block: `${classPrefix.value}-size-full-width`,
    })),
    STATUS: computed(() => ({
      loading: `${classPrefix.value}-is-loading`,
      loadMore: `${classPrefix.value}-is-load-more`,
      disabled: `${classPrefix.value}-is-disabled`,
      focused: `${classPrefix.value}-is-focused`,
      success: `${classPrefix.value}-is-success`,
      error: `${classPrefix.value}-is-error`,
      warning: `${classPrefix.value}-is-warning`,
      selected: `${classPrefix.value}-is-selected`,
      active: `${classPrefix.value}-is-active`,
      checked: `${classPrefix.value}-is-checked`,
      current: `${classPrefix.value}-is-current`,
      hidden: `${classPrefix.value}-is-hidden`,
      visible: `${classPrefix.value}-is-visible`,
      expanded: `${classPrefix.value}-is-expanded`,
      indeterminate: `${classPrefix.value}-is-indeterminate`,
    })),
  };
}

