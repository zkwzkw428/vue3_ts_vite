<template>
  <div class="container">
  <showEffect :data="car"></showEffect>
  </div>
</template>

<script lang="ts">
import { type Persons, type PersonInter, type CarLimit} from './types/index'
import showEffect from './components/showEffect.vue'
export default {
  name: "App",
  setup() {
    let person:PersonInter = {id: '003', name: 'hx', num:20};
    let personList:Persons= [
      {id: '001', name: 'jack', num: 1},
      {id: '001', name: 'jack', num: 1},
      {id: '001', name: 'jack', num: 1},
    ]
    let car:CarLimit = {name: '宝马', address: '上海', price: 50}
    return {personList, person, car}
  },
  components: {showEffect}
};
</script>
<style>
.container {
  background: pink;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 10px 20px purple;
  font-size: 20px;
}
.container button {
  display: block;
  width: 100px;
  height: 50px;
  border: none;
  cursor: pointer;
  line-height: 50px;
  background-color: orange;
}
</style>
