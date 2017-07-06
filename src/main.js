import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import 'font-awesome/css/font-awesome.css'
import App from './App'

const router = new VueRouter({
  routes: [
    { path: '*', component: App }
  ]
})
Vue.use(VueResource, router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

// new Vue({
//   el: '#customFooter',
//   template: '<custom-footer/>',
//   components: { CustomFooter }
// })
