<template>
  <div class="row">
    <div class="col s12 m6">
      <div class="card blue lighten-5">
        <div class="card-content black-text">
          <span class="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
    <div class="col s12 m6">
      <div class="card blue lighten-4">
        <div class="card-content black-text">
          <span class="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'charts',
  data () {
    return {
      msg: 'Welcome to My Vue.js App',
      essentialLinks: [{
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

</style>
