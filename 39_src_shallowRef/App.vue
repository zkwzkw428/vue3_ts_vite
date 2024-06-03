<template>
  <div class="app">
    <h1>我的车：{{car}}</h1>
    <h2>名字：{{ person.name }}</h2>
    <h2>性别:{{ person.sex }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <hr>
    <h2>测试id:{{ test.id }}</h2>
    <h2>测试的name:{{ test.name }}</h2>
    <h2>测试深层数据:{{ test.deep.d1 }}</h2>
    <hr>
    <button @click="changeCarName">改变车名</button>
    <button @click="changePerson">改变整个人</button>
    <button @click="changePName">改变人名</button>
    <button @click="chaneTName">改变测试数据名</button>
    <button @click="changeDeep">改变深层数据</button>
  </div>
</template>

<script>
import {ref, shallowRef, shallowReactive} from 'vue'
export default {
    name: 'App',
    setup() {
      let car = ref('奔驰')
      let person = shallowRef({
        name: 'hhy',
        sex: '男',
        age: 20,
      })
      let test = shallowReactive({
        id: '001',
        name: '路人甲',
        deep: {
          d1: 'x',
          d2: 'y'
        }
      })
      function changeCarName() {
        car.value = '宝马'
      }
      function changePerson() {
        person.value = {name: 'hx', sex: '女', age: 21}
      }
      function changePName() {
        person.value.name = '张三'
      }
      function chaneTName() {
        test.name = '路人乙'
      }
      function changeDeep() {
        // test被浅层次修饰，无法检测到内层对象属性的变化
        test.deep.d1 = 'deep'
      }
      return {car, person, test, changeCarName, changePerson, changePName, chaneTName, changeDeep}
    },
}
</script>

<style>
  button {
    margin-right: 8px;
  }
</style>