// 在这个文件，解决 vue2/vue3 tree 组件依赖的差异问题
// 除此文件之外的其他组件文件，可从 vue2 项目直接复制到 vue3 项目进行维护
import type {
  CreateElement,
  PropType,
  Ref,
  SetupContext,
  ToRefs,
  UnwrapNestedRefs,
  VNode,
} from 'vue';
import Vue from 'vue';
import type {
  ClassName,
  Styles,
  TNode,
  TNodeReturnValue,
  TScroll,
  TreeOptionData,
} from '@td/shared/interface';
import type { TdCheckboxProps } from '../checkbox/type';
import type { TypeTreeEventState as TreeEventState } from '../_common/js/tree/types';
import type { VirtualScrollConfig } from '../hooks/useVirtualScrollNew';
import tdWithInstall from '../utils/withInstall';
import tdUseVModel from '../hooks/useVModel';
import tdUseDefaultValue from '../hooks/useDefaultValue';
import type { TreeStore } from '../_common/js/tree/tree-store';
import type { TdTreeProps, TreeInstanceFunctions } from './type';

export {
  ref,
  reactive,
  computed,
  watch,
  onMounted,
  toRefs,
  defineComponent,
} from 'vue';
export { CaretRightSmallIcon as TdCaretRightSmallIcon } from 'tdesign-icons-vue';
export { Checkbox as TCheckBox } from '../checkbox';
export { Loading as TLoading } from '../loading';
export { useConfig, usePrefixClass } from '@td/adapter-hooks';
export { useGlobalIcon } from '@td/adapter-hooks';
export { default as useLazyLoad } from '../hooks/useLazyLoad';
export { default as useVirtualScroll } from '../hooks/useVirtualScrollNew';
export { TreeNode, privateKey } from '../_common/js/tree/tree-node';

export type TypeVModel = ReturnType<typeof tdUseVModel>;
export type TypeRef<T> = Ref<T>;
export type TypeSetupContext = SetupContext;
export type TypeCreateElement = CreateElement;
export type TypeVNode = VNode;
export type TypePropType<T> = PropType<T>;
export type TypeCheckboxProps = CheckboxProps;
export type TypeClassName = ClassName;
export type TypeScroll = TScroll;
export type TypeStyles = Styles;
export type TypeTNode<T> = TNode<T>;
export type TypeTNodeReturnValue = TNodeReturnValue;
export type TypeTreeOptionData = TreeOptionData;
export type TypeTreeEventState = TreeEventState;
export type TypeVirtualScrollConfig = VirtualScrollConfig;
export type TypeToRefs<T> = ToRefs<T>;
export type TypeUnwrapNestedRefs<T> = UnwrapNestedRefs<T>;

export interface TypeTreeInstance extends Vue, TreeInstanceFunctions {}

export type TreeProps<T extends TypeTreeOptionData = TypeTreeOptionData> = TdTreeProps<T> & {
  treeStore?: TreeStore;
};

export const isVueNext = false;

export const TransitionGroup = Vue.component('TransitionGroup');

export interface TypeOnDrag {
  default?: unknown;
}

const onDrag: TypeOnDrag = {
  default: undefined,
};

export const TreeItemDefinition = {
  name: 'TTreeItem',
  inject: {
    onDrag,
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useRipple(el: unknown) {}

export function withInstall<T>(construct: T) {
  return tdWithInstall(construct);
}

export function getCreateElement(h: CreateElement) {
  return h;
}

export function getScopedSlots(instance: Vue) {
  return instance.$scopedSlots;
}

export function useVModel(
  props: TreeProps,
  refsProps: ToRefs<TreeProps>,
  propName = 'value',
  defaultPropName = 'defaultValue',
  eventPropName = 'onChange',
  eventName = 'change',
) {
  if (propName === 'value') {
    return tdUseVModel(refsProps[propName], props[defaultPropName], props[eventPropName], eventName, propName);
  }
  return tdUseDefaultValue(refsProps[propName], props[defaultPropName], props[eventPropName], propName, eventName);
}