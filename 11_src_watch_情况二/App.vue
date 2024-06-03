<template>
  <div class="container">
   <h1>展示一个数字</h1>
   <h1>数字：{{ num.x.y.z.n }}</h1>
   <button @click="num.x.y.z.n++">增加</button>
  </div>
</template>

<script lang="ts">
import { ref, watch} from "vue";
export default {
  name: "App",
  setup() {
    let num = ref({
      x:{
        y:{
          z: {
            n:5,
          }
        }
      }
    })
    // watch监视ref定义的对象时候，默认会将参数补上一个.value
     const stoperWatch = watch(num, (newvalue, oldvalue) => {
      console.log(`num之前的值是${oldvalue}新的值是${newvalue}`);
      if(newvalue.x.y.z.n > 10) {
        stoperWatch()
      }
    }, {deep: true})
    return {num}
  }
};
</script>
<style></style>
