import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueHead from 'vue-head'

Vue.use(VueHead)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')