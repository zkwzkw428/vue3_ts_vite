<template>
  <div class="container">
   <h1>展示一个数字</h1>
   <h1>数字：{{ num.x.y.z.n }}</h1>
   <button @click="num.x.y.z.n++">增加</button>
   <hr>
   <h1>另一个数字</h1>
   <h1>{{ num1.a.b.c.d.n }}</h1>
   <button @click="num1.a.b.c.d.n++">改变</button>
   <button @click="change">替换</button>
   <h1>{{ num1 }}</h1>
  </div>
</template>

<script lang="ts">
import { reactive, watch} from "vue";
export default {
  name: "App",
  setup() {
    let num = reactive({
      x:{
        y:{
          z: {
            n:5,
          }
        }
      }
    })
    let num1 = reactive({
      a: {
        b: {
          c: {
            d: {
              n:0
            }
          }
        }
      }
    })
   function change() {
    Object.assign(num1, {a:{b:{c:{d:{n:10}}}}})
    // num1 = reactive({a:{b:{c:{d:{n:10}}}}})
    // num1 = {a:{b:{c:{d:{n:10}}}}}
   }
    // watch监视reactive过的数据，默认会开启深度监视，无法关闭，即使传递了配置对象
    // reactie
     const stoperWatch = watch(num, (newvalue, oldvalue) => {
      console.log(`num之前的值是${oldvalue}新的值是${newvalue}`);
      if(newvalue.x.y.z.n > 10) {
        stoperWatch()
      }
      watch(num1, (newvalue, oldvalue) => {
        console.log('改变了');
      },)
    })
    return {num, num1, change}
  }
};
</script>
<style></style>
