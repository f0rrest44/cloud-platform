/* eslint-disable indent */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueTypedJs from 'vue-typed-js'
import BackToTop from 'vue-backtotop'
import Meta from 'vue-meta'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css'
import 'normalize.css'
import 'hamburgers'
import './assets/css/main.scss'

Vue.use(BootstrapVue)
Vue.use(VueTypedJs)
Vue.use(BackToTop)
Vue.use(Meta)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
