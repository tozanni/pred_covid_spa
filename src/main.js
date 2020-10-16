import Vue from 'vue'
import App from './App.vue'
//import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import HTTP from './http-common'

Vue.config.productionTip = false;


Vue.prototype.$http = HTTP;
const token = localStorage.getItem('authtoken')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = "Bearer " + token
}

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
