import raf from 'raf';
import isString from 'lodash/isString';
import isFunction from 'lodash/isFunction';
import { ComponentPublicInstance } from 'vue';
import { easeInOutCubic, EasingFunction } from './easing';

export const isServer = typeof window === 'undefined';

type ScrollTarget = HTMLElement | Window | Document;

interface ScrollTopOptions {
  container?: ScrollTarget;
  duration?: number;
  easing?: EasingFunction;
}

/**
 * 返回是否window对象
 *
 * @export
 * @param {any} obj
 * @returns
 */
function isWindow(obj: any) {
  return obj && obj === obj.window;
}

/**
 * 获取滚动距离
 *
 * @export
 * @param {ScrollTarget} target
 * @param {boolean} isLeft true为获取scrollLeft, false为获取scrollTop
 * @returns {number}
 */
export function getScroll(target: ScrollTarget, isLeft?: boolean): number {
  // node环境或者target为空
  if (typeof window === 'undefined' || !target) {
    return 0;
  }
  const method = isLeft ? 'scrollLeft' : 'scrollTop';
  let result = 0;
  if (isWindow(target)) {
    result = (target as Window)[isLeft ? 'pageXOffset' : 'pageYOffset'];
  } else if (target instanceof Document) {
    result = target.documentElement[method];
  } else if (target) {
    result = (target as HTMLElement)[method];
  }
  return result;
}

export function scrollTo(target: number, opt: ScrollTopOptions) {
  const { container = window, duration = 450, easing = easeInOutCubic } = opt;
  const scrollTop = getScroll(container);
  const startTime = Date.now();
  return new Promise((res) => {
    const fnc = () => {
      const timestamp = Date.now();
      const time = timestamp - startTime;
      const nextScrollTop = easing(Math.min(time, duration), scrollTop, target, duration);
      if (isWindow(container)) {
        (container as Window).scrollTo(window.pageXOffset, nextScrollTop);
      } else if (container instanceof HTMLDocument || container.constructor.name === 'HTMLDocument') {
        (container as HTMLDocument).documentElement.scrollTop = nextScrollTop;
      } else {
        (container as HTMLElement).scrollTop = nextScrollTop;
      }
      if (time < duration) {
        raf(fnc);
      } else {
        // 由于上面步骤设置了scrollTop, 滚动事件可能未触发完毕
        // 此时应该在下一帧再执行res
        raf(res);
      }
    };
    raf(fnc);
  });
}

export const getAttach = (node: any, triggerNode?: any): HTMLElement | Element | null => {
  const attachNode = isFunction(node) ? node(triggerNode) : node;
  if (!attachNode) {
    return document.body;
  }
  if (isString(attachNode)) {
    return document.querySelector(attachNode);
  }
  if (attachNode instanceof HTMLElement) {
    return attachNode;
  }
  return document.body;
};

// 用于判断节点内容是否溢出
export const isNodeOverflow = (
  ele: ComponentPublicInstance | Element | ComponentPublicInstance[] | Element[],
): boolean => {
  const { clientWidth = 0, scrollWidth = 0 } = ele as Element & { clientWidth: number; scrollWidth: number };
  return scrollWidth > clientWidth;
};

export const on = ((): any => {
  if (!isServer && !!document.addEventListener) {
    return (
      element: Node,
      event: string,
      handler: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions,
    ): any => {
      if (element && event && handler) {
        element.addEventListener(event, handler, options);
      }
    };
  }
  return (element: Node, event: string, handler: EventListenerOrEventListenerObject): any => {
    if (element && event && handler) {
      (element as any).attachEvent(`on${event}`, handler);
    }
  };
})();

export const off = ((): any => {
  if (!isServer && !!document.removeEventListener) {
    return (
      element: Node,
      event: string,
      handler: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions,
    ): any => {
      if (element && event) {
        element.removeEventListener(event, handler, options);
      }
    };
  }
  return (element: Node, event: string, handler: EventListenerOrEventListenerObject): any => {
    if (element && event) {
      (element as any).detachEvent(`on${event}`, handler);
    }
  };
})();

export function once(
  element: Node,
  event: string,
  handler: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
) {
  const handlerFn = isFunction(handler) ? handler : handler.handleEvent;
  const callback = (evt: any) => {
    handlerFn(evt);
    off(element, event, callback, options);
  };

  on(element, event, callback, options);
}

export function hasClass(el: Element, cls: string): any {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  }
  return ` ${el.className} `.indexOf(` ${cls} `) > -1;
}

export function addClass(el: Element, cls: string): any {
  if (!el) return;
  let curClass = el.className;
  const classes = (cls || '').split(' ');

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ` ${clsName}`;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

const trim = (str: string): string => (str || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');

export function removeClass(el: Element, cls: string): any {
  if (!el || !cls) return;
  const classes = cls.split(' ');
  let curClass = ` ${el.className} `;

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(` ${clsName} `, ' ');
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}