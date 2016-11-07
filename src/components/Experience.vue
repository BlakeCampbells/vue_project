<template>
  <div class="row">
    <div v-for="(item, index) in cards">
      <div class="col s12 m4">
        <div class="card blue lighten-1">
          <div class="card-content white-text">
            <span class="card-title">{{ item.name }}</span>
            <p>{{ item.description }}</p>
          </div>
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
      msg: 'Welcome to My Vue.js App',
      cards: [{
        name: 'About Me',
        description: 'Stuff about me in this aspect'
      }, {
        name: 'Stuff',
        description: 'Stuff about me in this aspect'
      }, {
        name: 'Other Stuff',
        description: 'Stuff about me in this aspect'
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
