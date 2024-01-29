import { VNode, getCurrentInstance, h as H } from "vue";

function getVNode(node: VNode) {
  return node
}

export * from 'vue';
export {
  getCurrentInstance,
  getVNode,
  H
};

