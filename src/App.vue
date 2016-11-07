<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="row">
      <div class="col s12 m6 offset-m3">
        <div class="card blue-grey darken-2">
          <div class="card-content white-text">
            <span class="card-title">What do you want to see?</span>
          </div>
          <div class="row">
            <div class="col s12 m4" v-for="(item, index) in sections">
              <div class="card white">
                <div class="card-content white-text">
                  <div class="left-align">
                    <span class="card-title">
                      <input type="checkbox" :id="'checkbox' + index" v-model="item.show" value="true">
                      <label :for="'checkbox' + index">{{ item.name }}</label>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span v-show="sections[0].show">
      <about-me></about-me>
    </span>
    <span v-show="sections[1].show">
      <experience></experience>
    </span>
    <span v-show="sections[2].show">
      <examples><examples>
    </span>
  </div>
</template>

<script>
import Examples from './components/Examples'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'

export default {
  name: 'app',
  components: {
    Examples,
    AboutMe,
    Experience
  },
  data () {
    return {
      aboutMe: { show: true },
      examples: { show: true },
      sections: [
        {
          name: 'About Blake',
          show: true
        }, {
          name: 'Experience',
          show: true
        }, {
          name: 'Examples',
          show: true
        }
      ]
    }
  },
  methods: {
    switchShow: function (component) {
      component.show = component.show === false
    }
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
