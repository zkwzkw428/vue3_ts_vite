<template>
  <div class="in1">
    <h2>我是爷组件</h2>
    <h2>资产:{{ money }}w</h2>
    <myinject-2></myinject-2>
  </div>
</template>

<script>
import myinject2 from './myinject2.vue'
import {ref} from 'vue'
import {provide} from 'vue'
export default {
    name: 'myinject1',
    setup() {
        let money = ref(100)
        function decrementMoney(value) {
            money.value -= value
        }
        // 提供数据
        // 此处.value的话传递的不是响应式数据，因为是一个普通的值，而不是实现引用对象
        provide('moneyContent', {money, decrementMoney})
        return {money}
    },
    components: {myinject2}
}
</script>

<style coped>
    .in1 {
        padding: 10px;
        border-radius: 20px;
        background-color: mediumpurple;
    }
</style>