import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import { fetchToken} from '@/services'


Vue.config.productionTip = false

Vue.prototype.$api = {
  fetchToken  
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
