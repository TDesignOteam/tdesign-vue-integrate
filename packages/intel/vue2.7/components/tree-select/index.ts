import type { TreeOptionData } from '@td/shared/interface';
import withInstall from '../utils/withInstall';
import type { TdTreeSelectProps, TreeSelectValue } from './type';
import _TreeSelect from './tree-select';

import './style';

export * from './interface';

export type TreeSelectProps<
  DataOption extends TreeOptionData = TreeOptionData,
  ValueType extends TreeSelectValue = TreeSelectValue,
> = TdTreeSelectProps<DataOption, ValueType>;

export const TreeSelect = withInstall(_TreeSelect);
export default TreeSelect;
