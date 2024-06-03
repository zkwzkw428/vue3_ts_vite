<template>
  <div class="app">
    <test-count></test-count>
    <br />
    <romance-talk></romance-talk>
  </div>
</template>

<script>
import TestCount from "./component/TestCount.vue";
import RomanceTalk from "./component/RomanceTalk.vue";
export default {
  name: "App",
  setup() {},
  components: { TestCount, RomanceTalk },
};
</script>

<style scoped></style>
