<template>
  <div class="A">
    <h1>仓库当中的数据：{{ countData.num }}</h1>
    <button @click="countData.num++">点击加1</button>
  </div>
</template>

<script>
import {useCountData} from '@/views/pinia/store/index.ts'
export default {
    name: 'piniaA',
    setup() {
        const countData  = useCountData()
        return {countData}
    }
}
</script>

<style>
    .A {
        padding: 10px;
        background-color: orange;
        border-radius: 20px;
    }
</style>