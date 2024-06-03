<template>
    <div class="person">
        <h1>姓名：{{ name }}</h1>
        <h1>年龄 {{ age }}</h1>
    </div>
</template>

<script>
export default {
    name: 'testDemo',
    data() {
        return {
            name:'张三',
            age:20,
        }
    }
}
</script>

<style>
    .person {
        padding: 20px;
        background-color: pink;
        border-radius: 20px;
    }
</style>