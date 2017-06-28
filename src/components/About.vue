<template>
  <div class="row">
    <div class="card">
      <span class="card-content">
        Developer with a passion for programming. Always playing with new ideas. {{stuff}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      stuff: 'this'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
@import "../styles/my-styles.scss";
nav {
  background-color: $primary-color;
}

body {
  min-height: 100%;
  font-family: $font-primary;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color-dark;
  background-color: $background-color;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
nav .brand-logo {
  position: absolute;
  color: #fff;
  display: inline-block;
  font-size: 1.25rem;
  white-space: nowrap;
}
</style>
