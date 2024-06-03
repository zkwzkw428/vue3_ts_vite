<template>
  <div>
    <h1>显示一个数字:{{ num }}</h1>
    <button @click="num++">点击加1</button>
  </div>
</template>

<script>
// 引入生命周期函数
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
export default {
  name: "TextPerson",
  setup() {
    let num = ref(0);
    console.log('组件开始创建');
    onBeforeMount(() => {
        console.log('组件挂载之前调用...');
    })
    onMounted(() => {
        console.log('组件挂载完毕之后调用');
    })
    onBeforeUpdate(() => {
        console.log('组件数据更新之前调用');
    })
    onUpdated(() => {
        console.log('组件更新完毕调用');
    })
    onBeforeUnmount(() => {
        console.log('组件准备开始卸载');
    })
    onUnmounted(() => {
        console.log('组件卸载完毕over。。。');
    })
    return { num };
  },
};
</script>

<style></style>
