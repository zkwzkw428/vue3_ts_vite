<template>
  <div>
    <h1>父亲给我的车:{{data.name}} --{{ data.address }}--{{ data.price }}</h1>
  </div>
</template>

<script>
import { defineProps } from 'vue';
export default {
    name: 'showEffect',
    setup() {
      let data = defineProps['data']
        return {
         data
        }
    }
}
</script>

<style>

</style>