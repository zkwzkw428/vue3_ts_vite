<template>
  <div class="b1">
    <h2>我的玩具:{{ computer }}</h2>
    <h2 v-show="toy">弟弟的奥特曼:{{ toy }}</h2>
    <button @click="send">给弟弟玩电脑</button>
  </div>
</template>

<script>
import {ref, onUnmounted} from 'vue'
import mitter from '@/utils/mitter'
export default {
    name: 'mittBrother1',
    setup() {
        let computer = ref('拯救者笔记本电脑')
        let toy = ref("")
        function send() {
            mitter.emit('send', computer.value)
        }
        mitter.on('send1', (value) => {
          toy.value = value
        })
        onUnmounted(() => {
          mitter.off('send1')
        })
        return {computer, send, toy}
    }
}
</script>

<style>
  .b1 {
    padding: 10px;
    background-color: lightsalmon;
    border-radius: 20px;
  }
</style>