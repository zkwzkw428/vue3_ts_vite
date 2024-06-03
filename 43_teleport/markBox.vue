<template>
  <div class="box">
    <img src="./public/guigu.webp" alt="">
    <h1>filter属性对固定定位的影响</h1>
    <button @click="isShow = true">显示弹窗</button>
    <div class="mark" v-show="isShow">
      <h2>我是弹窗标题</h2>
      <div class="content">我是弹窗内容</div>
      <button @click="close">关闭弹窗</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "markBox",
  setup() {
    let isShow = ref(false);
    function close() {
      isShow.value = false;
    }
    return { isShow, close };
  },
};
</script>

<style scoped>
.box {
    filter: saturate(0);
}
.box img {
    width: 200px;
}
.mark {
  text-align: center;
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
}
.mark .content {
  height: 200px;
  background-color: gray;
}
button {
  border: none;
  width: 100px;
  cursor: pointer;
  background-color: lightblue;
}
</style>
