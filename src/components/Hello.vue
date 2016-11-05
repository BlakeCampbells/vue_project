<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul id='essential_links'>
      <li v-for="(item, index) in essential_links">
        <a :href="item.link" target="_blank">{{item.label}}</a>
      </li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to My Vue.js App',
      essential_links: [{
        label: 'Core Docs',
        link: 'https://twitter.com/vuejs'
      }, {
        label: 'Forum',
        link: 'https://forum.vuejs.org'
      }, {
        label: 'Gitter Chat',
        link: 'https://gitter.im/vuejs/vue'
      }, {
        label: 'Twitter',
        link: 'https://twitter.com/vuejs'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
