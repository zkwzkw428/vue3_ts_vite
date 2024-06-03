<template>
  <div class="son">
    <h1>父组件给的车:{{ car }}</h1>
  </div>
</template>

<script>
import {defineProps} from '@vitejs/plugin-vue'
export default {
    name: 'ComponentSon',
    setup() {
        defineProps(['car'])
    }
}
</script>

<style>

</style>