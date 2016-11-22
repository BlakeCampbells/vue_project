<template>
  <div class="row">
    <div v-for="(item, index) in cards">
      <div class="col s12 m8 l8 offset-l2 offset-m2">
        <div class="card blue lighten-3 horizontal">
          <div class="card-image">
            <img src="http://lorempixel.com/300/190/nature/6">
          </div>
          <div class="card-stacked black-text">
            <div class="card-title">
              {{item.name}}
            </div>
            <div class="card-content">
              <ul>
                <li v-for="attribute in item.attributes">
                  <span class="left">{{ attribute }}</span>
                </li>
              </ul>
            </div>
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
        attributes: [
          'Developer, Dog Lover, Hiker',
          'In my spare time I work on small projects for fun.',
          'Always trying to learn something new'
        ]
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
