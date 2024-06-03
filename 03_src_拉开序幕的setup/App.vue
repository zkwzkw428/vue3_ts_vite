<template>
  <div class="container">
    <h1>姓名：{{ name }}</h1>
    <h2>年龄:{{ age }}</h2>
  </div>
</template>

<script lang="ts">
export default {
    name: 'App',
    beforeCreate() {

    },
    setup() {
      console.log('setup');
      
      let name = '张三'
      let age = 20
      function add() {
        age += 2
      }
      return  {
        name, age, add
      }
    }
 }
</script>

<style>
</style>