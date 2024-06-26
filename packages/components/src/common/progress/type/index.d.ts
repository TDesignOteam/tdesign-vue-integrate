import { VNode } from '@td/adapter-vue';
import { ClassName } '@td/shared/interface';

export interface ProgressProps {
  theme?: string;
  percentage?: number;
  label?: boolean | (() => VNode);
  status?: string;
  color?: string | any;
  trackColor?: string;
  strokeWidth?: string | number;
  size?: string;
  className?: ClassName;
}

export interface DiameterType {
  getDiameter?: number;
}
