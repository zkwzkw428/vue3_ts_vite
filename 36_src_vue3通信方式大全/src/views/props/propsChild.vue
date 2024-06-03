<template>
  <div class="son">
    <button @click="sendToy(atm)">给父亲一个玩具</button>
    <h2>父亲的车:{{ car }}</h2>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'propsChild',
    props: ['car', 'sendToy'],
    setup() {
        let atm = ref('奥特曼')
        return {atm}  
    }
}
</script>

<style>
  .son {
    padding: 10px;
    background-color: aqua;
    border-radius: 20px;
  }
</style>