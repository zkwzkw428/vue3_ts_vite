<template>
  <div class="container">
    <h1>姓名：{{ name }}</h1>
    <h2>年龄:{{ age }}</h2>
    <button @click="b">提示b</button>
    <button @click="show">提示姓名</button>
  </div>
</template>

<script lang="ts">
export default {
    name: 'App',
    beforeCreate() {
      console.log('beforeCreate');
      
    },
    data() {
      return {
        name1:this.name
      }
    },
    methods: {
      show() {
        alert(this.name1)
      }
    },
    setup() {
      console.log('setup');
      
      let name = '张三'
      let age = 20
      function add() {
        age += 2
      }
      function b () {
        alert('b')
      }
      return  {
        name, age, add,b
      }
    }
 }
</script>

<style>
</style>