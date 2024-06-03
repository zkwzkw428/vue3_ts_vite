<template>
  <div class="ref3">
    <h2>我的电脑：{{ computer}}</h2>
    <h2>我的书本数量：{{ book }}</h2>
    <h2>父亲的车：{{ car }}</h2>
    <button @click="getCar($parent)">拿走父亲的车</button>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'MyRef3',
    setup() {
        let computer = ref('神舟电脑')
        let book = ref(6)
        let car = ref("")
        function getCar($parent) {
        if(!car.value) {
          car.value = $parent.car
        }else {
          return
        }
          $parent.car = ""
        }
        return {computer, book, car, getCar}
    }
}
</script>

<style scoped>
    .ref3 {
        padding: 10px;
        border-radius: 20px;
        background-color: hotpink;
    }
    button {
      border-radius: 20px;
      border: none;
      height: 30px;
    }
</style>