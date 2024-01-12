import { Plugin, Directive } from 'vue';

// @ts-ignore
export * from "@adapter"

// type: hooks
export declare function withInstall<T>(comp: T, alias?: string, directive?: {
  name: string;
  comp: Directive<T & Plugin>;
}): T & Plugin

// type: props
export type * from "./vue3/components";
