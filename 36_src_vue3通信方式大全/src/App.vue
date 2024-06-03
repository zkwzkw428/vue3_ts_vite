<template>
  <div class="app">
    <h1>vue3组件通信</h1>
    <div class="showArea">
      <div class="left">
        <ul>
          <li v-for="(wayObj, index) in initArr" :key="index"><router-link :to="wayObj.path">{{ (index+ 1) + '.' + wayObj.way }}</router-link></li>
        </ul>
      </div>
      <div class="right">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    const initArr = reactive([
      {
        way: "props方式",
        path: '/props'
      },
      {
        way: "自定义事件",
        path: '/custom'
      },
      {
        way: "mitt",
        path: '/mitt'
      },
      {
        way: "v-model",
        path: '/model',
      },
      {
        way: "$attrs",
        path: '/attrs'
      },
      {
        way: "$refs、$parent",
        path: '/$refs'
      },
      {
        way: 'pinia',
        path: '/pinia'
      },
      {
        way: 'inject、provide',
        path: '/inject'
      },
      {
        way: 'slot',
        path: '/slot'
      }
    ]);
    return { initArr };
  },
};
</script>

<style scoped>
  .app {
    margin: 0;
    padding: 0;
  }
  .app h1 {
    background-color: pink;
    height: 50px;
    line-height: 50px;
    border-radius: 30px;
    text-align: center
  }
  .show {
    position: relative;
    margin-top: 50px;
    background-color: lightblue;
  }
  .left {
    position: absolute;
    width: 400px;
    border: 1px solid gray;
    border-radius: 20px;
  }
  .left li {
    list-style: none;
    height: 40px;
    line-height: 40px;
    border: 1px solid #f4f4f4;
    border-radius: 20px;
  }
  .left li:hover {
    background-color: #5279b9;
  }
  a {
    text-decoration: none;
    color: #5c5c59;
  }
  .left li:hover a {
    color: #f5ffff;
  }
  .right {
    width: 700px;
    right: 100px;
    /* height: 500px; */
    border: 1px solid grey;
    border-radius: 20px;
    position: absolute;
  }
</style>
