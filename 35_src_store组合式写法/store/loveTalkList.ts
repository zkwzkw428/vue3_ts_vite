import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import axios from 'axios'
import { reactive } from "vue";
export const useLoveTalkStore = defineStore('loveTalkList', () => {
    const loveTalkList = reactive( JSON.parse(localStorage.getItem('loveTalkList') as string) || [])
    function getLoveWords() {
        axios
            .get("https://api.uomg.com/api/rand.qinghua?format=json")
            .then(({ data: { content } }) => {
                loveTalkList.unshift({ id: nanoid(), words: content });
            });
    }
    return {loveTalkList, getLoveWords}
})