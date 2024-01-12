import type { VNode } from 'vue';
import { TdDescriptionItemProps } from 'adapter';

export enum ItemsType {
  props = 'props',
  slots = 'slots',
}

export type TdDescriptionItem = TdDescriptionItemProps | VNode;
