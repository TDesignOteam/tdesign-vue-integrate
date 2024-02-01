import { ref, computed } from '@td/adapter-vue';

export function useConfig(
  componentName: string,
) {
  const globalConfig = ref({});

  return {
    globalConfig
  };
}

