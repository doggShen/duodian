// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./common/css/reset.css";
import "./font_6w52vv94kmon7b9/iconfont.css";

import "./common/js/adopt"
import resource from "vue-resource";


Vue.config.productionTip = false
Vue.use(resource)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    resource,
    template: '<App/>',
    components: { App }
})