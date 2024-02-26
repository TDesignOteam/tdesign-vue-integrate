// vite.config.ts
import * as path5 from "path";
import { VitePWA } from "file:///Users/ardor/Desktop/MyGitHub/tdesign-vue-integrate/node_modules/.pnpm/vite-plugin-pwa@0.17.5_vite@5.0.12_workbox-build@7.0.0_workbox-window@7.0.0/node_modules/vite-plugin-pwa/dist/index.js";
import { createVuePlugin } from "file:///Users/ardor/Desktop/MyGitHub/tdesign-vue-integrate/node_modules/.pnpm/vite-plugin-vue2@2.0.3_vite@5.0.12_vue-template-compiler@2.7.16_vue@2.7.16/node_modules/vite-plugin-vue2/dist/index.js";
import ScriptSetup from "file:///Users/ardor/Desktop/MyGitHub/tdesign-vue-integrate/node_modules/.pnpm/unplugin-vue2-script-setup@0.11.4_@vue+composition-api@1.7.2_@vue+runtime-dom@3.4.15_rollup@2.79.1/node_modules/unplugin-vue2-script-setup/dist/vite.mjs";
import { defineConfig, searchForWorkspaceRoot } from "file:///Users/ardor/Desktop/MyGitHub/tdesign-vue-integrate/node_modules/.pnpm/vite@5.0.12_@types+node@20.11.16_less@4.2.0/node_modules/vite/dist/node/index.js";

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
      demoPath: path.posix.resolve(__vite_injected_original_dirname, "../../", `node_modules/@td/intel-vue2.7/components/${componentName}/_usage/index.vue`).replace(/\\/g, "/")
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
    const designDocPath = path.resolve(__vite_injected_original_dirname, "../../", `node_modules/@td/shared/_common/docs/web/design/${componentName}.md`);
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
      const localeDocPath = path2.posix.resolve(__vite_injected_original_dirname2, "../../", `node_modules/@td/shared/_common/docs/web/api/${fileName}`);
      const defaultDocPath = path2.posix.resolve(__vite_injected_original_dirname2, "../../", `node_modules/@td/shared/_common/docs/web/api/${componentName}.md`);
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

// plugins/vue2Jsx/index.ts
import { createHash } from "node:crypto";
import path4 from "node:path";
import * as babel from "file:///Users/ardor/Desktop/MyGitHub/tdesign-vue-integrate/node_modules/.pnpm/@babel+core@7.23.9/node_modules/@babel/core/lib/index.js";
import jsx from "file:///Users/ardor/Desktop/MyGitHub/tdesign-vue-integrate/libs/vue-babel-preset-jsx/index.js";
import importMeta from "file:///Users/ardor/Desktop/MyGitHub/tdesign-vue-integrate/node_modules/.pnpm/@babel+plugin-syntax-import-meta@7.10.4_@babel+core@7.23.9/node_modules/@babel/plugin-syntax-import-meta/lib/index.js";
import { createFilter } from "file:///Users/ardor/Desktop/MyGitHub/tdesign-vue-integrate/node_modules/.pnpm/@rollup+pluginutils@5.1.0_rollup@2.79.1/node_modules/@rollup/pluginutils/dist/es/index.js";
import { normalizePath } from "file:///Users/ardor/Desktop/MyGitHub/tdesign-vue-integrate/node_modules/.pnpm/vite@5.0.12_@types+node@20.11.16_less@4.2.0/node_modules/vite/dist/node/index.js";

// plugins/vue2Jsx/hmrRuntime.ts
var HMR_RUNTIME_ID = "plugin-vue2-jsx:hmr-runtime";
var hmrRuntimeCode = `
var __VUE_HMR_RUNTIME__ = Object.create(null)
var map = Object.create(null)

__VUE_HMR_RUNTIME__.createRecord = function (id, options) {
  if(map[id]) { return }

  var Ctor = null
  if (typeof options === 'function') {
    Ctor = options
    options = Ctor.options
  }
  makeOptionsHot(id, options)
  map[id] = {
    Ctor: Ctor,
    options: options,
    instances: []
  }
}

__VUE_HMR_RUNTIME__.isRecorded = function (id) {
  return typeof map[id] !== 'undefined'
}

function makeOptionsHot(id, options) {
  if (options.functional) {
    var render = options.render
    options.render = function (h, ctx) {
      var instances = map[id].instances
      if (ctx && instances.indexOf(ctx.parent) < 0) {
        instances.push(ctx.parent)
      }
      return render(h, ctx)
    }
  } else {
    injectHook(options, 'beforeCreate', function() {
      var record = map[id]
      if (!record.Ctor) {
        record.Ctor = this.constructor
      }
      record.instances.push(this)
    })
    injectHook(options, 'beforeDestroy', function() {
      var instances = map[id].instances
      instances.splice(instances.indexOf(this), 1)
    })
  }
}

function injectHook(options, name, hook) {
  var existing = options[name]
  options[name] = existing
    ? Array.isArray(existing) ? existing.concat(hook) : [existing, hook]
    : [hook]
}

function tryWrap(fn) {
  return function (id, arg) {
    try {
      fn(id, arg)
    } catch (e) {
      console.error(e)
      console.warn(
        'Something went wrong during Vue component hot-reload. Full reload required.'
      )
    }
  }
}

function updateOptions (oldOptions, newOptions) {
  for (var key in oldOptions) {
    if (!(key in newOptions)) {
      delete oldOptions[key]
    }
  }
  for (var key$1 in newOptions) {
    oldOptions[key$1] = newOptions[key$1]
  }
}

__VUE_HMR_RUNTIME__.rerender = tryWrap(function (id, options) {
  var record = map[id]
  if (!options) {
    record.instances.slice().forEach(function (instance) {
      instance.$forceUpdate()
    })
    return
  }
  if (typeof options === 'function') {
    options = options.options
  }
  if(record.functional){
    record.render = options.render
    record.staticRenderFns = options.staticRenderFns
    __VUE_HMR_RUNTIME__.reload(id, record)
    return
  }
  if (record.Ctor) {
    record.Ctor.options.render = options.render
    record.Ctor.options.staticRenderFns = options.staticRenderFns
    record.instances.slice().forEach(function (instance) {
      instance.$options.render = options.render
      instance.$options.staticRenderFns = options.staticRenderFns
      // reset static trees
      // pre 2.5, all static trees are cached together on the instance
      if (instance._staticTrees) {
        instance._staticTrees = []
      }
      // 2.5.0
      if (Array.isArray(record.Ctor.options.cached)) {
        record.Ctor.options.cached = []
      }
      // 2.5.3
      if (Array.isArray(instance.$options.cached)) {
        instance.$options.cached = []
      }

      // post 2.5.4: v-once trees are cached on instance._staticTrees.
      // Pure static trees are cached on the staticRenderFns array
      // (both already reset above)

      // 2.6: temporarily mark rendered scoped slots as unstable so that
      // child components can be forced to update
      var restore = patchScopedSlots(instance)
      instance.$forceUpdate()
      instance.$nextTick(restore)
    })
  } else {
    // functional or no instance created yet
    record.options.render = options.render
    record.options.staticRenderFns = options.staticRenderFns

    // handle functional component re-render
    if (record.options.functional) {
      // rerender with full options
      if (Object.keys(options).length > 2) {
        updateOptions(record.options, options)
      } else {
        // template-only rerender.
        // need to inject the style injection code for CSS modules
        // to work properly.
        var injectStyles = record.options._injectStyles
        if (injectStyles) {
          var render = options.render
          record.options.render = function (h, ctx) {
            injectStyles.call(ctx)
            return render(h, ctx)
          }
        }
      }
      record.options._Ctor = null
      // 2.5.3
      if (Array.isArray(record.options.cached)) {
        record.options.cached = []
      }
      record.instances.slice().forEach(function (instance) {
        instance.$forceUpdate()
      })
    }
  }
})

__VUE_HMR_RUNTIME__.reload = tryWrap(function (id, options) {
  var record = map[id]
  if (options) {
    if (typeof options === 'function') {
      options = options.options
    }
    makeOptionsHot(id, options)
    if (record.Ctor) {
      var newCtor = record.Ctor.super.extend(options)
      // prevent record.options._Ctor from being overwritten accidentally
      newCtor.options._Ctor = record.options._Ctor
      record.Ctor.options = newCtor.options
      record.Ctor.cid = newCtor.cid
      record.Ctor.prototype = newCtor.prototype
      if (newCtor.release) {
        // temporary global mixin strategy used in < 2.0.0-alpha.6
        newCtor.release()
      }
    } else {
      updateOptions(record.options, options)
    }
  }
  record.instances.slice().forEach(function (instance) {
    if (instance.$vnode && instance.$vnode.context) {
      instance.$vnode.context.$forceUpdate()
    } else {
      console.warn(
        'Root or manually mounted instance modified. Full reload required.'
      )
    }
  })
})

// 2.6 optimizes template-compiled scoped slots and skips updates if child
// only uses scoped slots. We need to patch the scoped slots resolving helper
// to temporarily mark all scoped slots as unstable in order to force child
// updates.
function patchScopedSlots (instance) {
  if (!instance._u) { return }
  // https://github.com/vuejs/vue/blob/dev/src/core/instance/render-helpers/resolve-scoped-slots.js
  var original = instance._u
  instance._u = function (slots) {
    try {
      // 2.6.4 ~ 2.6.6
      return original(slots, true)
    } catch (e) {
      // 2.5 / >= 2.6.7
      return original(slots, null, true)
    }
  }
  return function () {
    instance._u = original
  }
}
export default __VUE_HMR_RUNTIME__
`;

// plugins/vue2Jsx/index.ts
var ssrRegisterHelperId = "/__vue2-jsx-ssr-register-helper";
var ssrRegisterHelperCode = `export ${ssrRegisterHelper.toString()}`;
function ssrRegisterHelper(comp, filename) {
  const created = comp.created;
  comp.created = function() {
    const ssrContext = this.$ssrContext;
    (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(filename);
    if (created) {
      created.call(this);
    }
  };
}
function vue2JsxPlugin(options = {}) {
  let root = "";
  let needHmr = false;
  let needSourceMap = true;
  return {
    name: "vite:vue2-jsx",
    config(config) {
      return {
        // only apply esbuild to ts files
        // since we are handling jsx and tsx now
        esbuild: {
          include: /\.ts$/
        }
      };
    },
    configResolved(config) {
      needHmr = config.command === "serve" && !config.isProduction;
      needSourceMap = config.command === "serve" || !!config.build.sourcemap;
      root = config.root;
    },
    resolveId(id) {
      if (id === ssrRegisterHelperId) {
        return id;
      }
      if (id === HMR_RUNTIME_ID) {
        return id;
      }
    },
    load(id) {
      if (id === ssrRegisterHelperId) {
        return ssrRegisterHelperCode;
      }
      if (id === HMR_RUNTIME_ID) {
        return hmrRuntimeCode;
      }
    },
    async transform(code, id, opt) {
      const ssr = opt?.ssr === true;
      const {
        include,
        exclude,
        babelPlugins = [],
        ...babelPresetOptions
      } = options;
      const filter = createFilter(include || /\.[jt]sx$/, exclude);
      const [filepath] = id.split("?");
      if (filter(id) || filter(filepath)) {
        const plugins = [importMeta];
        const presets = [
          [jsx, {
            compositionAPI: "native",
            ...babelPresetOptions
          }]
        ];
        if (id.endsWith(".tsx") || filepath.endsWith(".tsx")) {
          plugins.push([
            // @ts-ignore missing type
            await import("file:///Users/ardor/Desktop/MyGitHub/tdesign-vue-integrate/node_modules/.pnpm/@babel+plugin-transform-typescript@7.23.6_@babel+core@7.23.9/node_modules/@babel/plugin-transform-typescript/lib/index.js").then(
              (r) => r.default
            ),
            // @ts-ignore
            { isTSX: true, allowExtensions: true, allowDeclareFields: true }
          ]);
        }
        plugins.push(...babelPlugins);
        const result = babel.transformSync(code, {
          babelrc: false,
          ast: true,
          plugins,
          presets,
          sourceMaps: needSourceMap,
          sourceFileName: id,
          configFile: false
        });
        if (!ssr && !needHmr) {
          if (!result.code)
            return;
          return {
            code: result.code,
            map: result.map
          };
        }
        const declaredComponents = [];
        const hotComponents = [];
        let hasDefault = false;
        for (const node of result.ast.program.body) {
          if (node.type === "VariableDeclaration") {
            const names = parseComponentDecls(node, code);
            if (names.length) {
              declaredComponents.push(...names);
            }
          }
          if (node.type === "ExportNamedDeclaration") {
            if (node.declaration && node.declaration.type === "VariableDeclaration") {
              hotComponents.push(
                ...parseComponentDecls(node.declaration, code).map(
                  ({ name }) => ({
                    local: name,
                    exported: name,
                    id: getHash(id + name)
                  })
                )
              );
            } else if (node.specifiers.length) {
              for (const spec of node.specifiers) {
                if (spec.type === "ExportSpecifier" && spec.exported.type === "Identifier") {
                  const matched = declaredComponents.find(
                    ({ name }) => name === spec.local.name
                  );
                  if (matched) {
                    hotComponents.push({
                      local: spec.local.name,
                      exported: spec.exported.name,
                      id: getHash(id + spec.exported.name)
                    });
                  }
                }
              }
            }
          }
          if (node.type === "ExportDefaultDeclaration") {
            if (node.declaration.type === "Identifier") {
              const _name = node.declaration.name;
              const matched = declaredComponents.find(
                ({ name }) => name === _name
              );
              if (matched) {
                hotComponents.push({
                  local: node.declaration.name,
                  exported: "default",
                  id: getHash(id + "default")
                });
              }
            } else if (isDefineComponentCall(node.declaration)) {
              hasDefault = true;
              hotComponents.push({
                local: "__default__",
                exported: "default",
                id: getHash(id + "default")
              });
            }
          }
        }
        if (hotComponents.length) {
          if (hasDefault && (needHmr || ssr)) {
            result.code = result.code.replace(
              /export default defineComponent/g,
              `const __default__ = defineComponent`
            ) + `
export default __default__`;
          }
          if (needHmr && !ssr && !/\?vue&type=script/.test(id)) {
            let code2 = result.code;
            let callbackCode = ``;
            code2 += `
import __VUE_HMR_RUNTIME__ from "${HMR_RUNTIME_ID}"`;
            for (const { local, exported, id: id2 } of hotComponents) {
              code2 += `
${local}.__hmrId = "${id2}"
__VUE_HMR_RUNTIME__.createRecord("${id2}", ${local})`;
              callbackCode += `
__VUE_HMR_RUNTIME__.reload("${id2}", __${exported})`;
            }
            code2 += `
import.meta.hot.accept(({${hotComponents.map((c) => `${c.exported}: __${c.exported}`).join(",")}}) => {${callbackCode}
})`;
            result.code = code2;
          }
          if (ssr) {
            const normalizedId = normalizePath(path4.relative(root, id));
            let ssrInjectCode = `
import { ssrRegisterHelper } from "${ssrRegisterHelperId}"
const __moduleId = ${JSON.stringify(normalizedId)}`;
            for (const { local } of hotComponents) {
              ssrInjectCode += `
ssrRegisterHelper(${local}, __moduleId)`;
            }
            result.code += ssrInjectCode;
          }
        }
        if (!result.code)
          return;
        return {
          code: result.code,
          map: result.map
        };
      }
    }
  };
}
function parseComponentDecls(node, source) {
  const names = [];
  for (const decl of node.declarations) {
    if (decl.id.type === "Identifier" && isDefineComponentCall(decl.init)) {
      names.push({
        name: decl.id.name
      });
    }
  }
  return names;
}
function isDefineComponentCall(node) {
  return node && node.type === "CallExpression" && node.callee.type === "Identifier" && node.callee.name === "defineComponent";
}
function getHash(text) {
  return createHash("sha256").update(text).digest("hex").substring(0, 8);
}
var vue2Jsx_default = vue2JsxPlugin;

// vite.config.ts
var __vite_injected_original_dirname3 = "/Users/ardor/Desktop/MyGitHub/tdesign-vue-integrate/sites/vue2.7";
var workspaceRoot = searchForWorkspaceRoot(process.cwd());
var getRootPath = (...args) => path5.posix.resolve(workspaceRoot, ...args);
var resolveAlias = (vueVersion) => {
  return {
    "@adapter/vue": getRootPath(`packages/adapter/vue/vue${vueVersion}`),
    "@adapter/hooks": getRootPath(`packages/adapter/hooks/vue${vueVersion}`),
    "@adapter/utils": getRootPath(`packages/adapter/utils/vue${vueVersion}`),
    "@td/intel": getRootPath(`packages/intel/vue${vueVersion}`),
    "tdesign-vue": getRootPath(`packages/components/vue${vueVersion}`)
  };
};
var publicPathMap = {
  preview: "/",
  intranet: "/vue-next/",
  production: "https://static.tdesign.tencent.com/vue-next/"
};
var transformTDIcon = () => ({
  name: "transform-icon",
  transform(code, id) {
    const intelReg = /from ['"]tdesign-icons-vue-next['"]/g;
    code = code.replace(intelReg, "from 'tdesign-icons-vue'");
    return code;
  }
});
var vite_config_default = defineConfig(({ mode }) => {
  return {
    base: publicPathMap[mode],
    resolve: {
      alias: {
        ...resolveAlias(2.7),
        "@": path5.resolve(__vite_injected_original_dirname3)
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
      transformTDIcon(),
      ScriptSetup({}),
      vue2Jsx_default({
        vModel: true,
        compositionAPI: { importSource: "@td/adapter-vue" }
      }),
      createVuePlugin({
        include: /(\.md|\.vue)$/,
        exclude: /\.tsx$/
      }),
      VitePWA(pwa_default),
      doc_default()
    ],
    optimizeDeps: {
      include: ["prismjs", "prismjs/components/prism-bash.js", "@vue/babel-helper-vue-jsx-merge-props", "tdesign-icons-vue"]
    }
  };
});
export {
  vite_config_default as default,
  transformTDIcon
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiY29uZmlncy9wd2EudHMiLCAicGx1Z2lucy9kb2MvaW5kZXgudHMiLCAicGx1Z2lucy9kb2MvdHJhbnNmb3Jtcy50cyIsICJwbHVnaW5zL2RvYy9tZC10by12dWUudHMiLCAicGx1Z2lucy9kb2MvdGVzdC1jb3ZlcmFnZS50cyIsICIuLi8uLi9wYWNrYWdlcy9zaGFyZWQvX2NvbW1vbi9kb2NzL2NvbXBpbGUvaW5kZXguanMiLCAicGx1Z2lucy9kb2MvZGVtby50cyIsICJwbHVnaW5zL3Z1ZTJKc3gvaW5kZXgudHMiLCAicGx1Z2lucy92dWUySnN4L2htclJ1bnRpbWUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvc2l0ZXMvdnVlMi43XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvc2l0ZXMvdnVlMi43L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9hcmRvci9EZXNrdG9wL015R2l0SHViL3RkZXNpZ24tdnVlLWludGVncmF0ZS9zaXRlcy92dWUyLjcvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XG4vLyBpbXBvcnQgdnVlMiBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUyJztcbmltcG9ydCB7IGNyZWF0ZVZ1ZVBsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZTInO1xuaW1wb3J0IFNjcmlwdFNldHVwIGZyb20gJ3VucGx1Z2luLXZ1ZTItc2NyaXB0LXNldHVwL3ZpdGUnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBzZWFyY2hGb3JXb3Jrc3BhY2VSb290IH0gZnJvbSAndml0ZSdcblxuaW1wb3J0IFBXQSBmcm9tIFwiLi9jb25maWdzL3B3YVwiO1xuaW1wb3J0IFREb2NQbHVnaW4gZnJvbSAnLi9wbHVnaW5zL2RvYyc7XG4vLyBpbXBvcnQgdnVlMkpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUyLWpzeCc7XG5pbXBvcnQgdnVlMkpzeCBmcm9tICcuL3BsdWdpbnMvdnVlMkpzeCc7XG5cbmNvbnN0IHdvcmtzcGFjZVJvb3QgPSBzZWFyY2hGb3JXb3Jrc3BhY2VSb290KHByb2Nlc3MuY3dkKCkpXG5jb25zdCBnZXRSb290UGF0aCA9ICguLi5hcmdzOiBzdHJpbmdbXSkgPT4gcGF0aC5wb3NpeC5yZXNvbHZlKHdvcmtzcGFjZVJvb3QsIC4uLmFyZ3MpXG5cbmNvbnN0IHJlc29sdmVBbGlhcyA9ICh2dWVWZXJzaW9uOiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAnQGFkYXB0ZXIvdnVlJzogZ2V0Um9vdFBhdGgoYHBhY2thZ2VzL2FkYXB0ZXIvdnVlL3Z1ZSR7dnVlVmVyc2lvbn1gKSxcbiAgICAnQGFkYXB0ZXIvaG9va3MnOiBnZXRSb290UGF0aChgcGFja2FnZXMvYWRhcHRlci9ob29rcy92dWUke3Z1ZVZlcnNpb259YCksXG4gICAgJ0BhZGFwdGVyL3V0aWxzJzogZ2V0Um9vdFBhdGgoYHBhY2thZ2VzL2FkYXB0ZXIvdXRpbHMvdnVlJHt2dWVWZXJzaW9ufWApLFxuICAgICdAdGQvaW50ZWwnOiBnZXRSb290UGF0aChgcGFja2FnZXMvaW50ZWwvdnVlJHt2dWVWZXJzaW9ufWApLFxuICAgICd0ZGVzaWduLXZ1ZSc6IGdldFJvb3RQYXRoKGBwYWNrYWdlcy9jb21wb25lbnRzL3Z1ZSR7dnVlVmVyc2lvbn1gKSxcbiAgfVxufVxuXG5jb25zdCBwdWJsaWNQYXRoTWFwID0ge1xuICBwcmV2aWV3OiAnLycsXG4gIGludHJhbmV0OiAnL3Z1ZS1uZXh0LycsXG4gIHByb2R1Y3Rpb246ICdodHRwczovL3N0YXRpYy50ZGVzaWduLnRlbmNlbnQuY29tL3Z1ZS1uZXh0LycsXG59O1xuXG5cbi8vICEgdnVlLW5leHQgXHU0RTJEXHU2NjJGXHU0RUNFIC4uL3NjcmlwdC92aXRlLmJhc2UuY29uZmlnIFx1NUYxNVx1NTE2NVxuY29uc3QgaXNDdXN0b21FbGVtZW50ID0gKHRhZykgPT4gdGFnLnN0YXJ0c1dpdGgoJ3RkLScpIHx8IHRhZy5zdGFydHNXaXRoKCd0ZGVzaWduLXRoZW1lJyk7XG5cblxuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybVRESWNvbiA9ICgpID0+ICh7XG4gIG5hbWU6ICd0cmFuc2Zvcm0taWNvbicsXG4gIHRyYW5zZm9ybShjb2RlLCBpZCkge1xuICAgIGNvbnN0IGludGVsUmVnID0gL2Zyb20gWydcIl10ZGVzaWduLWljb25zLXZ1ZS1uZXh0WydcIl0vZztcbiAgICBjb2RlID0gY29kZS5yZXBsYWNlKGludGVsUmVnLCAnZnJvbSBcXCd0ZGVzaWduLWljb25zLXZ1ZVxcJycpO1xuICAgIFxuICAgIHJldHVybiBjb2RlO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGJhc2U6IHB1YmxpY1BhdGhNYXBbbW9kZV0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgLi4ucmVzb2x2ZUFsaWFzKDIuNyksXG4gICAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSksXG4gICAgICB9XG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGhvc3Q6ICcwLjAuMC4wJyxcbiAgICAgIHBvcnQ6IDE2MDAwLFxuICAgICAgb3BlbjogJy8nLFxuICAgICAgZnM6IHtcbiAgICAgICAgYWxsb3c6IFsnLi4nXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICB0cmFuc2Zvcm1UREljb24oKSxcbiAgICAgIFNjcmlwdFNldHVwKHt9KSxcbiAgICAgIHZ1ZTJKc3goe1xuICAgICAgICB2TW9kZWw6IHRydWUsXG4gICAgICAgIGNvbXBvc2l0aW9uQVBJOiB7IGltcG9ydFNvdXJjZTogJ0B0ZC9hZGFwdGVyLXZ1ZScgfSxcbiAgICAgIH0pLFxuICAgICAgY3JlYXRlVnVlUGx1Z2luKHtcbiAgICAgICAgaW5jbHVkZTogLyhcXC5tZHxcXC52dWUpJC8sXG4gICAgICAgIGV4Y2x1ZGU6IC9cXC50c3gkL1xuICAgICAgfSksXG4gICAgICBWaXRlUFdBKFBXQSksXG4gICAgICBURG9jUGx1Z2luKCksXG4gICAgXSxcbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgIGluY2x1ZGU6IFsncHJpc21qcycsICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tYmFzaC5qcycsICdAdnVlL2JhYmVsLWhlbHBlci12dWUtanN4LW1lcmdlLXByb3BzJywgJ3RkZXNpZ24taWNvbnMtdnVlJ10sXG4gICAgfSxcbiAgfVxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2FyZG9yL0Rlc2t0b3AvTXlHaXRIdWIvdGRlc2lnbi12dWUtaW50ZWdyYXRlL3NpdGVzL3Z1ZTIuNy9jb25maWdzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvc2l0ZXMvdnVlMi43L2NvbmZpZ3MvcHdhLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9hcmRvci9EZXNrdG9wL015R2l0SHViL3RkZXNpZ24tdnVlLWludGVncmF0ZS9zaXRlcy92dWUyLjcvY29uZmlncy9wd2EudHNcIjtpbXBvcnQgdHlwZSB7IFZpdGVQV0FPcHRpb25zIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0cmF0ZWdpZXM6IFwiaW5qZWN0TWFuaWZlc3RcIixcbiAgaW5jbHVkZUFzc2V0czogWydmYXZpY29uLnN2ZycsICdmYXZpY29uLmljbycsICdhcHBsZS10b3VjaC1pY29uLnBuZyddLFxuICBtYW5pZmVzdDoge1xuICAgIG5hbWU6ICdURGVzaWduIGZvciBWdWUgTmV4dCcsXG4gICAgc2hvcnRfbmFtZTogJ1REZXNpZ24nLFxuICAgIGRlc2NyaXB0aW9uOiAnVERlc2lnbiBVSSB2dWUtbmV4dCcsXG4gICAgdGhlbWVfY29sb3I6ICcjZmZmZmZmJyxcbiAgICBpY29uczogW1xuICAgICAge1xuICAgICAgICBzcmM6ICdwd2EtMTkyeDE5Mi5wbmcnLFxuICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNyYzogJ3B3YS01MTJ4NTEyLnBuZycsXG4gICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxufSBhcyBWaXRlUFdBT3B0aW9ucztcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2FyZG9yL0Rlc2t0b3AvTXlHaXRIdWIvdGRlc2lnbi12dWUtaW50ZWdyYXRlL3NpdGVzL3Z1ZTIuNy9wbHVnaW5zL2RvY1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2FyZG9yL0Rlc2t0b3AvTXlHaXRIdWIvdGRlc2lnbi12dWUtaW50ZWdyYXRlL3NpdGVzL3Z1ZTIuNy9wbHVnaW5zL2RvYy9pbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvc2l0ZXMvdnVlMi43L3BsdWdpbnMvZG9jL2luZGV4LnRzXCI7aW1wb3J0IHZpdGVQbHVnaW5UZG9jIGZyb20gJ3ZpdGUtcGx1Z2luLXRkb2MnO1xuXG5pbXBvcnQgdHJhbnNmb3JtcyBmcm9tICcuL3RyYW5zZm9ybXMnO1xuaW1wb3J0IHJlbmRlckRlbW8gZnJvbSAnLi9kZW1vJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gdml0ZVBsdWdpblRkb2Moe1xuICB0cmFuc2Zvcm1zLCAvLyBcdTg5RTNcdTY3OTBtYXJrZG93biBcdTY1NzBcdTYzNkVcbiAgbWFya2Rvd246IHtcbiAgICBhbmNob3I6IHtcbiAgICAgIHRhYkluZGV4OiBmYWxzZSxcbiAgICAgIGNvbmZpZzogKGFuY2hvcikgPT4gKHtcbiAgICAgICAgcGVybWFsaW5rOiBhbmNob3IucGVybWFsaW5rLmxpbmtJbnNpZGVIZWFkZXIoeyBzeW1ib2w6ICcnIH0pLFxuICAgICAgfSksXG4gICAgfSxcbiAgICB0b2M6IHtcbiAgICAgIGxpc3RDbGFzczogJ3RkZXNpZ24tdG9jX2xpc3QnLFxuICAgICAgaXRlbUNsYXNzOiAndGRlc2lnbi10b2NfbGlzdF9pdGVtJyxcbiAgICAgIGxpbmtDbGFzczogJ3RkZXNpZ24tdG9jX2xpc3RfaXRlbV9hJyxcbiAgICAgIGNvbnRhaW5lckNsYXNzOiAndGRlc2lnbi10b2NfY29udGFpbmVyJyxcbiAgICB9LFxuICAgIGNvbnRhaW5lcihtZCwgY29udGFpbmVyKSB7XG4gICAgICByZW5kZXJEZW1vKG1kLCBjb250YWluZXIpO1xuICAgIH0sXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2FyZG9yL0Rlc2t0b3AvTXlHaXRIdWIvdGRlc2lnbi12dWUtaW50ZWdyYXRlL3NpdGVzL3Z1ZTIuNy9wbHVnaW5zL2RvY1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2FyZG9yL0Rlc2t0b3AvTXlHaXRIdWIvdGRlc2lnbi12dWUtaW50ZWdyYXRlL3NpdGVzL3Z1ZTIuNy9wbHVnaW5zL2RvYy90cmFuc2Zvcm1zLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9hcmRvci9EZXNrdG9wL015R2l0SHViL3RkZXNpZ24tdnVlLWludGVncmF0ZS9zaXRlcy92dWUyLjcvcGx1Z2lucy9kb2MvdHJhbnNmb3Jtcy50c1wiO2ltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5cbmltcG9ydCBtZFRvVnVlIGZyb20gJy4vbWQtdG8tdnVlJztcblxubGV0IGRlbW9JbXBvcnRzID0ge307XG5sZXQgZGVtb0NvZGVzSW1wb3J0cyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJlZm9yZSh7IHNvdXJjZSwgZmlsZSB9KSB7XG4gICAgY29uc3QgcmVzb3VyY2VEaXIgPSBwYXRoLmRpcm5hbWUoZmlsZSk7XG4gICAgY29uc3QgcmVnID0gZmlsZS5tYXRjaCgvKFtcXHctXSspXFwuPyhbXFx3LV0rKT9cXC5tZC8pO1xuICAgIGNvbnN0IGZpbGVOYW1lID0gcmVnICYmIHJlZ1swXTtcbiAgICBjb25zdCBjb21wb25lbnROYW1lID0gcmVnICYmIHJlZ1sxXTtcbiAgICBjb25zdCBsb2NhbGVOYW1lID0gcmVnICYmIHJlZ1syXTtcbiAgICBkZW1vSW1wb3J0cyA9IHt9O1xuICAgIGRlbW9Db2Rlc0ltcG9ydHMgPSB7fTtcblxuICAgIC8vIFx1N0VERlx1NEUwMFx1NjM2Mlx1NjIxMCBjb21tb24gXHU1MTZDXHU1MTcxXHU2NTg3XHU2ODYzXHU1MTg1XHU1QkI5XG4gICAgaWYgKGZpbGVOYW1lICYmIHNvdXJjZS5pbmNsdWRlcygnOjogQkFTRV9ET0MgOjonKSkge1xuICAgICAgLy8gISB6aGFuZ3Bhb3BhbyBcdTc2RjRcdTYzQTVcdThENzBcdTc2ODQgbm9kZV9tb2R1bGVzXG4gICAgICBjb25zdCBsb2NhbGVEb2NQYXRoID0gcGF0aC5wb3NpeC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uLycsICBgbm9kZV9tb2R1bGVzL0B0ZC9zaGFyZWQvX2NvbW1vbi9kb2NzL3dlYi9hcGkvJHtmaWxlTmFtZX1gKTtcbiAgICAgIGNvbnN0IGRlZmF1bHREb2NQYXRoID0gcGF0aC5wb3NpeC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uLycsIGBub2RlX21vZHVsZXMvQHRkL3NoYXJlZC9fY29tbW9uL2RvY3Mvd2ViL2FwaS8ke2NvbXBvbmVudE5hbWV9Lm1kYCk7XG5cbiAgICAgIGxldCBiYXNlRG9jID0gJyc7XG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhsb2NhbGVEb2NQYXRoKSkge1xuICAgICAgICAvLyBcdTRGMThcdTUxNDhcdThGN0RcdTUxNjVcdThCRURcdThBMDBcdTcyNDhcdTY3MkNcbiAgICAgICAgYmFzZURvYyA9IGZzLnJlYWRGaWxlU3luYyhsb2NhbGVEb2NQYXRoLCAndXRmLTgnKTtcbiAgICAgIH0gZWxzZSBpZiAoZnMuZXhpc3RzU3luYyhkZWZhdWx0RG9jUGF0aCkpIHtcbiAgICAgICAgLy8gXHU1NkRFXHU5MDAwXHU0RTJEXHU2NTg3XHU5RUQ4XHU4QkE0XHU3MjQ4XHU2NzJDXG4gICAgICAgIGJhc2VEb2MgPSBmcy5yZWFkRmlsZVN5bmMoZGVmYXVsdERvY1BhdGgsICd1dGYtOCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgXHU2NzJBXHU2MjdFXHU1MjMwICR7ZGVmYXVsdERvY1BhdGh9IFx1NjU4N1x1NEVGNmApO1xuICAgICAgfVxuICAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoJzo6IEJBU0VfRE9DIDo6JywgYmFzZURvYyk7XG4gICAgfVxuXG4gICAgLy8gXHU2NkZGXHU2MzYyXHU2MjEwXHU1QkY5XHU1RTk0IGRlbW8gXHU2NTg3XHU0RUY2XG4gICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoL1xce1xce1xccysoLispXFxzK1xcfVxcfS9nLCAoZGVtb1N0ciwgZGVtb0ZpbGVOYW1lKSA9PiB7XG4gICAgICBjb25zdCBkZWZhdWx0RGVtb1BhdGggPSBwYXRoLnJlc29sdmUocmVzb3VyY2VEaXIsIGAuL19leGFtcGxlLyR7ZGVtb0ZpbGVOYW1lfS52dWVgKTtcbiAgICAgIGNvbnN0IGxvY2FsZURlbW9QYXRoID0gcGF0aC5yZXNvbHZlKHJlc291cmNlRGlyLCBgLi4vX2V4YW1wbGUvJHtkZW1vRmlsZU5hbWV9LiR7bG9jYWxlTmFtZX0udnVlYCk7XG4gICAgICAvLyBsb2NhbGVEZW1vIFx1NEYxOFx1NTE0OFx1N0VBN1x1NjcwMFx1OUFEOFxuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMobG9jYWxlRGVtb1BhdGgpKVxuICAgICAgICByZXR1cm4gYFxcbjo6OiBkZW1vIF9leGFtcGxlLyR7ZGVtb0ZpbGVOYW1lfS4ke2xvY2FsZU5hbWV9ICR7Y29tcG9uZW50TmFtZX1cXG46OjpcXG5gO1xuXG4gICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoZGVmYXVsdERlbW9QYXRoKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnXFx4MUJbMzZtJXNcXHgxQlswbScsIGAke2NvbXBvbmVudE5hbWV9IFx1N0VDNFx1NEVGNlx1OTcwMFx1ODk4MVx1NUI5RVx1NzNCMCBfZXhhbXBsZS8ke2RlbW9GaWxlTmFtZX0udnVlIFx1NzkzQVx1NEY4QiFgKTtcbiAgICAgICAgcmV0dXJuICdcXG48aDM+REVNTyAoXHVEODNEXHVERUE3XHU1RUZBXHU4QkJFXHU0RTJEXHVGRjA5Li4uPC9oMz4nO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYFxcbjo6OiBkZW1vIF9leGFtcGxlLyR7ZGVtb0ZpbGVOYW1lfSAke2NvbXBvbmVudE5hbWV9XFxuOjo6XFxuYDtcbiAgICB9KTtcblxuICAgIHNvdXJjZS5yZXBsYWNlKC86OjpcXHMqZGVtb1xccysoW1xcXFwvLlxcdy1dKykvZywgKGRlbW9TdHIsIHJlbGF0aXZlRGVtb1BhdGgpID0+IHtcbiAgICAgIGNvbnN0IGRlbW9QYXRoT25seUxldHRlcnMgPSByZWxhdGl2ZURlbW9QYXRoLnJlcGxhY2UoL1teYS16QS1aXFxkXS9nLCAnJyk7XG4gICAgICBjb25zdCBkZW1vRGVmTmFtZSA9IGBEZW1vJHtkZW1vUGF0aE9ubHlMZXR0ZXJzfWA7XG4gICAgICBjb25zdCBkZW1vQ29kZURlZk5hbWUgPSBgRGVtbyR7ZGVtb1BhdGhPbmx5TGV0dGVyc31Db2RlYDtcbiAgICAgIGRlbW9JbXBvcnRzW2RlbW9EZWZOYW1lXSA9IGBpbXBvcnQgJHtkZW1vRGVmTmFtZX0gZnJvbSAnLi8ke3JlbGF0aXZlRGVtb1BhdGh9LnZ1ZSc7YDtcbiAgICAgIGRlbW9Db2Rlc0ltcG9ydHNbZGVtb0NvZGVEZWZOYW1lXSA9IGBpbXBvcnQgJHtkZW1vQ29kZURlZk5hbWV9IGZyb20gJy4vJHtyZWxhdGl2ZURlbW9QYXRofS52dWU/cmF3JztgO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfSxcbiAgcmVuZGVyKHsgc291cmNlLCBmaWxlLCBtZCB9KSB7XG4gICAgY29uc3QgZGVtb0RlZnNTdHIgPSBPYmplY3Qua2V5cyhkZW1vSW1wb3J0cylcbiAgICAgIC5tYXAoKGtleSkgPT4gZGVtb0ltcG9ydHNba2V5XSlcbiAgICAgIC5qb2luKCc7XFxuJyk7XG4gICAgY29uc3QgZGVtb0NvZGVzRGVmc1N0ciA9IE9iamVjdC5rZXlzKGRlbW9Db2Rlc0ltcG9ydHMpXG4gICAgICAubWFwKChrZXkpID0+IGRlbW9Db2Rlc0ltcG9ydHNba2V5XSlcbiAgICAgIC5qb2luKCc7XFxuJyk7XG5cbiAgICBjb25zdCBkZW1vSW5zdGFsbFN0ciA9IE9iamVjdC5rZXlzKGRlbW9JbXBvcnRzKS5qb2luKCcsJyk7XG4gICAgY29uc3QgZGVtb0NvZGVJbnN0YWxsU3RyID0gT2JqZWN0LmtleXMoZGVtb0NvZGVzSW1wb3J0cykuam9pbignLCcpO1xuXG4gICAgY29uc3Qgc2ZjID0gbWRUb1Z1ZSh7XG4gICAgICBtZCxcbiAgICAgIGZpbGUsXG4gICAgICBzb3VyY2UsXG4gICAgICBkZW1vRGVmc1N0cixcbiAgICAgIGRlbW9Db2Rlc0RlZnNTdHIsXG4gICAgICBkZW1vSW5zdGFsbFN0cixcbiAgICAgIGRlbW9Db2RlSW5zdGFsbFN0cixcbiAgICB9KTtcblxuICAgIHJldHVybiBzZmM7XG4gIH0sXG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvc2l0ZXMvdnVlMi43L3BsdWdpbnMvZG9jXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvc2l0ZXMvdnVlMi43L3BsdWdpbnMvZG9jL21kLXRvLXZ1ZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvc2l0ZXMvdnVlMi43L3BsdWdpbnMvZG9jL21kLXRvLXZ1ZS50c1wiO2ltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJztcbmltcG9ydCBjYW1lbENhc2UgZnJvbSAnY2FtZWxjYXNlJztcblxuaW1wb3J0IHRlc3RDb3ZlcmFnZSBmcm9tICcuL3Rlc3QtY292ZXJhZ2UnO1xuXG4vLyBpbXBvcnQgeyBjb21waWxlVXNhZ2UsIGdldEdpdFRpbWVzdGFtcCB9IGZyb20gJ0B0ZC9zaGFyZWQvX2NvbW1vbi9kb2NzL2NvbXBpbGUnO1xuLy8gISB6aGFuZ3Bhb3BhbyBcdTU2RTBcdTRFM0EgY29tbW9uL19jb21tb24gXHU0RTNBIGNqcyBcdTc2ODRcdUZGMENcdTYyNDBcdTRFRTVcdTY1RTBcdTZDRDVcdTkwMUFcdThGQzcgRVNNIFx1NTJBMFx1OEY3RFxuLy8gXHU5NUVFXHU5ODk4XHU2NzY1XHU0RTg2XHVGRjBDXHU0RTNBXHU1NTY1IHBhdGggXHU1M0VGXHU0RUU1XHU1NDYyXHVGRjFGIFx1NTZFMFx1NEUzQSBwYXRoIFx1NjYyRlx1NjcyQ1x1NTczMFx1NjU4N1x1NEVGNlx1RkYwQ1x1ODAwQyB3b3Jrc3BhY2UgXHU2NjJGIG5vZGVfbW9kZWxzKFx1NEY5RFx1OEQ1NilcbmltcG9ydCB7IGNvbXBpbGVVc2FnZSwgZ2V0R2l0VGltZXN0YW1wIH0gZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL0B0ZC9zaGFyZWQvX2NvbW1vbi9kb2NzL2NvbXBpbGUnO1xuXG5jb25zdCBERUZBVUxUX1RBQlMgPSBbXG4gIHsgdGFiOiAnZGVtbycsIG5hbWU6ICdcdTc5M0FcdTRGOEInIH0sXG4gIHsgdGFiOiAnYXBpJywgbmFtZTogJ0FQSScgfSxcbiAgeyB0YWI6ICdkZXNpZ24nLCBuYW1lOiAnXHU2MzA3XHU1MzU3JyB9LFxuXTtcblxuY29uc3QgREVGQVVMVF9FTl9UQUJTID0gW1xuICB7IHRhYjogJ2RlbW8nLCBuYW1lOiAnREVNTycgfSxcbiAgeyB0YWI6ICdhcGknLCBuYW1lOiAnQVBJJyB9LFxuICB7IHRhYjogJ2Rlc2lnbicsIG5hbWU6ICdHdWlkZWxpbmUnIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBtZFRvVnVlKG9wdGlvbnMpIHtcbiAgY29uc3QgbWRTZWdtZW50ID0gYXdhaXQgY3VzdG9tUmVuZGVyKG9wdGlvbnMpO1xuICBjb25zdCB7IGRlbW9EZWZzU3RyLCBkZW1vQ29kZXNEZWZzU3RyLCBkZW1vSW5zdGFsbFN0ciwgZGVtb0NvZGVJbnN0YWxsU3RyIH0gPSBvcHRpb25zO1xuXG4gIGxldCBjb3ZlcmFnZSA9IHt9O1xuICBpZiAobWRTZWdtZW50LmlzQ29tcG9uZW50KSB7XG4gICAgY292ZXJhZ2UgPSB0ZXN0Q292ZXJhZ2VbY2FtZWxDYXNlKG1kU2VnbWVudC5jb21wb25lbnROYW1lKV0gfHwgJzAlJztcbiAgfVxuXG4gIGNvbnN0IHNmYyA9IGBcbiAgICA8dGVtcGxhdGU+XG4gICAgICA8dGQtZG9jLWNvbnRlbnQgcmVmPVwidGREb2NDb250ZW50XCIgcGFnZS1zdGF0dXM9XCJoaWRkZW5cIj5cbiAgICAgICAgJHtcbiAgICAgICAgICBtZFNlZ21lbnQudGREb2NIZWFkZXJcbiAgICAgICAgICAgID8gYFxuICAgICAgICAgIDx0ZC1kb2MtaGVhZGVyXG4gICAgICAgICAgICBzbG90PVwiZG9jLWhlYWRlclwiXG4gICAgICAgICAgICByZWY9XCJ0ZERvY0hlYWRlclwiXG4gICAgICAgICAgICBzcGxpbmU9XCIke21kU2VnbWVudC5zcGxpbmV9XCJcbiAgICAgICAgICAgIHBsYXRmb3JtPVwid2ViXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgJHttZFNlZ21lbnQuaXNDb21wb25lbnQgPyBgPHRkLWRvYy1iYWRnZSBzbG90PVwiYmFkZ2VcIiBsYWJlbD1cImNvdmVyYWdlXCIgbWVzc2FnZT1cIiR7Y292ZXJhZ2V9XCIgLz5gIDogJyd9XG4gICAgICAgICAgPC90ZC1kb2MtaGVhZGVyPmBcbiAgICAgICAgICAgIDogJydcbiAgICAgICAgfVxuICAgICAgICAke1xuICAgICAgICAgIG1kU2VnbWVudC5pc0NvbXBvbmVudFxuICAgICAgICAgICAgPyBgXG4gICAgICAgICAgPHRkLWRvYy10YWJzIHJlZj1cInRkRG9jVGFic1wiIDp0YWI9XCJ0YWJcIj48L3RkLWRvYy10YWJzPlxuXG4gICAgICAgICAgPGRpdiB2LXNob3c9XCJ0YWIgPT09ICdkZW1vJ1wiPlxuICAgICAgICAgICAgPGRpdiBuYW1lPVwiREVNT1wiPiR7bWRTZWdtZW50LmRlbW9NZH08L2Rpdj5cbiAgICAgICAgICAgIDx0ZC1jb250cmlidXRvcnNcbiAgICAgICAgICAgICAgcGxhdGZvcm09XCJ3ZWJcIlxuICAgICAgICAgICAgICBmcmFtZXdvcms9XCJ2dWVcIlxuICAgICAgICAgICAgICBjb21wb25lbnQtbmFtZT1cIiR7bWRTZWdtZW50LmNvbXBvbmVudE5hbWV9XCJcbiAgICAgICAgICAgID48L3RkLWNvbnRyaWJ1dG9ycz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHYtc2hvdz1cInRhYiA9PT0gJ2FwaSdcIiBuYW1lPVwiQVBJXCI+JHttZFNlZ21lbnQuYXBpTWR9PC9kaXY+XG4gICAgICAgICAgPGRpdiB2LXNob3c9XCJ0YWIgPT09ICdkZXNpZ24nXCIgbmFtZT1cIkRFU0lHTlwiPiR7bWRTZWdtZW50LmRlc2lnbk1kfTwvZGl2PlxuICAgICAgICBgXG4gICAgICAgICAgICA6IGA8ZGl2IG5hbWU9XCJET0NcIiBjbGFzcz1cIiR7bWRTZWdtZW50LmRvY0NsYXNzfVwiPiR7bWRTZWdtZW50LmRvY01kfTwvZGl2PmBcbiAgICAgICAgfVxuICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogNDhweDtcIj5cbiAgICAgICAgICA8dGQtZG9jLWhpc3RvcnkgOnRpbWU9XCJsYXN0VXBkYXRlZFwiIDprZXk9XCJsYXN0VXBkYXRlZFwiPjwvdGQtZG9jLWhpc3Rvcnk+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGQtZG9jLWZvb3RlciBzbG90PVwiZG9jLWZvb3RlclwiPjwvdGQtZG9jLWZvb3Rlcj5cbiAgICAgIDwvdGQtZG9jLWNvbnRlbnQ+XG4gICAgPC90ZW1wbGF0ZT5cblxuICAgIDxzY3JpcHQ+XG4gICAgICAke2RlbW9EZWZzU3RyfVxuICAgICAgJHtkZW1vQ29kZXNEZWZzU3RyfVxuICAgICAgJHttZFNlZ21lbnQudXNhZ2UuaW1wb3J0U3RyfVxuICAgICAgaW1wb3J0IFByaXNtanMgZnJvbSAncHJpc21qcyc7XG5cbiAgICAgIGV4cG9ydCBkZWZhdWx0IHtcblxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgJHttZFNlZ21lbnQudXNhZ2UuaW5zdGFsbFN0cn1cbiAgICAgICAgICAke2RlbW9JbnN0YWxsU3RyfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICR7ZGVtb0NvZGVJbnN0YWxsU3RyfVxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICBsYXN0VXBkYXRlZCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYiA9PT0gJ2Rlc2lnbicpIHJldHVybiAke21kU2VnbWVudC5kZXNpZ25Eb2NMYXN0VXBkYXRlZH07XG4gICAgICAgICAgICByZXR1cm4gJHttZFNlZ21lbnQubGFzdFVwZGF0ZWR9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdGFiOiB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLiRyb3V0ZS5xdWVyeS50YWIgfHwgJ2RlbW8nO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh2KSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLiRyb3V0ZS5xdWVyeS50YWIgIT09IHYpXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBxdWVyeTogeyB0YWI6IHYgfSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgY29uc3QgeyB0ZERvY0NvbnRlbnQsIHRkRG9jSGVhZGVyLCB0ZERvY1RhYnMgfSA9IHRoaXMuJHJlZnM7XG5cbiAgICAgICAgICBpZiAodGREb2NIZWFkZXIpIHtcbiAgICAgICAgICAgIHRkRG9jSGVhZGVyLmRvY0luZm8gPSB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcXGAke21kU2VnbWVudC50aXRsZX1cXGAsXG4gICAgICAgICAgICAgIGRlc2M6IFxcYCR7bWRTZWdtZW50LmRlc2NyaXB0aW9ufVxcYCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gXFxgJHttZFNlZ21lbnQudGl0bGV9IHwgVERlc2lnblxcYDtcblxuICAgICAgICAgIGlmICh0ZERvY1RhYnMpIHtcbiAgICAgICAgICAgIHRkRG9jVGFicy50YWJzID0gJHtKU09OLnN0cmluZ2lmeShtZFNlZ21lbnQudGREb2NUYWJzKX07XG4gICAgICAgICAgICB0ZERvY1RhYnMub25jaGFuZ2UgPSAoeyBkZXRhaWw6IGN1cnJlbnRUYWIgfSkgPT4gdGhpcy50YWIgPSBjdXJyZW50VGFiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIFByaXNtanMuaGlnaGxpZ2h0QWxsKCk7XG4gICAgXG4gICAgICAgICAgdGhpcy4kZW1pdCgnbG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGREb2NDb250ZW50LnBhZ2VTdGF0dXMgPSAnc2hvdyc7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIDwvc2NyaXB0PlxuICBgO1xuXG4gIHJldHVybiBzZmM7XG59XG5cbi8vIFx1ODlFM1x1Njc5MCBtYXJrZG93biBcdTUxODVcdTVCQjlcbmFzeW5jIGZ1bmN0aW9uIGN1c3RvbVJlbmRlcih7IHNvdXJjZSwgZmlsZSwgbWQgfSkge1xuICBjb25zdCB7IGNvbnRlbnQsIGRhdGEgfSA9IG1hdHRlcihzb3VyY2UpO1xuICBjb25zdCBsYXN0VXBkYXRlZCA9IChhd2FpdCBnZXRHaXRUaW1lc3RhbXAoZmlsZSkpIHx8IE1hdGgucm91bmQoZnMuc3RhdFN5bmMoZmlsZSkubXRpbWVNcyk7XG4gIC8vIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSk7XG4gIGNvbnN0IGlzRW4gPSBmaWxlLmVuZHNXaXRoKCdlbi1VUy5tZCcpO1xuXG4gIC8vIG1kIHRvcCBkYXRhXG4gIGNvbnN0IHBhZ2VEYXRhID0ge1xuICAgIHNwbGluZTogJycsXG4gICAgdG9jOiB0cnVlLFxuICAgIHRpdGxlOiAnJyxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgaXNDb21wb25lbnQ6IGZhbHNlLFxuICAgIHRkRG9jSGVhZGVyOiB0cnVlLFxuICAgIHRkRG9jVGFiczogIWlzRW4gPyBERUZBVUxUX1RBQlMgOiBERUZBVUxUX0VOX1RBQlMsXG4gICAgYXBpRmxhZzogLyMrXFxzKkFQSS8sXG4gICAgZG9jQ2xhc3M6ICcnLFxuICAgIGxhc3RVcGRhdGVkLFxuICAgIGRlc2lnbkRvY0xhc3RVcGRhdGVkOiBsYXN0VXBkYXRlZCxcbiAgICAuLi5kYXRhLFxuICB9O1xuXG4gIC8vIG1kIGZpbGVuYW1lXG4gIGNvbnN0IHJlZyA9IGZpbGUubWF0Y2goLyhbXFx3LV0rKVxcLj8oW1xcdy1dKyk/XFwubWQvKTtcbiAgY29uc3QgY29tcG9uZW50TmFtZSA9IHJlZyAmJiByZWdbMV07XG5cbiAgLy8gc3BsaXQgbWRcbiAgbGV0IFtkZW1vTWQgPSAnJywgYXBpTWQgPSAnJ10gPSBjb250ZW50LnNwbGl0KHBhZ2VEYXRhLmFwaUZsYWcpO1xuXG4gIGNvbnN0IG1kU2VnbWVudCA9IHtcbiAgICAuLi5wYWdlRGF0YSxcbiAgICBjb21wb25lbnROYW1lLFxuICAgIHVzYWdlOiB7IGltcG9ydFN0cjogJycsIGluc3RhbGxTdHI6ICcnIH0sXG4gICAgZG9jTWQ6ICc8dGQtZG9jLWVtcHR5PjwvdGQtZG9jLWVtcHR5PicsXG4gICAgZGVtb01kOiAnPHRkLWRvYy1lbXB0eT48L3RkLWRvYy1lbXB0eT4nLFxuICAgIGFwaU1kOiAnPHRkLWRvYy1lbXB0eT48L3RkLWRvYy1lbXB0eT4nLFxuICAgIGRlc2lnbk1kOiAnPHRkLWRvYy1lbXB0eT48L3RkLWRvYy1lbXB0eT4nLFxuICB9O1xuXG4gIC8vIFx1NkUzMlx1NjdEMyBsaXZlIGRlbW9cbiAgaWYgKHBhZ2VEYXRhLnVzYWdlICYmIHBhZ2VEYXRhLmlzQ29tcG9uZW50KSB7XG4gICAgY29uc3QgdXNhZ2VPYmogPSBjb21waWxlVXNhZ2Uoe1xuICAgICAgY29tcG9uZW50TmFtZSxcbiAgICAgIHVzYWdlOiBwYWdlRGF0YS51c2FnZSxcbiAgICAgIC8vICEgemhhbmdwYW9wYW8gXHU3NkY0XHU2M0E1XHU4RDcwXHU3Njg0IG5vZGVfbW9kdWxlc1xuICAgICAgZGVtb1BhdGg6IHBhdGgucG9zaXgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi8nLCBgbm9kZV9tb2R1bGVzL0B0ZC9pbnRlbC12dWUyLjcvY29tcG9uZW50cy8ke2NvbXBvbmVudE5hbWV9L191c2FnZS9pbmRleC52dWVgKS5yZXBsYWNlKC9cXFxcL2csICcvJyksXG4gICAgfSk7XG4gICAgaWYgKHVzYWdlT2JqKSB7XG4gICAgICBtZFNlZ21lbnQudXNhZ2UgPSB1c2FnZU9iajtcbiAgICAgIGRlbW9NZCA9IGAke3VzYWdlT2JqLm1hcmtkb3duU3RyfSAke2RlbW9NZH1gO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYWdlRGF0YS5pc0NvbXBvbmVudCkge1xuICAgIG1kU2VnbWVudC5kZW1vTWQgPSBtZC5yZW5kZXIuY2FsbChcbiAgICAgIG1kLFxuICAgICAgYCR7cGFnZURhdGEudG9jID8gJ1t0b2NdXFxuJyA6ICcnfSR7ZGVtb01kLnJlcGxhY2UoLzwhLS1bXFxzXFxTXSs/LS0+L2csICcnKX1gLFxuICAgICkuaHRtbDtcbiAgICBtZFNlZ21lbnQuYXBpTWQgPSBtZC5yZW5kZXIuY2FsbChcbiAgICAgIG1kLFxuICAgICAgYCR7cGFnZURhdGEudG9jID8gJ1t0b2NdXFxuJyA6ICcnfSR7YXBpTWQucmVwbGFjZSgvPCEtLVtcXHNcXFNdKz8tLT4vZywgJycpfWAsXG4gICAgKS5odG1sO1xuICB9IGVsc2Uge1xuICAgIG1kU2VnbWVudC5kb2NNZCA9IG1kLnJlbmRlci5jYWxsKFxuICAgICAgbWQsXG4gICAgICBgJHtwYWdlRGF0YS50b2MgPyAnW3RvY11cXG4nIDogJyd9JHtjb250ZW50LnJlcGxhY2UoLzwhLS1bXFxzXFxTXSs/LS0+L2csICcnKX1gLFxuICAgICkuaHRtbDtcbiAgfVxuXG4gIC8vIFx1OEJCRVx1OEJBMVx1NjMwN1x1NTM1N1x1NTE4NVx1NUJCOSBcdTRFMERcdTVDNTVcdTc5M0EgZGVzaWduIFRhYiBcdTUyMTlcdTRFMERcdTg5RTNcdTY3OTBcbiAgaWYgKHBhZ2VEYXRhLmlzQ29tcG9uZW50ICYmIHBhZ2VEYXRhLnRkRG9jVGFicy5zb21lKChpdGVtKSA9PiBpdGVtLnRhYiA9PT0gJ2Rlc2lnbicpKSB7XG4gICAgLy8gISB6aGFuZ3Bhb3BhbyBcdTc2RjRcdTYzQTVcdThENzBcdTc2ODQgbm9kZV9tb2R1bGVzXG4gICAgY29uc3QgZGVzaWduRG9jUGF0aCA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi8nLCBgbm9kZV9tb2R1bGVzL0B0ZC9zaGFyZWQvX2NvbW1vbi9kb2NzL3dlYi9kZXNpZ24vJHtjb21wb25lbnROYW1lfS5tZGApO1xuXG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoZGVzaWduRG9jUGF0aCkpIHtcbiAgICAgIGNvbnN0IGRlc2lnbkRvY0xhc3RVcGRhdGVkID1cbiAgICAgICAgKGF3YWl0IGdldEdpdFRpbWVzdGFtcChkZXNpZ25Eb2NQYXRoKSkgfHwgTWF0aC5yb3VuZChmcy5zdGF0U3luYyhkZXNpZ25Eb2NQYXRoKS5tdGltZU1zKTtcbiAgICAgIG1kU2VnbWVudC5kZXNpZ25Eb2NMYXN0VXBkYXRlZCA9IGRlc2lnbkRvY0xhc3RVcGRhdGVkO1xuXG4gICAgICBjb25zdCBkZXNpZ25NZCA9IGZzLnJlYWRGaWxlU3luYyhkZXNpZ25Eb2NQYXRoLCAndXRmLTgnKTtcbiAgICAgIG1kU2VnbWVudC5kZXNpZ25NZCA9IG1kLnJlbmRlci5jYWxsKG1kLCBgJHtwYWdlRGF0YS50b2MgPyAnW3RvY11cXG4nIDogJyd9JHtkZXNpZ25NZH1gKS5odG1sO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgW3ZpdGUtcGx1Z2luLXRkb2NdOiBcdTY3MkFcdTYyN0VcdTUyMzAgJHtkZXNpZ25Eb2NQYXRofSBcdTY1ODdcdTRFRjZgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWRTZWdtZW50O1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvc2l0ZXMvdnVlMi43L3BsdWdpbnMvZG9jXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvc2l0ZXMvdnVlMi43L3BsdWdpbnMvZG9jL3Rlc3QtY292ZXJhZ2UudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2FyZG9yL0Rlc2t0b3AvTXlHaXRIdWIvdGRlc2lnbi12dWUtaW50ZWdyYXRlL3NpdGVzL3Z1ZTIuNy9wbHVnaW5zL2RvYy90ZXN0LWNvdmVyYWdlLnRzXCI7ZXhwb3J0IGRlZmF1bHQge1xuICAnJzogJzEwMCUnLFxuICAnY29tbW9uL2pzL2NvbG9yUGlja2VyJzogJzYzLjUxJScsXG4gICdjb21tb24vanMvZGF0ZVBpY2tlcic6ICc2Ny40NyUnLFxuICAnY29tbW9uL2pzL2dsb2JhbENvbmZpZyc6ICcxMDAlJyxcbiAgJ2NvbW1vbi9qcy9nbG9iYWxDb25maWcvbG9jYWxlJzogJzEwMCUnLFxuICAnY29tbW9uL2pzL2lucHV0TnVtYmVyJzogJzQwLjQ4JScsXG4gICdjb21tb24vanMvbG9hZGluZyc6ICc3My4xNyUnLFxuICAnY29tbW9uL2pzL2xvZyc6ICc3Mi43MiUnLFxuICAnY29tbW9uL2pzL3RhYmxlJzogJzE1LjM3JScsXG4gICdjb21tb24vanMvdGltZVBpY2tlcic6ICc3MS42OSUnLFxuICAnY29tbW9uL2pzL3RyZWUnOiAnOTMuMzMlJyxcbiAgJ2NvbW1vbi9qcy91cGxvYWQnOiAnMzkuOTQlJyxcbiAgJ2NvbW1vbi9qcy91dGlscyc6ICc0OC40NiUnLFxuICAnY29tbW9uL2pzL3dhdGVybWFyayc6ICc2Ljk3JScsXG4gIGFmZml4OiAnODkuNDclJyxcbiAgJ2FmZml4L3N0eWxlJzogJzEwMCUnLFxuICBhbGVydDogJzk2LjIxJScsXG4gICdhbGVydC9zdHlsZSc6ICcxMDAlJyxcbiAgYW5jaG9yOiAnOTUuMiUnLFxuICAnYW5jaG9yL3N0eWxlJzogJzEwMCUnLFxuICBhdXRvQ29tcGxldGU6ICc5OS44NSUnLFxuICAnYXV0b0NvbXBsZXRlL3N0eWxlJzogJzEwMCUnLFxuICBhdmF0YXI6ICc5Ni44NSUnLFxuICAnYXZhdGFyL3N0eWxlJzogJzEwMCUnLFxuICBiYWRnZTogJzEwMCUnLFxuICAnYmFkZ2Uvc3R5bGUnOiAnMTAwJScsXG4gIGJyZWFkY3J1bWI6ICc5Ny41MiUnLFxuICAnYnJlYWRjcnVtYi9zdHlsZSc6ICcxMDAlJyxcbiAgYnV0dG9uOiAnMTAwJScsXG4gICdidXR0b24vc3R5bGUnOiAnMTAwJScsXG4gIGNhbGVuZGFyOiAnOTUuMTUlJyxcbiAgJ2NhbGVuZGFyL3N0eWxlJzogJzEwMCUnLFxuICBjYXJkOiAnOTkuNzElJyxcbiAgJ2NhcmQvc3R5bGUnOiAnMTAwJScsXG4gIGNhc2NhZGVyOiAnOTUuODMlJyxcbiAgJ2Nhc2NhZGVyL2NvbXBvbmVudHMnOiAnODQuNDklJyxcbiAgJ2Nhc2NhZGVyL2NvcmUnOiAnNzIuNDYlJyxcbiAgJ2Nhc2NhZGVyL3N0eWxlJzogJzEwMCUnLFxuICBjaGVja2JveDogJzkyLjE2JScsXG4gICdjaGVja2JveC9zdHlsZSc6ICcxMDAlJyxcbiAgY29sbGFwc2U6ICc5NC43MyUnLFxuICAnY29sbGFwc2Uvc3R5bGUnOiAnMTAwJScsXG4gIGNvbG9yUGlja2VyOiAnOTcuMDglJyxcbiAgJ2NvbG9yUGlja2VyL3BhbmVsJzogJzY0LjklJyxcbiAgJ2NvbG9yUGlja2VyL3BhbmVsL2Zvcm1hdCc6ICc5My41OSUnLFxuICAnY29sb3JQaWNrZXIvc3R5bGUnOiAnMTAwJScsXG4gICdjb2xvclBpY2tlci91dGlscyc6ICcxMDAlJyxcbiAgY29tbWVudDogJzk1LjUlJyxcbiAgJ2NvbW1lbnQvc3R5bGUnOiAnMTAwJScsXG4gIGNvbW1vbkNvbXBvbmVudHM6ICcxMDAlJyxcbiAgY29uZmlnUHJvdmlkZXI6ICc5Ni4wOCUnLFxuICBkYXRlUGlja2VyOiAnNDcuNjMlJyxcbiAgJ2RhdGVQaWNrZXIvYmFzZSc6ICc4MC42JScsXG4gICdkYXRlUGlja2VyL2hvb2tzJzogJzQ2LjIlJyxcbiAgJ2RhdGVQaWNrZXIvcGFuZWwnOiAnNjQuMDQlJyxcbiAgJ2RhdGVQaWNrZXIvc3R5bGUnOiAnMTAwJScsXG4gIGRpYWxvZzogJzg0LjQlJyxcbiAgJ2RpYWxvZy9zdHlsZSc6ICcxMDAlJyxcbiAgZGl2aWRlcjogJzk2LjkyJScsXG4gICdkaXZpZGVyL3N0eWxlJzogJzEwMCUnLFxuICBkcmF3ZXI6ICc4NS4xMyUnLFxuICAnZHJhd2VyL3N0eWxlJzogJzEwMCUnLFxuICBkcm9wZG93bjogJzkwLjg0JScsXG4gICdkcm9wZG93bi9ob29rcyc6ICc5Ni4wNSUnLFxuICAnZHJvcGRvd24vc3R5bGUnOiAnMTAwJScsXG4gIGZvcm06ICc5Mi42JScsXG4gICdmb3JtL3N0eWxlJzogJzEwMCUnLFxuICBncmlkOiAnODQuMTMlJyxcbiAgJ2dyaWQvc3R5bGUnOiAnMTAwJScsXG4gIGd1aWRlOiAnNDIuODklJyxcbiAgJ2d1aWRlL3N0eWxlJzogJzEwMCUnLFxuICAnZ3VpZGUvdXRpbHMnOiAnNzkuNjIlJyxcbiAgaG9va3M6ICc1Ny41NiUnLFxuICBpY29uOiAnMTAwJScsXG4gIGltYWdlOiAnOTguODIlJyxcbiAgaW1hZ2VWaWV3ZXI6ICc4Ny40NCUnLFxuICAnaW1hZ2VWaWV3ZXIvYmFzZSc6ICc5NS4zNyUnLFxuICAnaW1hZ2VWaWV3ZXIvc3R5bGUnOiAnMTAwJScsXG4gICdpbWFnZS9zdHlsZSc6ICcxMDAlJyxcbiAgaW5wdXQ6ICc5OS40OCUnLFxuICBpbnB1dEFkb3JubWVudDogJzEwMCUnLFxuICAnaW5wdXRBZG9ybm1lbnQvc3R5bGUnOiAnMTAwJScsXG4gIGlucHV0TnVtYmVyOiAnOTQuMTMlJyxcbiAgJ2lucHV0TnVtYmVyL3N0eWxlJzogJzEwMCUnLFxuICAnaW5wdXQvc3R5bGUnOiAnMTAwJScsXG4gIGxheW91dDogJzk2LjMxJScsXG4gICdsYXlvdXQvc3R5bGUnOiAnMTAwJScsXG4gIGxpbms6ICcxMDAlJyxcbiAgJ2xpbmsvc3R5bGUnOiAnMTAwJScsXG4gIGxpc3Q6ICc5OC40JScsXG4gICdsaXN0L3N0eWxlJzogJzEwMCUnLFxuICBsb2FkaW5nOiAnODQuMTclJyxcbiAgJ2xvYWRpbmcvaWNvbic6ICc5Mi42OCUnLFxuICAnbG9hZGluZy9zdHlsZSc6ICcxMDAlJyxcbiAgbWVudTogJzg1Ljg0JScsXG4gICdtZW51L3N0eWxlJzogJzEwMCUnLFxuICBtZXNzYWdlOiAnODguODQlJyxcbiAgJ21lc3NhZ2Uvc3R5bGUnOiAnMTAwJScsXG4gIG5vdGlmaWNhdGlvbjogJzk2LjgzJScsXG4gICdub3RpZmljYXRpb24vc3R5bGUnOiAnMTAwJScsXG4gIHBhZ2luYXRpb246ICc5OS4xMiUnLFxuICAncGFnaW5hdGlvbi9zdHlsZSc6ICcxMDAlJyxcbiAgcG9wY29uZmlybTogJzk2LjY3JScsXG4gICdwb3Bjb25maXJtL3N0eWxlJzogJzEwMCUnLFxuICBwb3B1cDogJzkwLjI5JScsXG4gICdwb3B1cC9zdHlsZSc6ICcxMDAlJyxcbiAgcHJvZ3Jlc3M6ICc5NS45NiUnLFxuICAncHJvZ3Jlc3Mvc3R5bGUnOiAnMTAwJScsXG4gIHJhZGlvOiAnOTUuOCUnLFxuICAncmFkaW8vc3R5bGUnOiAnMTAwJScsXG4gIHJhbmdlSW5wdXQ6ICc4Mi45MyUnLFxuICAncmFuZ2VJbnB1dC9zdHlsZSc6ICcxMDAlJyxcbiAgcmF0ZTogJzkwLjAzJScsXG4gICdyYXRlL3N0eWxlJzogJzEwMCUnLFxuICBzZWxlY3Q6ICc2Mi4xJScsXG4gIHNlbGVjdElucHV0OiAnOTUuMzMlJyxcbiAgJ3NlbGVjdElucHV0L3N0eWxlJzogJzEwMCUnLFxuICAnc2VsZWN0L2hvb2tzJzogJzgxLjc1JScsXG4gICdzZWxlY3Qvc3R5bGUnOiAnMTAwJScsXG4gIHNrZWxldG9uOiAnOTQuMTQlJyxcbiAgJ3NrZWxldG9uL3N0eWxlJzogJzEwMCUnLFxuICBzbGlkZXI6ICc3Mi40OCUnLFxuICAnc2xpZGVyL3N0eWxlJzogJzEwMCUnLFxuICBzcGFjZTogJzEwMCUnLFxuICAnc3BhY2Uvc3R5bGUnOiAnMTAwJScsXG4gIHN0ZXBzOiAnOTguNDQlJyxcbiAgJ3N0ZXBzL3N0eWxlJzogJzEwMCUnLFxuICBzd2lwZXI6ICc3Ni42OCUnLFxuICAnc3dpcGVyL3N0eWxlJzogJzEwMCUnLFxuICBzd2l0Y2g6ICc2MS4zNSUnLFxuICAnc3dpdGNoL3N0eWxlJzogJzEwMCUnLFxuICB0YWJsZTogJzc3LjM2JScsXG4gICd0YWJsZS9ob29rcyc6ICc1OC4xNiUnLFxuICAndGFibGUvc3R5bGUnOiAnMTAwJScsXG4gIHRhYnM6ICc4NS4wMSUnLFxuICAndGFicy9zdHlsZSc6ICcxMDAlJyxcbiAgdGFnOiAnOTcuNzglJyxcbiAgdGFnSW5wdXQ6ICc5MC41MyUnLFxuICAndGFnSW5wdXQvaG9va3MnOiAnNTIuMTMlJyxcbiAgJ3RhZ0lucHV0L3N0eWxlJzogJzEwMCUnLFxuICAndGFnL3N0eWxlJzogJzEwMCUnLFxuICB0ZXh0YXJlYTogJzc4LjU3JScsXG4gICd0ZXh0YXJlYS9zdHlsZSc6ICcxMDAlJyxcbiAgdGltZVBpY2tlcjogJzc3LjM4JScsXG4gICd0aW1lUGlja2VyL3BhbmVsJzogJzc5LjM5JScsXG4gICd0aW1lUGlja2VyL3N0eWxlJzogJzEwMCUnLFxuICB0aW1lbGluZTogJzUxLjIlJyxcbiAgJ3RpbWVsaW5lL3N0eWxlJzogJzEwMCUnLFxuICB0b29sdGlwOiAnOTIuOTUlJyxcbiAgJ3Rvb2x0aXAvc3R5bGUnOiAnMTAwJScsXG4gIHRyYW5zZmVyOiAnOTYuNSUnLFxuICAndHJhbnNmZXIvY29tcG9uZW50cyc6ICc5Mi4wNiUnLFxuICAndHJhbnNmZXIvc3R5bGUnOiAnMTAwJScsXG4gIHRyZWU6ICc5Ni40NiUnLFxuICB0cmVlU2VsZWN0OiAnOTAuOTMlJyxcbiAgJ3RyZWVTZWxlY3Qvc3R5bGUnOiAnMTAwJScsXG4gICd0cmVlL2hvb2tzJzogJzgwLjg4JScsXG4gICd0cmVlL3N0eWxlJzogJzEwMCUnLFxuICB1cGxvYWQ6ICc5MC4zOCUnLFxuICAndXBsb2FkL2hvb2tzJzogJzQyLjk0JScsXG4gICd1cGxvYWQvc3R5bGUnOiAnMTAwJScsXG4gICd1cGxvYWQvdGhlbWVzJzogJzMyLjQ1JScsXG4gIHV0aWxzOiAnNzAuOCUnLFxuICB3YXRlcm1hcms6ICc0MC4xOSUnLFxufTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2FyZG9yL0Rlc2t0b3AvTXlHaXRIdWIvdGRlc2lnbi12dWUtaW50ZWdyYXRlL3BhY2thZ2VzL3NoYXJlZC9fY29tbW9uL2RvY3MvY29tcGlsZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2FyZG9yL0Rlc2t0b3AvTXlHaXRIdWIvdGRlc2lnbi12dWUtaW50ZWdyYXRlL3BhY2thZ2VzL3NoYXJlZC9fY29tbW9uL2RvY3MvY29tcGlsZS9pbmRleC5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvcGFja2FnZXMvc2hhcmVkL19jb21tb24vZG9jcy9jb21waWxlL2luZGV4LmpzXCI7aW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7IHNwYXduIH0gZnJvbSAnbm9kZTpjaGlsZF9wcm9jZXNzJztcblxuLyoqXG4gKiBcdTZFMzJcdTY3RDMgbGl2ZSBkZW1vIFx1OTAzQlx1OEY5MVx1RkYwQ1x1NjNEMFx1NTNENiBtZCBcdTU5MzRcdTRGRTFcdTYwNkZcdTc1MUZcdTYyMTBcdTY4NDZcdTY3QjZcdTk3MDBcdTg5ODFcdTc2ODRcdTVCNTdcdTdCMjZcdTRFMzJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy51c2FnZVxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuZGVtb1BhdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmNvbXBvbmVudE5hbWVcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlVXNhZ2Uob3B0aW9ucykge1xuICBjb25zdCB7IHVzYWdlLCBkZW1vUGF0aCwgY29tcG9uZW50TmFtZSB9ID0gb3B0aW9ucyB8fCB7fTtcblxuICBjb25zdCB7IHRpdGxlID0gJycsIGRlc2NyaXB0aW9uID0gJycgfSA9IHVzYWdlIHx8IHt9O1xuXG4gIGlmICghZnMuZXhpc3RzU3luYyhkZW1vUGF0aCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKCdcXHgxQlszNm0lc1xceDFCWzBtJywgYCR7Y29tcG9uZW50TmFtZX0gXHU3RUM0XHU0RUY2XHU2NzJBXHU2M0QwXHU0RjlCICR7ZGVtb1BhdGh9IFx1NjU4N1x1NEVGNiFgKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW1wb3J0U3RyOiBgaW1wb3J0IFVzYWdlIGZyb20gJyR7ZGVtb1BhdGh9JztgLFxuICAgIGluc3RhbGxTdHI6ICdVc2FnZSwnLFxuICAgIG1hcmtkb3duU3RyOiBgJHt0aXRsZSA/IGAjIyMgJHt0aXRsZX1gIDogJyd9XFxuJHtkZXNjcmlwdGlvbn1cXG5cXG48VXNhZ2UgLz5gLFxuICB9O1xufVxuXG4vKipcbiAqIFx1ODNCN1x1NTNENlx1NjU4N1x1NEVGNiBnaXQgXHU2NzAwXHU1NDBFXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0XG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZVxuICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEdpdFRpbWVzdGFtcChmaWxlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgY2hpbGQgPSBzcGF3bignZ2l0JywgWydsb2cnLCAnLTEnLCAnLS1wcmV0dHk9XCIlY2lcIicsIGZpbGVdKTtcbiAgICBsZXQgb3V0cHV0ID0gJyc7XG4gICAgY2hpbGQuc3Rkb3V0Lm9uKCdkYXRhJywgKGQpID0+IHtcbiAgICAgIG91dHB1dCArPSBTdHJpbmcoZCk7XG4gICAgfSk7XG4gICAgY2hpbGQub24oJ2Nsb3NlJywgKCkgPT4ge1xuICAgICAgcmVzb2x2ZSgrbmV3IERhdGUob3V0cHV0KSk7XG4gICAgfSk7XG4gICAgY2hpbGQub24oJ2Vycm9yJywgcmVqZWN0KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcGlsZVVzYWdlLFxuICBnZXRHaXRUaW1lc3RhbXBcbn07XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9hcmRvci9EZXNrdG9wL015R2l0SHViL3RkZXNpZ24tdnVlLWludGVncmF0ZS9zaXRlcy92dWUyLjcvcGx1Z2lucy9kb2NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9hcmRvci9EZXNrdG9wL015R2l0SHViL3RkZXNpZ24tdnVlLWludGVncmF0ZS9zaXRlcy92dWUyLjcvcGx1Z2lucy9kb2MvZGVtby50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvc2l0ZXMvdnVlMi43L3BsdWdpbnMvZG9jL2RlbW8udHNcIjtpbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJEZW1vKG1kLCBjb250YWluZXIpIHtcbiAgbWQudXNlKGNvbnRhaW5lciwgJ2RlbW8nLCB7XG4gICAgdmFsaWRhdGUocGFyYW1zKSB7XG4gICAgICByZXR1cm4gcGFyYW1zLnRyaW0oKS5tYXRjaCgvXmRlbW9cXHMrKFtcXFxcLy5cXHctXSspKFxccysoLis/KSk/KFxccystLWRldik/JC8pO1xuICAgIH0sXG4gICAgcmVuZGVyKHRva2VucywgaWR4KSB7XG4gICAgICBpZiAodG9rZW5zW2lkeF0ubmVzdGluZyA9PT0gMSkge1xuICAgICAgICBjb25zdCBtYXRjaCA9IHRva2Vuc1tpZHhdLmluZm8udHJpbSgpLm1hdGNoKC9eZGVtb1xccysoW1xcXFwvLlxcdy1dKykoXFxzKyguKz8pKT8oXFxzKy0tZGV2KT8kLyk7XG4gICAgICAgIGNvbnN0IFssIGRlbW9QYXRoLCBjb21wb25lbnROYW1lID0gJyddID0gbWF0Y2g7XG4gICAgICAgIGNvbnN0IGRlbW9QYXRoT25seUxldHRlcnMgPSBkZW1vUGF0aC5yZXBsYWNlKC9bXmEtekEtWlxcZF0vZywgJycpO1xuICAgICAgICBjb25zdCBkZW1vTmFtZSA9IHBhdGguYmFzZW5hbWUoZGVtb1BhdGgpO1xuICAgICAgICBjb25zdCBkZW1vRGVmTmFtZSA9IGBEZW1vJHtkZW1vUGF0aE9ubHlMZXR0ZXJzfWA7XG4gICAgICAgIGNvbnN0IGRlbW9Db2RlRGVmTmFtZSA9IGBEZW1vJHtkZW1vUGF0aE9ubHlMZXR0ZXJzfUNvZGVgO1xuICAgICAgICBjb25zdCB0cGwgPSBgXG4gICAgICAgICAgPHRkLWRvYy1kZW1vIGNvbXBvbmVudC1uYW1lPVwiJHtjb21wb25lbnROYW1lLnRyaW0oKX1cIiA6Y29kZT0ke2RlbW9Db2RlRGVmTmFtZX0gZGVtby1uYW1lPVwiJHtkZW1vTmFtZX1cIiBsYW5ndWFnZT1cIm1hcmt1cFwiPlxuICAgICAgICAgICAgPGRpdiBzbG90PVwiYWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxTdGFja2JsaXR6IGRlbW8tbmFtZT1cIiR7ZGVtb05hbWV9XCIgY29tcG9uZW50LW5hbWU9XCIke2NvbXBvbmVudE5hbWV9XCIgOmNvZGU9JHtkZW1vQ29kZURlZk5hbWV9IC8+XG4gICAgICAgICAgICAgIDxDb2RlU2FuZGJveCBkZW1vLW5hbWU9XCIke2RlbW9OYW1lfVwiIGNvbXBvbmVudC1uYW1lPVwiJHtjb21wb25lbnROYW1lfVwiIDpjb2RlPSR7ZGVtb0NvZGVEZWZOYW1lfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGRlc2lnbi1kZW1vLWl0ZW1fX2JvZHlcIj5cbiAgICAgICAgICAgICAgPCR7ZGVtb0RlZk5hbWV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RkLWRvYy1kZW1vPlxuICAgICAgICBgO1xuXG4gICAgICAgIHRva2Vucy50dHRwbCA9IHRwbDtcblxuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJ0ZGVzaWduLWRlbW8td3JhcHBlciB0ZGVzaWduLWRlbW8taXRlbS0tJHtjb21wb25lbnROYW1lLnRyaW0oKX0tJHtkZW1vTmFtZX0gdGRlc2lnbi1kZW1vLWl0ZW0tLSR7Y29tcG9uZW50TmFtZS50cmltKCl9XCI+YDtcbiAgICAgIH1cbiAgICAgIGlmICh0b2tlbnMudHR0cGwpIHtcbiAgICAgICAgcmV0dXJuIGAke3Rva2Vucy50dHRwbCB8fCAnJ308L2Rpdj5gO1xuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH0sXG4gIH0pO1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvc2l0ZXMvdnVlMi43L3BsdWdpbnMvdnVlMkpzeFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2FyZG9yL0Rlc2t0b3AvTXlHaXRIdWIvdGRlc2lnbi12dWUtaW50ZWdyYXRlL3NpdGVzL3Z1ZTIuNy9wbHVnaW5zL3Z1ZTJKc3gvaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2FyZG9yL0Rlc2t0b3AvTXlHaXRIdWIvdGRlc2lnbi12dWUtaW50ZWdyYXRlL3NpdGVzL3Z1ZTIuNy9wbHVnaW5zL3Z1ZTJKc3gvaW5kZXgudHNcIjtpbXBvcnQgeyBjcmVhdGVIYXNoIH0gZnJvbSAnbm9kZTpjcnlwdG8nXG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgdHlwZSB7IHR5cGVzIH0gZnJvbSAnQGJhYmVsL2NvcmUnXG5pbXBvcnQgKiBhcyBiYWJlbCBmcm9tICdAYmFiZWwvY29yZSdcbmltcG9ydCBqc3ggZnJvbSAnQHRkL2xpYnMtdnVlLWJhYmVsLXByZXNldC1qc3gnXG4vLyBAdHMtZXhwZWN0LWVycm9yIG1pc3NpbmcgdHlwZVxuaW1wb3J0IGltcG9ydE1ldGEgZnJvbSAnQGJhYmVsL3BsdWdpbi1zeW50YXgtaW1wb3J0LW1ldGEnXG5pbXBvcnQgeyBjcmVhdGVGaWx0ZXIgfSBmcm9tICdAcm9sbHVwL3BsdWdpbnV0aWxzJ1xuaW1wb3J0IHsgbm9ybWFsaXplUGF0aCB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdHlwZSB7IENvbXBvbmVudE9wdGlvbnMgfSBmcm9tICd2dWUnXG5pbXBvcnQgdHlwZSB7IFBsdWdpbiB9IGZyb20gJ3ZpdGUnXG5cbmltcG9ydCB7IEhNUl9SVU5USU1FX0lELCBobXJSdW50aW1lQ29kZSB9IGZyb20gJy4vaG1yUnVudGltZSdcblxuaW1wb3J0IHR5cGUgeyBPcHRpb25zIH0gZnJvbSAnLi90eXBlcydcbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMnXG5cbmNvbnN0IHNzclJlZ2lzdGVySGVscGVySWQgPSAnL19fdnVlMi1qc3gtc3NyLXJlZ2lzdGVyLWhlbHBlcidcbmNvbnN0IHNzclJlZ2lzdGVySGVscGVyQ29kZSA9XG4gIGBleHBvcnQgJHtzc3JSZWdpc3RlckhlbHBlci50b1N0cmluZygpfWBcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHNlcmlhbGl6ZWQgd2l0aCB0b1N0cmluZygpIGFuZCBldmFsdWF0ZWQgYXMgYSB2aXJ0dWFsXG4gKiBtb2R1bGUgZHVyaW5nIFNTUlxuICovXG4vLyBAdHMtaWdub3JlXG5mdW5jdGlvbiBzc3JSZWdpc3RlckhlbHBlcihjb21wOiBDb21wb25lbnRPcHRpb25zLCBmaWxlbmFtZTogc3RyaW5nKSB7XG4gIGNvbnN0IGNyZWF0ZWQgPSBjb21wLmNyZWF0ZWRcbiAgLy8gQHRzLWlnbm9yZVxuICBjb21wLmNyZWF0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3Qgc3NyQ29udGV4dCA9IHRoaXMuJHNzckNvbnRleHRcbiAgICA7KHNzckNvbnRleHQubW9kdWxlcyB8fCAoc3NyQ29udGV4dC5tb2R1bGVzID0gbmV3IFNldCgpKSkuYWRkKGZpbGVuYW1lKVxuICAgIGlmIChjcmVhdGVkKSB7XG4gICAgICBjcmVhdGVkLmNhbGwodGhpcylcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdnVlMkpzeFBsdWdpbihvcHRpb25zOiBPcHRpb25zID0ge30pOiBQbHVnaW4ge1xuICBsZXQgcm9vdCA9ICcnXG4gIGxldCBuZWVkSG1yID0gZmFsc2VcbiAgbGV0IG5lZWRTb3VyY2VNYXAgPSB0cnVlXG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAndml0ZTp2dWUyLWpzeCcsXG5cbiAgICBjb25maWcoY29uZmlnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBvbmx5IGFwcGx5IGVzYnVpbGQgdG8gdHMgZmlsZXNcbiAgICAgICAgLy8gc2luY2Ugd2UgYXJlIGhhbmRsaW5nIGpzeCBhbmQgdHN4IG5vd1xuICAgICAgICBlc2J1aWxkOiB7XG4gICAgICAgICAgaW5jbHVkZTogL1xcLnRzJC9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBjb25maWdSZXNvbHZlZChjb25maWcpIHtcbiAgICAgIG5lZWRIbXIgPSBjb25maWcuY29tbWFuZCA9PT0gJ3NlcnZlJyAmJiAhY29uZmlnLmlzUHJvZHVjdGlvblxuICAgICAgbmVlZFNvdXJjZU1hcCA9IGNvbmZpZy5jb21tYW5kID09PSAnc2VydmUnIHx8ICEhY29uZmlnLmJ1aWxkLnNvdXJjZW1hcFxuICAgICAgcm9vdCA9IGNvbmZpZy5yb290XG4gICAgfSxcblxuICAgIHJlc29sdmVJZChpZCkge1xuICAgICAgaWYgKGlkID09PSBzc3JSZWdpc3RlckhlbHBlcklkKSB7XG4gICAgICAgIHJldHVybiBpZFxuICAgICAgfVxuXG4gICAgICBpZiAoaWQgPT09IEhNUl9SVU5USU1FX0lEKSB7XG4gICAgICAgIHJldHVybiBpZFxuICAgICAgfVxuICAgIH0sXG5cbiAgICBsb2FkKGlkKSB7XG4gICAgICBpZiAoaWQgPT09IHNzclJlZ2lzdGVySGVscGVySWQpIHtcbiAgICAgICAgcmV0dXJuIHNzclJlZ2lzdGVySGVscGVyQ29kZVxuICAgICAgfVxuXG4gICAgICBpZiAoaWQgPT09IEhNUl9SVU5USU1FX0lEKSB7XG4gICAgICAgIHJldHVybiBobXJSdW50aW1lQ29kZVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhc3luYyB0cmFuc2Zvcm0oY29kZSwgaWQsIG9wdCkge1xuICAgICAgY29uc3Qgc3NyID0gb3B0Py5zc3IgPT09IHRydWVcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaW5jbHVkZSxcbiAgICAgICAgZXhjbHVkZSxcbiAgICAgICAgYmFiZWxQbHVnaW5zID0gW10sXG4gICAgICAgIC4uLmJhYmVsUHJlc2V0T3B0aW9uc1xuICAgICAgfSA9IG9wdGlvbnNcbiAgICAgIGNvbnN0IGZpbHRlciA9IGNyZWF0ZUZpbHRlcihpbmNsdWRlIHx8IC9cXC5banRdc3gkLywgZXhjbHVkZSlcbiAgICAgIGNvbnN0IFtmaWxlcGF0aF0gPSBpZC5zcGxpdCgnPycpXG5cbiAgICAgIC8vIHVzZSBpZCBmb3Igc2NyaXB0IGJsb2NrcyBpbiBWdWUgU0ZDcyAoZS5nLiBgQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZy5qc3hgKVxuICAgICAgLy8gdXNlIGZpbGVwYXRoIGZvciBwbGFpbiBqc3ggZmlsZXMgKGUuZy4gQXBwLmpzeClcbiAgICAgIGlmIChmaWx0ZXIoaWQpIHx8IGZpbHRlcihmaWxlcGF0aCkpIHtcbiAgICAgICAgY29uc3QgcGx1Z2lucyA9IFtpbXBvcnRNZXRhXVxuICAgICAgICBjb25zdCBwcmVzZXRzID0gW1xuICAgICAgICAgIFtqc3gsIHtcbiAgICAgICAgICAgIGNvbXBvc2l0aW9uQVBJOiAnbmF0aXZlJyxcbiAgICAgICAgICAgIC4uLmJhYmVsUHJlc2V0T3B0aW9uc1xuICAgICAgICAgIH1dXG4gICAgICAgIF1cbiAgICAgICAgaWYgKGlkLmVuZHNXaXRoKCcudHN4JykgfHwgZmlsZXBhdGguZW5kc1dpdGgoJy50c3gnKSkge1xuICAgICAgICAgIHBsdWdpbnMucHVzaChbXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIG1pc3NpbmcgdHlwZVxuICAgICAgICAgICAgYXdhaXQgaW1wb3J0KCdAYmFiZWwvcGx1Z2luLXRyYW5zZm9ybS10eXBlc2NyaXB0JykudGhlbihcbiAgICAgICAgICAgICAgKHIpID0+IHIuZGVmYXVsdFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHsgaXNUU1g6IHRydWUsIGFsbG93RXh0ZW5zaW9uczogdHJ1ZSwgYWxsb3dEZWNsYXJlRmllbGRzOiB0cnVlIH1cbiAgICAgICAgICBdKVxuICAgICAgICB9XG4gICAgICAgIC8vIGN1c3RvbSBiYWJlbCBwbHVnaW5zIHNob3VsZCBwdXQgKmFmdGVyKiB0cyBwbHVnaW5cbiAgICAgICAgcGx1Z2lucy5wdXNoKC4uLmJhYmVsUGx1Z2lucylcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYmFiZWwudHJhbnNmb3JtU3luYyhjb2RlLCB7XG4gICAgICAgICAgYmFiZWxyYzogZmFsc2UsXG4gICAgICAgICAgYXN0OiB0cnVlLFxuICAgICAgICAgIHBsdWdpbnMsXG4gICAgICAgICAgcHJlc2V0cyxcbiAgICAgICAgICBzb3VyY2VNYXBzOiBuZWVkU291cmNlTWFwLFxuICAgICAgICAgIHNvdXJjZUZpbGVOYW1lOiBpZCxcbiAgICAgICAgICBjb25maWdGaWxlOiBmYWxzZVxuICAgICAgICB9KSFcblxuICAgICAgICBpZiAoIXNzciAmJiAhbmVlZEhtcikge1xuICAgICAgICAgIGlmICghcmVzdWx0LmNvZGUpIHJldHVyblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlOiByZXN1bHQuY29kZSxcbiAgICAgICAgICAgIG1hcDogcmVzdWx0Lm1hcFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGludGVyZmFjZSBIb3RDb21wb25lbnQge1xuICAgICAgICAgIGxvY2FsOiBzdHJpbmdcbiAgICAgICAgICBleHBvcnRlZDogc3RyaW5nXG4gICAgICAgICAgaWQ6IHN0cmluZ1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgZm9yIGhtciBpbmplY3Rpb25cbiAgICAgICAgY29uc3QgZGVjbGFyZWRDb21wb25lbnRzOiB7IG5hbWU6IHN0cmluZyB9W10gPSBbXVxuICAgICAgICBjb25zdCBob3RDb21wb25lbnRzOiBIb3RDb21wb25lbnRbXSA9IFtdXG4gICAgICAgIGxldCBoYXNEZWZhdWx0ID0gZmFsc2VcblxuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgcmVzdWx0LmFzdCEucHJvZ3JhbS5ib2R5KSB7XG4gICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ1ZhcmlhYmxlRGVjbGFyYXRpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lcyA9IHBhcnNlQ29tcG9uZW50RGVjbHMobm9kZSwgY29kZSlcbiAgICAgICAgICAgIGlmIChuYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgZGVjbGFyZWRDb21wb25lbnRzLnB1c2goLi4ubmFtZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ0V4cG9ydE5hbWVkRGVjbGFyYXRpb24nKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIG5vZGUuZGVjbGFyYXRpb24gJiZcbiAgICAgICAgICAgICAgbm9kZS5kZWNsYXJhdGlvbi50eXBlID09PSAnVmFyaWFibGVEZWNsYXJhdGlvbidcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBob3RDb21wb25lbnRzLnB1c2goXG4gICAgICAgICAgICAgICAgLi4ucGFyc2VDb21wb25lbnREZWNscyhub2RlLmRlY2xhcmF0aW9uLCBjb2RlKS5tYXAoXG4gICAgICAgICAgICAgICAgICAoeyBuYW1lIH0pID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRlZDogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGdldEhhc2goaWQgKyBuYW1lKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5zcGVjaWZpZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNwZWMgb2Ygbm9kZS5zcGVjaWZpZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgc3BlYy50eXBlID09PSAnRXhwb3J0U3BlY2lmaWVyJyAmJlxuICAgICAgICAgICAgICAgICAgc3BlYy5leHBvcnRlZC50eXBlID09PSAnSWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZWQgPSBkZWNsYXJlZENvbXBvbmVudHMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgKHsgbmFtZSB9KSA9PiBuYW1lID09PSBzcGVjLmxvY2FsLm5hbWVcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvdENvbXBvbmVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgbG9jYWw6IHNwZWMubG9jYWwubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBleHBvcnRlZDogc3BlYy5leHBvcnRlZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBnZXRIYXNoKGlkICsgc3BlYy5leHBvcnRlZC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24nKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5kZWNsYXJhdGlvbi50eXBlID09PSAnSWRlbnRpZmllcicpIHtcbiAgICAgICAgICAgICAgY29uc3QgX25hbWUgPSBub2RlLmRlY2xhcmF0aW9uLm5hbWVcbiAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlZCA9IGRlY2xhcmVkQ29tcG9uZW50cy5maW5kKFxuICAgICAgICAgICAgICAgICh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gX25hbWVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICAgICAgICAgIGhvdENvbXBvbmVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICBsb2NhbDogbm9kZS5kZWNsYXJhdGlvbi5uYW1lLFxuICAgICAgICAgICAgICAgICAgZXhwb3J0ZWQ6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgIGlkOiBnZXRIYXNoKGlkICsgJ2RlZmF1bHQnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNEZWZpbmVDb21wb25lbnRDYWxsKG5vZGUuZGVjbGFyYXRpb24pKSB7XG4gICAgICAgICAgICAgIGhhc0RlZmF1bHQgPSB0cnVlXG4gICAgICAgICAgICAgIGhvdENvbXBvbmVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgbG9jYWw6ICdfX2RlZmF1bHRfXycsXG4gICAgICAgICAgICAgICAgZXhwb3J0ZWQ6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgICAgICBpZDogZ2V0SGFzaChpZCArICdkZWZhdWx0JylcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaG90Q29tcG9uZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoaGFzRGVmYXVsdCAmJiAobmVlZEhtciB8fCBzc3IpKSB7XG4gICAgICAgICAgICByZXN1bHQuY29kZSA9XG4gICAgICAgICAgICAgIHJlc3VsdC5jb2RlIS5yZXBsYWNlKFxuICAgICAgICAgICAgICAgIC9leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQvZyxcbiAgICAgICAgICAgICAgICBgY29uc3QgX19kZWZhdWx0X18gPSBkZWZpbmVDb21wb25lbnRgXG4gICAgICAgICAgICAgICkgKyBgXFxuZXhwb3J0IGRlZmF1bHQgX19kZWZhdWx0X19gXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5lZWRIbXIgJiYgIXNzciAmJiAhL1xcP3Z1ZSZ0eXBlPXNjcmlwdC8udGVzdChpZCkpIHtcbiAgICAgICAgICAgIGxldCBjb2RlID0gcmVzdWx0LmNvZGVcbiAgICAgICAgICAgIGxldCBjYWxsYmFja0NvZGUgPSBgYFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb2RlICs9IGBcXG5pbXBvcnQgX19WVUVfSE1SX1JVTlRJTUVfXyBmcm9tIFwiJHtITVJfUlVOVElNRV9JRH1cImBcblxuICAgICAgICAgICAgZm9yIChjb25zdCB7IGxvY2FsLCBleHBvcnRlZCwgaWQgfSBvZiBob3RDb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgIGNvZGUgKz1cbiAgICAgICAgICAgICAgICBgXFxuJHtsb2NhbH0uX19obXJJZCA9IFwiJHtpZH1cImAgK1xuICAgICAgICAgICAgICAgIGBcXG5fX1ZVRV9ITVJfUlVOVElNRV9fLmNyZWF0ZVJlY29yZChcIiR7aWR9XCIsICR7bG9jYWx9KWBcbiAgICAgICAgICAgICAgY2FsbGJhY2tDb2RlICs9IGBcXG5fX1ZVRV9ITVJfUlVOVElNRV9fLnJlbG9hZChcIiR7aWR9XCIsIF9fJHtleHBvcnRlZH0pYFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb2RlICs9IGBcXG5pbXBvcnQubWV0YS5ob3QuYWNjZXB0KCh7JHtob3RDb21wb25lbnRzXG4gICAgICAgICAgICAgIC5tYXAoKGMpID0+IGAke2MuZXhwb3J0ZWR9OiBfXyR7Yy5leHBvcnRlZH1gKVxuICAgICAgICAgICAgICAuam9pbignLCcpfX0pID0+IHske2NhbGxiYWNrQ29kZX1cXG59KWBcblxuICAgICAgICAgICAgcmVzdWx0LmNvZGUgPSBjb2RlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNzcikge1xuICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZElkID0gbm9ybWFsaXplUGF0aChwYXRoLnJlbGF0aXZlKHJvb3QsIGlkKSlcbiAgICAgICAgICAgIGxldCBzc3JJbmplY3RDb2RlID1cbiAgICAgICAgICAgICAgYFxcbmltcG9ydCB7IHNzclJlZ2lzdGVySGVscGVyIH0gZnJvbSBcIiR7c3NyUmVnaXN0ZXJIZWxwZXJJZH1cImAgK1xuICAgICAgICAgICAgICBgXFxuY29uc3QgX19tb2R1bGVJZCA9ICR7SlNPTi5zdHJpbmdpZnkobm9ybWFsaXplZElkKX1gXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHsgbG9jYWwgfSBvZiBob3RDb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgIHNzckluamVjdENvZGUgKz0gYFxcbnNzclJlZ2lzdGVySGVscGVyKCR7bG9jYWx9LCBfX21vZHVsZUlkKWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5jb2RlICs9IHNzckluamVjdENvZGVcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3VsdC5jb2RlKSByZXR1cm5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb2RlOiByZXN1bHQuY29kZSxcbiAgICAgICAgICBtYXA6IHJlc3VsdC5tYXBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZUNvbXBvbmVudERlY2xzKG5vZGU6IHR5cGVzLlZhcmlhYmxlRGVjbGFyYXRpb24sIHNvdXJjZTogc3RyaW5nKSB7XG4gIGNvbnN0IG5hbWVzID0gW11cbiAgZm9yIChjb25zdCBkZWNsIG9mIG5vZGUuZGVjbGFyYXRpb25zKSB7XG4gICAgaWYgKGRlY2wuaWQudHlwZSA9PT0gJ0lkZW50aWZpZXInICYmIGlzRGVmaW5lQ29tcG9uZW50Q2FsbChkZWNsLmluaXQpKSB7XG4gICAgICBuYW1lcy5wdXNoKHtcbiAgICAgICAgbmFtZTogZGVjbC5pZC5uYW1lXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmFtZXNcbn1cblxuZnVuY3Rpb24gaXNEZWZpbmVDb21wb25lbnRDYWxsKG5vZGU/OiB0eXBlcy5Ob2RlIHwgbnVsbCkge1xuICByZXR1cm4gKFxuICAgIG5vZGUgJiZcbiAgICBub2RlLnR5cGUgPT09ICdDYWxsRXhwcmVzc2lvbicgJiZcbiAgICBub2RlLmNhbGxlZS50eXBlID09PSAnSWRlbnRpZmllcicgJiZcbiAgICBub2RlLmNhbGxlZS5uYW1lID09PSAnZGVmaW5lQ29tcG9uZW50J1xuICApXG59XG5cbmZ1bmN0aW9uIGdldEhhc2godGV4dDogc3RyaW5nKSB7XG4gIHJldHVybiBjcmVhdGVIYXNoKCdzaGEyNTYnKS51cGRhdGUodGV4dCkuZGlnZXN0KCdoZXgnKS5zdWJzdHJpbmcoMCwgOClcbn1cblxuZXhwb3J0IGRlZmF1bHQgdnVlMkpzeFBsdWdpblxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvc2l0ZXMvdnVlMi43L3BsdWdpbnMvdnVlMkpzeFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2FyZG9yL0Rlc2t0b3AvTXlHaXRIdWIvdGRlc2lnbi12dWUtaW50ZWdyYXRlL3NpdGVzL3Z1ZTIuNy9wbHVnaW5zL3Z1ZTJKc3gvaG1yUnVudGltZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYXJkb3IvRGVza3RvcC9NeUdpdEh1Yi90ZGVzaWduLXZ1ZS1pbnRlZ3JhdGUvc2l0ZXMvdnVlMi43L3BsdWdpbnMvdnVlMkpzeC9obXJSdW50aW1lLnRzXCI7Ly8gVE9ETzogdGhpcyBtb2R1bGUgc2hvdWxkIGJlIHNoYXJlZCBiZXR3ZWVuIHBsdWdpbi12dWUyICYgcGx1Z2luLXZ1ZTItanN4XG5leHBvcnQgY29uc3QgSE1SX1JVTlRJTUVfSUQgPSAncGx1Z2luLXZ1ZTItanN4Omhtci1ydW50aW1lJ1xuXG5leHBvcnQgY29uc3QgaG1yUnVudGltZUNvZGUgPSBgXG52YXIgX19WVUVfSE1SX1JVTlRJTUVfXyA9IE9iamVjdC5jcmVhdGUobnVsbClcbnZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbl9fVlVFX0hNUl9SVU5USU1FX18uY3JlYXRlUmVjb3JkID0gZnVuY3Rpb24gKGlkLCBvcHRpb25zKSB7XG4gIGlmKG1hcFtpZF0pIHsgcmV0dXJuIH1cblxuICB2YXIgQ3RvciA9IG51bGxcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgQ3RvciA9IG9wdGlvbnNcbiAgICBvcHRpb25zID0gQ3Rvci5vcHRpb25zXG4gIH1cbiAgbWFrZU9wdGlvbnNIb3QoaWQsIG9wdGlvbnMpXG4gIG1hcFtpZF0gPSB7XG4gICAgQ3RvcjogQ3RvcixcbiAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgIGluc3RhbmNlczogW11cbiAgfVxufVxuXG5fX1ZVRV9ITVJfUlVOVElNRV9fLmlzUmVjb3JkZWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIHR5cGVvZiBtYXBbaWRdICE9PSAndW5kZWZpbmVkJ1xufVxuXG5mdW5jdGlvbiBtYWtlT3B0aW9uc0hvdChpZCwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgdmFyIHJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiAoaCwgY3R4KSB7XG4gICAgICB2YXIgaW5zdGFuY2VzID0gbWFwW2lkXS5pbnN0YW5jZXNcbiAgICAgIGlmIChjdHggJiYgaW5zdGFuY2VzLmluZGV4T2YoY3R4LnBhcmVudCkgPCAwKSB7XG4gICAgICAgIGluc3RhbmNlcy5wdXNoKGN0eC5wYXJlbnQpXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVuZGVyKGgsIGN0eClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaW5qZWN0SG9vayhvcHRpb25zLCAnYmVmb3JlQ3JlYXRlJywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVjb3JkID0gbWFwW2lkXVxuICAgICAgaWYgKCFyZWNvcmQuQ3Rvcikge1xuICAgICAgICByZWNvcmQuQ3RvciA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgIH1cbiAgICAgIHJlY29yZC5pbnN0YW5jZXMucHVzaCh0aGlzKVxuICAgIH0pXG4gICAgaW5qZWN0SG9vayhvcHRpb25zLCAnYmVmb3JlRGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGluc3RhbmNlcyA9IG1hcFtpZF0uaW5zdGFuY2VzXG4gICAgICBpbnN0YW5jZXMuc3BsaWNlKGluc3RhbmNlcy5pbmRleE9mKHRoaXMpLCAxKVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gaW5qZWN0SG9vayhvcHRpb25zLCBuYW1lLCBob29rKSB7XG4gIHZhciBleGlzdGluZyA9IG9wdGlvbnNbbmFtZV1cbiAgb3B0aW9uc1tuYW1lXSA9IGV4aXN0aW5nXG4gICAgPyBBcnJheS5pc0FycmF5KGV4aXN0aW5nKSA/IGV4aXN0aW5nLmNvbmNhdChob29rKSA6IFtleGlzdGluZywgaG9va11cbiAgICA6IFtob29rXVxufVxuXG5mdW5jdGlvbiB0cnlXcmFwKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaWQsIGFyZykge1xuICAgIHRyeSB7XG4gICAgICBmbihpZCwgYXJnKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1NvbWV0aGluZyB3ZW50IHdyb25nIGR1cmluZyBWdWUgY29tcG9uZW50IGhvdC1yZWxvYWQuIEZ1bGwgcmVsb2FkIHJlcXVpcmVkLidcbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyAob2xkT3B0aW9ucywgbmV3T3B0aW9ucykge1xuICBmb3IgKHZhciBrZXkgaW4gb2xkT3B0aW9ucykge1xuICAgIGlmICghKGtleSBpbiBuZXdPcHRpb25zKSkge1xuICAgICAgZGVsZXRlIG9sZE9wdGlvbnNba2V5XVxuICAgIH1cbiAgfVxuICBmb3IgKHZhciBrZXkkMSBpbiBuZXdPcHRpb25zKSB7XG4gICAgb2xkT3B0aW9uc1trZXkkMV0gPSBuZXdPcHRpb25zW2tleSQxXVxuICB9XG59XG5cbl9fVlVFX0hNUl9SVU5USU1FX18ucmVyZW5kZXIgPSB0cnlXcmFwKGZ1bmN0aW9uIChpZCwgb3B0aW9ucykge1xuICB2YXIgcmVjb3JkID0gbWFwW2lkXVxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICByZWNvcmQuaW5zdGFuY2VzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgIGluc3RhbmNlLiRmb3JjZVVwZGF0ZSgpXG4gICAgfSlcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucy5vcHRpb25zXG4gIH1cbiAgaWYocmVjb3JkLmZ1bmN0aW9uYWwpe1xuICAgIHJlY29yZC5yZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgIHJlY29yZC5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZuc1xuICAgIF9fVlVFX0hNUl9SVU5USU1FX18ucmVsb2FkKGlkLCByZWNvcmQpXG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHJlY29yZC5DdG9yKSB7XG4gICAgcmVjb3JkLkN0b3Iub3B0aW9ucy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgIHJlY29yZC5DdG9yLm9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnNcbiAgICByZWNvcmQuaW5zdGFuY2VzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgIGluc3RhbmNlLiRvcHRpb25zLnJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBpbnN0YW5jZS4kb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZuc1xuICAgICAgLy8gcmVzZXQgc3RhdGljIHRyZWVzXG4gICAgICAvLyBwcmUgMi41LCBhbGwgc3RhdGljIHRyZWVzIGFyZSBjYWNoZWQgdG9nZXRoZXIgb24gdGhlIGluc3RhbmNlXG4gICAgICBpZiAoaW5zdGFuY2UuX3N0YXRpY1RyZWVzKSB7XG4gICAgICAgIGluc3RhbmNlLl9zdGF0aWNUcmVlcyA9IFtdXG4gICAgICB9XG4gICAgICAvLyAyLjUuMFxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVjb3JkLkN0b3Iub3B0aW9ucy5jYWNoZWQpKSB7XG4gICAgICAgIHJlY29yZC5DdG9yLm9wdGlvbnMuY2FjaGVkID0gW11cbiAgICAgIH1cbiAgICAgIC8vIDIuNS4zXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShpbnN0YW5jZS4kb3B0aW9ucy5jYWNoZWQpKSB7XG4gICAgICAgIGluc3RhbmNlLiRvcHRpb25zLmNhY2hlZCA9IFtdXG4gICAgICB9XG5cbiAgICAgIC8vIHBvc3QgMi41LjQ6IHYtb25jZSB0cmVlcyBhcmUgY2FjaGVkIG9uIGluc3RhbmNlLl9zdGF0aWNUcmVlcy5cbiAgICAgIC8vIFB1cmUgc3RhdGljIHRyZWVzIGFyZSBjYWNoZWQgb24gdGhlIHN0YXRpY1JlbmRlckZucyBhcnJheVxuICAgICAgLy8gKGJvdGggYWxyZWFkeSByZXNldCBhYm92ZSlcblxuICAgICAgLy8gMi42OiB0ZW1wb3JhcmlseSBtYXJrIHJlbmRlcmVkIHNjb3BlZCBzbG90cyBhcyB1bnN0YWJsZSBzbyB0aGF0XG4gICAgICAvLyBjaGlsZCBjb21wb25lbnRzIGNhbiBiZSBmb3JjZWQgdG8gdXBkYXRlXG4gICAgICB2YXIgcmVzdG9yZSA9IHBhdGNoU2NvcGVkU2xvdHMoaW5zdGFuY2UpXG4gICAgICBpbnN0YW5jZS4kZm9yY2VVcGRhdGUoKVxuICAgICAgaW5zdGFuY2UuJG5leHRUaWNrKHJlc3RvcmUpXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICAvLyBmdW5jdGlvbmFsIG9yIG5vIGluc3RhbmNlIGNyZWF0ZWQgeWV0XG4gICAgcmVjb3JkLm9wdGlvbnMucmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICByZWNvcmQub3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZuc1xuXG4gICAgLy8gaGFuZGxlIGZ1bmN0aW9uYWwgY29tcG9uZW50IHJlLXJlbmRlclxuICAgIGlmIChyZWNvcmQub3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyByZXJlbmRlciB3aXRoIGZ1bGwgb3B0aW9uc1xuICAgICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgdXBkYXRlT3B0aW9ucyhyZWNvcmQub3B0aW9ucywgb3B0aW9ucylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRlbXBsYXRlLW9ubHkgcmVyZW5kZXIuXG4gICAgICAgIC8vIG5lZWQgdG8gaW5qZWN0IHRoZSBzdHlsZSBpbmplY3Rpb24gY29kZSBmb3IgQ1NTIG1vZHVsZXNcbiAgICAgICAgLy8gdG8gd29yayBwcm9wZXJseS5cbiAgICAgICAgdmFyIGluamVjdFN0eWxlcyA9IHJlY29yZC5vcHRpb25zLl9pbmplY3RTdHlsZXNcbiAgICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICAgIHZhciByZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgICAgIHJlY29yZC5vcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIChoLCBjdHgpIHtcbiAgICAgICAgICAgIGluamVjdFN0eWxlcy5jYWxsKGN0eClcbiAgICAgICAgICAgIHJldHVybiByZW5kZXIoaCwgY3R4KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVjb3JkLm9wdGlvbnMuX0N0b3IgPSBudWxsXG4gICAgICAvLyAyLjUuM1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVjb3JkLm9wdGlvbnMuY2FjaGVkKSkge1xuICAgICAgICByZWNvcmQub3B0aW9ucy5jYWNoZWQgPSBbXVxuICAgICAgfVxuICAgICAgcmVjb3JkLmluc3RhbmNlcy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIGluc3RhbmNlLiRmb3JjZVVwZGF0ZSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufSlcblxuX19WVUVfSE1SX1JVTlRJTUVfXy5yZWxvYWQgPSB0cnlXcmFwKGZ1bmN0aW9uIChpZCwgb3B0aW9ucykge1xuICB2YXIgcmVjb3JkID0gbWFwW2lkXVxuICBpZiAob3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMub3B0aW9uc1xuICAgIH1cbiAgICBtYWtlT3B0aW9uc0hvdChpZCwgb3B0aW9ucylcbiAgICBpZiAocmVjb3JkLkN0b3IpIHtcbiAgICAgIHZhciBuZXdDdG9yID0gcmVjb3JkLkN0b3Iuc3VwZXIuZXh0ZW5kKG9wdGlvbnMpXG4gICAgICAvLyBwcmV2ZW50IHJlY29yZC5vcHRpb25zLl9DdG9yIGZyb20gYmVpbmcgb3ZlcndyaXR0ZW4gYWNjaWRlbnRhbGx5XG4gICAgICBuZXdDdG9yLm9wdGlvbnMuX0N0b3IgPSByZWNvcmQub3B0aW9ucy5fQ3RvclxuICAgICAgcmVjb3JkLkN0b3Iub3B0aW9ucyA9IG5ld0N0b3Iub3B0aW9uc1xuICAgICAgcmVjb3JkLkN0b3IuY2lkID0gbmV3Q3Rvci5jaWRcbiAgICAgIHJlY29yZC5DdG9yLnByb3RvdHlwZSA9IG5ld0N0b3IucHJvdG90eXBlXG4gICAgICBpZiAobmV3Q3Rvci5yZWxlYXNlKSB7XG4gICAgICAgIC8vIHRlbXBvcmFyeSBnbG9iYWwgbWl4aW4gc3RyYXRlZ3kgdXNlZCBpbiA8IDIuMC4wLWFscGhhLjZcbiAgICAgICAgbmV3Q3Rvci5yZWxlYXNlKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlT3B0aW9ucyhyZWNvcmQub3B0aW9ucywgb3B0aW9ucylcbiAgICB9XG4gIH1cbiAgcmVjb3JkLmluc3RhbmNlcy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgaWYgKGluc3RhbmNlLiR2bm9kZSAmJiBpbnN0YW5jZS4kdm5vZGUuY29udGV4dCkge1xuICAgICAgaW5zdGFuY2UuJHZub2RlLmNvbnRleHQuJGZvcmNlVXBkYXRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnUm9vdCBvciBtYW51YWxseSBtb3VudGVkIGluc3RhbmNlIG1vZGlmaWVkLiBGdWxsIHJlbG9hZCByZXF1aXJlZC4nXG4gICAgICApXG4gICAgfVxuICB9KVxufSlcblxuLy8gMi42IG9wdGltaXplcyB0ZW1wbGF0ZS1jb21waWxlZCBzY29wZWQgc2xvdHMgYW5kIHNraXBzIHVwZGF0ZXMgaWYgY2hpbGRcbi8vIG9ubHkgdXNlcyBzY29wZWQgc2xvdHMuIFdlIG5lZWQgdG8gcGF0Y2ggdGhlIHNjb3BlZCBzbG90cyByZXNvbHZpbmcgaGVscGVyXG4vLyB0byB0ZW1wb3JhcmlseSBtYXJrIGFsbCBzY29wZWQgc2xvdHMgYXMgdW5zdGFibGUgaW4gb3JkZXIgdG8gZm9yY2UgY2hpbGRcbi8vIHVwZGF0ZXMuXG5mdW5jdGlvbiBwYXRjaFNjb3BlZFNsb3RzIChpbnN0YW5jZSkge1xuICBpZiAoIWluc3RhbmNlLl91KSB7IHJldHVybiB9XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWUvYmxvYi9kZXYvc3JjL2NvcmUvaW5zdGFuY2UvcmVuZGVyLWhlbHBlcnMvcmVzb2x2ZS1zY29wZWQtc2xvdHMuanNcbiAgdmFyIG9yaWdpbmFsID0gaW5zdGFuY2UuX3VcbiAgaW5zdGFuY2UuX3UgPSBmdW5jdGlvbiAoc2xvdHMpIHtcbiAgICB0cnkge1xuICAgICAgLy8gMi42LjQgfiAyLjYuNlxuICAgICAgcmV0dXJuIG9yaWdpbmFsKHNsb3RzLCB0cnVlKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIDIuNSAvID49IDIuNi43XG4gICAgICByZXR1cm4gb3JpZ2luYWwoc2xvdHMsIG51bGwsIHRydWUpXG4gICAgfVxuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaW5zdGFuY2UuX3UgPSBvcmlnaW5hbFxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBfX1ZVRV9ITVJfUlVOVElNRV9fXG5gXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtYLFlBQVlBLFdBQVU7QUFDeFksU0FBUyxlQUFlO0FBRXhCLFNBQVMsdUJBQXVCO0FBQ2hDLE9BQU8saUJBQWlCO0FBQ3hCLFNBQVMsY0FBYyw4QkFBOEI7OztBQ0hyRCxJQUFPLGNB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LEVBQ1Q7QUFDRjtBQUVBLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLFNBQU87QUFBQSxJQUNMLE1BQU0sY0FBYyxJQUFJO0FBQUEsSUFDeEIsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsR0FBRyxhQUFhLEdBQUc7QUFBQSxRQUNuQixLQUFVLGNBQVFDLGlDQUFTO0FBQUEsTUFDN0I7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixJQUFJO0FBQUEsUUFDRixPQUFPLENBQUMsSUFBSTtBQUFBLE1BQ2Q7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxnQkFBZ0I7QUFBQSxNQUNoQixZQUFZLENBQUMsQ0FBQztBQUFBLE1BQ2QsZ0JBQVE7QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLGdCQUFnQixFQUFFLGNBQWMsa0JBQWtCO0FBQUEsTUFDcEQsQ0FBQztBQUFBLE1BQ0QsZ0JBQWdCO0FBQUEsUUFDZCxTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsTUFDWCxDQUFDO0FBQUEsTUFDRCxRQUFRLFdBQUc7QUFBQSxNQUNYLFlBQVc7QUFBQSxJQUNiO0FBQUEsSUFDQSxjQUFjO0FBQUEsTUFDWixTQUFTLENBQUMsV0FBVyxvQ0FBb0MseUNBQXlDLG1CQUFtQjtBQUFBLElBQ3ZIO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbInBhdGgiLCAicGF0aCIsICJmcyIsICJmcyIsICJyZXNvbHZlIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgInBhdGgiLCAicGF0aCIsICJjb2RlIiwgImlkIiwgInBhdGgiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiXQp9Cg==
