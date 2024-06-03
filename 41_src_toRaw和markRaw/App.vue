<template>
  <div class="app">
    <h1>可以改的名字{{ person.name }}</h1>
    <h1>不能改的名字:{{ person1.name }}</h1>
    <button @click="changeName">可以改</button>
    <button @click="changeP1Name">不能改</button>
    <hr>
    <h1>{{ price1 }}</h1>
    <button @click="price1.price = 100">改价格</button>
  </div>
</template>

<script>
import { toRaw, markRaw,reactive } from 'vue';
export default {
    name: 'App',
    setup() {
      // toRaw用于将某些数据默认指定为永不能响应式的数据
      const person = reactive({
        name: '张三',
        hobby: [
          "抽烟",
          "打牌",
          "泡妞"
        ]
      })
      const price = markRaw({
        price: 40,
        color: 'red'
      })
      // 无效，因为price被标记为非响应式对象
      const price1 = reactive(price)
      const person1 = toRaw(person)
      function changeName() {
        person.name = '李四'
      }
      function changeP1Name() {
        person1.name = '王五'
      }
      return {person, changeName, person1, changeP1Name,price1}
    },
}
</script>

<style>
  button {
    margin-right: 8px;
  }
</style>