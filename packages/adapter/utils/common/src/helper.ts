import camelCase from 'lodash/camelCase';
import { isUndefined } from 'lodash-es';
import isNull from 'lodash/isNull';
import { isArray } from 'lodash-es';
import { isNumber } from 'lodash-es';
import { isString } from 'lodash-es';

// ! 是不是直接用 lodash 就成了？
export function omit(obj: object, fields: string[]): object {
  const shallowCopy: Record<string, any> = {
    ...obj,
  };
  for (let i = 0; i < fields.length; i++) {
    const key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}

/**
 * 计算字符串字符的长度并可以截取字符串。
 * @param str 传入字符串
 * @param maxCharacter 规定最大字符串长度
 * @returns 当没有传入maxCharacter时返回字符串字符长度，当传入maxCharacter时返回截取之后的字符串和长度。
 */
export function getCharacterLength(str: string, maxCharacter?: number) {
  const hasMaxCharacter = isNumber(maxCharacter);
  if (!str || str.length === 0) {
    if (hasMaxCharacter) {
      return {
        length: 0,
        characters: str,
      };
    }
    return 0;
  }
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    let currentStringLength = 0;
    if (str.charCodeAt(i) > 127 || str.charCodeAt(i) === 94) {
      currentStringLength = 2;
    } else {
      currentStringLength = 1;
    }
    if (hasMaxCharacter && len + currentStringLength > maxCharacter) {
      return {
        length: len,
        characters: str.slice(0, i),
      };
    }
    len += currentStringLength;
  }
  if (hasMaxCharacter) {
    return {
      length: len,
      characters: str,
    };
  }
  return len;
}

/**
 *
 * @returns 获取 ie 浏览器版本
 */
export function getIEVersion() {
  const { userAgent } = navigator;
  // 判断是否IE<11浏览器
  const isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  // 判断是否IE11浏览器
  const isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
  if (isIE) {
    const reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    const match = userAgent.match(reIE);
    if (!match) return -1;
    const fIEVersion = parseFloat(match[1]);
    return fIEVersion < 7 ? 6 : fIEVersion;
  }
  if (isIE11) {
    // IE11
    return 11;
  }
  // 不是ie浏览器
  return Number.MAX_SAFE_INTEGER;
}