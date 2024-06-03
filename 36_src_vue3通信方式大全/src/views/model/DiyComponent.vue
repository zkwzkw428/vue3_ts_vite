<template>
  <div class="diy">
    <input type="text" :value="modelValue" @input="emit('update:modelValue',$event.target.value)">
  </div>
</template>

<script>
import {defineEmits} from 'vue'
export default {
    name: 'DiyComponent',
    props:['modelValue'],
    setup() {
        const emit = defineEmits(['update:modelValue'])
        return {emit}
    }
}
</script>

<style>

</style>