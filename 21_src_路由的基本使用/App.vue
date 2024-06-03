<template>
  <div class="app">
    <h1>测试一个路由效果</h1>
    <ul>
      <li><router-link to="/home" active-class="active">Home</router-link></li>
      <li><router-link to="/news">News</router-link></li>
      <li><router-link to="about">About</router-link></li>
    </ul>
    <div class="showArea">
      <span>展示区域</span>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
  name: "App",
  setup() {},
};
</script>

<style scoped>
  .active {
    text-decoration: none;
    color: blue;
  }
  a {
    text-decoration: none;
  }
  .app h1 {
    text-align: center;
    height: 50px;
    line-height: 50px;
    background-color: orange;
    border-radius: 40px;
  }
  .app ul {
    text-align: center;
  }
  .app ul li {
    list-style: none;
    display: inline-block;
    padding: 10px 40px;
    height: 50px;
    background: pink;
    margin-right:100px;
    line-height: 50px;
    text-align: center;
    border-radius: 40px;
    cursor: pointer;
  }
  .showArea {
    width: 1000px;
    height: 500px;
    text-align: center;
    margin: 20px auto;
    border: 1px solid black;
    /* background-color: pink; */
  }
  .showArea span {
    display: block;
    font-size: 20px;
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
</style>
