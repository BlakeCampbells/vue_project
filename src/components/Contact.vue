<template>
  <div class="row">
    <div class="col l6 s12 offset-l3">
      <div class="card blue">
        <div class="card-title">
          <h5 class="white-text">Contact</h5>
        </div>
        <ul class="left-align padding">
          <li v-for="(item, index) in contactAt">
            <a class="grey-text text-lighten-3" :href="item.link" target="_blank">
              <i v-bind:class="item.icon" aria-hidden="true"></i>
              {{ item.link }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomFooter',
  data () {
    return {
      contactAt: [{
        label: 'LinkedIn',
        icon: 'fa fa-linkedin-square',
        link: 'https://www.linkedin.com/in/blake-campbell'
      }, {
        label: 'GitHub',
        icon: 'fa fa-github',
        link: 'https://github.com/BlakeCampbells'
      }, {
        label: 'Email',
        icon: 'fa fa-envelope',
        link: 'mailto:blakecampbell.dev@gmail.com'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .padding {
    padding: 2em;
  }
</style>
