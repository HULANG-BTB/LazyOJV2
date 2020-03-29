import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// use iView
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import './assets/css/app.css'

Vue.use(ViewUI)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
