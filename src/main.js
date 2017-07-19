// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./common/css/reset.css";
import "./font_6w52vv94kmon7b9/iconfont.css";
import store from '../vuex/Vuex'

import "./common/js/adopt.js"
import resource from "vue-resource";
import lazy from "vue-lazyload"


Vue.config.productionTip = false
Vue.use(resource)
Vue.use(lazy)
Vue.use(lazy, {
        preLoad: 1.3,
        error: 'assets/logo.png',
        loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b550_10000&imgtype=0&sec=1499778395&di=1ed837fb9ea3bdce1d9a8b250b2f1ca3&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01d4a85543429c0000019ae97244b4.jpg'
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    resource,
    template: '<App/>',
    components: { App }
})