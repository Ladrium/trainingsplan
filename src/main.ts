import Vue, { CreateElement } from "vue"
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h: CreateElement) => h(App)
}).$mount('#app');
