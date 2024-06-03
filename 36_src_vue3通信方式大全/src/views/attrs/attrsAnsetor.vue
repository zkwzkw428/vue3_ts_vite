<template>
  <div class="ansetor">
    <h1>我是祖先组件</h1>
    <ul>
        <li>{{ a }}</li>
        <li>{{ b }}</li>
        <li>{{ c }}</li>
        <li>{{ d }}</li>
    </ul>
    <attrs-father :a="a" :b="b" :c="c" :d="d" v-bind="{x:100, y:200, z:300}"></attrs-father>
  </div>
</template>

<script>
import attrsFather from './attrsFather.vue'
import {ref} from 'vue'
export default {
    name: 'attrAnsetor',
    setup() {
        let a = ref('a')
        let b = ref('b')
        let c = ref('c')
        let d = ref('d')
        return {a, b, c, d}
    },
    components: {attrsFather}
}
</script>

<style scoped>
    .ansetor {
        padding: 10px;
        border-radius: 20px;
        background-color: lightslategrey;
    }
</style>