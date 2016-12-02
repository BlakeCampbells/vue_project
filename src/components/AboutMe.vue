<template>
  <div class="row">
    <div v-for="(item, index) in cards">
      <div class="col s12 m6 l6 offset-l3 offset-m3">
        <div class="card blue lighten-3 ">
          <div class="card-content">
            <p>{{item.description}}</p>
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
      cards: [{
        name: 'About Me',
        description: 'Developer, Dog Lover, Hiker. In my spare time I work on small projects for fun. Always trying to learn something new'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
