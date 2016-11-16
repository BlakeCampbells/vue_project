import Vue from 'vue'
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'
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
