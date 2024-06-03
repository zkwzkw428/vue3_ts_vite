<template>
  <div class="detail">
    <ul>
        <li>编号：{{ query.id }}</li>
        <li>标题：{{ query.message }}</li>
        <li>内容：{{ query.content }}</li>
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
      let {query} = toRefs(route)
      return {query}
    }
}
</script>

<style scoped>
    ul li {
        list-style: none;
    }
</style>