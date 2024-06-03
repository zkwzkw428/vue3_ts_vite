import { createRouter, createWebHistory } from 'vue-router'
import propsFather from '@/views/props/propsFather.vue'
import customFather from '@/views/custom/customFather.vue'
import mittFather from '@/views/mitt/mittFather.vue'
import modelFather from '@/views/model/modelFather.vue'
import attrsAnsetor from '@/views/attrs/attrsAnsetor.vue'
import MyRef1 from '@/views/$refs和$parent/MyRef1.vue'
import myinject1 from '@/views/inject/myinject1.vue'
import testPinia from '@/views/pinia/testPinia.vue'
import MySlot from '@/views/slot/MySlot.vue'
export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/props'
        },
        {
            path: '/props',
            component: propsFather,
        },
        {
            path: '/custom',
            component: customFather
        },
        {
            path: '/mitt',
            component: mittFather
        },
        {
            path: '/model',
            component: modelFather
        },
        {
            path: '/attrs',
            component: attrsAnsetor
        },
        {
            path: '/$refs',
            component: MyRef1,
        },
        {
            path: '/inject',
            component: myinject1,
        },
        {
            path: '/pinia',
            component: testPinia
        },
        {
            path: '/slot',
            component: MySlot,
        }
    ],
})