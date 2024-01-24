import * as Vue from "vue";

function getCurrentInstance() {
  const innerInstance = Vue.getCurrentInstance()?.proxy;
  const instance = {
    ...innerInstance,
    props: innerInstance?.$props
  }

  return instance;
}

export * from 'vue'
export {
  getCurrentInstance,
}