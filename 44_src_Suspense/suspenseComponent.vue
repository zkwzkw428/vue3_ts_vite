<template>
  <h2>从网上获取的狗狗</h2>
  <img :src="dogImg" alt="dog">
</template>

<script>
import axios from 'axios'
import {ref} from 'vue'
export default {
    name: 'suspenseCompoent',
    async setup() {
        let dogImg = ref("")
        let {data:{message}} = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
        dogImg.value = message
        return {dogImg}
    }
}
</script>

<style scoped>
    img {
        width: 200px;
    }
</style>