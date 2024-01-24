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
  //       component: () => import('@intel/components/config-provider/config-provider.md'),
  //       componentEn: () => import('@intel/components/config-provider/config-provider.en-US.md'),
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
  //       component: () => import('@intel/components/button/button.md'),
  //       componentEn: () => import('@intel/components/button/button.en-US.md'),
  //     },
  //     {
  //       title: 'Icon 图标',
  //       titleEn: 'Icon',
  //       name: 'icon',
  //       path: '/vue/components/icon',
  //       component: () => import('@intel/components/icon/icon.md'),
  //       componentEn: () => import('@intel/components/icon/icon.en-US.md'),
  //     },
  //     {
  //       title: 'Link 链接',
  //       titleEn: 'Link',
  //       name: 'link',
  //       path: '/vue/components/link',
  //       component: () => import('@intel/components/link/link.md'),
  //       componentEn: () => import('@intel/components/link/link.en-US.md'),
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
  //       component: () => import('@intel/components/divider/divider.md'),
  //       componentEn: () => import('@intel/components/divider/divider.en-US.md'),
  //     },
  //     {
  //       title: 'Grid 栅格',
  //       titleEn: 'Grid',
  //       name: 'grid',
  //       path: '/vue/components/grid',
  //       component: () => import('@intel/components/grid/grid.md'),
  //       componentEn: () => import('@intel/components/grid/grid.en-US.md'),
  //     },
  //     {
  //       title: 'Layout 布局',
  //       titleEn: 'Layout',
  //       name: 'layout',
  //       path: '/vue/components/layout',
  //       component: () => import('@intel/components/layout/layout.md'),
  //       componentEn: () => import('@intel/components/layout/layout.en-US.md'),
  //     },
  //     {
  //       title: 'Space 间距',
  //       titleEn: 'Space',
  //       name: 'space',
  //       path: '/vue/components/space',
  //       component: () => import('@intel/components/space/space.md'),
  //       componentEn: () => import('@intel/components/space/space.en-US.md'),
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
  //       component: () => import('@intel/components/affix/affix.md'),
  //       componentEn: () => import('@intel/components/affix/affix.en-US.md'),
  //     },
  //     {
  //       title: 'Anchor 锚点',
  //       titleEn: 'Anchor',
  //       name: 'anchor',
  //       path: '/vue/components/anchor',
  //       component: () => import('@intel/components/anchor/anchor.md'),
  //       componentEn: () => import('@intel/components/anchor/anchor.en-US.md'),
  //     },
  //     {
  //       title: 'BackTop 回到顶部',
  //       titleEn: 'BackTop',
  //       name: 'back-top',
  //       path: '/vue/components/back-top',
  //       component: () => import('@intel/components/back-top/back-top.md'),
  //       componentEn: () => import('@intel/components/back-top/back-top.en-US.md'),
  //     },
  //     {
  //       title: 'Breadcrumb 面包屑',
  //       titleEn: 'Breadcrumb',
  //       name: 'breadcrumb',
  //       path: '/vue/components/breadcrumb',
  //       component: () => import('@intel/components/breadcrumb/breadcrumb.md'),
  //       componentEn: () => import('@intel/components/breadcrumb/breadcrumb.en-US.md'),
  //     },
  //     {
  //       title: 'Dropdown 下拉菜单',
  //       titleEn: 'Dropdown',
  //       name: 'dropdown',
  //       path: '/vue/components/dropdown',
  //       component: () => import('@intel/components/dropdown/dropdown.md'),
  //       componentEn: () => import('@intel/components/dropdown/dropdown.en-US.md'),
  //     },
  //     {
  //       title: 'Menu 导航菜单',
  //       titleEn: 'Menu',
  //       name: 'menu',
  //       path: '/vue/components/menu',
  //       component: () => import('@intel/components/menu/menu.md'),
  //       componentEn: () => import('@intel/components/menu/menu.en-US.md'),
  //     },
  //     {
  //       title: 'Pagination 分页',
  //       titleEn: 'Pagination',
  //       name: 'pagination',
  //       path: '/vue/components/pagination',
  //       component: () => import('@intel/components/pagination/pagination.md'),
  //       componentEn: () => import('@intel/components/pagination/pagination.en-US.md'),
  //     },
  //     {
  //       title: 'Steps 步骤条',
  //       titleEn: 'Steps',
  //       name: 'steps',
  //       path: '/vue/components/steps',
  //       component: () => import('@intel/components/steps/steps.md'),
  //       componentEn: () => import('@intel/components/steps/steps.en-US.md'),
  //     },
  //     {
  //       title: 'StickyTool 侧边栏',
  //       titleEn: 'StickyTool',
  //       name: 'StickyTool',
  //       path: '/vue/components/sticky-tool',
  //       component: () => import('@intel/components/sticky-tool/sticky-tool.md'),
  //       componentEn: () => import('@intel/components/sticky-tool/sticky-tool.en-US.md'),
  //     },
  //     {
  //       title: 'Tabs 选项卡',
  //       titleEn: 'Tabs',
  //       name: 'tabs',
  //       path: '/vue/components/tabs',
  //       component: () => import('@intel/components/tabs/tabs.md'),
  //       componentEn: () => import('@intel/components/tabs/tabs.en-US.md'),
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
  //       component: () => import('@intel/components/auto-complete/auto-complete.md'),
  //       componentEn: () => import('@intel/components/auto-complete/auto-complete.en-US.md'),
  //     },
  //     {
  //       title: 'Cascader 级联组件',
  //       titleEn: 'Cascader',
  //       name: 'cascader',
  //       path: '/vue/components/cascader',
  //       component: () => import('@intel/components/cascader/cascader.md'),
  //       componentEn: () => import('@intel/components/cascader/cascader.en-US.md'),
  //     },
  //     {
  //       title: 'Checkbox 多选框',
  //       titleEn: 'Checkbox',
  //       name: 'checkbox',
  //       path: '/vue/components/checkbox',
  //       component: () => import('@intel/components/checkbox/checkbox.md'),
  //       componentEn: () => import('@intel/components/checkbox/checkbox.en-US.md'),
  //     },
  //     {
  //       title: 'ColorPicker 颜色选择器',
  //       titleEn: 'ColorPicker',
  //       name: 'color-picker',
  //       path: '/vue/components/color-picker',
  //       component: () => import('@intel/components/color-picker/color-picker.md'),
  //       componentEn: () => import('@intel/components/color-picker/color-picker.en-US.md'),
  //     },
  //     {
  //       title: 'DatePicker 日期选择器',
  //       titleEn: 'DatePicker',
  //       name: 'date-picker',
  //       path: '/vue/components/date-picker',
  //       component: () => import('@intel/components/date-picker/date-picker.md'),
  //       componentEn: () => import('@intel/components/date-picker/date-picker.en-US.md'),
  //     },
  //     {
  //       title: 'Form 表单',
  //       titleEn: 'Form',
  //       name: 'form',
  //       path: '/vue/components/form',
  //       component: () => import('@intel/components/form/form.md'),
  //       componentEn: () => import('@intel/components/form/form.en-US.md'),
  //     },
  //     {
  //       title: 'Input 输入框',
  //       titleEn: 'Input',
  //       name: 'input',
  //       path: '/vue/components/input',
  //       component: () => import('@intel/components/input/input.md'),
  //       componentEn: () => import('@intel/components/input/input.en-US.md'),
  //     },
  //     {
  //       title: 'InputAdornment 输入装饰器',
  //       titleEn: 'InputAdornment',
  //       name: 'input-adornment',
  //       path: '/vue/components/input-adornment',
  //       component: () => import('@intel/components/input-adornment/input-adornment.md'),
  //       componentEn: () => import('@intel/components/input-adornment/input-adornment.en-US.md'),
  //     },
  //     {
  //       title: 'InputNumber 数字输入框',
  //       titleEn: 'InputNumber',
  //       name: 'input-number',
  //       path: '/vue/components/input-number',
  //       component: () => import('@intel/components/input-number/input-number.md'),
  //       componentEn: () => import('@intel/components/input-number/input-number.en-US.md'),
  //     },
  //     {
  //       title: 'TagInput 标签输入框',
  //       titleEn: 'TagInput',
  //       name: 'tag-input',
  //       docType: 'form',
  //       path: '/vue/components/tag-input',
  //       component: () => import('@intel/components/tag-input/tag-input.md'),
  //       componentEn: () => import('@intel/components/tag-input/tag-input.en-US.md'),
  //     },
  //     {
  //       title: 'Radio 单选框',
  //       titleEn: 'Radio',
  //       name: 'radio',
  //       path: '/vue/components/radio',
  //       component: () => import('@intel/components/radio/radio.md'),
  //       componentEn: () => import('@intel/components/radio/radio.en-US.md'),
  //     },
  //     {
  //       title: 'RangeInput 范围输入框',
  //       titleEn: 'RangeInput',
  //       name: 'range-input',
  //       path: '/vue/components/range-input',
  //       component: () => import('@intel/components/range-input/range-input.md'),
  //       componentEn: () => import('@intel/components/range-input/range-input.en-US.md'),
  //     },
  //     {
  //       title: 'Select 选择器',
  //       titleEn: 'Select',
  //       name: 'select',
  //       path: '/vue/components/select',
  //       component: () => import('@intel/components/select/select.md'),
  //       componentEn: () => import('@intel/components/select/select.en-US.md'),
  //     },
  //     {
  //       title: 'SelectInput 筛选器输入框',
  //       titleEn: 'SelectInput',
  //       name: 'select-input',
  //       docType: 'form',
  //       path: '/vue/components/select-input',
  //       component: () => import('@intel/components/select-input/select-input.md'),
  //       componentEn: () => import('@intel/components/select-input/select-input.en-US.md'),
  //     },
  //     {
  //       title: 'Slider 滑块',
  //       titleEn: 'Slider',
  //       name: 'slider',
  //       path: '/vue/components/slider',
  //       component: () => import('@intel/components/slider/slider.md'),
  //       componentEn: () => import('@intel/components/slider/slider.en-US.md'),
  //     },
      {
        title: 'Switch 开关',
        titleEn: 'Switch',
        name: 'switch',
        path: '/vue/components/switch',
        component: () => import('@intel/components/switch/switch.md'),
        componentEn: () => import('@intel/components/switch/switch.en-US.md'),
      },
  //     {
  //       title: 'Textarea 多行文本框',
  //       titleEn: 'Textarea',
  //       name: 'textarea',
  //       path: '/vue/components/textarea',
  //       component: () => import('@intel/components/textarea/textarea.md'),
  //       componentEn: () => import('@intel/components/textarea/textarea.en-US.md'),
  //     },
  //     {
  //       title: 'Transfer 穿梭框',
  //       titleEn: 'Transfer',
  //       name: 'transfer',
  //       path: '/vue/components/transfer',
  //       component: () => import('@intel/components/transfer/transfer.md'),
  //       componentEn: () => import('@intel/components/transfer/transfer.en-US.md'),
  //     },
  //     {
  //       title: 'TimePicker 时间选择器',
  //       titleEn: 'TimePicker',
  //       name: 'time-picker',
  //       path: '/vue/components/time-picker',
  //       component: () => import('@intel/components/time-picker/time-picker.md'),
  //       componentEn: () => import('@intel/components/time-picker/time-picker.en-US.md'),
  //     },
  //     {
  //       title: 'TreeSelect 树选择',
  //       titleEn: 'TreeSelect',
  //       name: 'tree-select',
  //       path: '/vue/components/tree-select',
  //       component: () => import('@intel/components/tree-select/tree-select.md'),
  //       componentEn: () => import('@intel/components/tree-select/tree-select.en-US.md'),
  //     },
  //     {
  //       title: 'Upload 上传',
  //       titleEn: 'Upload',
  //       name: 'upload',
  //       path: '/vue/components/upload',
  //       component: () => import('@intel/components/upload/upload.md'),
  //       componentEn: () => import('@intel/components/upload/upload.en-US.md'),
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
  //       component: () => import('@intel/components/avatar/avatar.md'),
  //       componentEn: () => import('@intel/components/avatar/avatar.en-US.md'),
  //     },
  //     {
  //       title: 'Badge 徽标',
  //       titleEn: 'Badge',
  //       name: 'badge',
  //       path: '/vue/components/badge',
  //       component: () => import('@intel/components/badge/badge.md'),
  //       componentEn: () => import('@intel/components/badge/badge.en-US.md'),
  //     },
  //     {
  //       title: 'Calendar 日历',
  //       titleEn: 'Calendar',
  //       name: 'calendar',
  //       path: '/vue/components/calendar',
  //       component: () => import('@intel/components/calendar/calendar.md'),
  //       componentEn: () => import('@intel/components/calendar/calendar.en-US.md'),
  //     },
  //     {
  //       title: 'Card 卡片',
  //       titleEn: 'Card',
  //       name: 'card',
  //       docType: 'data',
  //       path: '/vue/components/card',
  //       component: () => import('@intel/components/card/card.md'),
  //       componentEn: () => import('@intel/components/card/card.en-US.md'),
  //     },
  //     {
  //       title: 'Collapse 折叠面板',
  //       titleEn: 'Collapse',
  //       name: 'collapse',
  //       docType: 'data',
  //       path: '/vue/components/collapse',
  //       component: () => import('@intel/components/collapse/collapse.md'),
  //       componentEn: () => import('@intel/components/collapse/collapse.en-US.md'),
  //     },
  //     {
  //       title: 'Comment 评论',
  //       titleEn: 'Comment',
  //       name: 'comment',
  //       path: '/vue/components/comment',
  //       component: () => import('@intel/components/comment/comment.md'),
  //       componentEn: () => import('@intel/components/comment/comment.en-US.md'),
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
  //       component: () => import('@intel/components/image/image.md'),
  //       componentEn: () => import('@intel/components/image/image.en-US.md'),
  //     },
  //     {
  //       title: 'ImageViewer 图片预览',
  //       titleEn: 'ImageViewer',
  //       name: 'image-viewer',
  //       path: '/vue/components/image-viewer',
  //       component: () => import('@intel/components/image-viewer/image-viewer.md'),
  //       componentEn: () => import('@intel/components/image-viewer/image-viewer.en-US.md'),
  //     },
  //     {
  //       title: 'List 列表',
  //       titleEn: 'List',
  //       name: 'list',
  //       path: '/vue/components/list',
  //       component: () => import('@intel/components/list/list.md'),
  //       componentEn: () => import('@intel/components/list/list.en-US.md'),
  //     },
  //     {
  //       title: 'Loading 加载',
  //       titleEn: 'Loading',
  //       name: 'loading',
  //       path: '/vue/components/loading',
  //       component: () => import('@intel/components/loading/loading.md'),
  //       componentEn: () => import('@intel/components/loading/loading.en-US.md'),
  //     },
  //     {
  //       title: 'Progress 进度条',
  //       titleEn: 'Progress',
  //       name: 'progress',
  //       path: '/vue/components/progress',
  //       component: () => import('@intel/components/progress/progress.md'),
  //       componentEn: () => import('@intel/components/progress/progress.en-US.md'),
  //     },
  //     {
  //       title: 'Skeleton 骨架屏',
  //       titleEn: 'Skeleton',
  //       name: 'skeleton',
  //       path: '/vue/components/skeleton',
  //       component: () => import('@intel/components/skeleton/skeleton.md'),
  //       componentEn: () => import('@intel/components/skeleton/skeleton.en-US.md'),
  //     },
  //     {
  //       title: 'Statistic 统计数值',
  //       titleEn: 'Statistic',
  //       name: 'statistic',
  //       path: '/vue/components/statistic',
  //       component: () => import('@intel/components/statistic/statistic.md'),
  //       componentEn: () => import('@intel/components/statistic/statistic.en-US.md'),
  //     },
  //     {
  //       title: 'Swiper 轮播框',
  //       titleEn: 'Swiper',
  //       name: 'swiper',
  //       path: '/vue/components/swiper',
  //       component: () => import('@intel/components/swiper/swiper.md'),
  //       componentEn: () => import('@intel/components/swiper/swiper.en-US.md'),
  //     },
  //     {
  //       title: 'Table 表格',
  //       titleEn: 'Table',
  //       name: 'table',
  //       path: '/vue/components/table',
  //       component: () => import('@intel/components/table/table.md'),
  //       componentEn: () => import('@intel/components/table/table.en-US.md'),
  //     },
  //     {
  //       title: 'Tag 标签',
  //       titleEn: 'Tag',
  //       name: 'tag',
  //       path: '/vue/components/tag',
  //       component: () => import('@intel/components/tag/tag.md'),
  //       componentEn: () => import('@intel/components/tag/tag.en-US.md'),
  //     },
  //     {
  //       title: 'Timeline 时间轴',
  //       titleEn: 'Timeline',
  //       name: 'timeline',
  //       path: '/vue/components/timeline',
  //       component: () => import('@intel/components/timeline/timeline.md'),
  //       componentEn: () => import('@intel/components/timeline/timeline.en-US.md'),
  //     },
  //     {
  //       title: 'Tooltip 文字提示',
  //       titleEn: 'Tooltip',
  //       name: 'tooltip',
  //       path: '/vue/components/tooltip',
  //       component: () => import('@intel/components/tooltip/tooltip.md'),
  //       componentEn: () => import('@intel/components/tooltip/tooltip.en-US.md'),
  //     },
  //     {
  //       title: 'Tree 树',
  //       titleEn: 'Tree',
  //       name: 'tree',
  //       path: '/vue/components/tree',
  //       component: () => import('@intel/components/tree/tree.md'),
  //       componentEn: () => import('@intel/components/tree/tree.en-US.md'),
  //     },
  //     {
  //       title: 'Watermark 水印',
  //       titleEn: 'Watermark',
  //       name: 'watermark',
  //       path: '/vue/components/watermark',
  //       component: () => import('@intel/components/watermark/watermark.md'),
  //       componentEn: () => import('@intel/components/watermark/watermark.en-US.md'),
  //     },
  //     {
  //       title: 'Rate 评分',
  //       titleEn: 'Rate',
  //       name: 'rate',
  //       docType: 'data',
  //       path: '/vue/components/rate',
  //       component: () => import('@intel/components/rate/rate.md'),
  //       componentEn: () => import('@intel/components/rate/rate.en-US.md'),
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
  //       component: () => import('@intel/components/alert/alert.md'),
  //       componentEn: () => import('@intel/components/alert/alert.en-US.md'),
  //     },
  //     {
  //       title: 'Dialog 对话框',
  //       titleEn: 'Dialog',
  //       name: 'dialog',
  //       path: '/vue/components/dialog',
  //       component: () => import('@intel/components/dialog/dialog.md'),
  //       componentEn: () => import('@intel/components/dialog/dialog.en-US.md'),
  //     },
  //     {
  //       title: 'Drawer 抽屉',
  //       titleEn: 'Drawer',
  //       name: 'drawer',
  //       path: '/vue/components/drawer',
  //       component: () => import('@intel/components/drawer/drawer.md'),
  //       componentEn: () => import('@intel/components/drawer/drawer.en-US.md'),
  //     },
  //     {
  //       title: 'Guide 引导',
  //       titleEn: 'Guide',
  //       name: 'guide',
  //       path: '/vue/components/guide',
  //       component: () => import('@intel/components/guide/guide.md'),
  //       componentEn: () => import('@intel/components/guide/guide.en-US.md'),
  //     },
  //     {
  //       title: 'Message 全局提示',
  //       titleEn: 'Message',
  //       name: 'message',
  //       path: '/vue/components/message',
  //       component: () => import('@intel/components/message/message.md'),
  //       componentEn: () => import('@intel/components/message/message.en-US.md'),
  //     },
  //     {
  //       title: 'Notification 消息通知',
  //       titleEn: 'Notification',
  //       name: 'notification',
  //       path: '/vue/components/notification',
  //       component: () => import('@intel/components/notification/notification.md'),
  //       componentEn: () => import('@intel/components/notification/notification.en-US.md'),
  //     },
  //     {
  //       title: 'Popconfirm 气泡确认框',
  //       titleEn: 'Popconfirm',
  //       name: 'popconfirm',
  //       path: '/vue/components/popconfirm',
  //       component: () => import('@intel/components/popconfirm/popconfirm.md'),
  //       componentEn: () => import('@intel/components/popconfirm/popconfirm.en-US.md'),
  //     },
  //     {
  //       title: 'Popup 弹出层',
  //       titleEn: 'Popup',
  //       name: 'popup',
  //       path: '/vue/components/popup',
  //       component: () => import('@intel/components/popup/popup.md'),
  //       componentEn: () => import('@intel/components/popup/popup.en-US.md'),
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