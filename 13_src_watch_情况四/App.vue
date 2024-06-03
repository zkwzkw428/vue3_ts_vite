<template>
  <div class="container">
    <h1>姓名:{{ person.name }}</h1>
    <h1>年龄:{{ person.age }}</h1>
    <hr>
    <h1>第一台车:{{ person.car.c1 }}----第二台车:{{ person.car.c2 }}</h1>
    <button @click="changeName">更改名字</button>
    <br>
    <button @click="changeAge">更改年龄</button>
    <br>
    <button @click="changeC1">改第一辆车</button>
    <br>
    <button @click="changeC2">改第二辆车</button>
    <br>
    <button @click="changeCar">全部车辆信息更改</button>
  </div>
</template>

<script lang="ts">
import { reactive, watch} from "vue";
export default {
  name: "App",
  setup() {
    let person = reactive({
      name: '张三',
      age: 20,
      car: {
        c1: '奔驰',
        c2: '宝马'
      }
    })
    // 只能监视car当中name属性的变化
    watch(() => person.name, (newvalue, oldvalue) => {
      console.log(`person.name变化了${newvalue}----${oldvalue}`);
    })
    // 能监视到对象内部属性的变化，但是不能检测到自身被改变
    watch(person.car, (newvalue,oldvalue) => {
      console.log('person.car变化了'+ newvalue + '-' + oldvalue);
    })
    // 完整写法，监视对象当中的所以属性变化，且包括自身
    // watch(() => person.car, (newvalue, oldvalue) => {
    //   console.log('person.car变化了' + newvalue + '@' + oldvalue);
    // }, {deep: true})
    function changeName() {
      person.name = '李四'
    }
    function changeAge() {
      person.age = 18
    }
    function changeC1() {
      person.car.c1 = '大众'
    }
    function changeC2() {
      person.car.c2 = '奥迪'
    }
    function changeCar() {
      person.car = {c1: "雅迪", c2: '小刀'}
    }
    return {person, changeName, changeAge, changeC1,changeC2, changeCar }
  }
};
</script>
<style></style>
