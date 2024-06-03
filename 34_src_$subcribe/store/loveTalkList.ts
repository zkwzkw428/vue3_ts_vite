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
            loveTalkList: JSON.parse(localStorage.getItem('loveTalkList') as string) || []
        }
    }
})