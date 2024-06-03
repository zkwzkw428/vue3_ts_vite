<template>
  <div class="count">
    <h1>简易版计数器</h1>
    <h1>计算的值是:{{ countStore.sum }}</h1>
    <button @click="decrease">-</button>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increase">+</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useCountStore } from "../store/count.ts";
export default {
  name: "TestCount",
  setup() {
    let n = ref(1);
    const countStore = useCountStore();
    function increase() {
      // 第一种方式，直接操作数据
      // countStore.sum += n.value;
      // 第二种方式,利用方法操作数据
      // countStore.$patch({
      //   sum: (countStore.sum += n.value),
      // });
      // 第三种方式：actions
      countStore.increment(n.value);
    }
    function decrease() {
      countStore.sum -= n.value;
    }
    return { n, increase, decrease, countStore };
  },
};
</script>

<style scoped>
.count {
  background-color: lightblue;
  /* height: 100px; */
  width: 600px;
  border-radius: 10px;
  box-shadow: 2px 10px blue;
}
</style>
