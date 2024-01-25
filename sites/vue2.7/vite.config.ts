import { defineConfig, searchForWorkspaceRoot } from 'vite'
import * as path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import ScriptSetup from 'unplugin-vue2-script-setup/vite';

import TDocPlugin from './plugins/doc';
import PWA from "./configs/pwa";

// import vue2 from '@vitejs/plugin-vue2';
import { createVuePlugin } from 'vite-plugin-vue2';
import vue2Jsx from '@vitejs/plugin-vue2-jsx';


const workspaceRoot = searchForWorkspaceRoot(process.cwd())
const pathFromWorkspaceRoot = (...args: string[]) => path.posix.resolve(workspaceRoot, ...args)


const resolveConfig = (vueVersion: number) => {
  return {
    '@adapter/vue': pathFromWorkspaceRoot(`packages/adapter/vue/vue${vueVersion}`),
    '@adapter/hooks': pathFromWorkspaceRoot(`packages/adapter/hooks/vue${vueVersion}`),
    '@adapter/utils': pathFromWorkspaceRoot(`packages/adapter/utils/vue${vueVersion}`),
    '@td/adapter-intel': pathFromWorkspaceRoot(`packages/adapter/intel/vue${vueVersion}`),
  }
}

const publicPathMap = {
  preview: '/',
  intranet: '/vue-next/',
  production: 'https://static.tdesign.tencent.com/vue-next/',
};


// ! vue-next 中是从 ../script/vite.base.config 引入
const isCustomElement = (tag) => tag.startsWith('td-') || tag.startsWith('tdesign-theme');


export const transformintel = () => ({
  name: 'transform-intel',
  transform(code, id) {
    const intelReg = /from "TDesign\/intel/g;
    code = code.replace(intelReg, 'from "./vue3');
    
    return code;
  }
})

export default defineConfig(({ mode }) => {
  return {
    base: publicPathMap[mode],
    resolve: {
      alias: {
        ...resolveConfig(2.7),
        '@': path.resolve(__dirname),
      }
    },
    server: {
      host: '0.0.0.0',
      port: 16000,
      open: '/',
      fs: {
        allow: ['..'],
      },
    },
    plugins: [
      // transformintel(),
      // vue2({
      // }),
      ScriptSetup({}),
      createVuePlugin({
        include: /(\.md|\.vue)$/,
        jsx: true,
        jsxOptions: {
          vModel: true,
          compositionAPI: true,
        }
      }),
      vue2Jsx({
        vModel: true,
      }),
      VitePWA(PWA),
      TDocPlugin(),
    ],
    optimizeDeps: {
      include: ['prismjs', 'prismjs/components/prism-bash.js', '@vue/babel-helper-vue-jsx-merge-props', 'tdesign-icons-vue-next'],
    },
  }
})
