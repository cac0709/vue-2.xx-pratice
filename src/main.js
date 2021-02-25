import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Menu, LayoutInstaller } from '@progress/kendo-layout-vue-wrapper'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(LayoutInstaller)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  
  router,
  store,
  components: {
    Menu
},
  render: h => h(App),
 
}).$mount('#app')
