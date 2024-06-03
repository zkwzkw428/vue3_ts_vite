<template>
  <div class="container">
    <test-demo></test-demo>
  </div>
</template>

<script lang="ts">
import testDemo from './components/testDemo.vue'
export default {
    name: 'App',
    components: {testDemo}
}
</script>

<style>
  .container {
    background-color: red;
    padding: 10px;
  }
</style>