<template>
  <div class="row">
    <div v-for="(item, index) in cards">
      <div class="col s12 m6">
        <div class="card blue">
          <div class="card-content white-text">
            <span class="card-title">{{ item.title }}</span>
            <todo></todo>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from './examples/Todo'

export default {
  name: 'examples',
  components: { Todo },
  data () {
    return {
      msg: 'Welcome to My Vue.js App',
      cards: [{
        title: 'Todo List',
        components: ''
      }, {
        title: 'Another Card',
        components: ''
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
