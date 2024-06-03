<template>
  <div class="ref2">
    <h2>我的玩具：{{ toy }}</h2>
    <h2>我的书本数量:{{ book }}</h2>
    <button @click="decreaseHouse($parent)">夺取父亲的房产</button>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'MyRef2',
    setup() {
        let toy = ref('奥特曼')
        let book = ref(3)
        function decreaseHouse($parent) {
          $parent.house -= 1
        }
        return {toy, book, decreaseHouse}
    }
}
</script>

<style scoped>
    .ref2 {
        padding: 10px;
        border-radius: 20px;
        background-color: deepskyblue;
    }
    button {
      border-radius: 20px;
      height: 30px;
      border: none;
    }
</style>