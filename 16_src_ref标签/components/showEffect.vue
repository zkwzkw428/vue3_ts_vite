<template>
  <div>
    <h1>测试</h1>
    <input type="text" v-model="data" />
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'showEffect',
    setup() {
        let data = ref('hello world')
        return {
            data
        }
    }
}
</script>

<style>

</style>