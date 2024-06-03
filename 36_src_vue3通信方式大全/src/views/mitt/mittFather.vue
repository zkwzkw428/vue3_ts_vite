<template>
  <div class="father">
    <mittBroher1></mittBroher1>
    <mittBrother2></mittBrother2>
  </div>
</template>

<script>
import mittBroher1 from './mittBroher1.vue';
import mittBrother2 from './mittBrother2.vue';
export default {
  name: 'mittFather',
  setup() {
    
  },
  components: {mittBroher1, mittBrother2}
}
</script>

<style scoped>
  .father {
    padding: 10px;
    background-color: grey;
    border-radius: 20px;
  }
</style>