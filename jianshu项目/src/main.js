import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

import store from './store/store'    

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
