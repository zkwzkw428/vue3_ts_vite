<template>
  <div class="container">
    <h1>今日水温：{{ temp }}</h1>
    <h1>水的高度：{{ height }}</h1>
    <button @click="tempControler">增加水温</button>
    <br>
    <button @click="heightControler">增加高度</button>
  </div>
</template>

<script lang="ts">
import { ref, watchEffect} from "vue";
export default {
  name: "App",
  setup() {
   let temp = ref(0)
   let height = ref(10)
   function tempControler() {
    temp.value += 10
   }
   function heightControler() {
    height.value += 10
   }
   watchEffect(() => {
    // 该回调函数当中用来的响应式数据被更都会触发该函数
    if(temp.value >= 60 || height.value >= 80) {
      console.log('水都涨家里来了,别tm睡觉了');
    }
   })
   return {temp, height, tempControler, heightControler}
  }
};
</script>
<style>
  .container {
    background: pink;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 10px 20px purple;
    font-size: 20px;
  }
  .container button {
    display: block;
    width: 100px;
    height: 50px;
    border: none;
    cursor: pointer;
    line-height: 50px;
    background-color: orange;
  }
</style>
