import isFunction from 'lodash/isFunction';
import { getCurrentInstance, h } from '@td/adapter-vue';

/**
 * 渲染 icon，用于 icon、close 等渲染图标的场景
 * @example const renderIconTNode = useIcon();
 * @returns renderIconTNode
 * @param iconType 要渲染的icon元素
 * @param defaultIcons 默认icon集合
 */
export function useIcon() {
  const instance = getCurrentInstance();
  return function renderIconTNode(iconType: string, defaultIcons?: Record<string, any>) {
    let iconContent;
    // 传入的是渲染函数
    if (isFunction(instance?.props[iconType])) {
      iconContent = (instance?.props as Object)[iconType](h);
    } else if (instance?.slots[iconType]) {
      // 插槽slot
      iconContent = instance.slots[iconType] && instance.slots[iconType](null)[0];
    } else if (defaultIcons) {
      const Component = defaultIcons[instance.props.theme as string];
      iconContent = <Component></Component>;
    }
    return iconContent;
  };
}
