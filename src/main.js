import Vue from 'vue'
import VueResource from 'vue-resource'
import 'font-awesome/css/font-awesome.css'
import App from './App'
import CustomFooter from './CustomFooter'
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

new Vue({
  el: '#customFooter',
  template: '<custom-footer/>',
  components: { CustomFooter }
})
