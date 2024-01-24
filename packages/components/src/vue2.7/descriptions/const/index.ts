import type { InjectionKey } from 'vue';
import { TdDescriptionsProps } from '@intel/components/descriptions/type';

const descriptionsKey: InjectionKey<TdDescriptionsProps> = Symbol('TDescriptions');

export default descriptionsKey;
