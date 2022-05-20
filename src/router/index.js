//import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
//import Qrcode from '../views/qcode/Qrcode.vue'
const Home = () => import('../views/home/Home.vue');

//2.创建路由对象
const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Home,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    // mode:'history',//将默认的hash值变成history
})

//3.将router对象传入到vue实例中
export default router
