import { defineConfig, searchForWorkspaceRoot } from 'vite'
import * as path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

import TDocPlugin from './plugins/doc';
import PWA from "./configs/pwa";

import ScriptSetup from 'unplugin-vue2-script-setup/vite';
// import vue2 from '@vitejs/plugin-vue2';
import { createVuePlugin } from 'vite-plugin-vue2';
import vue2Jsx from '@vitejs/plugin-vue2-jsx';


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


export const transformAdapter = () => ({
  name: 'transform-adapter',
  transform(code, id) {
    const adapterReg = /from "TDesign\/Adapter/g;
    code = code.replace(adapterReg, 'from "./vue3');
    
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
      // transformAdapter(),
      // vue2({
      // }),

      createVuePlugin({
        include: /(\.md|\.vue)$/,
        jsx: true,
        jsxOptions: {
          vModel: true,
          compositionAPI: true,
        }
      }),
      // vue2Jsx({
      //   vModel: true,
      // }),
      ScriptSetup({}),
      VitePWA(PWA),
      TDocPlugin(),
    ],
    optimizeDeps: {
      include: ['prismjs', 'prismjs/components/prism-bash.js', '@vue/babel-helper-vue-jsx-merge-props', '@vue/composition-api'],
    },
  }
})
