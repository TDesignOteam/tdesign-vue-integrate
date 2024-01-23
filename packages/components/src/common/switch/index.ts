import _Switch from './switch';
import withInstall from '@adapter/utils/withInstall';
import { TdSwitchProps } from '@adapter/components/switch/type';

import './style';

export * from '@adapter/components/switch/type';
export type SwitchProps = TdSwitchProps;

export const Switch = withInstall(_Switch);
export default Switch;
