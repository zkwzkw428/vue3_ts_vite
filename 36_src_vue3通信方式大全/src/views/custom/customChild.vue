<template>
    <div class="son">
        <button @click="sendFood">将喜欢吃的食物告诉父亲</button>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'customChild',
    setup() {
        let food = ref('面包')
        function sendFood() {
            console.log('@');
        }
        return {food, sendFood}
    }
}
</script>

<style scoped>
    .son {
        padding: 10px;
        height: 70px;
        background-color: pink;
        border-radius: 20px;
    }
</style>