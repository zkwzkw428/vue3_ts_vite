<template>
  <div class="father">
    <h2>我有一台车:{{ car }}</h2>
    <h2>儿子给我的玩具:{{ toy }}</h2>
    <props-child :car="car" :sendToy="getToys"></props-child>
  </div>
</template>

<script>
import propsChild from './propsChild.vue'
import {ref} from 'vue'
export default {
    name: 'propsFather',
    setup() {
        let car = ref('奔驰')
        let toy = ref("")
        console.log(toy);
        function getToys(value) {
          toy.value = value
        }
        return {car, getToys, toy}
    },
    components: {propsChild}
}
</script>

<style scoped>
  .father {
    padding: 10px;
    background-color: bisque;
    border-radius: 20px;
  }
</style>