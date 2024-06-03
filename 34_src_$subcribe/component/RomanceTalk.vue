<template>
  <div class="love">
    <h1>土味情话展示</h1>
    <button @click="getLoveWords">添加一条情话</button>
    <ul class="love">
      <li v-for="love in loveTalkList" :key="love.id">
        {{ love.words }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useLoveTalkStore } from "../store/loveTalkList";
import { storeToRefs } from "pinia";
export default {
  name: "RomanceTalk",
  setup() {
    const loveListStore = useLoveTalkStore();
    const { loveTalkList } = storeToRefs(loveListStore);
    // 当countStore当中的sum发生变化时调用该函数的回调
    loveListStore.$subscribe((mutate, state) => {
      console.log('loveTalkList当中的数据发生变化');
      // 存入数据
      localStorage.setItem('loveTalkList', JSON.stringify(state.loveTalkList))
    })
    function getLoveWords() {
      loveListStore.getLoveWords();
    }
    return { loveTalkList, getLoveWords };
  },
};
</script>

<style scoped>
div.love {
  background-color: pink;
  box-shadow: 2px 10px purple;
  border-radius: 20px;
  /* width: 600px; */
}
ul.love li {
  list-style: none;
}
</style>
