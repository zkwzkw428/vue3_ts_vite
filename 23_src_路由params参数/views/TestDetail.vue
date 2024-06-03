<template>
  <div class="detail">
    <ul>
        <li>编号：{{ params.id }}</li>
        <li>标题：{{ params.message }}</li>
        <li>内容：{{ params.content }}</li>
    </ul>
  </div>
</template>

<script>
import {useRoute} from 'vue-router'
import { toRefs } from 'vue'
export default {
    name: 'TestDetail',
    setup() {
      let route = useRoute()
      let {params} = toRefs(route)
      return {params}
    }
}
</script>

<style scoped>
    ul li {
        list-style: none;
    }
</style>