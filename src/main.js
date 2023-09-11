import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/all.css'

import Element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import dataV from '@jiaminghi/data-view'

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(dataV)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
