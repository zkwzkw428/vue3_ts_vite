<template>
  <div class="container">
    <h1>姓名：{{ name }}</h1>
    <h2>年龄:{{ age }}</h2>
    <button @click="changeName">更改姓名</button>
    <br>
    <button @click="changeAge">增加年龄</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "App",
};
</script>
<script setup name="appSugar">
import { ref } from 'vue';
  let name = ref('张三')
  let age = ref(10)
  function changeName() {
    name.value = "李四"
  }
  function changeAge() {
    age.value += 1
  }
</script>
<style></style>
