<template>
  <div class="row">
    <div class="col s12 m6">
      <div class="card blue darken-1">
        <div class="card-content white-text">
          <span class="card-title">About Me</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </div>
    <div class="col s12 m6">
      <div class="card blue darken-1">
        <div class="card-content white-text">
          <span class="card-title">About Me</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutMe',
  data () {
    return {
      msg: 'Welcome to My Vue.js App'
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
