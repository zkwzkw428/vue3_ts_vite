<template>
  <div class="in3">
    <h2>我是孙组件</h2>
    <h2>我拿到的钱:{{ myMoney }}w</h2>
    <h2>爷爷的资产:{{ money }}w</h2>
    <button @click="getMoney">狠狠的拿爷爷的钱</button>
  </div>
</template>

<script>
import {ref} from 'vue'
import {inject} from 'vue'
export default {
    name: 'myinject3',
    setup() {
        let myMoney = ref(0);
        let {money, decrementMoney} = inject(['moneyContent'])
        function getMoney() {
            if(money.value <= 0) {
                return
            }
            const perMoney = 1
            decrementMoney(perMoney)
            myMoney.value += perMoney
        }
        return {money, decrementMoney, myMoney, getMoney}
    }
}
</script>

<style scoped>
    .in3 {
        padding: 10px;
        border-radius: 20px;
        background-color: gray;
    }
</style>