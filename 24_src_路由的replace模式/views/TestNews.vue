<template>
  <div class="news">
    <div class="left">
      <ul>
        <li v-for="n in arr" :key="n.id">
          <!-- to的字符串写法 -->
          <!-- <RouterLink to="/news/detail/hello/world/你好">{{ n.message }}</RouterLink> -->
          <!-- to的对象写法 -->
          <RouterLink replace
            :to="{
              name: 'xiangxi',
              params: {
                id: n.id,
                message: n.message,
                content: n.content,
              },
            }"
            >{{ n.message }}</RouterLink
          >
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
export default {
  name: "TestNews",
  setup() {
    let arr = reactive([
      { id: "001", message: "震惊，某企业竟然无故辞退员工", content: "内容1" },
      { id: "002", message: "好消息！好消息!", content: "内容2" },
      { id: "003", message: "今天竟然是周一", content: "内容3" },
      { id: "004", message: "KFC大降价", content: "内容4" },
    ]);
    return { arr };
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: orange;
}
</style>
