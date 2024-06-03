<template>
  <div class="container">
    <input type="text" v-model="person.firstName"/>
    <input type="text" v-model="person.lastName"/>
    <input type="text" v-model="fullName">
  </div>
</template>

<script lang="ts">
import { ref, computed} from "vue";
export default {
  name: "App",
  setup() {
    let person = ref({
      firstName: '张',
      lastName: '三'
    })
    let fullName = computed({
      get() {
        //初次的时候调用和里面依赖的数据改变调用
        return person.value.firstName + '-' + person.value.lastName
      },
      set(value) {
        let arr = value.split('-')
        person.value.lastName = arr[1]
        person.value.firstName = arr[0]
      }
    })
    return {person, fullName}
  },
};
</script>
<style></style>
