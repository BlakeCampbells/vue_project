<template>
  <div id="app">
    <img src="./assets/logo.png">
    <about-me></about-me>
    <hello></hello>
    <charts><charts>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Charts from './components/Charts'
import AboutMe from './components/AboutMe'

export default {
  name: 'app',
  components: {
    Hello,
    Charts,
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
