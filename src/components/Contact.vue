<template>
  <div class="row">
    <div class="col l6 s12 offset-l3">
      <div class="card blue-grey darken-2 card_opacity">
        <div class="card-content">
          <div class="card-title">
            <h5 class="white-text">Contact</h5>
          </div>
          <div class="padding">
            <div class="input-field col s12">
              <div class="card white">
                <div class="card-content black-text">
                  <textarea id="textarea1" class="materialize-textarea black-text" v-model="emailMessage"></textarea>
                  <label for="textarea1"></label>
                </div>
                <a
                  class="btn waves-effect waves-light blue-grey"
                  type="submit"
                  name="action"
                  :href="'mailto:blakecampbell.dev@gmail.com?Subject=Contact&Body=' + emailMessage"
                  target="_blank"
                >Send Email
                  <i class="material-icons right">send</i>
                </a>
              </div>
            </div>
          </div>
          <ul class="padding white-text">
            <span v-for="(item, index) in contactAt" class="padding">
              <a :href="item.link" target="_blank" class="white-text">
                <i v-bind:class="item.icon" aria-hidden="true"></i>
              </a>
            </span>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomFooter',
  data () {
    return {
      emailMessage: '',
      contactAt: [{
        label: 'LinkedIn',
        icon: 'fa fa-linkedin-square fa-5x',
        link: 'https://www.linkedin.com/in/blake-campbell'
      }, {
        label: 'GitHub',
        icon: 'fa fa-github fa-5x',
        link: 'https://github.com/BlakeCampbells'
      }, {
        label: 'Email',
        icon: 'fa fa-envelope fa-5x',
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
  .card_opacity {
    opacity: 0.5;
  }
  .card_opacity:hover {
    opacity: 0.9;
  }
</style>
