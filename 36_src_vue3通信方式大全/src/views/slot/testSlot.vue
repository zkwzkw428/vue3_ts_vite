<template>
  <div class="slot1">
    <h2>默认插槽使用</h2>
    <!-- 默认插槽 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'testSlot',
    setup() {
    }
}
</script>

<style scoped>
    .slot1 {
        float: left;
        margin-right: 20px;
        width: 200px;
        height: 300px;
        background-color: purple
    }
</style>