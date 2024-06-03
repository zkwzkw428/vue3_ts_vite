import { defineStore } from "pinia";
export const useCountStore = defineStore('count', {
    actions: {
        increment(value:number) {
            // 底层维护了this，指向useCountStore对象
            this.sum += value
        }
    },
    // 存储数据
    state() {
        return {
            sum: 0,
        }
    },
    getters: {
        bigSum():number {
            return this.sum *= 10
        }
    }
})