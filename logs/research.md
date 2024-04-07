- [探索如何用一套代码写出兼容 VUE23 的组件库](#探索如何用一套代码写出兼容-vue23-的组件库)
  - [1. 背景](#1-背景)
  - [2. Vue23 的差异](#2-vue23-的差异)
    - [2.1 jsx 写法上的差异](#21-jsx-写法上的差异)
    - [2.2 API 差异](#22-api-差异)
    - [2.3 实例上属性的差异](#23-实例上属性的差异)
    - [2.4 内置组件的差异](#24-内置组件的差异)
  - [3. 方案探索](#3-方案探索)
    - [3.1 代码转换](#31-代码转换)
    - [3.2 编译兼容 + 运行时适配](#32-编译兼容--运行时适配)
  - [4. 方案实现](#4-方案实现)
    - [4.1 磨平编译时差异](#41-磨平编译时差异)
      - [4.1.1 props 写法的磨平](#411-props-写法的磨平)
      - [4.1.2 v-slots 写法的磨平](#412-v-slots-写法的磨平)
      - [4.1.3 on 事件穿透](#413-on-事件穿透)
    - [4.2 运行时差异适配](#42-运行时差异适配)
  - [5. 细节讨论](#5-细节讨论)
    - [5.1 底层 hooks 编写的方案选择](#51-底层-hooks-编写的方案选择)
      - [5.1.1 方案讨论](#511-方案讨论)
      - [5.1.2 缺陷](#512-缺陷)
    - [5.2 props/doc/example/test 实现的方案讨论](#52-propsdocexampletest-实现的方案讨论)

# 探索如何用一套代码写出兼容 VUE23 的组件库

## 1. 背景

TD vue2 和 vue3 版本目前是在两个仓库下，开发或更新某个组件时，需要同时对两个仓库进行修改，这个过程并不是完全不同的，相反，在绝大多数情形，这两个仓库的改动几乎一致，些许的差异在于两个部分：

- jsx 写法上的差异

- vue2 和 vue3 框架所带来的一些 API 和实例上所暴露的属性之间的差异

既然 vue2 和 vue3 大部分内容几乎一致，**那么是不是可以用一套代码来同时实现 vue2 和 vue3 呢？** 然后将其融合在一个仓库里面，既能降低了维护的成本，又能加快更新的速度。

当然，vue2.7 和 vue3 之间的差异相对较少同时 vue2.7 完全兼容了 vue2.6，基于这样的一个背景，我们尝试探索了将 vue2.7 和 vue3 整合到一个仓库中的实现方案。

> 如无特别说明，下文中的 vue23 即指 vue2.7 和 vue3；同时下文中的 vue2 特指 vue2.7

TD 目前 vue2 和 vue3 的仓库均相对完善，所以为了尽量减少整合的工作量，我们选择以 vue3 基础语法和 vue3 jsx 写法作为基础 DSL，然后基于此来实现 vue2.7 的兼容。

> 即：vue3 仓库的写法尽量保持不动，基于 vue3 来实现 vue2.7

## 2. Vue23 的差异

要实现 vue23 共用一套代码的目的，我们需要做的就是，通过各种手段来磨平它们之间的差异，那么在这之前，我们需要详细了解一下它们之间存在的差异。

### 2.1 jsx 写法上的差异

1. props

2. slots

3. on

   无法穿透

### 2.2 API 差异

 https://blog.vuejs.org/posts/vue-2-7-naruto

### 2.3 实例上属性的差异

### 2.4 内置组件的差异

- Teleport
- Suspense

上述这 4 种差异在 TD vue 中均存在，我们将其分类，可以分成两类：

- 编译时差异
- 运行时差异

**其中 jsx 写法属于编译时的差异，其它的属于运行时的差异。**

> 下面我们会讨论方案，其实从这里我们就能大概最解决方案有些许的了解

## 3. 方案探索

在最初的探索阶段，我们提出了 4 种方案：

1. 基于源码的转换，即将 vue3 的代码转换为 vue2.7
2. 基于 AST 的转换，同 1，只是转换的阶段不同
3. render 函数转换，同 1，只是转换的阶段不同
4. 编译兼容 + 运行时适配

### 3.1 代码转换

上述前 3 种方案，我们将其统一称为：代码转换。

在详细介绍这 3 种方案之前，我们先来看看 vue 的整个生命过程。

<div align="center">
  <img src="../images/sfc-to-dom.png" alt="image-20230925172041578" style="zoom:36%;" width="50%"/>
  <p>
    图1：vue sfc-to-dom
  </p>
</div>

<div align="center">
  <img src="../images/sfc-ast-render-dom.png" alt="image-20230925172041578" style="zoom:36%;" width="60%"/>
  <p>
    图2：vue sfc-ast-render-dom
  </p>
</div>

我们再来看代码转换的方案：简单地说，**就是把 vue3 的代码转换成 vue2的**。听起来似乎是可行的哈，而且社区也有类似的工具，比如 [gogocode](https://github.com/thx/gogocode) ，只是 gogocode 是将 vue2 转换为 vue3。但真的可行吗？这样，我们不妨先来看看这三种方案，我们用一个实际的例子来看哈：

- 源码的转换

  也就是说，直接将 tsx/sfc 文件字符串进行转化——SFC 阶段转换。

  初步一思考，就能想到，应该会使用很多正则，诸如xxx，因此，这种方案似乎可行，但因正则替换难免会遇到遗漏或者匹配错误的地方，而且，这种方案的工作量可想而知会非常地大。

- AST 转换

  所谓 AST，不过是 tsx/sfc 经过编译后形成的一个树形对象（一般由 babel 编译），相比较方案 1 源码转换，AST 会相对来说更加地准确，相当于 babel 帮我们做了一些前置的工作。

- render 函数转换

因此，这种方案的可行性较小，暂且定为 ⭐️

### 3.2 编译兼容 + 运行时适配

第 2 节详细描述了 vue23 的差异，两大类

- 编译时差异

  编译时的差异在编译阶段磨平

- 运行时差异

  运行时的差异在运行时磨平

## 4. 方案实现

既然选择使用 编译兼容 + 运行时适配的方案，我们用一个示例来探索和实验。

假设组件库提供了 `UserResume` 这样的一个组件，组件提供的能力：

- 展示用户的基本信息
- 用户可输入求职意向
- 用户可自定义插槽 `paopao` 和自定义事件 `paopao`

```tsx
import { PropType, computed, defineComponent, ref, toRefs, useVModel, watch } from 'common';

import props from './props.ts';
import BasicInfo from './components/basic-info';
import EducationExperience from './components/education-experience';
import OtherInfo from './components/other-info';

import './styles/index.less';

const UserResume = defineComponent({
  name: 'UserResume',
  props,
  setup(props, { slots, emit }) {
    const { value: valueProps, modelValue } = toRefs(props);

    const basicInfo = computed(() => ({
      name: props.name,
      age: props.age,
      gender: props.gender,
    }));

    const [value, setValue] = useVModel(valueProps, modelValue, null, props.onInput, 'value', 'input');

    const handleInput = (e: InputEvent) => {
      const target = e.target;
      setValue(target.value);
    };

    return () => (
      <div class="resume">
        <h2>求职意向</h2>
        <input
          value={value.value}
          onInput={handleInput}
          class="position"
          type="text"
          placeholder="请输入求职意向"
        />
        <p>{ value.value }</p>
        <BasicInfo {...basicInfo.value} />
        <EducationExperience educationList={props.educationList} />
        <OtherInfo v-slots={{ paopao: slots.paopao }} onPaopao={props.onPaopao} />
      </div>
    );
  },
});

export default UserResume;
```

可以看到，组件内部使用的是 vue3 jsx 的写法，其中 `useVModel` 用于统一管理组件受控和非受控的处理。

我们就基于此组件来描述如何解决。

> 打包工具以 vite 举例

### 4.1 磨平编译时差异

#### 4.1.1 props 写法的磨平

以 `<BasicInfo {...basicInfo.value} />` 为例

其中 vue3 jsx 写法如上，但 vue2 jsx 的写法如下：

```tsx
<BasicInfo props={basicInfo.value} />;
```

那么有什么办法可以解决呢？

1. 编译前正则替换

   即，在编译前将 `<BasicInfo {...basicInfo.value} />` 编译成  vue2 jsx 能识别的语法，也比较简单，只需要类似如下的 transform 即可

   ```ts
   export function transformBeforePlugin() {
     return {
       name: 'transform-before',
       transform(code, id) {
         const props = /\{\s*\.\.\.([^\s\}]+)\s*\}/g;
         code = code.replace(props, (match, capturedValue) => {
           return `props={ ${capturedValue} }`;
         });

         return code;
       }
     };
   }
   ```

   看起来似乎挺简单就能解决了，但是，这并不完美，因为简单地正则很难判断当前 `{...XXX}` 所处的位置，假如用户将这样的模式写在了 js 或者文本中呢？

   ```vue
   <div>
   扩展对象如下 {...zhangpaopao}
   </div>
   ```

   这样岂不是直接 GG，所以这个方案并不完美

   > 当然，你可以说我用正则来限制一下不就好了吗？可以是可以，但是所要考虑的情况是很难覆盖全面的，至少，你没有 babel 专业😶😶😶

2. 编译时兼容

   先看一眼 vue2 jsx 将 `<BasicInfo props={basicInfo.value} />` 编译成什么样子吧

   ```js
   () => h('div', {
     class: 'resume'
   }, [h(BasicInfo, _mergeJSXProps([{}, {
     props: basicInfo.value
   }]))]);
   ```

   可以看到，`props={basicInfo.value}` 最终在渲染函数的第二参数中，`{"props": basicInfo.value}`

   我们再来看 vue2 jsx 会将 `<BasicInfo {...basicInfo.value} />` 编译成什么样子吧

   ```js
   () => h('div', {
     class: 'resume'
   }, [h(BasicInfo, _mergeJSXProps([{}, basicInfo.value]))]);
   ```

   可以看到，大致都是一致的，只是将 `{...basicInfo.value}` 编译到了渲染函数的第二参数中 `basicInfo.value`

   那么，如果我们能够在编译的时候，将 vue2 jsx 会将 `{...basicInfo.value}` 编译成 `{"props": basicInfo.value}` 这样，那么是不是 vue2 的运行时（渲染器）就能认识了呢？

   那么怎么做呢？这就需要了解两个库了

   - babel：基础编译库
   - [@vue/babel-preset-jsx](https://www.npmjs.com/package/@vue/babel-preset-jsx)：解析 vue 的 jsx

   我们着重看 `@vue/babel-preset-jsx`，它就是用于将 vue2 jsx 编译成渲染函数的，因此我们就在这个库里做动作即可。

   ```js
         attributesArray.map(el => {
           if (el.type === 'vueSpread') {
             // !todo zhangpaopao: 将所有 {...xxx} 都编译成 props={xxx}
             return t.objectExpression([t.objectProperty(t.stringLiteral('props'), el.argument)]);
           } else {
             return transformAttributes(t, el)
           }
         }),
       )
   ```

   > https://github.com/vuejs/jsx-vue2/blob/dev/packages/babel-plugin-transform-vue-jsx/src/index.js 275-277 行

#### 4.1.2 v-slots 写法的磨平

同样来看示例 `<OtherInfo v-slots={{paopao: slots.paopao}} />`

在 vue2 jsx 中，slots 的写法应如下：

```vue
<OtherInfo scopedSlots={{paopao: slots.paopao}} />
```

同样地，我们可以选择编译前正则替换，但问题同样也存在。

因此仍然选择编译时兼容。

vue2 jsx 将 `<OtherInfo scopedSlots={{paopao: slots.paopao}} />` 编译成

```js
() => h('div', {
  class: 'resume'
}, [h(OtherInfo, {
  scopedSlots: {
    paopao: slots.paopao
  }
})]);
```

将 `<OtherInfo v-slots={{paopao: slots.paopao}} />` 编译成

```js
() => h('div', {
  class: 'resume'
}, [h(OtherInfo, {
  directives: [{
    name: 'slots',
    value: {
      paopao: slots.paopao
    }
  }]
})]);
```

那么我们要做的是不是非常清晰了：就是将 `v-slots` 这个指令给它编译到 h 函数的第二参数并且以 `scopedSlots` 为 key 的形式即可

```js
    if (isDirective(name)) {
      // !todo zhangpaopao: 将 v-slots 编译成 scopedSlots: {}
      if(name.slice(2) === 'slots') {
        attributes.scopedSlots = value;
        return;
      } else {
        name = kebabcase(name.substr(1))
        prefix = 'directives';
      }
    } else {
```

> https://github.com/vuejs/jsx-vue2/blob/dev/packages/babel-plugin-transform-vue-jsx/src/index.js 195-197 行

#### 4.1.3 on 事件穿透

先简单描述一下什么是 on 事件穿透

```jsx
<UserResume onPaopao={handlePaopao} />;
```

如上用户在使用 UserResume 组件时，通过 onPaopao 传递了 handlePaopao

组件内部：

```jsx
<OtherInfo onPaopao={props.onPaopao} />;
```

以及：

```jsx
const OtherInfo = defineComponent({
  name: 'OtherInfo',
  setup(props, { slots, emit }) {
    return () => (
      <div class="other-info" onClick={() => emit('paopao')}>
        <h2>其它自定义</h2>
      </div>
    );
  },
});
```

在 vue3 jsx 中，子组件点击时触发 `click` 事件，调用 `emit('paopao')`，从而触发 UserResume 组件在 OtherInfo 组件上监听的 `paopao` 事件，又触发 `props.onPaopao` 函数，使得最终用户传递的 `handlePaopao` 函数得以执行。

在这个过程中，你会发现，OtherInfo 组件触发父组件监听的事件时，是直接使用的 props.onPaopao，而不需要使用 emit('paopao')。

但在 vue2 jsx 中，就需要这个中间层 emit。

> 你可能会说，这样有点搞呀，使用 props.onPaopao 和 emit('paopao') 有啥区别呀，不都是一行代码吗？
>
> 哎，如果你的组件仅支持用户 @paopao 的方式，那么的确是的，没区别，但是，如果你的组件既支持 @paopao 的方式同时又支持 onPaopao 的方式，这就不一样了。假如两种方式你的组件都支持，那么在 vue3 里面，你仅仅需要写一个 `props.onPaopao` 就能实现了，因为 vue3 编译时会将 @paopao 既编译到 on 中，又编译到 props 中。
>
> ```js
> function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
>   const _component_UserResume = _resolveComponent('UserResume');
>   return _openBlock(), _createElementBlock('div', null, [
>     _createVNode(_component_UserResume, { onPaopao: _ctx.handlePaopao }, null, 8, ['onPaopao'])
>   ]);
> }
> ```
>
> 而 vue2 jsx 编译时，仅仅会把 @paopao 编译到 on 中，而不会编译到 props 中
>
> ```js
> function render() {
>   const _vm = this; const _c = _vm._self._c; const _setup = _vm._self._setupProxy;
>   return _c('div', [_c('UserResume', { on: { paopao: _vm.handlePaopao } })], 1);
> }
> ```
>
> 所以，要想在 vue2 jsx 中既支持 @paopao，又支持 onPaopao，那么就需要在触发时：
>
> ```
> emit('paopao')
> props.onPopao?.()
> ```

那么有没有什么办法能够解决这个问题呢？好吧，有的哟，既然 vue3 jsx 把 @paopao 既编译到 on 中，又编译到 props 中就能实现 props.onPaopao?.() ，那么是不是 vue2 jsx 按照同样的办法就一样可以呢？所以吧，很简单了哟

```js
// !todo zhangpaopao: 将 on 增加到 props 中
if (prefix === 'on') {
  addAttribute(t, attributes, 'props', t.objectProperty(t.stringLiteral(cloneName), value));
}
```

> https://github.com/vuejs/jsx-vue2/blob/dev/packages/babel-plugin-transform-vue-jsx/src/index.js 165-185 行

这里，仅仅罗列了 3 种情况，可能还会出现其它的 jsx 写法上的差异，但我们不用担心，**编译的问题用编译的手段解决即可**。

### 4.2 运行时差异适配

我们先来看看，什么是运行时差异。

在 TD 中，组件的**实例对象**是常常被使用的，例如实例对象上的 slots、parent 属性。TD 中为了统一地处理插槽，我们分别在 vue23 中实现了一个 hooks，大致如下：

```js
function handleSlots(instance: ComponentInternalInstance, name: string, params: Record<string, any>) {
  const instance = getCurrentInstance();
  // 检查是否存在 驼峰命名 的插槽（过滤注释节点）
  let node = instance.slots[camelCase(name)]?.();
  if (node && node.filter(t => t.type.toString() !== 'Symbol(v-cmt)').length) {
    return node;
  }
  // 检查是否存在 中划线命名 的插槽
  node = instance.slots[kebabCase(name)]?.();
  if (node && node.filter(t => t.type.toString() !== 'Symbol(v-cmt)').length) {
    return node;
  }
  return null;
}
```

这里不关注细节哈。可以看到，我们会从 instance.slots 上获取插槽函数，这是 vue3 版本的

再来看 vue2 版本的：

```js
function handleSlots(name: string, params: Record<string, any>) {
  const instance = getCurrentInstance();
  // 检查是否存在 驼峰命名 的插槽
  let node = instance._setupContext.slots[camelCase(name)]?.();
  if (node) {
    return node;
  }
  // 检查是否存在 中划线命名 的插槽
  node = instance._setupContext.slots[kebabCase(name)]?.();
  if (node) {
    return node;
  }
  return null;
}
```

我们着重看 vue23 分别是如何取到 slots 对象的

```js
// vue3
instance.slots;
```

```js
// vue2
instance._setupContext.slots;
```

分别是在实例的不同属性上去获取的，确实有差异，那为什么叫做运行时差异呢？因为实例是运行时的，编译时是没有实例对象的，只有当 sfc 编译成渲染函数后，渲染器渲染时才会有实例对象，而渲染器是运行时的。

那么如何解决呢？

- 编译时替换

  可能立马就会想到，这完全可以在编译时正则替换嘛，哎，没错，这确实是一个方案，但是，如果运行时差异非常地多而且用法繁杂，请问，你觉得正则还能吗？你可能会说可以呀，有什么情况，全正则替换嘛，但是可以预见的是，它的工作量将无限大，因为使用的情况和场景是不可预料的呀。

  所以编译时可行性不大。

- 运行时适配

  vue23 运行时实例抛出的属性不一致，而上层使用又希望一致，这不是典型的**适配器设计模式**哇。

  <div align="center">
    <img src="../images/adapter.png" alt="image-20230925172041578" style="zoom:44%;" />
    <p>
      图3：vue adapter
    </p>
  </div>

  哎，就这么简单，哈哈，直接适配就好了。

  又比如，TD vue3 会使用实例上的 props 是否包含 modelValue 来判断当前用户使用组件时是受控还是非受控

  ```js
  const { vnode } = getCurrentInstance();

  const vProps = vnode.props || {};
  const isVM
      = Object.prototype.hasOwnProperty.call(vProps, 'modelValue')
      || Object.prototype.hasOwnProperty.call(vProps, 'model-value');
  ```

  同样地，vue2 也有类似的处理

  ```js
  const { $vnode } = getCurrentInstance();

  const isControlled = Object.prototype.hasOwnProperty.call($vnode.componentOptions.propsData, propName)
    || Object.prototype.hasOwnProperty.call($vnode.componentOptions.propsData, kebabCase(propName));
  ```

  可以看到，同样是在实例上做判断，那么直接适配即可

  <div align="center">
    <img src="../images/adapter-props.png" alt="image-20230925172041578" style="zoom:70%;" />
    <p>
      图4：vue adapter-props
    </p>
  </div>

  当然，这里仅仅罗列了实例上的部分属性，实例上有大量的属性都需要做适配，但不管怎样，只需要按照这个思路即可。

## 5. 细节讨论

基本的方案已定，即：编译时兼容 + 运行时适配

- 编译时磨平写法上的差异
- 运行时适配实例上的差异

但还有很多细节需要讨论

### 5.1 底层 hooks 编写的方案选择

#### 5.1.1 方案讨论

这里拿 TD 中统一管理受控和非受控的 hooks 来说明。

**vue3 支持：**

- `v-model`： 实际上是 `:modelValue="" @update:modelValue=""` 的语法糖
- `v-model:xxx`：实际上是 `:xxx="" @update:xxx=""` 的语法糖
- 非受控

hooks 会根据这些情形来执行相应的逻辑

```ts
export default function useVModel<T, P extends any[]>(
  value: Ref<T>,
  modelValue: Ref<T>,
  defaultValue: T,
  onChange: ChangeHandler<T, P>,
  propName = 'value',
): [Ref<T>, ChangeHandler<T, P>] {
  const { emit, vnode } = getCurrentInstance();
  const internalValue: Ref<T> = ref();

  const vProps = vnode.props || {};
  const isVM
    = Object.prototype.hasOwnProperty.call(vProps, 'modelValue')
    || Object.prototype.hasOwnProperty.call(vProps, 'model-value');
  const isVMP
    = Object.prototype.hasOwnProperty.call(vProps, propName)
    || Object.prototype.hasOwnProperty.call(vProps, kebabCase(propName));

  if (isVM) {
    return [
      modelValue,
      (newValue, ...args) => {
        emit('update:modelValue', newValue);
        onChange?.(newValue, ...args);
      },
    ];
  }

  if (isVMP) {
    return [
      value,
      (newValue, ...args) => {
        emit(`update:${propName}`, newValue);
        onChange?.(newValue, ...args);
      },
    ];
  }

  internalValue.value = defaultValue;
  return [
    internalValue,
    (newValue, ...args) => {
      internalValue.value = newValue;
      onChange?.(newValue, ...args);
    },
  ];
}
```

**vue2 支持：**

- `v-model`： 实际上是 `:value="" @事件=""` 的语法糖（这里的事件由组件决定）
- `xxx.sync`：实际上是 `:xxx="" @update:xxx=""` 的语法糖
- 非受控

hooks 会根据这些情形来执行相应的逻辑

```ts
export function useVModel<T, P extends any[]>(
  value: Ref<T>,
  defaultValue: T,
  onChange: ChangeHandler<T, P>,
  eventName = 'change',
  propName = 'value',
  // 除了 value + onChange，还支持其他同含义字段和事件
  alias: UseVModelParams<T>[] = [],
): [Ref<T>, ChangeHandler<T, P>] {
  const { emit, vnode } = getCurrentInstance();
  const internalValue = ref<T>();
  internalValue.value = defaultValue;

  const isControlled = Object.prototype.hasOwnProperty.call(vnode.componentOptions.propsData, propName)
    || Object.prototype.hasOwnProperty.call(vnode.componentOptions.propsData, kebabCase(propName));

  // 受控模式
  if (isControlled) {
    return [
      value,
      (newValue, ...args) => {
        // input 事件为 v-model 语法糖
        emit?.('input', newValue, ...args);
        onChange?.(newValue, ...args);
        if (eventName && eventName !== 'input') {
          emit?.(eventName, newValue, ...args);
        }
      },
    ];
  }

  // controlled, other fields, upload.files.etc.
  for (let i = 0, len = alias.length; i < len; i++) {
    const item = alias[i];
    if (Object.prototype.hasOwnProperty.call(vnode.componentOptions.propsData, item.propName)) {
      return [
        item.value,
        (newValue, ...args) => {
          // .sync support
          emit?.(`update:${item.propName}`, newValue, ...args);
          onChange?.(newValue, ...args);
          if (item.eventName && item.eventName !== 'input') {
            emit?.(item.eventName, newValue, ...args);
          }
        },
      ];
    }
  }

  // 非受控模式
  return [
    internalValue,
    (newValue, ...args) => {
      internalValue.value = newValue;
      onChange?.(newValue, ...args);
      if (eventName && eventName !== 'input') {
        emit?.(eventName, newValue, ...args);
      }
    },
  ];
}
```

代码比较长，我们着重看两个地方

- 判断当前是哪一种情形
- 根据情形处理

这里拿两者 `v-model` 的情形来举例子吧

- 判断逻辑

  ```ts
  // vue2
  const isControlled = Object.prototype.hasOwnProperty.call(vnode.componentOptions.propsData, propName)
    || Object.prototype.hasOwnProperty.call(vnode.componentOptions.propsData, kebabCase(propName));

  // vue3
  const isVM
      = Object.prototype.hasOwnProperty.call(vProps, 'modelValue')
      || Object.prototype.hasOwnProperty.call(vProps, 'model-value');
  ```

- 相应的处理

  ```ts
  // vue2
        (newValue, ...args) => {
          // input 事件为 v-model 语法糖
          emit?.('input', newValue, ...args);
          onChange?.(newValue, ...args);
          if (eventName && eventName !== 'input') {
            emit?.(eventName, newValue, ...args);
          }
        },
  // vue3
          (newValue, ...args) => {
          emit('update:modelValue', newValue);
          onChange?.(newValue, ...args);
        },
  ```

可以看到，无论是判断逻辑还是处理逻辑，它们除了在实例上获取的属性不同外，处理逻辑上使用的函数名/参数 甚至代码逻辑都不同。

如果单单是实例属性不同，那么用适配倒可以解决，但逻辑都不同了，这适配就解决不了了。

所以，目前看来，只能写两份，即 vue23 分开写。

<div align="center">
  <img src="../images/hooks-vmodel.png" alt="image-20230925172041578" style="zoom:50%;" width="26%;"/>
  <p>
    图5：vue hooks-vmodel
  </p>
</div>

<div align="center">
  <img src="../images/hooks-vmodel-adapter.png" alt="image-20230925172041578" style="zoom:50%;" />
  <p>
    图6：vue hooks-vmodel-adapter
  </p>
</div>

#### 5.1.2 缺陷

这样做看起来似乎是可行的哈，**但它却并不完美，会带来一些额外的困扰**。

- **参数不一致**

  如果你仔细看就会发现， vue23 版本的 useVModel 所接收的参数个数和用途是不一致的。

  vue2:

  ```ts
  export function useVModel<T, P extends any[]>(
    // v-model
    value: Ref<T>,
    // 默认值
    defaultValue: T,
    onChange: ChangeHandler<T, P>,
    // v-model
    propName = 'value',
    // vue2 eventName
    eventName = 'input',
    // 除了 value + onChange，还支持其他同含义字段和事件
    alias: UseVModelParams<T>[] = [],
  );
  ```

  vue3:

  ```ts
  export function useVModel<T, P extends any[]>(
    // value 或 v-model:value
    value: Ref<T>,
    // v-model
    modelValue: Ref<T>,
    // 默认值
    defaultValue: T,
    // 值修改时触发
    onChange: ChangeHandler<T, P>,
    // value 或 v-model:value
    propName = 'value',
  );
  ```

  但因为最终是在组件逻辑中使用并且同时兼容 vue23，所以需要对 vue2 版本的参数进行增加并且 `useVModel` 的类型进行兼容

  ```ts
  // vue2
  export function useVModel<T, P extends any[]>(
    // v-model
    value: Ref<T>,
    // v-model
    modelValue: Ref<T>,
    // 默认值
    defaultValue: T,
    onChange: ChangeHandler<T, P>,
    // v-model
    propName = 'value',
    // vue2 eventName
    eventName = 'input',
    // 除了 value + onChange，还支持其他同含义字段和事件
    alias: UseVModelParams<T>[] = [],
  );
  ```

  这里为了兼容 vue3 版的，插入 `modelValue` 这个形参，但你会发现，vue2 版本的 `useVModel` 根本用不上；与此同时，你会发现，vue3 版本只需要 5 个参数，现在 vue2 却有了 7 个参数；也就是说，为了同时兼容 vue23，开发组件时最多需要填写 7 个参数，前面 5 个 vue23 是一致的，但 第 6 第 7 个参数却仅仅是 vue2 使用的，**这会增加 `useVModel` 的使用成本。**

  ```tsx
  import { useVModel } from 'common';

  const [value, setValue] = useVModel(
    // vue2: v-model; vue3: xxx 或 v-model:xxx
    valueProps,
    // vue3: v-model
    modelValue,
    // vue23: 默认值
    null,
    // vue23: 修改后触发
    props.onInput,
    // vue2: v-model 或 xxx 或 xxx.sync; vue3: v-model:xxx 或 xxx
    'value',
    // vue2: v-model 监听的事件名
    'input'
  );
  ```

  这里仅仅描述了 `useVModel`，其它 hooks 也可能出现类似的情形，虽然可以使用，但这会增加使用的成本，使用者的心智负担会比较重。

### 5.2 props/doc/example/test 实现的方案讨论

### 5.3 TS 类型
