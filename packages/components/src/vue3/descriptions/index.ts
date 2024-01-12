import _Descriptions from './descriptions';
import _DescriptionsItem from './descriptions-item';
import { withInstall } from 'adapter';
import { TYPES } from 'adapter';

import './style';

// !zhangpaopao
export * from 'adapter';
export type DescriptionsProps = TYPES.TdDescriptionsProps;
export type DescriptionsItemProps = TYPES.TdDescriptionItemProps;

export const Descriptions = withInstall(_Descriptions);
export const DescriptionsItem = withInstall(_DescriptionsItem);
export default Descriptions;
