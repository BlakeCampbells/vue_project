<template>
  <div class="row">
    <div class="col s12 m6 l6">
      <todo></todo>
    </div>
    <div class="col s12 m6 l6">
      <chart-ex></chart-ex>
    </div>
  </div>
</template>

<script>
import Todo from './examples/Todo'
import ChartEx from './examples/ChartEx'

export default {
  name: 'examples',
  components: { Todo, ChartEx },
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
