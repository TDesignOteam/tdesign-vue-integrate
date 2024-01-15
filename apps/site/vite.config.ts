import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import * as path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

import TDocPlugin from './plugins/doc';
import PWA from "./configs/pwa";

import { searchForWorkspaceRoot } from 'vite'

const workspaceRoot = searchForWorkspaceRoot(process.cwd())
const pathFromWorkspaceRoot = (...args: string[]) => path.posix.resolve(workspaceRoot, ...args)


const resolveConfig = (vueVersion: number) => {
  return {
    '@adapter': pathFromWorkspaceRoot(`packages/adapter/vue${vueVersion}`),
  }
}


const publicPathMap = {
  preview: '/',
  intranet: '/vue-next/',
  production: 'https://static.tdesign.tencent.com/vue-next/',
};


// ! vue-next 中是从 ../script/vite.base.config 引入
const isCustomElement = (tag) => tag.startsWith('td-') || tag.startsWith('tdesign-theme');

// ! vue-next 中是从 ../script/vite.base.config 引入
export const basePlugin = [
  [
    vue({
      template: {
        compilerOptions: {
          isCustomElement,
        },
      },
    }),
    vueJsx({
      isCustomElement,
    }),
  ],
];

export const transformAdapter = () => ({
  name: 'transform-adapter',
  transform(code, id) {
    const adapterReg = /from "TDesign\/Adapter/g;
    code = code.replace(adapterReg, 'from "./vue3');
    
    return code;
  }
})

export default defineConfig(({ mode }) => {
  const vueVersion = mode === 'vue2' ? 2 : 3;
  
  return {
    base: publicPathMap[mode],
    resolve: {
      alias: {
        ...resolveConfig(vueVersion),
        '@': path.resolve(__dirname),
      }
    },
    server: {
      host: '0.0.0.0',
      port: 17000,
      open: '/',
      fs: {
        allow: ['..'],
      },
    },
    plugins: [
      transformAdapter(),
      ...basePlugin,
      VitePWA(PWA),
      TDocPlugin()
    ],
    optimizeDeps: {
      include: ['prismjs', 'prismjs/components/prism-bash.js'],
    },
  }
})
