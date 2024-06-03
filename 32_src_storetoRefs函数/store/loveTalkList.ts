import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import axios from 'axios'
export const useLoveTalkStore = defineStore('loveTalkList', {
    actions: {
        getLoveWords() {
            axios
                .get("https://api.uomg.com/api/rand.qinghua?format=json")
                .then(({ data: { content } }) => {
                    this.loveTalkList.unshift({ id: nanoid(), words: content });
                });
        }
    },
    state() {
        return {
            loveTalkList: [
                { id: nanoid(), words: '今天你有点怪，哪里怪?怪好看的!' },
                { id: nanoid(), words: '草莓，蓝莓，蔓越莓，今天你想我了没' },
                { id: nanoid(), words: '心里给你留了一块地，对你的死心塌地' }
            ]
        }
    }
})