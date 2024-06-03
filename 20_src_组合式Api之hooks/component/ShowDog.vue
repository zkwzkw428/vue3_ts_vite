<template>
  <div class="dog">
    <h1>从网络上获取狗狗</h1>
    <button @click="getDogs">获取狗狗</button>
    <ul>
        <li v-for="(g, index) in initData" :key="index"><img :src="g" alt="dog"></li>
    </ul>
  </div>
</template>
<script>
import useDog from '../hooks/useDog'
export default {
    name: 'ShowDog',
    setup() {
       let {initData, getDogs} = useDog()
       return {initData, getDogs}
    }
}
</script>

<style scoped>
    ul li {
        float: left;
        margin-right: 10px;
        list-style: none;
        /* clear: both; */
    }
    ul li img {
        height: 200px;
    }
    .dog button {
        display: block;
        width: 100px;
        text-align: center;
        padding: 10px;
        border-radius: 30px;
        background-color: pink;
        border: none;
    }
</style>