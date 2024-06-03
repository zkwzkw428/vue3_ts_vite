<template>
  <div class="news">
    <div class="left">
      <ul>
        <li v-for="n in arr" :key="n.id">
          <RouterLink to="/news/detail">{{ n.message }}</RouterLink>
        </li>
      </ul>
    </div>
    <!-- 入口 -->
    <div class="right">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { RouterView, RouterLink } from "vue-router";
import TestDetail from "../../src/views/TestDetail.vue";
export default {
  name: "TestNews",
  setup() {
    let arr = reactive([
      { id: "001", message: "震惊，某企业竟然无故辞退员工" },
      { id: "002", message: "好消息！好消息！" },
      { id: "003", message: "今天竟然是周一" },
      { id: "004", message: "KFC大降价" },
    ]);
    return { arr };
  },
};
</script>

<style scoped>
  .left, .right{
    display: inline-block;
  }
</style>
