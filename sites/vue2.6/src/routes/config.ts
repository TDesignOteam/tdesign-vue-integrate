// ! zhangpaopao 挪动了位置
export const docs = [
  {
    title: '开始',
    titleEn: 'Start',
    type: 'doc',
    children: [
      {
        title: '快速开始',
        titleEn: 'Getting Started',
        name: 'getting-started',
        path: '/vue/getting-started',
        component: () => import('@/docs/getting-started.md'),
        componentEn: () => import('@/docs/getting-started.en-US.md'),
      },
      {
        title: '最佳实践',
        titleEn: 'Starter Kit',
        name: 'quick-start',
        path: '/vue/quick-start',
        component: () => import('@/docs/starter.md'),
        componentEn: () => import('@/docs/starter.en-US.md'),
      },
      {
        title: '更新日志',
        titleEn: 'CHANGELOG',
        name: 'changelog',
        path: '/vue/changelog',
        // component: () => import('@/CHANGELOG.md'),
      },
      {
        title: '组件概览',
        titleEn: 'Overview',
        name: 'overview',
        path: '/vue/overview',
        component: () => import('shared/_common/docs/web/overview.md'),
        componentEn: () => import('shared/_common/docs/web/overview.en-US.md'),
      },
    ],
  },
  {
    title: '全局配置',
    titleEn: 'Global Config',
    type: 'doc',
    children: [
  //     {
  //       title: '全局特性配置',
  //       titleEn: 'Global Configuration',
  //       name: 'config',
  //       path: '/vue/global-configuration',
  //       component: () => import('vue3/src/config-provider/config-provider.md'),
  //       componentEn: () => import('vue3/src/config-provider/config-provider.en-US.md'),
  //     },
  //     {
  //       title: '自定义主题',
  //       titleEn: 'Theme Customization',
  //       name: 'custom-theme',
  //       path: '/vue/custom-theme',
  //       component: () => import('shared/_common/theme.md'),
  //       componentEn: () => import('shared/_common/theme.en-US.md'),
  //     },
  //     {
  //       title: '暗黑模式',
  //       titleEn: 'Dark Mode',
  //       name: 'dark-mode',
  //       path: '/vue/dark-mode',
  //       component: () => import('shared/_common/dark-mode.md'),
  //       componentEn: () => import('shared/_common/dark-mode.en-US.md'),
  //     },
  //   ],
  // },
  // {
  //   title: '基础',
  //   titleEn: 'Base',
  //   type: 'component', // 组件文档
  //   children: [
  //     {
  //       title: 'Button 按钮',
  //       titleEn: 'Button',
  //       name: 'button',
  //       path: '/vue/components/button',
  //       component: () => import('vue3/src/button/button.md'),
  //       componentEn: () => import('vue3/src/button/button.en-US.md'),
  //     },
  //     {
  //       title: 'Icon 图标',
  //       titleEn: 'Icon',
  //       name: 'icon',
  //       path: '/vue/components/icon',
  //       component: () => import('vue3/src/icon/icon.md'),
  //       componentEn: () => import('vue3/src/icon/icon.en-US.md'),
  //     },
  //     {
  //       title: 'Link 链接',
  //       titleEn: 'Link',
  //       name: 'link',
  //       path: '/vue/components/link',
  //       component: () => import('vue3/src/link/link.md'),
  //       componentEn: () => import('vue3/src/link/link.en-US.md'),
  //     },
  //   ],
  // },
  // {
  //   title: '布局',
  //   titleEn: 'Layout',
  //   type: 'component',
  //   children: [
  //     {
  //       title: 'Divider 分割线',
  //       titleEn: 'Divider',
  //       name: 'divider',
  //       path: '/vue/components/divider',
  //       component: () => import('vue3/src/divider/divider.md'),
  //       componentEn: () => import('vue3/src/divider/divider.en-US.md'),
  //     },
  //     {
  //       title: 'Grid 栅格',
  //       titleEn: 'Grid',
  //       name: 'grid',
  //       path: '/vue/components/grid',
  //       component: () => import('vue3/src/grid/grid.md'),
  //       componentEn: () => import('vue3/src/grid/grid.en-US.md'),
  //     },
  //     {
  //       title: 'Layout 布局',
  //       titleEn: 'Layout',
  //       name: 'layout',
  //       path: '/vue/components/layout',
  //       component: () => import('vue3/src/layout/layout.md'),
  //       componentEn: () => import('vue3/src/layout/layout.en-US.md'),
  //     },
  //     {
  //       title: 'Space 间距',
  //       titleEn: 'Space',
  //       name: 'space',
  //       path: '/vue/components/space',
  //       component: () => import('vue3/src/space/space.md'),
  //       componentEn: () => import('vue3/src/space/space.en-US.md'),
  //     },
  //   ],
  // },
  // {
  //   title: '导航',
  //   titleEn: 'Navigation',
  //   type: 'component',
  //   children: [
  //     {
  //       title: 'Affix 固钉',
  //       titleEn: 'Affix',
  //       name: 'affix',
  //       path: '/vue/components/affix',
  //       component: () => import('vue3/src/affix/affix.md'),
  //       componentEn: () => import('vue3/src/affix/affix.en-US.md'),
  //     },
  //     {
  //       title: 'Anchor 锚点',
  //       titleEn: 'Anchor',
  //       name: 'anchor',
  //       path: '/vue/components/anchor',
  //       component: () => import('vue3/src/anchor/anchor.md'),
  //       componentEn: () => import('vue3/src/anchor/anchor.en-US.md'),
  //     },
  //     {
  //       title: 'BackTop 回到顶部',
  //       titleEn: 'BackTop',
  //       name: 'back-top',
  //       path: '/vue/components/back-top',
  //       component: () => import('vue3/src/back-top/back-top.md'),
  //       componentEn: () => import('vue3/src/back-top/back-top.en-US.md'),
  //     },
  //     {
  //       title: 'Breadcrumb 面包屑',
  //       titleEn: 'Breadcrumb',
  //       name: 'breadcrumb',
  //       path: '/vue/components/breadcrumb',
  //       component: () => import('vue3/src/breadcrumb/breadcrumb.md'),
  //       componentEn: () => import('vue3/src/breadcrumb/breadcrumb.en-US.md'),
  //     },
  //     {
  //       title: 'Dropdown 下拉菜单',
  //       titleEn: 'Dropdown',
  //       name: 'dropdown',
  //       path: '/vue/components/dropdown',
  //       component: () => import('vue3/src/dropdown/dropdown.md'),
  //       componentEn: () => import('vue3/src/dropdown/dropdown.en-US.md'),
  //     },
  //     {
  //       title: 'Menu 导航菜单',
  //       titleEn: 'Menu',
  //       name: 'menu',
  //       path: '/vue/components/menu',
  //       component: () => import('vue3/src/menu/menu.md'),
  //       componentEn: () => import('vue3/src/menu/menu.en-US.md'),
  //     },
  //     {
  //       title: 'Pagination 分页',
  //       titleEn: 'Pagination',
  //       name: 'pagination',
  //       path: '/vue/components/pagination',
  //       component: () => import('vue3/src/pagination/pagination.md'),
  //       componentEn: () => import('vue3/src/pagination/pagination.en-US.md'),
  //     },
  //     {
  //       title: 'Steps 步骤条',
  //       titleEn: 'Steps',
  //       name: 'steps',
  //       path: '/vue/components/steps',
  //       component: () => import('vue3/src/steps/steps.md'),
  //       componentEn: () => import('vue3/src/steps/steps.en-US.md'),
  //     },
  //     {
  //       title: 'StickyTool 侧边栏',
  //       titleEn: 'StickyTool',
  //       name: 'StickyTool',
  //       path: '/vue/components/sticky-tool',
  //       component: () => import('vue3/src/sticky-tool/sticky-tool.md'),
  //       componentEn: () => import('vue3/src/sticky-tool/sticky-tool.en-US.md'),
  //     },
  //     {
  //       title: 'Tabs 选项卡',
  //       titleEn: 'Tabs',
  //       name: 'tabs',
  //       path: '/vue/components/tabs',
  //       component: () => import('vue3/src/tabs/tabs.md'),
  //       componentEn: () => import('vue3/src/tabs/tabs.en-US.md'),
  //     },
  //   ],
  // },
  // {
  //   title: '输入',
  //   titleEn: 'Form',
  //   type: 'component',
  //   children: [
  //     {
  //       title: 'AutoComplete 自动填充',
  //       titleEn: 'AutoComplete',
  //       name: 'auto-complete',
  //       path: '/vue/components/auto-complete',
  //       component: () => import('vue3/src/auto-complete/auto-complete.md'),
  //       componentEn: () => import('vue3/src/auto-complete/auto-complete.en-US.md'),
  //     },
  //     {
  //       title: 'Cascader 级联组件',
  //       titleEn: 'Cascader',
  //       name: 'cascader',
  //       path: '/vue/components/cascader',
  //       component: () => import('vue3/src/cascader/cascader.md'),
  //       componentEn: () => import('vue3/src/cascader/cascader.en-US.md'),
  //     },
  //     {
  //       title: 'Checkbox 多选框',
  //       titleEn: 'Checkbox',
  //       name: 'checkbox',
  //       path: '/vue/components/checkbox',
  //       component: () => import('vue3/src/checkbox/checkbox.md'),
  //       componentEn: () => import('vue3/src/checkbox/checkbox.en-US.md'),
  //     },
  //     {
  //       title: 'ColorPicker 颜色选择器',
  //       titleEn: 'ColorPicker',
  //       name: 'color-picker',
  //       path: '/vue/components/color-picker',
  //       component: () => import('vue3/src/color-picker/color-picker.md'),
  //       componentEn: () => import('vue3/src/color-picker/color-picker.en-US.md'),
  //     },
  //     {
  //       title: 'DatePicker 日期选择器',
  //       titleEn: 'DatePicker',
  //       name: 'date-picker',
  //       path: '/vue/components/date-picker',
  //       component: () => import('vue3/src/date-picker/date-picker.md'),
  //       componentEn: () => import('vue3/src/date-picker/date-picker.en-US.md'),
  //     },
  //     {
  //       title: 'Form 表单',
  //       titleEn: 'Form',
  //       name: 'form',
  //       path: '/vue/components/form',
  //       component: () => import('vue3/src/form/form.md'),
  //       componentEn: () => import('vue3/src/form/form.en-US.md'),
  //     },
  //     {
  //       title: 'Input 输入框',
  //       titleEn: 'Input',
  //       name: 'input',
  //       path: '/vue/components/input',
  //       component: () => import('vue3/src/input/input.md'),
  //       componentEn: () => import('vue3/src/input/input.en-US.md'),
  //     },
  //     {
  //       title: 'InputAdornment 输入装饰器',
  //       titleEn: 'InputAdornment',
  //       name: 'input-adornment',
  //       path: '/vue/components/input-adornment',
  //       component: () => import('vue3/src/input-adornment/input-adornment.md'),
  //       componentEn: () => import('vue3/src/input-adornment/input-adornment.en-US.md'),
  //     },
  //     {
  //       title: 'InputNumber 数字输入框',
  //       titleEn: 'InputNumber',
  //       name: 'input-number',
  //       path: '/vue/components/input-number',
  //       component: () => import('vue3/src/input-number/input-number.md'),
  //       componentEn: () => import('vue3/src/input-number/input-number.en-US.md'),
  //     },
  //     {
  //       title: 'TagInput 标签输入框',
  //       titleEn: 'TagInput',
  //       name: 'tag-input',
  //       docType: 'form',
  //       path: '/vue/components/tag-input',
  //       component: () => import('vue3/src/tag-input/tag-input.md'),
  //       componentEn: () => import('vue3/src/tag-input/tag-input.en-US.md'),
  //     },
  //     {
  //       title: 'Radio 单选框',
  //       titleEn: 'Radio',
  //       name: 'radio',
  //       path: '/vue/components/radio',
  //       component: () => import('vue3/src/radio/radio.md'),
  //       componentEn: () => import('vue3/src/radio/radio.en-US.md'),
  //     },
  //     {
  //       title: 'RangeInput 范围输入框',
  //       titleEn: 'RangeInput',
  //       name: 'range-input',
  //       path: '/vue/components/range-input',
  //       component: () => import('vue3/src/range-input/range-input.md'),
  //       componentEn: () => import('vue3/src/range-input/range-input.en-US.md'),
  //     },
  //     {
  //       title: 'Select 选择器',
  //       titleEn: 'Select',
  //       name: 'select',
  //       path: '/vue/components/select',
  //       component: () => import('vue3/src/select/select.md'),
  //       componentEn: () => import('vue3/src/select/select.en-US.md'),
  //     },
  //     {
  //       title: 'SelectInput 筛选器输入框',
  //       titleEn: 'SelectInput',
  //       name: 'select-input',
  //       docType: 'form',
  //       path: '/vue/components/select-input',
  //       component: () => import('vue3/src/select-input/select-input.md'),
  //       componentEn: () => import('vue3/src/select-input/select-input.en-US.md'),
  //     },
  //     {
  //       title: 'Slider 滑块',
  //       titleEn: 'Slider',
  //       name: 'slider',
  //       path: '/vue/components/slider',
  //       component: () => import('vue3/src/slider/slider.md'),
  //       componentEn: () => import('vue3/src/slider/slider.en-US.md'),
  //     },
  //     {
  //       title: 'Switch 开关',
  //       titleEn: 'Switch',
  //       name: 'switch',
  //       path: '/vue/components/switch',
  //       component: () => import('vue3/src/switch/switch.md'),
  //       componentEn: () => import('vue3/src/switch/switch.en-US.md'),
  //     },
  //     {
  //       title: 'Textarea 多行文本框',
  //       titleEn: 'Textarea',
  //       name: 'textarea',
  //       path: '/vue/components/textarea',
  //       component: () => import('vue3/src/textarea/textarea.md'),
  //       componentEn: () => import('vue3/src/textarea/textarea.en-US.md'),
  //     },
  //     {
  //       title: 'Transfer 穿梭框',
  //       titleEn: 'Transfer',
  //       name: 'transfer',
  //       path: '/vue/components/transfer',
  //       component: () => import('vue3/src/transfer/transfer.md'),
  //       componentEn: () => import('vue3/src/transfer/transfer.en-US.md'),
  //     },
  //     {
  //       title: 'TimePicker 时间选择器',
  //       titleEn: 'TimePicker',
  //       name: 'time-picker',
  //       path: '/vue/components/time-picker',
  //       component: () => import('vue3/src/time-picker/time-picker.md'),
  //       componentEn: () => import('vue3/src/time-picker/time-picker.en-US.md'),
  //     },
  //     {
  //       title: 'TreeSelect 树选择',
  //       titleEn: 'TreeSelect',
  //       name: 'tree-select',
  //       path: '/vue/components/tree-select',
  //       component: () => import('vue3/src/tree-select/tree-select.md'),
  //       componentEn: () => import('vue3/src/tree-select/tree-select.en-US.md'),
  //     },
  //     {
  //       title: 'Upload 上传',
  //       titleEn: 'Upload',
  //       name: 'upload',
  //       path: '/vue/components/upload',
  //       component: () => import('vue3/src/upload/upload.md'),
  //       componentEn: () => import('vue3/src/upload/upload.en-US.md'),
  //     },
  //   ],
  // },
  // {
  //   title: '数据展示',
  //   titleEn: 'Data Display',
  //   type: 'component', // 组件文档
  //   children: [
  //     {
  //       title: 'Avatar 头像',
  //       titleEn: 'Avatar',
  //       name: 'avatar',
  //       path: '/vue/components/avatar',
  //       component: () => import('vue3/src/avatar/avatar.md'),
  //       componentEn: () => import('vue3/src/avatar/avatar.en-US.md'),
  //     },
  //     {
  //       title: 'Badge 徽标',
  //       titleEn: 'Badge',
  //       name: 'badge',
  //       path: '/vue/components/badge',
  //       component: () => import('vue3/src/badge/badge.md'),
  //       componentEn: () => import('vue3/src/badge/badge.en-US.md'),
  //     },
  //     {
  //       title: 'Calendar 日历',
  //       titleEn: 'Calendar',
  //       name: 'calendar',
  //       path: '/vue/components/calendar',
  //       component: () => import('vue3/src/calendar/calendar.md'),
  //       componentEn: () => import('vue3/src/calendar/calendar.en-US.md'),
  //     },
  //     {
  //       title: 'Card 卡片',
  //       titleEn: 'Card',
  //       name: 'card',
  //       docType: 'data',
  //       path: '/vue/components/card',
  //       component: () => import('vue3/src/card/card.md'),
  //       componentEn: () => import('vue3/src/card/card.en-US.md'),
  //     },
  //     {
  //       title: 'Collapse 折叠面板',
  //       titleEn: 'Collapse',
  //       name: 'collapse',
  //       docType: 'data',
  //       path: '/vue/components/collapse',
  //       component: () => import('vue3/src/collapse/collapse.md'),
  //       componentEn: () => import('vue3/src/collapse/collapse.en-US.md'),
  //     },
  //     {
  //       title: 'Comment 评论',
  //       titleEn: 'Comment',
  //       name: 'comment',
  //       path: '/vue/components/comment',
  //       component: () => import('vue3/src/comment/comment.md'),
  //       componentEn: () => import('vue3/src/comment/comment.en-US.md'),
  //     },
      {
        title: 'Descriptions 描述',
        titleEn: 'Descriptions',
        name: 'descriptions',
        path: '/vue/components/descriptions',
        component: () => import('@intel/components/descriptions/descriptions.md'),
        componentEn: () => import('@intel/components/descriptions/descriptions.en-US.md'),
      },
  //     {
  //       title: 'Image 图片',
  //       titleEn: 'Image',
  //       name: 'image',
  //       path: '/vue/components/image',
  //       component: () => import('vue3/src/image/image.md'),
  //       componentEn: () => import('vue3/src/image/image.en-US.md'),
  //     },
  //     {
  //       title: 'ImageViewer 图片预览',
  //       titleEn: 'ImageViewer',
  //       name: 'image-viewer',
  //       path: '/vue/components/image-viewer',
  //       component: () => import('vue3/src/image-viewer/image-viewer.md'),
  //       componentEn: () => import('vue3/src/image-viewer/image-viewer.en-US.md'),
  //     },
  //     {
  //       title: 'List 列表',
  //       titleEn: 'List',
  //       name: 'list',
  //       path: '/vue/components/list',
  //       component: () => import('vue3/src/list/list.md'),
  //       componentEn: () => import('vue3/src/list/list.en-US.md'),
  //     },
  //     {
  //       title: 'Loading 加载',
  //       titleEn: 'Loading',
  //       name: 'loading',
  //       path: '/vue/components/loading',
  //       component: () => import('vue3/src/loading/loading.md'),
  //       componentEn: () => import('vue3/src/loading/loading.en-US.md'),
  //     },
  //     {
  //       title: 'Progress 进度条',
  //       titleEn: 'Progress',
  //       name: 'progress',
  //       path: '/vue/components/progress',
  //       component: () => import('vue3/src/progress/progress.md'),
  //       componentEn: () => import('vue3/src/progress/progress.en-US.md'),
  //     },
  //     {
  //       title: 'Skeleton 骨架屏',
  //       titleEn: 'Skeleton',
  //       name: 'skeleton',
  //       path: '/vue/components/skeleton',
  //       component: () => import('vue3/src/skeleton/skeleton.md'),
  //       componentEn: () => import('vue3/src/skeleton/skeleton.en-US.md'),
  //     },
  //     {
  //       title: 'Statistic 统计数值',
  //       titleEn: 'Statistic',
  //       name: 'statistic',
  //       path: '/vue/components/statistic',
  //       component: () => import('vue3/src/statistic/statistic.md'),
  //       componentEn: () => import('vue3/src/statistic/statistic.en-US.md'),
  //     },
  //     {
  //       title: 'Swiper 轮播框',
  //       titleEn: 'Swiper',
  //       name: 'swiper',
  //       path: '/vue/components/swiper',
  //       component: () => import('vue3/src/swiper/swiper.md'),
  //       componentEn: () => import('vue3/src/swiper/swiper.en-US.md'),
  //     },
  //     {
  //       title: 'Table 表格',
  //       titleEn: 'Table',
  //       name: 'table',
  //       path: '/vue/components/table',
  //       component: () => import('vue3/src/table/table.md'),
  //       componentEn: () => import('vue3/src/table/table.en-US.md'),
  //     },
  //     {
  //       title: 'Tag 标签',
  //       titleEn: 'Tag',
  //       name: 'tag',
  //       path: '/vue/components/tag',
  //       component: () => import('vue3/src/tag/tag.md'),
  //       componentEn: () => import('vue3/src/tag/tag.en-US.md'),
  //     },
  //     {
  //       title: 'Timeline 时间轴',
  //       titleEn: 'Timeline',
  //       name: 'timeline',
  //       path: '/vue/components/timeline',
  //       component: () => import('vue3/src/timeline/timeline.md'),
  //       componentEn: () => import('vue3/src/timeline/timeline.en-US.md'),
  //     },
  //     {
  //       title: 'Tooltip 文字提示',
  //       titleEn: 'Tooltip',
  //       name: 'tooltip',
  //       path: '/vue/components/tooltip',
  //       component: () => import('vue3/src/tooltip/tooltip.md'),
  //       componentEn: () => import('vue3/src/tooltip/tooltip.en-US.md'),
  //     },
  //     {
  //       title: 'Tree 树',
  //       titleEn: 'Tree',
  //       name: 'tree',
  //       path: '/vue/components/tree',
  //       component: () => import('vue3/src/tree/tree.md'),
  //       componentEn: () => import('vue3/src/tree/tree.en-US.md'),
  //     },
  //     {
  //       title: 'Watermark 水印',
  //       titleEn: 'Watermark',
  //       name: 'watermark',
  //       path: '/vue/components/watermark',
  //       component: () => import('vue3/src/watermark/watermark.md'),
  //       componentEn: () => import('vue3/src/watermark/watermark.en-US.md'),
  //     },
  //     {
  //       title: 'Rate 评分',
  //       titleEn: 'Rate',
  //       name: 'rate',
  //       docType: 'data',
  //       path: '/vue/components/rate',
  //       component: () => import('vue3/src/rate/rate.md'),
  //       componentEn: () => import('vue3/src/rate/rate.en-US.md'),
  //     },
  //   ],
  // },
  // {
  //   title: '消息提醒',
  //   titleEn: 'Notifications',
  //   type: 'component', // 组件文档
  //   children: [
  //     {
  //       title: 'Alert 警告提醒',
  //       titleEn: 'Alert',
  //       name: 'alert',
  //       path: '/vue/components/alert',
  //       component: () => import('vue3/src/alert/alert.md'),
  //       componentEn: () => import('vue3/src/alert/alert.en-US.md'),
  //     },
  //     {
  //       title: 'Dialog 对话框',
  //       titleEn: 'Dialog',
  //       name: 'dialog',
  //       path: '/vue/components/dialog',
  //       component: () => import('vue3/src/dialog/dialog.md'),
  //       componentEn: () => import('vue3/src/dialog/dialog.en-US.md'),
  //     },
  //     {
  //       title: 'Drawer 抽屉',
  //       titleEn: 'Drawer',
  //       name: 'drawer',
  //       path: '/vue/components/drawer',
  //       component: () => import('vue3/src/drawer/drawer.md'),
  //       componentEn: () => import('vue3/src/drawer/drawer.en-US.md'),
  //     },
  //     {
  //       title: 'Guide 引导',
  //       titleEn: 'Guide',
  //       name: 'guide',
  //       path: '/vue/components/guide',
  //       component: () => import('vue3/src/guide/guide.md'),
  //       componentEn: () => import('vue3/src/guide/guide.en-US.md'),
  //     },
  //     {
  //       title: 'Message 全局提示',
  //       titleEn: 'Message',
  //       name: 'message',
  //       path: '/vue/components/message',
  //       component: () => import('vue3/src/message/message.md'),
  //       componentEn: () => import('vue3/src/message/message.en-US.md'),
  //     },
  //     {
  //       title: 'Notification 消息通知',
  //       titleEn: 'Notification',
  //       name: 'notification',
  //       path: '/vue/components/notification',
  //       component: () => import('vue3/src/notification/notification.md'),
  //       componentEn: () => import('vue3/src/notification/notification.en-US.md'),
  //     },
  //     {
  //       title: 'Popconfirm 气泡确认框',
  //       titleEn: 'Popconfirm',
  //       name: 'popconfirm',
  //       path: '/vue/components/popconfirm',
  //       component: () => import('vue3/src/popconfirm/popconfirm.md'),
  //       componentEn: () => import('vue3/src/popconfirm/popconfirm.en-US.md'),
  //     },
  //     {
  //       title: 'Popup 弹出层',
  //       titleEn: 'Popup',
  //       name: 'popup',
  //       path: '/vue/components/popup',
  //       component: () => import('vue3/src/popup/popup.md'),
  //       componentEn: () => import('vue3/src/popup/popup.en-US.md'),
  //     },
    ],
  },
];

const enDocs = docs.map((doc) => {
  return {
    ...doc,
    title: doc.titleEn,
    children: doc?.children?.map((child) => {
      return {
        title: child.titleEn,
        name: `${child.name}-en`,
        path: `${child.path}-en`,
        meta: { lang: 'en' },
        component: child.componentEn || child.component,
      };
    }),
  };
});

export default { docs, enDocs };