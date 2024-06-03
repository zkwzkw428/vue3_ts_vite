<template>
  <div class="slot">
    <h1>玩一下默认插槽</h1>
    <testSlot>
        <span>喜欢{{ lovePerson }}</span>
    </testSlot>
    <testSlot>
        <ul>
            <li v-for="(g, index) in games" :key="index">{{ g }}</li>
        </ul>
    </testSlot>
    <testSlot>
        <ol>
            <li v-for="(h, index) in hobby" :key="index">{{ h }}</li>
        </ol>
    </testSlot>
  </div>
</template>

<script>
import {ref, reactive} from 'vue'
import testSlot from './testSlot.vue'
export default {
    name: 'MySlot',
    setup() {
        let lovePerson = ref('lyq')
        let games = reactive([
            "王者荣耀",
            "原神",
            "三国杀",
            "斗罗大陆"
        ])
        let hobby = reactive([
            "抽烟",
            "喝酒",
            "打麻将",
            "泡妞",
            "烫头"
        ])
        return {lovePerson, hobby, games}
    },
    components: {testSlot}
}
</script>

<style scoped>
    .slot {
        padding: 10px;
        border-radius: 20px;
        background-color: gold;
    }
    .slot::after {
        display: block;
        content: "";
        clear: both;
        height: 0;
        width: 0;
    }
    ul li {
        list-style: none;
    }
    ol li {
        list-style: none;
    }
</style>