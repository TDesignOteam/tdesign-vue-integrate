import { defineComponent, ref, onMounted, computed, onBeforeUnmount, getCurrentInstance, H, watch } from '../../index';

/**
 * 实现非常的简单，就是 dom 操作
 * mounted 后移动到对应的节点下即可
 * 
 * 难点在移除
 */

let globalChildNodesId = 0;

export default defineComponent({
  name: 'TTeleportVue2',
  props: {
    to: {
      type: String,
      default: 'body',
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    // 记录 target
    const target = computed<Element | null>(() => {
      if(props.disabled) {
        // 禁用情况下，target 为当前容器
        const instance = getCurrentInstance();
        return instance?.$el.parentNode as Element;
      }
      const el = document.querySelector(props.to);
      if (!el) return null
      return el
    });
    // 记录结点 Id
    const childNodesId = ref<string[]>([]);

    // 为每一个节点打上标记，这样才能在 unmount 时移除
    const markNode = (childNodes: NodeListOf<ChildNode>) => {
      const fragment = document.createDocumentFragment()
      childNodes.forEach((node) => {
        const nodeId = String(globalChildNodesId);
        (node as HTMLElement).dataset.tdesignVue2TeleportNodeId = nodeId;
        childNodesId.value.push(nodeId);
        fragment.appendChild(node);
        globalChildNodesId++;
      })
      return fragment;
    }

    const getChildNodes = () => {
      const instance = getCurrentInstance();
      return instance?.$el.childNodes;
    }

    const moveToTarget = () => {
      if (target.value) {
        const childNodes = getChildNodes();
        childNodes && target.value.appendChild(markNode(childNodes))
      }
    }

    const removeInTarget = () => {
      if (target.value) {
        childNodesId.value.forEach(nodeId => {
          const node = target.value?.querySelector(`[data-tdesign-vue2-teleport-node-id="${nodeId}"]`)
          node && target.value?.removeChild(node)
        })
        childNodesId.value = [];
      }
    }

    watch(
      [() => props.to, () => props.disabled], 
      () => {
        removeInTarget();
        moveToTarget();
      }
    )

    onMounted(() => {
      moveToTarget()
    });

    onBeforeUnmount(() => {
      removeInTarget()
    })

    return () => {
      const instance = getCurrentInstance();
      return H('div', {}, instance?.slots?.default?.(H))
    }
  }
});
