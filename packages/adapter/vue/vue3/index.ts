import { VNode, getCurrentInstance } from "vue";

function getVNode(node: VNode) {
  return node
}

export * from 'vue';
export {
  getCurrentInstance,
  getVNode
};

