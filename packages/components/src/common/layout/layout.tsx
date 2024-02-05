import { defineComponent, computed, provide, ref, Ref } from '@td/adapter-vue';
import { usePrefixClass, useTNodeJSX } from '@td/adapter-hooks';

export type LayoutProvideType = {
  hasSide: Ref<boolean>;
};

export default defineComponent({
  name: 'TLayout',
  setup() {
    const hasSide = ref(false);
    const renderTNodeJSX = useTNodeJSX();
    const COMPONENT_NAME = usePrefixClass('layout');
    const classes = computed(() => [
      COMPONENT_NAME.value,
      {
        [`${COMPONENT_NAME.value}--with-sider`]: hasSide.value,
      },
    ]);

    provide('layout', { hasSide });

    return () => <section class={classes.value}>{renderTNodeJSX('default')}</section>;
  },
});
