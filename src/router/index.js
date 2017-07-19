import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/home/home";
import Fenlei from "@/components/fenlei/fenlei";
import Vip from "@/components/vip/vip";
import Car from "@/components/car/car";
import Mine from "@/components/mine/mine";
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/fenlei',
            name: 'Fenlei',
            component: Fenlei
        },
        {
            path: '/vip',
            name: 'Vip',
            component: Vip
        },
        {
            path: '/car',
            name: 'Car',
            component: Car
        },
        {
            path: '/mine',
            name: 'Mine',
            component: Mine
        },
        {
            path: "/",
            redirect: "/home"
        }
    ]
})