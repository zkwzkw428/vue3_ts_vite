<template>
  <div class="app">
    <text-person v-if="isShow"></text-person>
    <button @click="isShow == false">卸载组件</button>
    <show-dog></show-dog>
  </div>
</template>

<script>
import TextPerson from "./component/TextPerson.vue";
import ShowDog from './component/ShowDog.vue'
import { ref } from "vue";
import { onMounted } from "vue";
export default {
  name: "App",
  setup() {
    let isShow = ref(true);
    console.log("App组件开始创建");
    onMounted(() => {
      console.log('App组件创建完毕...');
    })
    return { isShow };
  },
  components: { TextPerson, ShowDog},
};
</script>

<style></style>
