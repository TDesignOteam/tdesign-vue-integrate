// vite.config.ts
import { defineConfig, searchForWorkspaceRoot } from "file:///Users/ardor/Desktop/MyGitHub/tdesign-vue-integrate/node_modules/.pnpm/vite@5.0.12_@types+node@20.11.6_less@4.2.0/node_modules/vite/dist/node/index.js";
import * as path4 from "path";
import { VitePWA } from "file:///Users/ardor/Desktop/MyGitHub/tdesign-vue-integrate/node_modules/.pnpm/vite-plugin-pwa@0.17.4_vite@5.0.12_workbox-build@7.0.0_workbox-window@7.0.0/node_modules/vite-plugin-pwa/dist/index.js";
import ScriptSetup from "file:///Users/ardor/Desktop/MyGitHub/tdesign-vue-integrate/node_modules/.pnpm/unplugin-vue2-script-setup@0.11.4_@vue+composition-api@1.7.2_@vue+runtime-dom@3.4.15_rollup@2.79.1/node_modules/unplugin-vue2-script-setup/dist/vite.mjs";

// plugins/doc/index.ts
import vitePluginTdoc from "file:///Users/ardor/Desktop/MyGitHub/tdesign-vue-integrate/node_modules/.pnpm/vite-plugin-tdoc@2.0.4_@types+markdown-it@13.0.7/node_modules/vite-plugin-tdoc/dist/vite-plugin-tdoc.cjs.js";

// plugins/doc/transforms.ts
import * as path2 from "path";
import * as fs3 from "fs";

// plugins/doc/md-to-vue.ts
import * as fs2 from "fs";
import * as path from "path";
import matter from "file:///Users/ardor/Desktop/MyGitHub/tdesign-vue-integrate/node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter/index.js";
import camelCase from "file:///Users/ardor/Desktop/MyGitHub/tdesign-vue-integrate/node_modules/.pnpm/camelcase@8.0.0/node_modules/camelcase/index.js";

// plugins/doc/test-coverage.ts
var test_coverage_default = {
  "": "100%",
  "common/js/colorPicker": "63.51%",
  "common/js/datePicker": "67.47%",
  "common/js/globalConfig": "100%",
  "common/js/globalConfig/locale": "100%",
  "common/js/inputNumber": "40.48%",
  "common/js/loading": "73.17%",
  "common/js/log": "72.72%",
  "common/js/table": "15.37%",
  "common/js/timePicker": "71.69%",
  "common/js/tree": "93.33%",
  "common/js/upload": "39.94%",
  "common/js/utils": "48.46%",
  "common/js/watermark": "6.97%",
  affix: "89.47%",
  "affix/style": "100%",
  alert: "96.21%",
  "alert/style": "100%",
  anchor: "95.2%",
  "anchor/style": "100%",
  autoComplete: "99.85%",
  "autoComplete/style": "100%",
  avatar: "96.85%",
  "avatar/style": "100%",
  badge: "100%",
  "badge/style": "100%",
  breadcrumb: "97.52%",
  "breadcrumb/style": "100%",
  button: "100%",
  "button/style": "100%",
  calendar: "95.15%",
  "calendar/style": "100%",
  card: "99.71%",
  "card/style": "100%",
  cascader: "95.83%",
  "cascader/components": "84.49%",
  "cascader/core": "72.46%",
  "cascader/style": "100%",
  checkbox: "92.16%",
  "checkbox/style": "100%",
  collapse: "94.73%",
  "collapse/style": "100%",
  colorPicker: "97.08%",
  "colorPicker/panel": "64.9%",
  "colorPicker/panel/format": "93.59%",
  "colorPicker/style": "100%",
  "colorPicker/utils": "100%",
  comment: "95.5%",
  "comment/style": "100%",
  commonComponents: "100%",
  configProvider: "96.08%",
  datePicker: "47.63%",
  "datePicker/base": "80.6%",
  "datePicker/hooks": "46.2%",
  "datePicker/panel": "64.04%",
  "datePicker/style": "100%",
  dialog: "84.4%",
  "dialog/style": "100%",
  divider: "96.92%",
  "divider/style": "100%",
  drawer: "85.13%",
  "drawer/style": "100%",
  dropdown: "90.84%",
  "dropdown/hooks": "96.05%",
  "dropdown/style": "100%",
  form: "92.6%",
  "form/style": "100%",
  grid: "84.13%",
  "grid/style": "100%",
  guide: "42.89%",
  "guide/style": "100%",
  "guide/utils": "79.62%",
  hooks: "57.56%",
  icon: "100%",
  image: "98.82%",
  imageViewer: "87.44%",
  "imageViewer/base": "95.37%",
  "imageViewer/style": "100%",
  "image/style": "100%",
  input: "99.48%",
  inputAdornment: "100%",
  "inputAdornment/style": "100%",
  inputNumber: "94.13%",
  "inputNumber/style": "100%",
  "input/style": "100%",
  layout: "96.31%",
  "layout/style": "100%",
  link: "100%",
  "link/style": "100%",
  list: "98.4%",
  "list/style": "100%",
  loading: "84.17%",
  "loading/icon": "92.68%",
  "loading/style": "100%",
  menu: "85.84%",
  "menu/style": "100%",
  message: "88.84%",
  "message/style": "100%",
  notification: "96.83%",
  "notification/style": "100%",
  pagination: "99.12%",
  "pagination/style": "100%",
  popconfirm: "96.67%",
  "popconfirm/style": "100%",
  popup: "90.29%",
  "popup/style": "100%",
  progress: "95.96%",
  "progress/style": "100%",
  radio: "95.8%",
  "radio/style": "100%",
  rangeInput: "82.93%",
  "rangeInput/style": "100%",
  rate: "90.03%",
  "rate/style": "100%",
  select: "62.1%",
  selectInput: "95.33%",
  "selectInput/style": "100%",
  "select/hooks": "81.75%",
  "select/style": "100%",
  skeleton: "94.14%",
  "skeleton/style": "100%",
  slider: "72.48%",
  "slider/style": "100%",
  space: "100%",
  "space/style": "100%",
  steps: "98.44%",
  "steps/style": "100%",
  swiper: "76.68%",
  "swiper/style": "100%",
  switch: "61.35%",
  "switch/style": "100%",
  table: "77.36%",
  "table/hooks": "58.16%",
  "table/style": "100%",
  tabs: "85.01%",
  "tabs/style": "100%",
  tag: "97.78%",
  tagInput: "90.53%",
  "tagInput/hooks": "52.13%",
  "tagInput/style": "100%",
  "tag/style": "100%",
  textarea: "78.57%",
  "textarea/style": "100%",
  timePicker: "77.38%",
  "timePicker/panel": "79.39%",
  "timePicker/style": "100%",
  timeline: "51.2%",
  "timeline/style": "100%",
  tooltip: "92.95%",
  "tooltip/style": "100%",
  transfer: "96.5%",
  "transfer/components": "92.06%",
  "transfer/style": "100%",
  tree: "96.46%",
  treeSelect: "90.93%",
  "treeSelect/style": "100%",
  "tree/hooks": "80.88%",
  "tree/style": "100%",
  upload: "90.38%",
  "upload/hooks": "42.94%",
  "upload/style": "100%",
  "upload/themes": "32.45%",
  utils: "70.8%",
  watermark: "40.19%"
};

// ../../packages/shared/_common/docs/compile/index.js
import fs from "fs";
import { spawn } from "node:child_process";
function compileUsage(options) {
  const { usage, demoPath, componentName } = options || {};
  const { title = "", description = "" } = usage || {};
  if (!fs.existsSync(demoPath)) {
    console.log("\x1B[36m%s\x1B[0m", `${componentName} \u7EC4\u4EF6\u672A\u63D0\u4F9B ${demoPath} \u6587\u4EF6!`);
    return null;
  }
  return {
    importStr: `import Usage from '${demoPath}';`,
    installStr: "Usage,",
    markdownStr: `${title ? `### ${title}` : ""}
${description}

<Usage />`
  };
}
function getGitTimestamp(file) {
  return new Promise((resolve4, reject) => {
    const child = spawn("git", ["log", "-1", '--pretty="%ci"', file]);
    let output = "";
    child.stdout.on("data", (d) => {
      output += String(d);
    });
    child.on("close", () => {
      resolve4(+new Date(output));
    });
    child.on("error", reject);
  });
}

// plugins/doc/md-to-vue.ts
var __vite_injected_original_dirname = "/Users/ardor/Desktop/MyGitHub/tdesign-vue-integrate/sites/vue2.7/plugins/doc";
var DEFAULT_TABS = [
  { tab: "demo", name: "\u793A\u4F8B" },
  { tab: "api", name: "API" },
  { tab: "design", name: "\u6307\u5357" }
];
var DEFAULT_EN_TABS = [
  { tab: "demo", name: "DEMO" },
  { tab: "api", name: "API" },
  { tab: "design", name: "Guideline" }
];
async function mdToVue(options) {
  const mdSegment = await customRender(options);
  const { demoDefsStr, demoCodesDefsStr, demoInstallStr, demoCodeInstallStr } = options;
  let coverage = {};
  if (mdSegment.isComponent) {
    coverage = test_coverage_default[camelCase(mdSegment.componentName)] || "0%";
  }
  const sfc = `
    <template>
      <td-doc-content ref="tdDocContent" page-status="hidden">
        ${mdSegment.tdDocHeader ? `
          <td-doc-header
            slot="doc-header"
            ref="tdDocHeader"
            spline="${mdSegment.spline}"
            platform="web"
          >
          ${mdSegment.isComponent ? `<td-doc-badge slot="badge" label="coverage" message="${coverage}" />` : ""}
          </td-doc-header>` : ""}
        ${mdSegment.isComponent ? `
          <td-doc-tabs ref="tdDocTabs" :tab="tab"></td-doc-tabs>

          <div v-show="tab === 'demo'">
            <div name="DEMO">${mdSegment.demoMd}</div>
            <td-contributors
              platform="web"
              framework="vue"
              component-name="${mdSegment.componentName}"
            ></td-contributors>
          </div>
          <div v-show="tab === 'api'" name="API">${mdSegment.apiMd}</div>
          <div v-show="tab === 'design'" name="DESIGN">${mdSegment.designMd}</div>
        ` : `<div name="DOC" class="${mdSegment.docClass}">${mdSegment.docMd}</div>`}
        <div style="margin-top: 48px;">
          <td-doc-history :time="lastUpdated" :key="lastUpdated"></td-doc-history>
        </div>
        <td-doc-footer slot="doc-footer"></td-doc-footer>
      </td-doc-content>
    </template>

    <script>
      ${demoDefsStr}
      ${demoCodesDefsStr}
      ${mdSegment.usage.importStr}
      import Prismjs from 'prismjs';

      export default {

        components: {
          ${mdSegment.usage.installStr}
          ${demoInstallStr}
        },

        data() {
          return {
            ${demoCodeInstallStr}
          };
        },

        computed: {
          lastUpdated() {
            if (this.tab === 'design') return ${mdSegment.designDocLastUpdated};
            return ${mdSegment.lastUpdated};
          },
          tab: {
            get() {
              return this.$route.query.tab || 'demo';
            },
            set(v) {
              if (this.$route.query.tab !== v)
                this.$router.push({ query: { tab: v } });
            }
          },
        },

        mounted() {
          const { tdDocContent, tdDocHeader, tdDocTabs } = this.$refs;

          if (tdDocHeader) {
            tdDocHeader.docInfo = {
              title: \`${mdSegment.title}\`,
              desc: \`${mdSegment.description}\`,
            };
          }
          document.title = \`${mdSegment.title} | TDesign\`;

          if (tdDocTabs) {
            tdDocTabs.tabs = ${JSON.stringify(mdSegment.tdDocTabs)};
            tdDocTabs.onchange = ({ detail: currentTab }) => this.tab = currentTab;
          }

          Prismjs.highlightAll();
    
          this.$emit('loaded', () => {
            tdDocContent.pageStatus = 'show';
          });
        },
      };
    </script>
  `;
  return sfc;
}
async function customRender({ source, file, md }) {
  const { content, data } = matter(source);
  const lastUpdated = await getGitTimestamp(file) || Math.round(fs2.statSync(file).mtimeMs);
  const isEn = file.endsWith("en-US.md");
  const pageData = {
    spline: "",
    toc: true,
    title: "",
    description: "",
    isComponent: false,
    tdDocHeader: true,
    tdDocTabs: !isEn ? DEFAULT_TABS : DEFAULT_EN_TABS,
    apiFlag: /#+\s*API/,
    docClass: "",
    lastUpdated,
    designDocLastUpdated: lastUpdated,
    ...data
  };
  const reg = file.match(/([\w-]+)\.?([\w-]+)?\.md/);
  const componentName = reg && reg[1];
  let [demoMd = "", apiMd = ""] = content.split(pageData.apiFlag);
  const mdSegment = {
    ...pageData,
    componentName,
    usage: { importStr: "", installStr: "" },
    docMd: "<td-doc-empty></td-doc-empty>",
    demoMd: "<td-doc-empty></td-doc-empty>",
    apiMd: "<td-doc-empty></td-doc-empty>",
    designMd: "<td-doc-empty></td-doc-empty>"
  };
  if (pageData.usage && pageData.isComponent) {
    const usageObj = compileUsage({
      componentName,
      usage: pageData.usage,
      // ! zhangpaopao 直接走的 node_modules
      demoPath: path.posix.resolve(__vite_injected_original_dirname, "../../", `node_modules/@td/intel/vue2.7/components/${componentName}/_usage/index.vue`).replace(/\\/g, "/")
    });
    if (usageObj) {
      mdSegment.usage = usageObj;
      demoMd = `${usageObj.markdownStr} ${demoMd}`;
    }
  }
  if (pageData.isComponent) {
    mdSegment.demoMd = md.render.call(
      md,
      `${pageData.toc ? "[toc]\n" : ""}${demoMd.replace(/<!--[\s\S]+?-->/g, "")}`
    ).html;
    mdSegment.apiMd = md.render.call(
      md,
      `${pageData.toc ? "[toc]\n" : ""}${apiMd.replace(/<!--[\s\S]+?-->/g, "")}`
    ).html;
  } else {
    mdSegment.docMd = md.render.call(
      md,
      `${pageData.toc ? "[toc]\n" : ""}${content.replace(/<!--[\s\S]+?-->/g, "")}`
    ).html;
  }
  if (pageData.isComponent && pageData.tdDocTabs.some((item) => item.tab === "design")) {
    const designDocPath = path.resolve(__vite_injected_original_dirname, "../../", `node_modules/shared/_common/docs/web/design/${componentName}.md`);
    if (fs2.existsSync(designDocPath)) {
      const designDocLastUpdated = await getGitTimestamp(designDocPath) || Math.round(fs2.statSync(designDocPath).mtimeMs);
      mdSegment.designDocLastUpdated = designDocLastUpdated;
      const designMd = fs2.readFileSync(designDocPath, "utf-8");
      mdSegment.designMd = md.render.call(md, `${pageData.toc ? "[toc]\n" : ""}${designMd}`).html;
    } else {
      console.log(`[vite-plugin-tdoc]: \u672A\u627E\u5230 ${designDocPath} \u6587\u4EF6`);
    }
  }
  return mdSegment;
}

// plugins/doc/transforms.ts
var __vite_injected_original_dirname2 = "/Users/ardor/Desktop/MyGitHub/tdesign-vue-integrate/sites/vue2.7/plugins/doc";
var demoImports = {};
var demoCodesImports = {};
var transforms_default = {
  before({ source, file }) {
    const resourceDir = path2.dirname(file);
    const reg = file.match(/([\w-]+)\.?([\w-]+)?\.md/);
    const fileName = reg && reg[0];
    const componentName = reg && reg[1];
    const localeName = reg && reg[2];
    demoImports = {};
    demoCodesImports = {};
    if (fileName && source.includes(":: BASE_DOC ::")) {
      const localeDocPath = path2.posix.resolve(__vite_injected_original_dirname2, "../../", `node_modules/shared/_common/docs/web/api/${fileName}`);
      const defaultDocPath = path2.posix.resolve(__vite_injected_original_dirname2, "../../", `node_modules/shared/_common/docs/web/api/${componentName}.md`);
      let baseDoc = "";
      if (fs3.existsSync(localeDocPath)) {
        baseDoc = fs3.readFileSync(localeDocPath, "utf-8");
      } else if (fs3.existsSync(defaultDocPath)) {
        baseDoc = fs3.readFileSync(defaultDocPath, "utf-8");
      } else {
        console.error(`\u672A\u627E\u5230 ${defaultDocPath} \u6587\u4EF6`);
      }
      source = source.replace(":: BASE_DOC ::", baseDoc);
    }
    source = source.replace(/\{\{\s+(.+)\s+\}\}/g, (demoStr, demoFileName) => {
      const defaultDemoPath = path2.resolve(resourceDir, `./_example/${demoFileName}.vue`);
      const localeDemoPath = path2.resolve(resourceDir, `../_example/${demoFileName}.${localeName}.vue`);
      if (fs3.existsSync(localeDemoPath))
        return `
::: demo _example/${demoFileName}.${localeName} ${componentName}
:::
`;
      if (!fs3.existsSync(defaultDemoPath)) {
        console.log("\x1B[36m%s\x1B[0m", `${componentName} \u7EC4\u4EF6\u9700\u8981\u5B9E\u73B0 _example/${demoFileName}.vue \u793A\u4F8B!`);
        return "\n<h3>DEMO (\u{1F6A7}\u5EFA\u8BBE\u4E2D\uFF09...</h3>";
      }
      return `
::: demo _example/${demoFileName} ${componentName}
:::
`;
    });
    source.replace(/:::\s*demo\s+([\\/.\w-]+)/g, (demoStr, relativeDemoPath) => {
      const demoPathOnlyLetters = relativeDemoPath.replace(/[^a-zA-Z\d]/g, "");
      const demoDefName = `Demo${demoPathOnlyLetters}`;
      const demoCodeDefName = `Demo${demoPathOnlyLetters}Code`;
      demoImports[demoDefName] = `import ${demoDefName} from './${relativeDemoPath}.vue';`;
      demoCodesImports[demoCodeDefName] = `import ${demoCodeDefName} from './${relativeDemoPath}.vue?raw';`;
    });
    return source;
  },
  render({ source, file, md }) {
    const demoDefsStr = Object.keys(demoImports).map((key) => demoImports[key]).join(";\n");
    const demoCodesDefsStr = Object.keys(demoCodesImports).map((key) => demoCodesImports[key]).join(";\n");
    const demoInstallStr = Object.keys(demoImports).join(",");
    const demoCodeInstallStr = Object.keys(demoCodesImports).join(",");
    const sfc = mdToVue({
      md,
      file,
      source,
      demoDefsStr,
      demoCodesDefsStr,
      demoInstallStr,
      demoCodeInstallStr
    });
    return sfc;
  }
};

// plugins/doc/demo.ts
import * as path3 from "path";
function renderDemo(md, container) {
  md.use(container, "demo", {
    validate(params) {
      return params.trim().match(/^demo\s+([\\/.\w-]+)(\s+(.+?))?(\s+--dev)?$/);
    },
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        const match = tokens[idx].info.trim().match(/^demo\s+([\\/.\w-]+)(\s+(.+?))?(\s+--dev)?$/);
        const [, demoPath, componentName = ""] = match;
        const demoPathOnlyLetters = demoPath.replace(/[^a-zA-Z\d]/g, "");
        const demoName = path3.basename(demoPath);
        const demoDefName = `Demo${demoPathOnlyLetters}`;
        const demoCodeDefName = `Demo${demoPathOnlyLetters}Code`;
        const tpl = `
          <td-doc-demo component-name="${componentName.trim()}" :code=${demoCodeDefName} demo-name="${demoName}" language="markup">
            <div slot="action">
              <Stackblitz demo-name="${demoName}" component-name="${componentName}" :code=${demoCodeDefName} />
              <CodeSandbox demo-name="${demoName}" component-name="${componentName}" :code=${demoCodeDefName} />
            </div>
            <div class="tdesign-demo-item__body">
              <${demoDefName} />
            </div>
          </td-doc-demo>
        `;
        tokens.tttpl = tpl;
        return `<div class="tdesign-demo-wrapper tdesign-demo-item--${componentName.trim()}-${demoName} tdesign-demo-item--${componentName.trim()}">`;
      }
      if (tokens.tttpl) {
        return `${tokens.tttpl || ""}</div>`;
      }
      return "";
    }
  });
}

// plugins/doc/index.ts
var doc_default = () => vitePluginTdoc({
  transforms: transforms_default,
  // 解析markdown 数据
  markdown: {
    anchor: {
      tabIndex: false,
      config: (anchor) => ({
        permalink: anchor.permalink.linkInsideHeader({ symbol: "" })
      })
    },
    toc: {
      listClass: "tdesign-toc_list",
      itemClass: "tdesign-toc_list_item",
      linkClass: "tdesign-toc_list_item_a",
      containerClass: "tdesign-toc_container"
    },
    container(md, container) {
      renderDemo(md, container);
    }
  }
});

// configs/pwa.ts
var pwa_default = {
  strategies: "injectManifest",
  includeAssets: ["favicon.svg", "favicon.ico", "apple-touch-icon.png"],
  manifest: {
    name: "TDesign for Vue Next",
    short_name: "TDesign",
    description: "TDesign UI vue-next",
    theme_color: "#ffffff",
    icons: [
      {
        src: "pwa-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "pwa-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  }
};

// vite.config.ts
import { createVuePlugin } from "file:///Users/ardor/Desktop/MyGitHub/tdesign-vue-integrate/node_modules/.pnpm/vite-plugin-vue2@2.0.3_vite@5.0.12_vue-template-compiler@2.6.10_vue@2.7.16/node_modules/vite-plugin-vue2/dist/index.js";
import vue2Jsx from "file:///Users/ardor/Desktop/MyGitHub/tdesign-vue-integrate/node_modules/.pnpm/@vitejs+plugin-vue2-jsx@1.1.1_rollup@2.79.1_vite@5.0.12_vue@2.7.16/node_modules/@vitejs/plugin-vue2-jsx/dist/index.mjs";
var __vite_injected_original_dirname3 = "/Users/ardor/Desktop/MyGitHub/tdesign-vue-integrate/sites/vue2.7";
var workspaceRoot = searchForWorkspaceRoot(process.cwd());
var pathFromWorkspaceRoot = (...args) => path4.posix.resolve(workspaceRoot, ...args);
var resolveConfig = (vueVersion) => {
  return {
    "@intel": pathFromWorkspaceRoot(`packages/intel/vue${vueVersion}`)
  };
};
var publicPathMap = {
  preview: "/",
  intranet: "/vue-next/",
  production: "https://static.tdesign.tencent.com/vue-next/"
};
var transformintel = () => ({
  name: "transform-intel",
  transform(code, id) {
    const intelReg = /from "TDesign\/intel/g;
    code = code.replace(intelReg, 'from "./vue3');
    return code;
  }
});
var vite_config_default = defineConfig(({ mode }) => {
  return {
    base: publicPathMap[mode],
    resolve: {
      alias: {
        ...resolveConfig(2.7),
        "@": path4.resolve(__vite_injected_original_dirname3)
      }
    },
    server: {
      host: "0.0.0.0",
      port: 16e3,
      open: "/",
      fs: {
        allow: [".."]
      }
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
          compositionAPI: true
        }
      }),
      vue2Jsx({
        vModel: true
      }),
      VitePWA(pwa_default),
      doc_default()
    ],
    optimizeDeps: {
      include: ["prismjs", "prismjs/components/prism-bash.js", "@vue/babel-helper-vue-jsx-merge-props", "tdesign-icons-vue-next"]
    }
  };
});
export {
  vite_config_default as default,
  transformintel
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGx1Z2lucy9kb2MvaW5kZXgudHMiLCAicGx1Z2lucy9kb2MvdHJhbnNmb3Jtcy50cyIsICJwbHVnaW5zL2RvYy9tZC10by12dWUudHMiLCAicGx1Z2lucy9kb2MvdGVzdC1jb3ZlcmFnZS50cyIsICIuLi8uLi9wYWNrYWdlcy9zaGFyZWQvX2NvbW1vbi9kb2NzL2NvbXBpbGUvaW5kZXguanMiLCAicGx1Z2lucy9kb2MvZGVtby50cyIsICJjb25maWdzL3B3YS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9hcmRvci9EZXNrdG9wL015R2l0SHViL3RkZXNpZ24tdnVlLWludGVncmF0ZS9zaXRlcy92dWUyLjdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9hcmRvci9EZXNrdG9wL015R2l0SHViL3RkZXNpZ24tdnVlLWludGVncmF0ZS9zaXRlcy92dWUyLjcvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2FyZG9yL0Rlc2t0b3AvTXlHaXRIdWIvdGRlc2lnbi12dWUtaW50ZWdyYXRlL3NpdGVzL3Z1ZTIuNy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZywgc2VhcmNoRm9yV29ya3NwYWNlUm9vdCB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XG5pbXBvcnQgU2NyaXB0U2V0dXAgZnJvbSAndW5wbHVnaW4tdnVlMi1zY3JpcHQtc2V0dXAvdml0ZSc7XG5cbmltcG9ydCBURG9jUGx1Z2luIGZyb20gJy4vcGx1Z2lucy9kb2MnO1xuaW1wb3J0IFBXQSBmcm9tIFwiLi9jb25maWdzL3B3YVwiO1xuXG4vLyBpbXBvcnQgdnVlMiBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUyJztcbmltcG9ydCB7IGNyZWF0ZVZ1ZVBsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZTInO1xuaW1wb3J0IHZ1ZTJKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlMi1qc3gnO1xuXG5cbmNvbnN0IHdvcmtzcGFjZVJvb3QgPSBzZWFyY2hGb3JXb3Jrc3BhY2VSb290KHByb2Nlc3MuY3dkKCkpXG5jb25zdCBwYXRoRnJvbVdvcmtzcGFjZVJvb3QgPSAoLi4uYXJnczogc3RyaW5nW10pID0+IHBhdGgucG9zaXgucmVzb2x2ZSh3b3Jrc3BhY2VSb290LCAuLi5hcmdzKVxuXG5cbmNvbnN0IHJlc29sdmVDb25maWcgPSAodnVlVmVyc2lvbjogbnVtYmVyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgJ0BpbnRlbCc6IHBhdGhGcm9tV29ya3NwYWNlUm9vdChgcGFja2FnZXMvaW50ZWwvdnVlJHt2dWVWZXJzaW9ufWApLFxuICB9XG59XG5cbmNvbnN0IHB1YmxpY1BhdGhNYXAgPSB7XG4gIHByZXZpZXc6ICcvJyxcbiAgaW50cmFuZXQ6ICcvdnVlLW5leHQvJyxcbiAgcHJvZHVjdGlvbjogJ2h0dHBzOi8vc3RhdGljLnRkZXNpZ24udGVuY2VudC5jb20vdnVlLW5leHQvJyxcbn07XG5cblxuLy8gISB2dWUtbmV4dCBcdTRFMkRcdTY2MkZcdTRFQ0UgLi4vc2NyaXB0L3ZpdGUuYmFzZS5jb25maWcgXHU1RjE1XHU1MTY1XG5jb25zdCBpc0N1c3RvbUVsZW1lbnQgPSAodGFnKSA9PiB0YWcuc3RhcnRzV2l0aCgndGQtJykgfHwgdGFnLnN0YXJ0c1dpdGgoJ3RkZXNpZ24tdGhlbWUnKTtcblxuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtaW50ZWwgPSAoKSA9PiAoe1xuICBuYW1lOiAndHJhbnNmb3JtLWludGVsJyxcbiAgdHJhbnNmb3JtKGNvZGUsIGlkKSB7XG4gICAgY29uc3QgaW50ZWxSZWcgPSAvZnJvbSBcIlREZXNpZ25cXC9pbnRlbC9nO1xuICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoaW50ZWxSZWcsICdmcm9tIFwiLi92dWUzJyk7XG4gICAgXG4gICAgcmV0dXJuIGNvZGU7XG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBiYXNlOiBwdWJsaWNQYXRoTWFwW21vZGVdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgIC4uLnJlc29sdmVDb25maWcoMi43KSxcbiAgICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lKSxcbiAgICAgIH1cbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgaG9zdDogJzAuMC4wLjAnLFxuICAgICAgcG9ydDogMTYwMDAsXG4gICAgICBvcGVuOiAnLycsXG4gICAgICBmczoge1xuICAgICAgICBhbGxvdzogWycuLiddLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIC8vIHRyYW5zZm9ybWludGVsKCksXG4gICAgICAvLyB2dWUyKHtcbiAgICAgIC8vIH0pLFxuICAgICAgU2NyaXB0U2V0dXAoe30pLFxuICAgICAgY3JlYXRlVnVlUGx1Z2luKHtcbiAgICAgICAgaW5jbHVkZTogLyhcXC5tZHxcXC52dWUpJC8sXG4gICAgICAgIGpzeDogdHJ1ZSxcbiAgICAgICAganN4T3B0aW9uczoge1xuICAgICAgICAgIHZNb2RlbDogdHJ1ZSxcbiAgICAgICAgICBjb21wb3NpdGlvbkFQSTogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICB2dWUySnN4KHtcbiAgICAgICAgdk1vZGVsOiB0cnVlLFxuICAgICAgfSksXG4gICAgICBWaXRlUFdBKFBXQSksXG4gICAgICBURG9jUGx1Z2luKCksXG4gICAgXSxcbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgIGluY2x1ZGU6IFsncHJpc21qcycsICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tYmFzaC5qcycsICdAdnVlL2JhYmVsLWhlbHBlci12dWUtanN4LW1lcmdlLXByb3BzJywgJ3RkZXNpZ24taWNvbnMtdnVlLW5leHQnXSxcbiAgICB9LFxuICB9XG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvc2l0ZXMvdnVlMi43L3BsdWdpbnMvZG9jXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvc2l0ZXMvdnVlMi43L3BsdWdpbnMvZG9jL2luZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9hcmRvci9EZXNrdG9wL015R2l0SHViL3RkZXNpZ24tdnVlLWludGVncmF0ZS9zaXRlcy92dWUyLjcvcGx1Z2lucy9kb2MvaW5kZXgudHNcIjtpbXBvcnQgdml0ZVBsdWdpblRkb2MgZnJvbSAndml0ZS1wbHVnaW4tdGRvYyc7XG5cbmltcG9ydCB0cmFuc2Zvcm1zIGZyb20gJy4vdHJhbnNmb3Jtcyc7XG5pbXBvcnQgcmVuZGVyRGVtbyBmcm9tICcuL2RlbW8nO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB2aXRlUGx1Z2luVGRvYyh7XG4gIHRyYW5zZm9ybXMsIC8vIFx1ODlFM1x1Njc5MG1hcmtkb3duIFx1NjU3MFx1NjM2RVxuICBtYXJrZG93bjoge1xuICAgIGFuY2hvcjoge1xuICAgICAgdGFiSW5kZXg6IGZhbHNlLFxuICAgICAgY29uZmlnOiAoYW5jaG9yKSA9PiAoe1xuICAgICAgICBwZXJtYWxpbms6IGFuY2hvci5wZXJtYWxpbmsubGlua0luc2lkZUhlYWRlcih7IHN5bWJvbDogJycgfSksXG4gICAgICB9KSxcbiAgICB9LFxuICAgIHRvYzoge1xuICAgICAgbGlzdENsYXNzOiAndGRlc2lnbi10b2NfbGlzdCcsXG4gICAgICBpdGVtQ2xhc3M6ICd0ZGVzaWduLXRvY19saXN0X2l0ZW0nLFxuICAgICAgbGlua0NsYXNzOiAndGRlc2lnbi10b2NfbGlzdF9pdGVtX2EnLFxuICAgICAgY29udGFpbmVyQ2xhc3M6ICd0ZGVzaWduLXRvY19jb250YWluZXInLFxuICAgIH0sXG4gICAgY29udGFpbmVyKG1kLCBjb250YWluZXIpIHtcbiAgICAgIHJlbmRlckRlbW8obWQsIGNvbnRhaW5lcik7XG4gICAgfSxcbiAgfSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvc2l0ZXMvdnVlMi43L3BsdWdpbnMvZG9jXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvc2l0ZXMvdnVlMi43L3BsdWdpbnMvZG9jL3RyYW5zZm9ybXMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2FyZG9yL0Rlc2t0b3AvTXlHaXRIdWIvdGRlc2lnbi12dWUtaW50ZWdyYXRlL3NpdGVzL3Z1ZTIuNy9wbHVnaW5zL2RvYy90cmFuc2Zvcm1zLnRzXCI7aW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcblxuaW1wb3J0IG1kVG9WdWUgZnJvbSAnLi9tZC10by12dWUnO1xuXG5sZXQgZGVtb0ltcG9ydHMgPSB7fTtcbmxldCBkZW1vQ29kZXNJbXBvcnRzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYmVmb3JlKHsgc291cmNlLCBmaWxlIH0pIHtcbiAgICBjb25zdCByZXNvdXJjZURpciA9IHBhdGguZGlybmFtZShmaWxlKTtcbiAgICBjb25zdCByZWcgPSBmaWxlLm1hdGNoKC8oW1xcdy1dKylcXC4/KFtcXHctXSspP1xcLm1kLyk7XG4gICAgY29uc3QgZmlsZU5hbWUgPSByZWcgJiYgcmVnWzBdO1xuICAgIGNvbnN0IGNvbXBvbmVudE5hbWUgPSByZWcgJiYgcmVnWzFdO1xuICAgIGNvbnN0IGxvY2FsZU5hbWUgPSByZWcgJiYgcmVnWzJdO1xuICAgIGRlbW9JbXBvcnRzID0ge307XG4gICAgZGVtb0NvZGVzSW1wb3J0cyA9IHt9O1xuXG4gICAgLy8gXHU3RURGXHU0RTAwXHU2MzYyXHU2MjEwIGNvbW1vbiBcdTUxNkNcdTUxNzFcdTY1ODdcdTY4NjNcdTUxODVcdTVCQjlcbiAgICBpZiAoZmlsZU5hbWUgJiYgc291cmNlLmluY2x1ZGVzKCc6OiBCQVNFX0RPQyA6OicpKSB7XG4gICAgICAvLyAhIHpoYW5ncGFvcGFvIFx1NzZGNFx1NjNBNVx1OEQ3MFx1NzY4NCBub2RlX21vZHVsZXNcbiAgICAgIGNvbnN0IGxvY2FsZURvY1BhdGggPSBwYXRoLnBvc2l4LnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vJywgIGBub2RlX21vZHVsZXMvc2hhcmVkL19jb21tb24vZG9jcy93ZWIvYXBpLyR7ZmlsZU5hbWV9YCk7XG4gICAgICBjb25zdCBkZWZhdWx0RG9jUGF0aCA9IHBhdGgucG9zaXgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi8nLCBgbm9kZV9tb2R1bGVzL3NoYXJlZC9fY29tbW9uL2RvY3Mvd2ViL2FwaS8ke2NvbXBvbmVudE5hbWV9Lm1kYCk7XG5cbiAgICAgIGxldCBiYXNlRG9jID0gJyc7XG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhsb2NhbGVEb2NQYXRoKSkge1xuICAgICAgICAvLyBcdTRGMThcdTUxNDhcdThGN0RcdTUxNjVcdThCRURcdThBMDBcdTcyNDhcdTY3MkNcbiAgICAgICAgYmFzZURvYyA9IGZzLnJlYWRGaWxlU3luYyhsb2NhbGVEb2NQYXRoLCAndXRmLTgnKTtcbiAgICAgIH0gZWxzZSBpZiAoZnMuZXhpc3RzU3luYyhkZWZhdWx0RG9jUGF0aCkpIHtcbiAgICAgICAgLy8gXHU1NkRFXHU5MDAwXHU0RTJEXHU2NTg3XHU5RUQ4XHU4QkE0XHU3MjQ4XHU2NzJDXG4gICAgICAgIGJhc2VEb2MgPSBmcy5yZWFkRmlsZVN5bmMoZGVmYXVsdERvY1BhdGgsICd1dGYtOCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgXHU2NzJBXHU2MjdFXHU1MjMwICR7ZGVmYXVsdERvY1BhdGh9IFx1NjU4N1x1NEVGNmApO1xuICAgICAgfVxuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJzo6IEJBU0VfRE9DIDo6JywgYmFzZURvYyk7XG4gICAgfVxuXG4gICAgLy8gXHU2NkZGXHU2MzYyXHU2MjEwXHU1QkY5XHU1RTk0IGRlbW8gXHU2NTg3XHU0RUY2XG4gICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoL1xce1xce1xccysoLispXFxzK1xcfVxcfS9nLCAoZGVtb1N0ciwgZGVtb0ZpbGVOYW1lKSA9PiB7XG4gICAgICBjb25zdCBkZWZhdWx0RGVtb1BhdGggPSBwYXRoLnJlc29sdmUocmVzb3VyY2VEaXIsIGAuL19leGFtcGxlLyR7ZGVtb0ZpbGVOYW1lfS52dWVgKTtcbiAgICAgIGNvbnN0IGxvY2FsZURlbW9QYXRoID0gcGF0aC5yZXNvbHZlKHJlc291cmNlRGlyLCBgLi4vX2V4YW1wbGUvJHtkZW1vRmlsZU5hbWV9LiR7bG9jYWxlTmFtZX0udnVlYCk7XG4gICAgICAvLyBsb2NhbGVEZW1vIFx1NEYxOFx1NTE0OFx1N0VBN1x1NjcwMFx1OUFEOFxuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMobG9jYWxlRGVtb1BhdGgpKVxuICAgICAgICByZXR1cm4gYFxcbjo6OiBkZW1vIF9leGFtcGxlLyR7ZGVtb0ZpbGVOYW1lfS4ke2xvY2FsZU5hbWV9ICR7Y29tcG9uZW50TmFtZX1cXG46OjpcXG5gO1xuXG4gICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoZGVmYXVsdERlbW9QYXRoKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnXFx4MUJbMzZtJXNcXHgxQlswbScsIGAke2NvbXBvbmVudE5hbWV9IFx1N0VDNFx1NEVGNlx1OTcwMFx1ODk4MVx1NUI5RVx1NzNCMCBfZXhhbXBsZS8ke2RlbW9GaWxlTmFtZX0udnVlIFx1NzkzQVx1NEY4QiFgKTtcbiAgICAgICAgcmV0dXJuICdcXG48aDM+REVNTyAoXHVEODNEXHVERUE3XHU1RUZBXHU4QkJFXHU0RTJEXHVGRjA5Li4uPC9oMz4nO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYFxcbjo6OiBkZW1vIF9leGFtcGxlLyR7ZGVtb0ZpbGVOYW1lfSAke2NvbXBvbmVudE5hbWV9XFxuOjo6XFxuYDtcbiAgICB9KTtcblxuICAgIHNvdXJjZS5yZXBsYWNlKC86OjpcXHMqZGVtb1xccysoW1xcXFwvLlxcdy1dKykvZywgKGRlbW9TdHIsIHJlbGF0aXZlRGVtb1BhdGgpID0+IHtcbiAgICAgIGNvbnN0IGRlbW9QYXRoT25seUxldHRlcnMgPSByZWxhdGl2ZURlbW9QYXRoLnJlcGxhY2UoL1teYS16QS1aXFxkXS9nLCAnJyk7XG4gICAgICBjb25zdCBkZW1vRGVmTmFtZSA9IGBEZW1vJHtkZW1vUGF0aE9ubHlMZXR0ZXJzfWA7XG4gICAgICBjb25zdCBkZW1vQ29kZURlZk5hbWUgPSBgRGVtbyR7ZGVtb1BhdGhPbmx5TGV0dGVyc31Db2RlYDtcbiAgICAgIGRlbW9JbXBvcnRzW2RlbW9EZWZOYW1lXSA9IGBpbXBvcnQgJHtkZW1vRGVmTmFtZX0gZnJvbSAnLi8ke3JlbGF0aXZlRGVtb1BhdGh9LnZ1ZSc7YDtcbiAgICAgIGRlbW9Db2Rlc0ltcG9ydHNbZGVtb0NvZGVEZWZOYW1lXSA9IGBpbXBvcnQgJHtkZW1vQ29kZURlZk5hbWV9IGZyb20gJy4vJHtyZWxhdGl2ZURlbW9QYXRofS52dWU/cmF3JztgO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfSxcbiAgcmVuZGVyKHsgc291cmNlLCBmaWxlLCBtZCB9KSB7XG4gICAgY29uc3QgZGVtb0RlZnNTdHIgPSBPYmplY3Qua2V5cyhkZW1vSW1wb3J0cylcbiAgICAgIC5tYXAoKGtleSkgPT4gZGVtb0ltcG9ydHNba2V5XSlcbiAgICAgIC5qb2luKCc7XFxuJyk7XG4gICAgY29uc3QgZGVtb0NvZGVzRGVmc1N0ciA9IE9iamVjdC5rZXlzKGRlbW9Db2Rlc0ltcG9ydHMpXG4gICAgICAubWFwKChrZXkpID0+IGRlbW9Db2Rlc0ltcG9ydHNba2V5XSlcbiAgICAgIC5qb2luKCc7XFxuJyk7XG5cbiAgICBjb25zdCBkZW1vSW5zdGFsbFN0ciA9IE9iamVjdC5rZXlzKGRlbW9JbXBvcnRzKS5qb2luKCcsJyk7XG4gICAgY29uc3QgZGVtb0NvZGVJbnN0YWxsU3RyID0gT2JqZWN0LmtleXMoZGVtb0NvZGVzSW1wb3J0cykuam9pbignLCcpO1xuXG4gICAgY29uc3Qgc2ZjID0gbWRUb1Z1ZSh7XG4gICAgICBtZCxcbiAgICAgIGZpbGUsXG4gICAgICBzb3VyY2UsXG4gICAgICBkZW1vRGVmc1N0cixcbiAgICAgIGRlbW9Db2Rlc0RlZnNTdHIsXG4gICAgICBkZW1vSW5zdGFsbFN0cixcbiAgICAgIGRlbW9Db2RlSW5zdGFsbFN0cixcbiAgICB9KTtcblxuICAgIHJldHVybiBzZmM7XG4gIH0sXG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvc2l0ZXMvdnVlMi43L3BsdWdpbnMvZG9jXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvc2l0ZXMvdnVlMi43L3BsdWdpbnMvZG9jL21kLXRvLXZ1ZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvc2l0ZXMvdnVlMi43L3BsdWdpbnMvZG9jL21kLXRvLXZ1ZS50c1wiO2ltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJztcbmltcG9ydCBjYW1lbENhc2UgZnJvbSAnY2FtZWxjYXNlJztcblxuaW1wb3J0IHRlc3RDb3ZlcmFnZSBmcm9tICcuL3Rlc3QtY292ZXJhZ2UnO1xuXG4vLyBpbXBvcnQgeyBjb21waWxlVXNhZ2UsIGdldEdpdFRpbWVzdGFtcCB9IGZyb20gJ3NoYXJlZC9fY29tbW9uL2RvY3MvY29tcGlsZSc7XG4vLyAhIHpoYW5ncGFvcGFvIFx1NTZFMFx1NEUzQSBjb21tb24vX2NvbW1vbiBcdTRFM0EgY2pzIFx1NzY4NFx1RkYwQ1x1NjI0MFx1NEVFNVx1NjVFMFx1NkNENVx1OTAxQVx1OEZDNyBFU00gXHU1MkEwXHU4RjdEXG4vLyBcdTk1RUVcdTk4OThcdTY3NjVcdTRFODZcdUZGMENcdTRFM0FcdTU1NjUgcGF0aCBcdTUzRUZcdTRFRTVcdTU0NjJcdUZGMUYgXHU1NkUwXHU0RTNBIHBhdGggXHU2NjJGXHU2NzJDXHU1NzMwXHU2NTg3XHU0RUY2XHVGRjBDXHU4MDBDIHdvcmtzcGFjZSBcdTY2MkYgbm9kZV9tb2RlbHMoXHU0RjlEXHU4RDU2KVxuaW1wb3J0IHsgY29tcGlsZVVzYWdlLCBnZXRHaXRUaW1lc3RhbXAgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWNrYWdlcy9zaGFyZWQvX2NvbW1vbi9kb2NzL2NvbXBpbGUnO1xuXG5jb25zdCBERUZBVUxUX1RBQlMgPSBbXG4gIHsgdGFiOiAnZGVtbycsIG5hbWU6ICdcdTc5M0FcdTRGOEInIH0sXG4gIHsgdGFiOiAnYXBpJywgbmFtZTogJ0FQSScgfSxcbiAgeyB0YWI6ICdkZXNpZ24nLCBuYW1lOiAnXHU2MzA3XHU1MzU3JyB9LFxuXTtcblxuY29uc3QgREVGQVVMVF9FTl9UQUJTID0gW1xuICB7IHRhYjogJ2RlbW8nLCBuYW1lOiAnREVNTycgfSxcbiAgeyB0YWI6ICdhcGknLCBuYW1lOiAnQVBJJyB9LFxuICB7IHRhYjogJ2Rlc2lnbicsIG5hbWU6ICdHdWlkZWxpbmUnIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBtZFRvVnVlKG9wdGlvbnMpIHtcbiAgY29uc3QgbWRTZWdtZW50ID0gYXdhaXQgY3VzdG9tUmVuZGVyKG9wdGlvbnMpO1xuICBjb25zdCB7IGRlbW9EZWZzU3RyLCBkZW1vQ29kZXNEZWZzU3RyLCBkZW1vSW5zdGFsbFN0ciwgZGVtb0NvZGVJbnN0YWxsU3RyIH0gPSBvcHRpb25zO1xuXG4gIGxldCBjb3ZlcmFnZSA9IHt9O1xuICBpZiAobWRTZWdtZW50LmlzQ29tcG9uZW50KSB7XG4gICAgY292ZXJhZ2UgPSB0ZXN0Q292ZXJhZ2VbY2FtZWxDYXNlKG1kU2VnbWVudC5jb21wb25lbnROYW1lKV0gfHwgJzAlJztcbiAgfVxuXG4gIGNvbnN0IHNmYyA9IGBcbiAgICA8dGVtcGxhdGU+XG4gICAgICA8dGQtZG9jLWNvbnRlbnQgcmVmPVwidGREb2NDb250ZW50XCIgcGFnZS1zdGF0dXM9XCJoaWRkZW5cIj5cbiAgICAgICAgJHtcbiAgICAgICAgICBtZFNlZ21lbnQudGREb2NIZWFkZXJcbiAgICAgICAgICAgID8gYFxuICAgICAgICAgIDx0ZC1kb2MtaGVhZGVyXG4gICAgICAgICAgICBzbG90PVwiZG9jLWhlYWRlclwiXG4gICAgICAgICAgICByZWY9XCJ0ZERvY0hlYWRlclwiXG4gICAgICAgICAgICBzcGxpbmU9XCIke21kU2VnbWVudC5zcGxpbmV9XCJcbiAgICAgICAgICAgIHBsYXRmb3JtPVwid2ViXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgJHttZFNlZ21lbnQuaXNDb21wb25lbnQgPyBgPHRkLWRvYy1iYWRnZSBzbG90PVwiYmFkZ2VcIiBsYWJlbD1cImNvdmVyYWdlXCIgbWVzc2FnZT1cIiR7Y292ZXJhZ2V9XCIgLz5gIDogJyd9XG4gICAgICAgICAgPC90ZC1kb2MtaGVhZGVyPmBcbiAgICAgICAgICAgIDogJydcbiAgICAgICAgfVxuICAgICAgICAke1xuICAgICAgICAgIG1kU2VnbWVudC5pc0NvbXBvbmVudFxuICAgICAgICAgICAgPyBgXG4gICAgICAgICAgPHRkLWRvYy10YWJzIHJlZj1cInRkRG9jVGFic1wiIDp0YWI9XCJ0YWJcIj48L3RkLWRvYy10YWJzPlxuXG4gICAgICAgICAgPGRpdiB2LXNob3c9XCJ0YWIgPT09ICdkZW1vJ1wiPlxuICAgICAgICAgICAgPGRpdiBuYW1lPVwiREVNT1wiPiR7bWRTZWdtZW50LmRlbW9NZH08L2Rpdj5cbiAgICAgICAgICAgIDx0ZC1jb250cmlidXRvcnNcbiAgICAgICAgICAgICAgcGxhdGZvcm09XCJ3ZWJcIlxuICAgICAgICAgICAgICBmcmFtZXdvcms9XCJ2dWVcIlxuICAgICAgICAgICAgICBjb21wb25lbnQtbmFtZT1cIiR7bWRTZWdtZW50LmNvbXBvbmVudE5hbWV9XCJcbiAgICAgICAgICAgID48L3RkLWNvbnRyaWJ1dG9ycz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHYtc2hvdz1cInRhYiA9PT0gJ2FwaSdcIiBuYW1lPVwiQVBJXCI+JHttZFNlZ21lbnQuYXBpTWR9PC9kaXY+XG4gICAgICAgICAgPGRpdiB2LXNob3c9XCJ0YWIgPT09ICdkZXNpZ24nXCIgbmFtZT1cIkRFU0lHTlwiPiR7bWRTZWdtZW50LmRlc2lnbk1kfTwvZGl2PlxuICAgICAgICBgXG4gICAgICAgICAgICA6IGA8ZGl2IG5hbWU9XCJET0NcIiBjbGFzcz1cIiR7bWRTZWdtZW50LmRvY0NsYXNzfVwiPiR7bWRTZWdtZW50LmRvY01kfTwvZGl2PmBcbiAgICAgICAgfVxuICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogNDhweDtcIj5cbiAgICAgICAgICA8dGQtZG9jLWhpc3RvcnkgOnRpbWU9XCJsYXN0VXBkYXRlZFwiIDprZXk9XCJsYXN0VXBkYXRlZFwiPjwvdGQtZG9jLWhpc3Rvcnk+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGQtZG9jLWZvb3RlciBzbG90PVwiZG9jLWZvb3RlclwiPjwvdGQtZG9jLWZvb3Rlcj5cbiAgICAgIDwvdGQtZG9jLWNvbnRlbnQ+XG4gICAgPC90ZW1wbGF0ZT5cblxuICAgIDxzY3JpcHQ+XG4gICAgICAke2RlbW9EZWZzU3RyfVxuICAgICAgJHtkZW1vQ29kZXNEZWZzU3RyfVxuICAgICAgJHttZFNlZ21lbnQudXNhZ2UuaW1wb3J0U3RyfVxuICAgICAgaW1wb3J0IFByaXNtanMgZnJvbSAncHJpc21qcyc7XG5cbiAgICAgIGV4cG9ydCBkZWZhdWx0IHtcblxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgJHttZFNlZ21lbnQudXNhZ2UuaW5zdGFsbFN0cn1cbiAgICAgICAgICAke2RlbW9JbnN0YWxsU3RyfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICR7ZGVtb0NvZGVJbnN0YWxsU3RyfVxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICBsYXN0VXBkYXRlZCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYiA9PT0gJ2Rlc2lnbicpIHJldHVybiAke21kU2VnbWVudC5kZXNpZ25Eb2NMYXN0VXBkYXRlZH07XG4gICAgICAgICAgICByZXR1cm4gJHttZFNlZ21lbnQubGFzdFVwZGF0ZWR9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdGFiOiB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLiRyb3V0ZS5xdWVyeS50YWIgfHwgJ2RlbW8nO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh2KSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLiRyb3V0ZS5xdWVyeS50YWIgIT09IHYpXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBxdWVyeTogeyB0YWI6IHYgfSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgY29uc3QgeyB0ZERvY0NvbnRlbnQsIHRkRG9jSGVhZGVyLCB0ZERvY1RhYnMgfSA9IHRoaXMuJHJlZnM7XG5cbiAgICAgICAgICBpZiAodGREb2NIZWFkZXIpIHtcbiAgICAgICAgICAgIHRkRG9jSGVhZGVyLmRvY0luZm8gPSB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcXGAke21kU2VnbWVudC50aXRsZX1cXGAsXG4gICAgICAgICAgICAgIGRlc2M6IFxcYCR7bWRTZWdtZW50LmRlc2NyaXB0aW9ufVxcYCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gXFxgJHttZFNlZ21lbnQudGl0bGV9IHwgVERlc2lnblxcYDtcblxuICAgICAgICAgIGlmICh0ZERvY1RhYnMpIHtcbiAgICAgICAgICAgIHRkRG9jVGFicy50YWJzID0gJHtKU09OLnN0cmluZ2lmeShtZFNlZ21lbnQudGREb2NUYWJzKX07XG4gICAgICAgICAgICB0ZERvY1RhYnMub25jaGFuZ2UgPSAoeyBkZXRhaWw6IGN1cnJlbnRUYWIgfSkgPT4gdGhpcy50YWIgPSBjdXJyZW50VGFiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIFByaXNtanMuaGlnaGxpZ2h0QWxsKCk7XG4gICAgXG4gICAgICAgICAgdGhpcy4kZW1pdCgnbG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGREb2NDb250ZW50LnBhZ2VTdGF0dXMgPSAnc2hvdyc7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIDwvc2NyaXB0PlxuICBgO1xuXG4gIHJldHVybiBzZmM7XG59XG5cbi8vIFx1ODlFM1x1Njc5MCBtYXJrZG93biBcdTUxODVcdTVCQjlcbmFzeW5jIGZ1bmN0aW9uIGN1c3RvbVJlbmRlcih7IHNvdXJjZSwgZmlsZSwgbWQgfSkge1xuICBjb25zdCB7IGNvbnRlbnQsIGRhdGEgfSA9IG1hdHRlcihzb3VyY2UpO1xuICBjb25zdCBsYXN0VXBkYXRlZCA9IChhd2FpdCBnZXRHaXRUaW1lc3RhbXAoZmlsZSkpIHx8IE1hdGgucm91bmQoZnMuc3RhdFN5bmMoZmlsZSkubXRpbWVNcyk7XG4gIC8vIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSk7XG4gIGNvbnN0IGlzRW4gPSBmaWxlLmVuZHNXaXRoKCdlbi1VUy5tZCcpO1xuXG4gIC8vIG1kIHRvcCBkYXRhXG4gIGNvbnN0IHBhZ2VEYXRhID0ge1xuICAgIHNwbGluZTogJycsXG4gICAgdG9jOiB0cnVlLFxuICAgIHRpdGxlOiAnJyxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgaXNDb21wb25lbnQ6IGZhbHNlLFxuICAgIHRkRG9jSGVhZGVyOiB0cnVlLFxuICAgIHRkRG9jVGFiczogIWlzRW4gPyBERUZBVUxUX1RBQlMgOiBERUZBVUxUX0VOX1RBQlMsXG4gICAgYXBpRmxhZzogLyMrXFxzKkFQSS8sXG4gICAgZG9jQ2xhc3M6ICcnLFxuICAgIGxhc3RVcGRhdGVkLFxuICAgIGRlc2lnbkRvY0xhc3RVcGRhdGVkOiBsYXN0VXBkYXRlZCxcbiAgICAuLi5kYXRhLFxuICB9O1xuXG4gIC8vIG1kIGZpbGVuYW1lXG4gIGNvbnN0IHJlZyA9IGZpbGUubWF0Y2goLyhbXFx3LV0rKVxcLj8oW1xcdy1dKyk/XFwubWQvKTtcbiAgY29uc3QgY29tcG9uZW50TmFtZSA9IHJlZyAmJiByZWdbMV07XG5cbiAgLy8gc3BsaXQgbWRcbiAgbGV0IFtkZW1vTWQgPSAnJywgYXBpTWQgPSAnJ10gPSBjb250ZW50LnNwbGl0KHBhZ2VEYXRhLmFwaUZsYWcpO1xuXG4gIGNvbnN0IG1kU2VnbWVudCA9IHtcbiAgICAuLi5wYWdlRGF0YSxcbiAgICBjb21wb25lbnROYW1lLFxuICAgIHVzYWdlOiB7IGltcG9ydFN0cjogJycsIGluc3RhbGxTdHI6ICcnIH0sXG4gICAgZG9jTWQ6ICc8dGQtZG9jLWVtcHR5PjwvdGQtZG9jLWVtcHR5PicsXG4gICAgZGVtb01kOiAnPHRkLWRvYy1lbXB0eT48L3RkLWRvYy1lbXB0eT4nLFxuICAgIGFwaU1kOiAnPHRkLWRvYy1lbXB0eT48L3RkLWRvYy1lbXB0eT4nLFxuICAgIGRlc2lnbk1kOiAnPHRkLWRvYy1lbXB0eT48L3RkLWRvYy1lbXB0eT4nLFxuICB9O1xuXG4gIC8vIFx1NkUzMlx1NjdEMyBsaXZlIGRlbW9cbiAgaWYgKHBhZ2VEYXRhLnVzYWdlICYmIHBhZ2VEYXRhLmlzQ29tcG9uZW50KSB7XG4gICAgY29uc3QgdXNhZ2VPYmogPSBjb21waWxlVXNhZ2Uoe1xuICAgICAgY29tcG9uZW50TmFtZSxcbiAgICAgIHVzYWdlOiBwYWdlRGF0YS51c2FnZSxcbiAgICAgIC8vICEgemhhbmdwYW9wYW8gXHU3NkY0XHU2M0E1XHU4RDcwXHU3Njg0IG5vZGVfbW9kdWxlc1xuICAgICAgZGVtb1BhdGg6IHBhdGgucG9zaXgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi8nLCBgbm9kZV9tb2R1bGVzL0B0ZC9pbnRlbC92dWUyLjcvY29tcG9uZW50cy8ke2NvbXBvbmVudE5hbWV9L191c2FnZS9pbmRleC52dWVgKS5yZXBsYWNlKC9cXFxcL2csICcvJyksXG4gICAgfSk7XG4gICAgaWYgKHVzYWdlT2JqKSB7XG4gICAgICBtZFNlZ21lbnQudXNhZ2UgPSB1c2FnZU9iajtcbiAgICAgIGRlbW9NZCA9IGAke3VzYWdlT2JqLm1hcmtkb3duU3RyfSAke2RlbW9NZH1gO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYWdlRGF0YS5pc0NvbXBvbmVudCkge1xuICAgIG1kU2VnbWVudC5kZW1vTWQgPSBtZC5yZW5kZXIuY2FsbChcbiAgICAgIG1kLFxuICAgICAgYCR7cGFnZURhdGEudG9jID8gJ1t0b2NdXFxuJyA6ICcnfSR7ZGVtb01kLnJlcGxhY2UoLzwhLS1bXFxzXFxTXSs/LS0+L2csICcnKX1gLFxuICAgICkuaHRtbDtcbiAgICBtZFNlZ21lbnQuYXBpTWQgPSBtZC5yZW5kZXIuY2FsbChcbiAgICAgIG1kLFxuICAgICAgYCR7cGFnZURhdGEudG9jID8gJ1t0b2NdXFxuJyA6ICcnfSR7YXBpTWQucmVwbGFjZSgvPCEtLVtcXHNcXFNdKz8tLT4vZywgJycpfWAsXG4gICAgKS5odG1sO1xuICB9IGVsc2Uge1xuICAgIG1kU2VnbWVudC5kb2NNZCA9IG1kLnJlbmRlci5jYWxsKFxuICAgICAgbWQsXG4gICAgICBgJHtwYWdlRGF0YS50b2MgPyAnW3RvY11cXG4nIDogJyd9JHtjb250ZW50LnJlcGxhY2UoLzwhLS1bXFxzXFxTXSs/LS0+L2csICcnKX1gLFxuICAgICkuaHRtbDtcbiAgfVxuXG4gIC8vIFx1OEJCRVx1OEJBMVx1NjMwN1x1NTM1N1x1NTE4NVx1NUJCOSBcdTRFMERcdTVDNTVcdTc5M0EgZGVzaWduIFRhYiBcdTUyMTlcdTRFMERcdTg5RTNcdTY3OTBcbiAgaWYgKHBhZ2VEYXRhLmlzQ29tcG9uZW50ICYmIHBhZ2VEYXRhLnRkRG9jVGFicy5zb21lKChpdGVtKSA9PiBpdGVtLnRhYiA9PT0gJ2Rlc2lnbicpKSB7XG4gICAgLy8gISB6aGFuZ3Bhb3BhbyBcdTc2RjRcdTYzQTVcdThENzBcdTc2ODQgbm9kZV9tb2R1bGVzXG4gICAgY29uc3QgZGVzaWduRG9jUGF0aCA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi8nLCBgbm9kZV9tb2R1bGVzL3NoYXJlZC9fY29tbW9uL2RvY3Mvd2ViL2Rlc2lnbi8ke2NvbXBvbmVudE5hbWV9Lm1kYCk7XG5cbiAgICBpZiAoZnMuZXhpc3RzU3luYyhkZXNpZ25Eb2NQYXRoKSkge1xuICAgICAgY29uc3QgZGVzaWduRG9jTGFzdFVwZGF0ZWQgPVxuICAgICAgICAoYXdhaXQgZ2V0R2l0VGltZXN0YW1wKGRlc2lnbkRvY1BhdGgpKSB8fCBNYXRoLnJvdW5kKGZzLnN0YXRTeW5jKGRlc2lnbkRvY1BhdGgpLm10aW1lTXMpO1xuICAgICAgbWRTZWdtZW50LmRlc2lnbkRvY0xhc3RVcGRhdGVkID0gZGVzaWduRG9jTGFzdFVwZGF0ZWQ7XG5cbiAgICAgIGNvbnN0IGRlc2lnbk1kID0gZnMucmVhZEZpbGVTeW5jKGRlc2lnbkRvY1BhdGgsICd1dGYtOCcpO1xuICAgICAgbWRTZWdtZW50LmRlc2lnbk1kID0gbWQucmVuZGVyLmNhbGwobWQsIGAke3BhZ2VEYXRhLnRvYyA/ICdbdG9jXVxcbicgOiAnJ30ke2Rlc2lnbk1kfWApLmh0bWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGBbdml0ZS1wbHVnaW4tdGRvY106IFx1NjcyQVx1NjI3RVx1NTIzMCAke2Rlc2lnbkRvY1BhdGh9IFx1NjU4N1x1NEVGNmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZFNlZ21lbnQ7XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9hcmRvci9EZXNrdG9wL015R2l0SHViL3RkZXNpZ24tdnVlLWludGVncmF0ZS9zaXRlcy92dWUyLjcvcGx1Z2lucy9kb2NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9hcmRvci9EZXNrdG9wL015R2l0SHViL3RkZXNpZ24tdnVlLWludGVncmF0ZS9zaXRlcy92dWUyLjcvcGx1Z2lucy9kb2MvdGVzdC1jb3ZlcmFnZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvc2l0ZXMvdnVlMi43L3BsdWdpbnMvZG9jL3Rlc3QtY292ZXJhZ2UudHNcIjtleHBvcnQgZGVmYXVsdCB7XG4gICcnOiAnMTAwJScsXG4gICdjb21tb24vanMvY29sb3JQaWNrZXInOiAnNjMuNTElJyxcbiAgJ2NvbW1vbi9qcy9kYXRlUGlja2VyJzogJzY3LjQ3JScsXG4gICdjb21tb24vanMvZ2xvYmFsQ29uZmlnJzogJzEwMCUnLFxuICAnY29tbW9uL2pzL2dsb2JhbENvbmZpZy9sb2NhbGUnOiAnMTAwJScsXG4gICdjb21tb24vanMvaW5wdXROdW1iZXInOiAnNDAuNDglJyxcbiAgJ2NvbW1vbi9qcy9sb2FkaW5nJzogJzczLjE3JScsXG4gICdjb21tb24vanMvbG9nJzogJzcyLjcyJScsXG4gICdjb21tb24vanMvdGFibGUnOiAnMTUuMzclJyxcbiAgJ2NvbW1vbi9qcy90aW1lUGlja2VyJzogJzcxLjY5JScsXG4gICdjb21tb24vanMvdHJlZSc6ICc5My4zMyUnLFxuICAnY29tbW9uL2pzL3VwbG9hZCc6ICczOS45NCUnLFxuICAnY29tbW9uL2pzL3V0aWxzJzogJzQ4LjQ2JScsXG4gICdjb21tb24vanMvd2F0ZXJtYXJrJzogJzYuOTclJyxcbiAgYWZmaXg6ICc4OS40NyUnLFxuICAnYWZmaXgvc3R5bGUnOiAnMTAwJScsXG4gIGFsZXJ0OiAnOTYuMjElJyxcbiAgJ2FsZXJ0L3N0eWxlJzogJzEwMCUnLFxuICBhbmNob3I6ICc5NS4yJScsXG4gICdhbmNob3Ivc3R5bGUnOiAnMTAwJScsXG4gIGF1dG9Db21wbGV0ZTogJzk5Ljg1JScsXG4gICdhdXRvQ29tcGxldGUvc3R5bGUnOiAnMTAwJScsXG4gIGF2YXRhcjogJzk2Ljg1JScsXG4gICdhdmF0YXIvc3R5bGUnOiAnMTAwJScsXG4gIGJhZGdlOiAnMTAwJScsXG4gICdiYWRnZS9zdHlsZSc6ICcxMDAlJyxcbiAgYnJlYWRjcnVtYjogJzk3LjUyJScsXG4gICdicmVhZGNydW1iL3N0eWxlJzogJzEwMCUnLFxuICBidXR0b246ICcxMDAlJyxcbiAgJ2J1dHRvbi9zdHlsZSc6ICcxMDAlJyxcbiAgY2FsZW5kYXI6ICc5NS4xNSUnLFxuICAnY2FsZW5kYXIvc3R5bGUnOiAnMTAwJScsXG4gIGNhcmQ6ICc5OS43MSUnLFxuICAnY2FyZC9zdHlsZSc6ICcxMDAlJyxcbiAgY2FzY2FkZXI6ICc5NS44MyUnLFxuICAnY2FzY2FkZXIvY29tcG9uZW50cyc6ICc4NC40OSUnLFxuICAnY2FzY2FkZXIvY29yZSc6ICc3Mi40NiUnLFxuICAnY2FzY2FkZXIvc3R5bGUnOiAnMTAwJScsXG4gIGNoZWNrYm94OiAnOTIuMTYlJyxcbiAgJ2NoZWNrYm94L3N0eWxlJzogJzEwMCUnLFxuICBjb2xsYXBzZTogJzk0LjczJScsXG4gICdjb2xsYXBzZS9zdHlsZSc6ICcxMDAlJyxcbiAgY29sb3JQaWNrZXI6ICc5Ny4wOCUnLFxuICAnY29sb3JQaWNrZXIvcGFuZWwnOiAnNjQuOSUnLFxuICAnY29sb3JQaWNrZXIvcGFuZWwvZm9ybWF0JzogJzkzLjU5JScsXG4gICdjb2xvclBpY2tlci9zdHlsZSc6ICcxMDAlJyxcbiAgJ2NvbG9yUGlja2VyL3V0aWxzJzogJzEwMCUnLFxuICBjb21tZW50OiAnOTUuNSUnLFxuICAnY29tbWVudC9zdHlsZSc6ICcxMDAlJyxcbiAgY29tbW9uQ29tcG9uZW50czogJzEwMCUnLFxuICBjb25maWdQcm92aWRlcjogJzk2LjA4JScsXG4gIGRhdGVQaWNrZXI6ICc0Ny42MyUnLFxuICAnZGF0ZVBpY2tlci9iYXNlJzogJzgwLjYlJyxcbiAgJ2RhdGVQaWNrZXIvaG9va3MnOiAnNDYuMiUnLFxuICAnZGF0ZVBpY2tlci9wYW5lbCc6ICc2NC4wNCUnLFxuICAnZGF0ZVBpY2tlci9zdHlsZSc6ICcxMDAlJyxcbiAgZGlhbG9nOiAnODQuNCUnLFxuICAnZGlhbG9nL3N0eWxlJzogJzEwMCUnLFxuICBkaXZpZGVyOiAnOTYuOTIlJyxcbiAgJ2RpdmlkZXIvc3R5bGUnOiAnMTAwJScsXG4gIGRyYXdlcjogJzg1LjEzJScsXG4gICdkcmF3ZXIvc3R5bGUnOiAnMTAwJScsXG4gIGRyb3Bkb3duOiAnOTAuODQlJyxcbiAgJ2Ryb3Bkb3duL2hvb2tzJzogJzk2LjA1JScsXG4gICdkcm9wZG93bi9zdHlsZSc6ICcxMDAlJyxcbiAgZm9ybTogJzkyLjYlJyxcbiAgJ2Zvcm0vc3R5bGUnOiAnMTAwJScsXG4gIGdyaWQ6ICc4NC4xMyUnLFxuICAnZ3JpZC9zdHlsZSc6ICcxMDAlJyxcbiAgZ3VpZGU6ICc0Mi44OSUnLFxuICAnZ3VpZGUvc3R5bGUnOiAnMTAwJScsXG4gICdndWlkZS91dGlscyc6ICc3OS42MiUnLFxuICBob29rczogJzU3LjU2JScsXG4gIGljb246ICcxMDAlJyxcbiAgaW1hZ2U6ICc5OC44MiUnLFxuICBpbWFnZVZpZXdlcjogJzg3LjQ0JScsXG4gICdpbWFnZVZpZXdlci9iYXNlJzogJzk1LjM3JScsXG4gICdpbWFnZVZpZXdlci9zdHlsZSc6ICcxMDAlJyxcbiAgJ2ltYWdlL3N0eWxlJzogJzEwMCUnLFxuICBpbnB1dDogJzk5LjQ4JScsXG4gIGlucHV0QWRvcm5tZW50OiAnMTAwJScsXG4gICdpbnB1dEFkb3JubWVudC9zdHlsZSc6ICcxMDAlJyxcbiAgaW5wdXROdW1iZXI6ICc5NC4xMyUnLFxuICAnaW5wdXROdW1iZXIvc3R5bGUnOiAnMTAwJScsXG4gICdpbnB1dC9zdHlsZSc6ICcxMDAlJyxcbiAgbGF5b3V0OiAnOTYuMzElJyxcbiAgJ2xheW91dC9zdHlsZSc6ICcxMDAlJyxcbiAgbGluazogJzEwMCUnLFxuICAnbGluay9zdHlsZSc6ICcxMDAlJyxcbiAgbGlzdDogJzk4LjQlJyxcbiAgJ2xpc3Qvc3R5bGUnOiAnMTAwJScsXG4gIGxvYWRpbmc6ICc4NC4xNyUnLFxuICAnbG9hZGluZy9pY29uJzogJzkyLjY4JScsXG4gICdsb2FkaW5nL3N0eWxlJzogJzEwMCUnLFxuICBtZW51OiAnODUuODQlJyxcbiAgJ21lbnUvc3R5bGUnOiAnMTAwJScsXG4gIG1lc3NhZ2U6ICc4OC44NCUnLFxuICAnbWVzc2FnZS9zdHlsZSc6ICcxMDAlJyxcbiAgbm90aWZpY2F0aW9uOiAnOTYuODMlJyxcbiAgJ25vdGlmaWNhdGlvbi9zdHlsZSc6ICcxMDAlJyxcbiAgcGFnaW5hdGlvbjogJzk5LjEyJScsXG4gICdwYWdpbmF0aW9uL3N0eWxlJzogJzEwMCUnLFxuICBwb3Bjb25maXJtOiAnOTYuNjclJyxcbiAgJ3BvcGNvbmZpcm0vc3R5bGUnOiAnMTAwJScsXG4gIHBvcHVwOiAnOTAuMjklJyxcbiAgJ3BvcHVwL3N0eWxlJzogJzEwMCUnLFxuICBwcm9ncmVzczogJzk1Ljk2JScsXG4gICdwcm9ncmVzcy9zdHlsZSc6ICcxMDAlJyxcbiAgcmFkaW86ICc5NS44JScsXG4gICdyYWRpby9zdHlsZSc6ICcxMDAlJyxcbiAgcmFuZ2VJbnB1dDogJzgyLjkzJScsXG4gICdyYW5nZUlucHV0L3N0eWxlJzogJzEwMCUnLFxuICByYXRlOiAnOTAuMDMlJyxcbiAgJ3JhdGUvc3R5bGUnOiAnMTAwJScsXG4gIHNlbGVjdDogJzYyLjElJyxcbiAgc2VsZWN0SW5wdXQ6ICc5NS4zMyUnLFxuICAnc2VsZWN0SW5wdXQvc3R5bGUnOiAnMTAwJScsXG4gICdzZWxlY3QvaG9va3MnOiAnODEuNzUlJyxcbiAgJ3NlbGVjdC9zdHlsZSc6ICcxMDAlJyxcbiAgc2tlbGV0b246ICc5NC4xNCUnLFxuICAnc2tlbGV0b24vc3R5bGUnOiAnMTAwJScsXG4gIHNsaWRlcjogJzcyLjQ4JScsXG4gICdzbGlkZXIvc3R5bGUnOiAnMTAwJScsXG4gIHNwYWNlOiAnMTAwJScsXG4gICdzcGFjZS9zdHlsZSc6ICcxMDAlJyxcbiAgc3RlcHM6ICc5OC40NCUnLFxuICAnc3RlcHMvc3R5bGUnOiAnMTAwJScsXG4gIHN3aXBlcjogJzc2LjY4JScsXG4gICdzd2lwZXIvc3R5bGUnOiAnMTAwJScsXG4gIHN3aXRjaDogJzYxLjM1JScsXG4gICdzd2l0Y2gvc3R5bGUnOiAnMTAwJScsXG4gIHRhYmxlOiAnNzcuMzYlJyxcbiAgJ3RhYmxlL2hvb2tzJzogJzU4LjE2JScsXG4gICd0YWJsZS9zdHlsZSc6ICcxMDAlJyxcbiAgdGFiczogJzg1LjAxJScsXG4gICd0YWJzL3N0eWxlJzogJzEwMCUnLFxuICB0YWc6ICc5Ny43OCUnLFxuICB0YWdJbnB1dDogJzkwLjUzJScsXG4gICd0YWdJbnB1dC9ob29rcyc6ICc1Mi4xMyUnLFxuICAndGFnSW5wdXQvc3R5bGUnOiAnMTAwJScsXG4gICd0YWcvc3R5bGUnOiAnMTAwJScsXG4gIHRleHRhcmVhOiAnNzguNTclJyxcbiAgJ3RleHRhcmVhL3N0eWxlJzogJzEwMCUnLFxuICB0aW1lUGlja2VyOiAnNzcuMzglJyxcbiAgJ3RpbWVQaWNrZXIvcGFuZWwnOiAnNzkuMzklJyxcbiAgJ3RpbWVQaWNrZXIvc3R5bGUnOiAnMTAwJScsXG4gIHRpbWVsaW5lOiAnNTEuMiUnLFxuICAndGltZWxpbmUvc3R5bGUnOiAnMTAwJScsXG4gIHRvb2x0aXA6ICc5Mi45NSUnLFxuICAndG9vbHRpcC9zdHlsZSc6ICcxMDAlJyxcbiAgdHJhbnNmZXI6ICc5Ni41JScsXG4gICd0cmFuc2Zlci9jb21wb25lbnRzJzogJzkyLjA2JScsXG4gICd0cmFuc2Zlci9zdHlsZSc6ICcxMDAlJyxcbiAgdHJlZTogJzk2LjQ2JScsXG4gIHRyZWVTZWxlY3Q6ICc5MC45MyUnLFxuICAndHJlZVNlbGVjdC9zdHlsZSc6ICcxMDAlJyxcbiAgJ3RyZWUvaG9va3MnOiAnODAuODglJyxcbiAgJ3RyZWUvc3R5bGUnOiAnMTAwJScsXG4gIHVwbG9hZDogJzkwLjM4JScsXG4gICd1cGxvYWQvaG9va3MnOiAnNDIuOTQlJyxcbiAgJ3VwbG9hZC9zdHlsZSc6ICcxMDAlJyxcbiAgJ3VwbG9hZC90aGVtZXMnOiAnMzIuNDUlJyxcbiAgdXRpbHM6ICc3MC44JScsXG4gIHdhdGVybWFyazogJzQwLjE5JScsXG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvcGFja2FnZXMvc2hhcmVkL19jb21tb24vZG9jcy9jb21waWxlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvcGFja2FnZXMvc2hhcmVkL19jb21tb24vZG9jcy9jb21waWxlL2luZGV4LmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9hcmRvci9EZXNrdG9wL015R2l0SHViL3RkZXNpZ24tdnVlLWludGVncmF0ZS9wYWNrYWdlcy9zaGFyZWQvX2NvbW1vbi9kb2NzL2NvbXBpbGUvaW5kZXguanNcIjtpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHsgc3Bhd24gfSBmcm9tICdub2RlOmNoaWxkX3Byb2Nlc3MnO1xuXG4vKipcbiAqIFx1NkUzMlx1NjdEMyBsaXZlIGRlbW8gXHU5MDNCXHU4RjkxXHVGRjBDXHU2M0QwXHU1M0Q2IG1kIFx1NTkzNFx1NEZFMVx1NjA2Rlx1NzUxRlx1NjIxMFx1Njg0Nlx1NjdCNlx1OTcwMFx1ODk4MVx1NzY4NFx1NUI1N1x1N0IyNlx1NEUzMlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLnVzYWdlXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5kZW1vUGF0aFxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY29tcG9uZW50TmFtZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVVc2FnZShvcHRpb25zKSB7XG4gIGNvbnN0IHsgdXNhZ2UsIGRlbW9QYXRoLCBjb21wb25lbnROYW1lIH0gPSBvcHRpb25zIHx8IHt9O1xuXG4gIGNvbnN0IHsgdGl0bGUgPSAnJywgZGVzY3JpcHRpb24gPSAnJyB9ID0gdXNhZ2UgfHwge307XG5cbiAgaWYgKCFmcy5leGlzdHNTeW5jKGRlbW9QYXRoKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2coJ1xceDFCWzM2bSVzXFx4MUJbMG0nLCBgJHtjb21wb25lbnROYW1lfSBcdTdFQzRcdTRFRjZcdTY3MkFcdTYzRDBcdTRGOUIgJHtkZW1vUGF0aH0gXHU2NTg3XHU0RUY2IWApO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbXBvcnRTdHI6IGBpbXBvcnQgVXNhZ2UgZnJvbSAnJHtkZW1vUGF0aH0nO2AsXG4gICAgaW5zdGFsbFN0cjogJ1VzYWdlLCcsXG4gICAgbWFya2Rvd25TdHI6IGAke3RpdGxlID8gYCMjIyAke3RpdGxlfWAgOiAnJ31cXG4ke2Rlc2NyaXB0aW9ufVxcblxcbjxVc2FnZSAvPmAsXG4gIH07XG59XG5cbi8qKlxuICogXHU4M0I3XHU1M0Q2XHU2NTg3XHU0RUY2IGdpdCBcdTY3MDBcdTU0MEVcdTY2RjRcdTY1QjBcdTY1RjZcdTk1RjRcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2l0VGltZXN0YW1wKGZpbGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBjaGlsZCA9IHNwYXduKCdnaXQnLCBbJ2xvZycsICctMScsICctLXByZXR0eT1cIiVjaVwiJywgZmlsZV0pO1xuICAgIGxldCBvdXRwdXQgPSAnJztcbiAgICBjaGlsZC5zdGRvdXQub24oJ2RhdGEnLCAoZCkgPT4ge1xuICAgICAgb3V0cHV0ICs9IFN0cmluZyhkKTtcbiAgICB9KTtcbiAgICBjaGlsZC5vbignY2xvc2UnLCAoKSA9PiB7XG4gICAgICByZXNvbHZlKCtuZXcgRGF0ZShvdXRwdXQpKTtcbiAgICB9KTtcbiAgICBjaGlsZC5vbignZXJyb3InLCByZWplY3QpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21waWxlVXNhZ2UsXG4gIGdldEdpdFRpbWVzdGFtcFxufTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2FyZG9yL0Rlc2t0b3AvTXlHaXRIdWIvdGRlc2lnbi12dWUtaW50ZWdyYXRlL3NpdGVzL3Z1ZTIuNy9wbHVnaW5zL2RvY1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2FyZG9yL0Rlc2t0b3AvTXlHaXRIdWIvdGRlc2lnbi12dWUtaW50ZWdyYXRlL3NpdGVzL3Z1ZTIuNy9wbHVnaW5zL2RvYy9kZW1vLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9hcmRvci9EZXNrdG9wL015R2l0SHViL3RkZXNpZ24tdnVlLWludGVncmF0ZS9zaXRlcy92dWUyLjcvcGx1Z2lucy9kb2MvZGVtby50c1wiO2ltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckRlbW8obWQsIGNvbnRhaW5lcikge1xuICBtZC51c2UoY29udGFpbmVyLCAnZGVtbycsIHtcbiAgICB2YWxpZGF0ZShwYXJhbXMpIHtcbiAgICAgIHJldHVybiBwYXJhbXMudHJpbSgpLm1hdGNoKC9eZGVtb1xccysoW1xcXFwvLlxcdy1dKykoXFxzKyguKz8pKT8oXFxzKy0tZGV2KT8kLyk7XG4gICAgfSxcbiAgICByZW5kZXIodG9rZW5zLCBpZHgpIHtcbiAgICAgIGlmICh0b2tlbnNbaWR4XS5uZXN0aW5nID09PSAxKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gdG9rZW5zW2lkeF0uaW5mby50cmltKCkubWF0Y2goL15kZW1vXFxzKyhbXFxcXC8uXFx3LV0rKShcXHMrKC4rPykpPyhcXHMrLS1kZXYpPyQvKTtcbiAgICAgICAgY29uc3QgWywgZGVtb1BhdGgsIGNvbXBvbmVudE5hbWUgPSAnJ10gPSBtYXRjaDtcbiAgICAgICAgY29uc3QgZGVtb1BhdGhPbmx5TGV0dGVycyA9IGRlbW9QYXRoLnJlcGxhY2UoL1teYS16QS1aXFxkXS9nLCAnJyk7XG4gICAgICAgIGNvbnN0IGRlbW9OYW1lID0gcGF0aC5iYXNlbmFtZShkZW1vUGF0aCk7XG4gICAgICAgIGNvbnN0IGRlbW9EZWZOYW1lID0gYERlbW8ke2RlbW9QYXRoT25seUxldHRlcnN9YDtcbiAgICAgICAgY29uc3QgZGVtb0NvZGVEZWZOYW1lID0gYERlbW8ke2RlbW9QYXRoT25seUxldHRlcnN9Q29kZWA7XG4gICAgICAgIGNvbnN0IHRwbCA9IGBcbiAgICAgICAgICA8dGQtZG9jLWRlbW8gY29tcG9uZW50LW5hbWU9XCIke2NvbXBvbmVudE5hbWUudHJpbSgpfVwiIDpjb2RlPSR7ZGVtb0NvZGVEZWZOYW1lfSBkZW1vLW5hbWU9XCIke2RlbW9OYW1lfVwiIGxhbmd1YWdlPVwibWFya3VwXCI+XG4gICAgICAgICAgICA8ZGl2IHNsb3Q9XCJhY3Rpb25cIj5cbiAgICAgICAgICAgICAgPFN0YWNrYmxpdHogZGVtby1uYW1lPVwiJHtkZW1vTmFtZX1cIiBjb21wb25lbnQtbmFtZT1cIiR7Y29tcG9uZW50TmFtZX1cIiA6Y29kZT0ke2RlbW9Db2RlRGVmTmFtZX0gLz5cbiAgICAgICAgICAgICAgPENvZGVTYW5kYm94IGRlbW8tbmFtZT1cIiR7ZGVtb05hbWV9XCIgY29tcG9uZW50LW5hbWU9XCIke2NvbXBvbmVudE5hbWV9XCIgOmNvZGU9JHtkZW1vQ29kZURlZk5hbWV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZGVzaWduLWRlbW8taXRlbV9fYm9keVwiPlxuICAgICAgICAgICAgICA8JHtkZW1vRGVmTmFtZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGQtZG9jLWRlbW8+XG4gICAgICAgIGA7XG5cbiAgICAgICAgdG9rZW5zLnR0dHBsID0gdHBsO1xuXG4gICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInRkZXNpZ24tZGVtby13cmFwcGVyIHRkZXNpZ24tZGVtby1pdGVtLS0ke2NvbXBvbmVudE5hbWUudHJpbSgpfS0ke2RlbW9OYW1lfSB0ZGVzaWduLWRlbW8taXRlbS0tJHtjb21wb25lbnROYW1lLnRyaW0oKX1cIj5gO1xuICAgICAgfVxuICAgICAgaWYgKHRva2Vucy50dHRwbCkge1xuICAgICAgICByZXR1cm4gYCR7dG9rZW5zLnR0dHBsIHx8ICcnfTwvZGl2PmA7XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSxcbiAgfSk7XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9hcmRvci9EZXNrdG9wL015R2l0SHViL3RkZXNpZ24tdnVlLWludGVncmF0ZS9zaXRlcy92dWUyLjcvY29uZmlnc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2FyZG9yL0Rlc2t0b3AvTXlHaXRIdWIvdGRlc2lnbi12dWUtaW50ZWdyYXRlL3NpdGVzL3Z1ZTIuNy9jb25maWdzL3B3YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvc2l0ZXMvdnVlMi43L2NvbmZpZ3MvcHdhLnRzXCI7aW1wb3J0IHR5cGUgeyBWaXRlUFdBT3B0aW9ucyB9IGZyb20gXCJ2aXRlLXBsdWdpbi1wd2FcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdHJhdGVnaWVzOiBcImluamVjdE1hbmlmZXN0XCIsXG4gIGluY2x1ZGVBc3NldHM6IFsnZmF2aWNvbi5zdmcnLCAnZmF2aWNvbi5pY28nLCAnYXBwbGUtdG91Y2gtaWNvbi5wbmcnXSxcbiAgbWFuaWZlc3Q6IHtcbiAgICBuYW1lOiAnVERlc2lnbiBmb3IgVnVlIE5leHQnLFxuICAgIHNob3J0X25hbWU6ICdURGVzaWduJyxcbiAgICBkZXNjcmlwdGlvbjogJ1REZXNpZ24gVUkgdnVlLW5leHQnLFxuICAgIHRoZW1lX2NvbG9yOiAnI2ZmZmZmZicsXG4gICAgaWNvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgc3JjOiAncHdhLTE5MngxOTIucG5nJyxcbiAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcbiAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzcmM6ICdwd2EtNTEyeDUxMi5wbmcnLFxuICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn0gYXMgVml0ZVBXQU9wdGlvbnM7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtYLFNBQVMsY0FBYyw4QkFBOEI7QUFDdmEsWUFBWUEsV0FBVTtBQUN0QixTQUFTLGVBQWU7QUFDeEIsT0FBTyxpQkFBaUI7OztBQ0hrWCxPQUFPLG9CQUFvQjs7O0FDQWpCLFlBQVlDLFdBQVU7QUFDMWEsWUFBWUMsU0FBUTs7O0FDRDhYLFlBQVlDLFNBQVE7QUFDdGEsWUFBWSxVQUFVO0FBQ3RCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGVBQWU7OztBQ0hvWSxJQUFPLHdCQUFRO0FBQUEsRUFDdmEsSUFBSTtBQUFBLEVBQ0oseUJBQXlCO0FBQUEsRUFDekIsd0JBQXdCO0FBQUEsRUFDeEIsMEJBQTBCO0FBQUEsRUFDMUIsaUNBQWlDO0FBQUEsRUFDakMseUJBQXlCO0FBQUEsRUFDekIscUJBQXFCO0FBQUEsRUFDckIsaUJBQWlCO0FBQUEsRUFDakIsbUJBQW1CO0FBQUEsRUFDbkIsd0JBQXdCO0FBQUEsRUFDeEIsa0JBQWtCO0FBQUEsRUFDbEIsb0JBQW9CO0FBQUEsRUFDcEIsbUJBQW1CO0FBQUEsRUFDbkIsdUJBQXVCO0FBQUEsRUFDdkIsT0FBTztBQUFBLEVBQ1AsZUFBZTtBQUFBLEVBQ2YsT0FBTztBQUFBLEVBQ1AsZUFBZTtBQUFBLEVBQ2YsUUFBUTtBQUFBLEVBQ1IsZ0JBQWdCO0FBQUEsRUFDaEIsY0FBYztBQUFBLEVBQ2Qsc0JBQXNCO0FBQUEsRUFDdEIsUUFBUTtBQUFBLEVBQ1IsZ0JBQWdCO0FBQUEsRUFDaEIsT0FBTztBQUFBLEVBQ1AsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osb0JBQW9CO0FBQUEsRUFDcEIsUUFBUTtBQUFBLEVBQ1IsZ0JBQWdCO0FBQUEsRUFDaEIsVUFBVTtBQUFBLEVBQ1Ysa0JBQWtCO0FBQUEsRUFDbEIsTUFBTTtBQUFBLEVBQ04sY0FBYztBQUFBLEVBQ2QsVUFBVTtBQUFBLEVBQ1YsdUJBQXVCO0FBQUEsRUFDdkIsaUJBQWlCO0FBQUEsRUFDakIsa0JBQWtCO0FBQUEsRUFDbEIsVUFBVTtBQUFBLEVBQ1Ysa0JBQWtCO0FBQUEsRUFDbEIsVUFBVTtBQUFBLEVBQ1Ysa0JBQWtCO0FBQUEsRUFDbEIsYUFBYTtBQUFBLEVBQ2IscUJBQXFCO0FBQUEsRUFDckIsNEJBQTRCO0FBQUEsRUFDNUIscUJBQXFCO0FBQUEsRUFDckIscUJBQXFCO0FBQUEsRUFDckIsU0FBUztBQUFBLEVBQ1QsaUJBQWlCO0FBQUEsRUFDakIsa0JBQWtCO0FBQUEsRUFDbEIsZ0JBQWdCO0FBQUEsRUFDaEIsWUFBWTtBQUFBLEVBQ1osbUJBQW1CO0FBQUEsRUFDbkIsb0JBQW9CO0FBQUEsRUFDcEIsb0JBQW9CO0FBQUEsRUFDcEIsb0JBQW9CO0FBQUEsRUFDcEIsUUFBUTtBQUFBLEVBQ1IsZ0JBQWdCO0FBQUEsRUFDaEIsU0FBUztBQUFBLEVBQ1QsaUJBQWlCO0FBQUEsRUFDakIsUUFBUTtBQUFBLEVBQ1IsZ0JBQWdCO0FBQUEsRUFDaEIsVUFBVTtBQUFBLEVBQ1Ysa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsTUFBTTtBQUFBLEVBQ04sY0FBYztBQUFBLEVBQ2QsTUFBTTtBQUFBLEVBQ04sY0FBYztBQUFBLEVBQ2QsT0FBTztBQUFBLEVBQ1AsZUFBZTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2Isb0JBQW9CO0FBQUEsRUFDcEIscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsT0FBTztBQUFBLEVBQ1AsZ0JBQWdCO0FBQUEsRUFDaEIsd0JBQXdCO0FBQUEsRUFDeEIsYUFBYTtBQUFBLEVBQ2IscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsUUFBUTtBQUFBLEVBQ1IsZ0JBQWdCO0FBQUEsRUFDaEIsTUFBTTtBQUFBLEVBQ04sY0FBYztBQUFBLEVBQ2QsTUFBTTtBQUFBLEVBQ04sY0FBYztBQUFBLEVBQ2QsU0FBUztBQUFBLEVBQ1QsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsTUFBTTtBQUFBLEVBQ04sY0FBYztBQUFBLEVBQ2QsU0FBUztBQUFBLEVBQ1QsaUJBQWlCO0FBQUEsRUFDakIsY0FBYztBQUFBLEVBQ2Qsc0JBQXNCO0FBQUEsRUFDdEIsWUFBWTtBQUFBLEVBQ1osb0JBQW9CO0FBQUEsRUFDcEIsWUFBWTtBQUFBLEVBQ1osb0JBQW9CO0FBQUEsRUFDcEIsT0FBTztBQUFBLEVBQ1AsZUFBZTtBQUFBLEVBQ2YsVUFBVTtBQUFBLEVBQ1Ysa0JBQWtCO0FBQUEsRUFDbEIsT0FBTztBQUFBLEVBQ1AsZUFBZTtBQUFBLEVBQ2YsWUFBWTtBQUFBLEVBQ1osb0JBQW9CO0FBQUEsRUFDcEIsTUFBTTtBQUFBLEVBQ04sY0FBYztBQUFBLEVBQ2QsUUFBUTtBQUFBLEVBQ1IsYUFBYTtBQUFBLEVBQ2IscUJBQXFCO0FBQUEsRUFDckIsZ0JBQWdCO0FBQUEsRUFDaEIsZ0JBQWdCO0FBQUEsRUFDaEIsVUFBVTtBQUFBLEVBQ1Ysa0JBQWtCO0FBQUEsRUFDbEIsUUFBUTtBQUFBLEVBQ1IsZ0JBQWdCO0FBQUEsRUFDaEIsT0FBTztBQUFBLEVBQ1AsZUFBZTtBQUFBLEVBQ2YsT0FBTztBQUFBLEVBQ1AsZUFBZTtBQUFBLEVBQ2YsUUFBUTtBQUFBLEVBQ1IsZ0JBQWdCO0FBQUEsRUFDaEIsUUFBUTtBQUFBLEVBQ1IsZ0JBQWdCO0FBQUEsRUFDaEIsT0FBTztBQUFBLEVBQ1AsZUFBZTtBQUFBLEVBQ2Ys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TyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsU0FBTztBQUFBLElBQ0wsTUFBTSxjQUFjLElBQUk7QUFBQSxJQUN4QixTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxHQUFHLGNBQWMsR0FBRztBQUFBLFFBQ3BCLEtBQVUsY0FBUUMsaUNBQVM7QUFBQSxNQUM3QjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLElBQUk7QUFBQSxRQUNGLE9BQU8sQ0FBQyxJQUFJO0FBQUEsTUFDZDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlQLFlBQVksQ0FBQyxDQUFDO0FBQUEsTUFDZCxnQkFBZ0I7QUFBQSxRQUNkLFNBQVM7QUFBQSxRQUNULEtBQUs7QUFBQSxRQUNMLFlBQVk7QUFBQSxVQUNWLFFBQVE7QUFBQSxVQUNSLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRixDQUFDO0FBQUEsTUFDRCxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsTUFDVixDQUFDO0FBQUEsTUFDRCxRQUFRLFdBQUc7QUFBQSxNQUNYLFlBQVc7QUFBQSxJQUNiO0FBQUEsSUFDQSxjQUFjO0FBQUEsTUFDWixTQUFTLENBQUMsV0FBVyxvQ0FBb0MseUNBQXlDLHdCQUF3QjtBQUFBLElBQzVIO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbInBhdGgiLCAicGF0aCIsICJmcyIsICJmcyIsICJyZXNvbHZlIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgInBhdGgiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiXQp9Cg==
