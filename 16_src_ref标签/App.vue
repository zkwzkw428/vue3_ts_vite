<template>
  <div class="container">
    <h1>ref标签获取dom元素</h1>
    <h2 ref="title">title元素</h2>
    <showEffect ref="component"></showEffect>
    <button @click="get">获取title元素</button>
    <button @click="catchComponent">获取组件</button>
  </div>
</template>

<script lang="ts">
import { ref} from "vue";
import showEffect from './components/showEffect.vue'
export default {
  name: "App",
  setup() {
    let title = ref();
    let component = ref();
    function get() {
      console.log(title.value);
    }
    function catchComponent() {
      console.log(component.value);
      
    }
    return {title, get, catchComponent, component}
  },
  components: {showEffect}
};
</script>
<style>
.container {
  background: pink;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 10px 20px purple;
  font-size: 20px;
}
.container button {
  display: block;
  width: 100px;
  height: 50px;
  border: none;
  cursor: pointer;
  line-height: 50px;
  background-color: orange;
}
</style>
