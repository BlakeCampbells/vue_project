<template>
  <div id="app">
    <img src="./assets/logo.png">
    <about-me></about-me>
    <examples><examples>
  </div>
</template>

<script>
import Examples from './components/Examples'
import AboutMe from './components/AboutMe'

export default {
  name: 'app',
  components: {
    Examples,
    AboutMe
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
