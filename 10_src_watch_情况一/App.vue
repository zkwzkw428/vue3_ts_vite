<template>
  <div class="container">
   <h1>展示一个数字</h1>
   <h1>数字：{{ num }}</h1>
   <button @click="num++">增加</button>
  </div>
</template>

<script lang="ts">
import { ref, watch} from "vue";
export default {
  name: "App",
  setup() {
    let num = ref(0)
    let stoperWatch = watch(num, (newvalue, oldvalue) => {
      console.log(`num之前的值是${oldvalue}新的值是${newvalue}`);
      if(newvalue > 10) {
        // 停止监视
        stoperWatch()
      }
    })
    return {num}
  }
};
</script>
<style></style>
