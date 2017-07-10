import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Mine from '@/pages/Mine'
import Find from '@/pages/Find'
import Order from '@/pages/Order'
import OutFood from '@/pages/OutFood'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'OutFood',
        component: OutFood

    }, {
        path: '/order',
        name: 'Order',
        component: Order

    }, {
        path: '/mine',
        name: 'Mine',
        component: Mine

    }, {
        path: '/find',
        name: 'Find',
        component: Find

    }, ]
})