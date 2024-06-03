import {defineStore} from 'pinia'
export const useCountData = defineStore('num', {
    // 数据
    state() {
        return {
            num: 0,
        }
    }
})