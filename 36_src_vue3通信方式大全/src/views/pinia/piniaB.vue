<template>
    <div class="B">
      <h1>仓库当中的数据：{{ countData.num }}</h1>
      <button @click="countData.num *= 10">点击变大10倍数</button>
    </div>
  </template>
  
  <script>
  import {useCountData} from '@/views/pinia/store/index.ts'
  export default {
      name: 'piniaA',
      setup() {
          const countData  = useCountData()
          return {countData}
      }
  }
  </script>
  
  <style>
      .B {
          padding: 10px;
          background-color: purple;
          border-radius: 20px;
      }
  </style>