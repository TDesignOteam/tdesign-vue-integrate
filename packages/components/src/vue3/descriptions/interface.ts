import type { VNode } from 'vue';
import { TdDescriptionItemProps } from 'vue3/src/descriptions/type';

export enum ItemsType {
  props = 'props',
  slots = 'slots',
}

export type TdDescriptionItem = TdDescriptionItemProps | VNode;
