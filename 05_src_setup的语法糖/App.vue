<template>
  <div class="container">
    <h1>姓名：{{ name }}</h1>
    <h2>年龄:{{ age }}</h2>
    <button @click="b">提示b</button>
    <button @click="show">提示姓名</button>
    <button @click="add">增加年龄</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "App",
};
</script>
<script setup name="appSugar">
console.log("setup");
let name = "张三";
let age = 20;
function add() {
  age += 2;
}
function b() {
  alert("b");
}
</script>
<style></style>
