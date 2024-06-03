<template>
  <div class="container">
    <h1>姓名：{{ person.name }}</h1>
    <h2>年龄:{{ person.age }}</h2>
    <button @click="changeName">更改姓名</button>
    <br />
    <button @click="changeAge">增加年龄</button>
    <hr />
    <h1>很深的obj当中的c:{{ obj.a.b.c }}</h1>
    <button @click="changeC">改变c</button>
    <hr />
    <h1>车辆名: {{ car.name }}</h1>
    <button @click="changeCar">改变车名</button>
    <hr />
    <h1>姓名：{{ name }}</h1>
    <h2>年龄:{{ age }}</h2>
  </div>
</template>

<script lang="ts">
import { ref, reactive,toRefs } from "vue";
export default {
  name: "App",
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
    });
    // 没有响应式
    // let { name, age } = person
    // 有响应式
    let {name, age} = toRefs(person)
    let obj = reactive({
      a: {
        b: {
          c: "deep data",
        },
      },
    });
    let car = ref({
      name: "奔驰",
      price: 40,
    });
    function changeCar() {
      car.value.name = "BMW";
    }
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
      person,
      obj,
      changeName,
      changeAge,
      changeC,
      car,
      changeCar,
      name,
      age,
    };
  },
};
</script>
<style></style>
