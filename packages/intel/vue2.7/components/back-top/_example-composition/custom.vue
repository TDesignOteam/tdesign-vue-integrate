<template>
  <t-space style="position: relative" direction="vertical">
    <t-space>
      <t-back-top style="position: relative" :visible-height="0" size="medium" :offset="[0, 0]"
      ><t-icon name="backtop" size="20"
      /></t-back-top>
      <t-back-top style="position: relative" :visible-height="0" size="medium" :offset="[0, 0]">
        <template #content>
          <span>返回顶部</span>
        </template>
      </t-back-top>
      <t-back-top
        style="position: relative"
        :visible-height="0"
        size="medium"
        :offset="[0, 0]"
        default="回到顶部"
      ></t-back-top>
    </t-space>
  </t-space>
</template>
