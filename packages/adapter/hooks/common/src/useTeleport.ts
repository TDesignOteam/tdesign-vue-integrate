import { getSSRAttach, getAttach } from '../../../utils';
import { computed, Ref, onMounted, ref, watch } from '@td/adapter-vue';
import { AttachNode } from '@td/shared/interface';
import isFunction from 'lodash/isFunction';

/**
 * @description 返回挂载的节点, 用于teleport
 * @param attach 既可以是一个函数, 也可以是一个ref
 * @param triggerNode 既可以是一个函数, 也可以是一个ref
 */
export const useTeleport = (
  attach: (() => AttachNode) | Ref<AttachNode>,
  triggerNode?: (() => any) | Ref<any>,
): Ref<string | Element> => {
  // 如果是函数, 则使用computed包裹 否则直接使用ref
  const to = isFunction(attach) ? computed(attach) : ref(attach);
  const innerTriggerNode = isFunction(triggerNode) ? computed(triggerNode) : ref(triggerNode);

  const element = ref<string | Element>();

  const getElement = () => {
    element.value = getAttach(to.value, innerTriggerNode.value) || 'body';
  };

  onMounted(() => getElement());

  watch([to, innerTriggerNode], () => getElement());

  return element as Ref<string | Element> ;
};