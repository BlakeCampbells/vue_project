<template>
  <div id="app">
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper blue darken-4">
          <a href="#" class="brand-logo left" id="logo__left">Blake Campbell</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down" v-for="(navItem, indx) in navbar">
            <li><a :href="navItem.link" target="_blank">{{ navItem.name }}</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="row">
      <div class="card blue-grey lighten-2 col l8 offset-l2">
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
    <span v-show="sections[0].show">
      <experience></experience>
    </span>
    <span v-show="sections[1].show">
      <examples></examples>
    </span>
    <span v-show="sections[2].show">
      <github-api></github-api>
    </span>
  </div>
</template>

<script>
import Examples from './components/Examples'
import Experience from './components/Experience'
import GithubApi from './components/GithubApi'

export default {
  name: 'app',
  components: {
    Examples,
    Experience,
    GithubApi
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
          name: 'Examples',
          show: true
        }, {
          name: 'GitHub API',
          show: true
        }
      ],
      navbar: [
        {
          name: 'Code',
          link: 'https://github.com/BlakeCampbells/vue_project'
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
</style>
