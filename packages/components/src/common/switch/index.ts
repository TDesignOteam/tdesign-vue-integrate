import _Switch from './switch';
import withInstall from '@intel/utils/withInstall';
import { TdSwitchProps } from '@intel/components/switch/type';

import './style';

export * from '@intel/components/switch/type';
export type SwitchProps = TdSwitchProps;

export const Switch = withInstall(_Switch);
export default Switch;
