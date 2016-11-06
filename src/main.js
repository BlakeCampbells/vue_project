import Vue from 'vue'
import App from './App'
import CustomFooter from './CustomFooter'

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
