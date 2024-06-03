<template>
    <div class="ref1">
        <h2>我是父组件</h2>
        <h3>房产数量：{{ house }}</h3>
        <h4 v-show="car">车的品牌：{{ car }}</h4>
        <button @click="changeToys($refs)">更改孩砸的玩具</button>
        <div class="children">
            <my-ref-2 ref="c1"></my-ref-2>
            <my-ref-3 ref="c2"></my-ref-3>
        </div>
    </div>
</template>

<script>
import MyRef2 from './MyRef2.vue'
import MyRef3 from './MyRef3.vue'
import {ref} from 'vue'
export default {
    name: 'MyRef1',
    setup() {
        let c1 = ref()
        let c2 = ref()
        let house = ref(3)
        let car = ref('奔驰')
        function changeToys($refs) {
            for(let key in $refs) {
                $refs[key].book += 2
            }
        }
        return {house, car, c1, c2, changeToys}
    },
    components: {MyRef2, MyRef3,}
}
</script>

<style scoped>
    .ref1 {
        padding: 10px;
        background-color: darkorchid;
        border-radius: 20px;
    }
    button {
        border-radius: 20px;
        border: none;
        height: 20px;
    }
</style>