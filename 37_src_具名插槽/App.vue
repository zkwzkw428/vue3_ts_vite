<template>
  <div class="app">
    <h2>具名插槽</h2>
    <MySlotComponent>
        <!-- 具名插槽 -->
       <template v-slot:s1>
        <h1>插槽名1</h1>
       </template>
       <template v-slot:s2>
        <div>
            <h2>插槽名2</h2>
            <ul>
                <li>Vue</li>
                <li>React</li>
                <li>Node</li>
                <li>Promise</li>
                <li>Ajax</li>
            </ul>
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