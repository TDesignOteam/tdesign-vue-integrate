import type { VNode } from 'vue';
import { TdDescriptionItemProps } from 'components/helper/descriptions/type';

export enum ItemsType {
  props = 'props',
  slots = 'slots',
}

export type TdDescriptionItem = TdDescriptionItemProps | VNode;
