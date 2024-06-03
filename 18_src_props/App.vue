<template>
  <div class="app">
    <component-son :car="car"></component-son>
  </div>
</template>

<script>
import ComponentSon from './component/ComponentSon.vue'
import {reactive} from 'vue'
export default {
    name: 'App',
    setup() {
        let car = reactive({
            brand: '宝马',
            price: 40
        })
        return {car}
    },
    components: {ComponentSon}
}
</script>

<style>

</style>