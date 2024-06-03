<template>
  <div class="father">
    <h2 v-show="food">儿子喜欢吃的水果是:{{ food }}</h2>
    <custom-child @send="getfood"></custom-child>
  </div>
</template>

<script>
import {ref} from 'vue'
import customChild from '@/views/custom/customChild.vue'
export default {
    name: 'customFather',
    setup() {
       let food = ref("");
       function getfood(food) {
        food.value = food
       }
       return {food, getfood}
    },
    components: {customChild}
}
</script>

<style scoped>
  .father {
    padding: 10px;
    height: 100px;
    background-color: cyan;
    border-radius: 20px;
  }
</style>