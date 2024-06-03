<template>
  <div class="app">
    <h2>自定义Ref</h2>
    <h2>{{ data }}</h2>
    <input type="text" v-model="data" />
  </div>
</template>

<script>
import { customRef } from "vue";
export default {
  name: "App",
  setup() {
    let initVlaue = 'helloWorld'
    let data = customRef((track, trigger) => {
      let timer = null;
      return {
        get() {
          // 跟踪依赖
          track()
          return initVlaue
        },
        set(value) {
          clearTimeout(timer)
          timer = setTimeout(() => {
            initVlaue = value
            // 通知vue更新模版
            trigger()
          }, 2000)
        }
      }
    })
    return {data}
  },
};
</script>

<style>
button {
  margin-right: 8px;
}
</style>
