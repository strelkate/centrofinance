import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Loader from './components/Loader'
import VueTheMask from 'vue-the-mask';


Vue.component('Loader', Loader)
Vue.use(VueTheMask);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
