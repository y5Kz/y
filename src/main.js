// import { createApp } from 'vue'
// import App from './App.vue'
// import Vue from 'vue'

// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// Vue.use(BootstrapVue)

// createApp(App).mount('#app');
//上記はVue3での記述。バージョンダウンしたため、下記(vue2)の記述
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import BootstrapVueIcons from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
