<template>
  <t-breadcrumb :separator="() => '/'">
    <t-breadcrumbItem>页面1</t-breadcrumbItem>
    <t-breadcrumbItem>页面2 <chevron-down-icon name="chevron-down" /></t-breadcrumbItem>
    <t-breadcrumbItem>页面3</t-breadcrumbItem>
  </t-breadcrumb>
</template>
<script setup>
import { ChevronDownIcon } from 'tdesign-icons-vue';
</script>
