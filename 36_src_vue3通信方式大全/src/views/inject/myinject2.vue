<template>
  <div class="in2">
    <h2>我是父组件</h2>
    <myinject-3></myinject-3>
  </div>
</template>

<script>
import myinject3 from './myinject3.vue'
export default {
    name: 'myinject2',
    setup() {
    },
    components: {myinject3}
}
</script>

<style scopde>
    .in2 {
        padding: 10px;
        background-color: orangered;
        border-radius: 20px;
    }
</style>