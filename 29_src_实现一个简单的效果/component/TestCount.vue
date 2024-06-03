<template>
  <div class="count">
    <h1>简易版计数器</h1>
    <h1>计算的值是:{{ sum }}</h1>
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
export default {
  name: "TestCount",
  setup() {
    let n = ref(1);
    let sum = ref(0);
    function increase() {
      sum.value += n.value;
    }
    function decrease() {
      sum.value -= n.value;
    }
    return { n, sum, increase, decrease };
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
