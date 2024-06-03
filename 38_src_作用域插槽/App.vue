<template>
  <div class="app">
    <h2>作用域插槽</h2>
    <MySlotComponent>
      <!--  作用域插槽+默认-->
      <template v-slot="data">
        <div>
          <ul><li v-for="d in data.data" :key="d.id">{{ d.game }}</li></ul>
        </div>
      </template>
      <!-- 作用域插槽加具名 -->
      <template v-slot:s1="data">
        <div>
          <ol><li v-for="d in data.data" :key="d.id">{{ d.game }}</li></ol>
        </div>
      </template>
        <!-- 作用域插槽加具名 -->
      <template v-slot:s2="{data}">
        <div>
         <h3 v-for="d in data" :key="d.id">{{ d.game }}</h3>
        </div>
      </template>
    </MySlotComponent>
  </div>
</template>

<script>
import MySlotComponent from './component/MySlotComponent.vue';
export default {
    name: 'App',
    setup() {
    },
    components: {MySlotComponent}
}
</script>

<style>

</style>