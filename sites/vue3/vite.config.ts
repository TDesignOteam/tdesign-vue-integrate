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
    '@intel': pathFromWorkspaceRoot(`packages/intel/vue${vueVersion}`),
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

export const transformIntel = () => ({
  name: 'transform-intel',
  transform(code, id) {
    const intelReg = /from "TDesign\/intel/g;
    code = code.replace(intelReg, 'from "./vue3');
    
    return code;
  }
})

const CONFIG = {
  vue3: {
    port: 17000,
    plugins: [
      ...basePlugin
    ]
  },
}

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
      port: CONFIG[mode].port,
      open: '/',
      fs: {
        allow: ['..'],
      },
    },
    plugins: [
      transformIntel(),
      VitePWA(PWA),
      TDocPlugin(),
      ...CONFIG[mode].plugins
    ],
    optimizeDeps: {
      include: ['prismjs', 'prismjs/components/prism-bash.js', 'tdesign-icons-vue-next'],
    },
  }
})