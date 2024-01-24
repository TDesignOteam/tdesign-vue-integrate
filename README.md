[toc]

# TD 架构升级思路

## 0. 背景
先来回顾一下为啥要升级呢？找出我们的目的是什么。

原因：想要整合 vue23，用一个仓库（一套代码）来实现 vue23，所以现有的 vue3 仓库肯定是无法支持了。

那么**趁这个机会来重新进行项目设计**。
> 所以这里说是升级，其实就是重新设计

既然是重新设计，那么是不是可以用一些有趣一点的东西。

那就从整体到细节写写自己的思考吧！

## 1. 开始

### 1.1 仓库模式
无非两种选择，是否使用 workspace
> 完，我有点拿不准这个叫不叫仓库模式了，先这样叫吧

1. 不使用 workspace

   也就是说整个仓库值存在一个 package.json。

   因为最终是要打两个包，然后发布，所以可以想到的是，打包 vue2 vue3 是两个命令呈现在 package.json 中。

   也就是说 npm 包产物，无论是 2 还是 3，用户获取到的 package.json 一定是 2 3 共用的，这就会给用户带来疑惑。

   这里只是简单说了 package.json 中的命令可能 23 均存在，实际上一定不止这些，像 name version 等等

   > 当然，你说用一些黑科技，比如打包的时候重写 package.json 就可以了，这也是可行的，但这就很

   所以，这显然淘汰。

2. 使用 workspace

   按业界叫法，勉强叫做单仓吧，也就是说每一个子应用都是一个独立的包，应用和应用之间利用包管理的 [workspace](https://pnpm.io/workspaces) 机制实现包共享。

   单仓的话，那么可以预见的是：

   - vue2 vue3 将分别是一个单独的子应用，打包的产物从各自应用中获取
   - 公共方法是一个单独的子应用
   - 组件是一个单独的子应用

   这多清晰，好吧，所以，我肯定选择使用 workspace

3. 单仓工具

   - turbo

   - lerna

     > 简单了解一下 [Lerna 和 Turbo 简单了解](./logs/Lerna%20和%20Turbo%20简单了解.md)

### 1.2 包管理工具
既然要用 workspace，那么首先就要确定包管理器。

那这个就不说了吧，pp 首选。

> 幽灵依赖、依赖体积、workspace 都杠杠的

> 好，这里有个 np 问题，之前也遇到和讨论过的。lock 文件是否上传？后面我们再讨论好吧
>
> 宇杨提到 pp workspace 必须上传 lock
>
> 我查了一下，没发现这个问题，可能要实际推 npm 包才行了

### 1.2 发包

- vue2 3 单独发包这个没问题

- 每个组件是否要发包

  > 有 scope 的前提下，单独为每个组件发包是没问题的，但是我们现在没有 scope（@tdesign 被使用）
  >
  > 后期添加不难

### 1.3. 构建

构建工具不变，肯定用 gulp。

但需要注意一点，因为改造了 `babel-plugin-transform-vue-jsx` 这个库用以磨平 vue23 jsx 写法上的差异。所以这个库我们打算 fork 改造后发一个 npm 包。

> 问题1：为什么不提 pr 给对应仓库呢？既然最初设计的时候他们就已经觉得不支持这种写法了，我想提 pr 也不太能被接收
>
> 问题2：`babel-plugin-transform-vue-jsx` 库更新了怎么办？目前 vue2 已经停止维护，所以这个库基本可以认为停止维护了。

### 1.4 测试/官网不做改动

不改动

## 2. 目录结构

```bash
.
├── .eslintrc.js
├── .gitignore
├── .npmrc
├── .vscode
│   └── settings.json
├── README.md
├── apps
│   └── site	# 官网
├── configs	# 公共配置
│   ├── eslint-config
│   └── typescript-config
├── package.json
├── packages
│   ├── intel	# 适配器
│   ├── common	# 公共方法
│   └── components # 组件
│       ├── common	# 可共用一套代码的组件
│       ├── vue2	# vue2 单独（暂不使用一套代码）
│       └── vue3	# vue3 单独（暂不使用一套代码）
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.json
└── turbo.json
```

## 3. 升级步骤

- [ ] 新仓库承载内容
  - [x] 新仓库：https://github.com/TDesignOteam/tdesign-vue-integrate
  - [x] 初步设计仓库结构
  - [x] 将 vue3 搬到新仓库，并按照新结构成功运行起来`packages/components/vue3`
  - [x] 将 vue2 搬到新仓库，并按照新结构成功运行起来`packages/components/vue2`
  - [x] 将组件用一套代码实现
    - [ ] 先实现 switch 
    - [ ] 适配 hooks utils 
    - [ ] 然后逐步实现
- [ ] 将新仓库内容更新到 vue3 仓库

## 4. 进度

### 2024.01.08 同步

**本双周：**

1. 确定使用单仓
2. 确定使用 pnpm
3. 暂定使用 turbo
4. 确定升级步骤
5. 确定 `babel-plugin-transform-vue-jsx` 发包
6. vue3 搬到新仓库进行中

**下双周：**

1. 完成 vue23 的搬动
2. 完成 button 的共用

### 2024.01.23 同步

**本双周：**

1. vue2 搬到新仓库并成功运行
2. vue3 搬到新仓库并成功运行
3. descriptions 组件单独运行成功
4. switch 一套运行成功
