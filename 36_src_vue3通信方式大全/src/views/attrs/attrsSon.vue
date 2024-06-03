<template>
  <div class="son">
    <h1>祖先组件给我的数据哦</h1>
    <ul>
        <li>{{ a }}</li>
        <li>{{ b }}</li>
        <li>{{ c }}</li>
        <li>{{ d }}</li>
        <li>{{ x }}</li>
        <li>{{ y }}</li>
        <li>{{ z }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'attrSon',
    props: ['a', 'b', 'c', 'd', 'x', 'y', 'z'],
    setup() {   
        
    }
}
</script>

<style scoped>
    .son {
        padding: 10px;
        background-color: skyblue;
        border-radius: 20px;
    }
</style>