import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from "axios";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.interceptors.request.use(function (config) {
    let token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Token ${store.state.token}`;
    }else{
        config.headers.Authorization = null;
    }
    return config;
});


new Vue({
    router,
    store,
    axios,
    BootstrapVue,

    render: h => h(App)
}).$mount('#app')
