import type { InjectionKey } from '@td/adapter-vue';
import type { TdDescriptionsProps } from '@intel/components/descriptions/type';

export const descriptionsKey: InjectionKey<TdDescriptionsProps> = Symbol('TDescriptions');
