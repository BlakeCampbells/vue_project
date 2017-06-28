import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import './styles/my-styles.scss'
import 'font-awesome/css/font-awesome.css'

import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Resume from './components/Resume'

// import CustomFooter from './CustomFooter'

Vue.use(VueRouter, VueResource)
/* eslint-disable no-new */

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Experience },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/resume', component: Resume }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')
console.log(app)
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
