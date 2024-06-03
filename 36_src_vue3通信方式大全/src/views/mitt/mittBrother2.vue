<template>
  <div class="b2">
    <h2>我的玩具:{{ atm }}</h2>
    <button @click="send">给哥哥玩具玩</button>
    <h2 v-show="computer">哥哥的电脑:{{ computer }}</h2>
  </div>
</template>

<script>
import {ref, onUnmounted} from 'vue'
import mitter from '@/utils/mitter.ts'
export default {
    name: 'mittBrother2',
    setup() {
        let atm = ref('迪迦奥特曼')
        let computer = ref("")
        mitter.on('send', (value) => {
            computer.value = value
        })
        function send() {
          mitter.emit('send1', atm.value)
        }
        onUnmounted(() => {
          // 解绑
          mitter.all.clear()
        })
        return { atm, computer, send}
    }
}
</script>

<style scoped>
  .b2 {
    padding: 10px;
    background-color: darkorchid;
    border-radius: 20px;
  }
</style>