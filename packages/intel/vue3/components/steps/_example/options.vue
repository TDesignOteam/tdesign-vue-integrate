<template>
  <t-steps :current="current" :options="options" />
</template>

<script setup>
const options = [
  {
    title: '步骤一',
    content: '这里是提示文字',
  },
  {
    title: '步骤二',
    content: '这里是提示文字',
  },
  {
    title: '步骤三',
    content: '这里是提示文字',
  },
  {
    title: '步骤四',
    content: '这里是提示文字',
  },
];
const current = 1;
</script>
