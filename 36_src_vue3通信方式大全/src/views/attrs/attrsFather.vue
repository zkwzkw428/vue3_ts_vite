<template>
  <div class="father">
    <h1>我是父组件,我负责传递$attrs</h1>
    <attrs-son v-bind="$attrs"></attrs-son>
  </div>
</template>

<script>
import attrsSon from './attrsSon.vue'
export default {
    name: 'attrsFather',
    setup() {
    },
    components: {attrsSon}
}
</script>

<style scoped>
    .father {
        background-color: orange;
        padding: 10px;
        border-radius: 20px;
    }
</style>