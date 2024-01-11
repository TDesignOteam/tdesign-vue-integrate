import { Plugin, Directive } from 'vue';

// @ts-ignore
export * from "@adapter"

// type
export declare function withInstall<T>(comp: T, alias?: string, directive?: {
  name: string;
  comp: Directive<T & Plugin>;
}): T & Plugin