<template>
  <div class="f">
    <!-- v-model在标签上使用 -->
    <input type="text" v-model="data">
    <h1>{{ data }}</h1>
    <!-- <input v-model="username" @input="username = $event.target.value"></input> -->
    <!-- v-model在组件标签上使用 -->
    <!-- <diy-component v-model="username"></diy-component> -->
    <diy-component :modelValue="username" @update:modelValue="username = $event"></diy-component>
    <h1>{{ username }}</h1>
  </div>
</template>

<script>
import {ref} from 'vue'
import DiyComponent from '@/views/model/DiyComponent.vue'
export default {
    name: 'modelFather',
    setup() {
        let data = ref("你好世界")
        let username = ref('hhy')
        return {data, username}
    },
    components: {DiyComponent}
}
</script>

<style scoped>
    .f {
        height: 200px;
        padding: 10px;
        border-radius: 20px;
    }
    input {
        background-color: lightblue;
        border: none;
    }
</style>