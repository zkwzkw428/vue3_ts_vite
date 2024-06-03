<template>
  <div class="container">
    <h1>姓名：{{ name }}</h1>
    <h2>年龄:{{ age }}</h2>
    <button @click="changeName">更改姓名</button>
    <br />
    <button @click="changeAge">增加年龄</button>
    <hr />
    <h1>很深的obj当中的c:{{ obj.a.b.c }}</h1>
    <button @click="changeC">改变c</button>
  </div>
</template>

<script lang="ts">
import {ref, reactive} from 'vue'
export default {
  name: "App",
  setup() {
    let name = ref("张三");
    let age = ref(10);
    let obj = reactive({
      a: {
        b: {
          c: "deep data",
        },
      },
    });
    function changeName() {
      name.value = "李四";
    }
    function changeAge() {
      age.value += 1;
    }
    function changeC() {
      obj.a.b.c = "被你找到了xd";
    }
    return {
      name,age,obj,changeName,changeAge,changeC
    }
  },
};
</script>
<style></style>
