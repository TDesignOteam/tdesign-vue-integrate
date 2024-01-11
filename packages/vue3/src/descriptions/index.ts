import _Descriptions from 'components/vue3/src/descriptions/descriptions';
import _DescriptionsItem from 'components/vue3/src/descriptions/descriptions-item';
import withInstall from '../utils/withInstall';
import { TdDescriptionsProps, TdDescriptionItemProps } from './type';

import './style';

export * from './type';
export type DescriptionsProps = TdDescriptionsProps;
export type DescriptionsItemProps = TdDescriptionItemProps;

export const Descriptions = withInstall(_Descriptions);
export const DescriptionsItem = withInstall(_DescriptionsItem);
export default Descriptions;
