/*
 * @Author: jswang
 * @Date: 2021-09-13 15:22:38
 * @LastEditTime: 2021-09-13 15:52:10
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//加载全局样式
import './styles/index.less'
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')