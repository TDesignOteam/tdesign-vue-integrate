import type { VNode } from '@vue/composition-api';
import { TdDescriptionItemProps } from '@adapter/components/descriptions/type';

export enum ItemsType {
  props = 'props',
  slots = 'slots',
}

export type TdDescriptionItem = TdDescriptionItemProps | VNode;
