import { useConfig } from './useConfig';
// import { EAnimationType } from '../config-provider/context';

// ! zhangpaopao
export enum EAnimationType {
  ripple = 'ripple',
  expand = 'expand',
  fade = 'fade',
}
const { expand, ripple, fade } = EAnimationType;

export default function useKeepAnimation() {
  const { globalConfig } = useConfig('animation');

  const keepAnimation = (type: EAnimationType) => {
    const animationConfig = globalConfig.value;
    return animationConfig && !animationConfig.exclude?.includes(type) && animationConfig.include?.includes(type);
  };
  return {
    keepExpand: keepAnimation(expand),
    keepRipple: keepAnimation(ripple),
    keepFade: keepAnimation(fade),
  };
}
