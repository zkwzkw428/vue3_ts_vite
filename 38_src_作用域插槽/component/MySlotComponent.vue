<template>
  <div class="myslot">
    <slot :data="dataList"></slot>
    <slot name="s1" :data="dataList"></slot>
    <slot name="s2" :data="dataList"></slot>
  </div>
</template>

<script>
import { reactive } from 'vue';
import {nanoid} from 'nanoid'
export default {
    name: 'MyslotComponent',
    setup() {
      let dataList = reactive([
        {id: nanoid(), game: '王者荣耀'},
        {id: nanoid(), game: '原神'},
        {id: nanoid(), game: '英雄联盟'}
      ])
      return {dataList}
    }
};
</script>

<style></style>
