<template>
  <div class="row">
    <div class="col s12 m6">
      <todo></todo>
    </div>
    <div class="col s12 m6">
      <div class="card blue">
        <div class="card-content white-text">
          <span class="card-title">{{ chart.title }}</span>
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
      todo: {
        title: 'Todo List Example',
        component: '<todo></todo>'
      },
      chart: {
        title: 'Chart Example',
        components: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
