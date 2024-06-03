<template>
  <div class="test">
    <piniaA></piniaA>
    <piniaB></piniaB>
    <piniaC></piniaC>
  </div>
</template>

<script>
import piniaA from './piniaA.vue';
import piniaB from './piniaB.vue';
import piniaC from './piniaC.vue';
export default {
  name: 'testPinia',
  setup() {

  },
  components: {piniaA, piniaB, piniaC}
}
</script>

<style scoped>

</style>