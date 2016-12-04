<template>
  <div id="app">
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper blue lighten-2">
          <a href="#" class="brand-logo left" id="logo__left">Blake Campbell</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="section2">
      <div class="col s12 m6 offset-m3">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">What do you want to see?</span>
          </div>
          <div class="row">
            <div class="col s12 m4" v-for="(item, index) in sections">
              <div class="card white hoverable">
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
    <div class="parallax-container">
      <div class="parallax"><img src="./assets/nova.jpg"/></div>
    </div>
    <span v-show="sections[0].show">
      <experience></experience>
    </span>
    <span v-show="sections[1].show">
      <about-me></about-me>
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
/* eslint-disable */
$(document).ready(function () {
  $('.parallax').parallax()
})
/* eslint-enable */

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
          name: 'Experience',
          show: true
        }, {
          name: 'About Blake',
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
}

#logo__left {
  position: static;
  display: inline-block;
  font-size: 2.1rem;
  padding-left: 20px;
  white-space: nowrap;
}

.parallax-container {
  height: 400px;
}
</style>
