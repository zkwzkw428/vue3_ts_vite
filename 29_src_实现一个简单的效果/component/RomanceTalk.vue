<template>
  <div class="love">
    <h1>土味情话展示</h1>
    <button @click="getLoveWords">添加一条情话</button>
    <ul class="love">
        <li v-for="love in loveList" :key="love.id">{{ love.words }}</li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue';
import {nanoid} from 'nanoid'
import axios from 'axios'
export default {
    name: 'RomanceTalk',
    setup() {
        let loveList = reactive([
            {id: nanoid(), words: '今天你有点怪，哪里怪?怪好看的!'},
            {id: nanoid(), words: '草莓，蓝莓，蔓越莓，今天你想我了没'},
            {id: nanoid(), words: '心里给你留了一块地，对你的死心塌地'}
        ])
        console.log(loveList);
        function getLoveWords() {
            axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            .then(({data:{content}}) => {
               loveList.unshift({id: nanoid(), words: content})
            })
        }
        return {loveList, getLoveWords}
    }
}
</script>

<style scoped>
    div.love {
        background-color: pink;
        box-shadow: 2px 10px purple;
        border-radius: 20px;
        /* width: 600px; */
    }
    ul.love li {
        list-style: none;
    }
</style>