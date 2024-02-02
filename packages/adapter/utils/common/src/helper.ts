import camelCase from 'lodash/camelCase';
import isUndefined from 'lodash/isUndefined';
import isNull from 'lodash/isNull';
import isArray from 'lodash/isArray';
import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';

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