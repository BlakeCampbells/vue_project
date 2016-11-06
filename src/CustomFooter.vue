<template>
  <footer class="page-footer blue darken-4">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Blake Campbell</h5>
          <p class="grey-text text-lighten-4">Developer</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Tools Used</h5>
          <ul>
            <li v-for="(item, index) in toolsUsed">
              <a class="grey-text text-lighten-3" :href="item.link" target="_blank">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        © 2016 Copyright Text
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'customFooter',
  data () {
    return {
      toolsUsed: [{
        label: 'VueJS',
        link: 'https://twitter.com/vuejs'
      }, {
        label: 'Materialize CSS',
        link: 'https://forum.vuejs.org'
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
footer.page-footer {
  margin-top: 20px;
  padding-top: 20px;
}
</style>
