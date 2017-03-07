<template>
  <span>
    <div id="app">
      <div class="row">
        <div class="switch col l2 m2 s2 offset-l10 offset-m10 offset-s10 white-text">
          Slideshow Mode
          <label>
            <input type="checkbox" v-on:click="slideshow()" v-model="slideshowMode" value="true">
            <span class="lever"></span>
          </label>
        </div>
      </div>
      <div class="row" v-show="slideshowMode == true">
        <div class="col l2 m2 s2 white-text">
          <i class="fa fa-arrow-left fa-3x" aria-hidden="true" v-on:click="picturePrevious()"></i>
        </div>
        <div class="col l2 m2 s2 offset-l8 offset-m8 offset-s8 white-text">
          <i class="fa fa-arrow-right fa-3x" aria-hidden="true" v-on:click="pictureNext()"></i>
        </div>
      </div>
      <div class="row" v-show="slideshowMode != true">
        <div class="card blue-grey lighten-2 col l8 offset-l2 card_opacity">
          <div class="card-content white-text">
            <span class="card-title">Blake Campbell</span>
          </div>
          <div class="row">
            <div class="col s12 m4" v-for="(item, index) in sections">
              <div class="card white hoverable">
                <div class="card-content white-text">
                  <div class="left-align">
                    <span class="card-title">
                      <input
                        type="checkbox"
                        :id="'checkbox' + index"
                        v-model="item.show"
                        value="true"
                      >
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
        <about-me></about-me>
      </span>
      <span v-show="sections[1].show">
        <experience></experience>
      </span>
      <span v-show="sections[2].show">
        <examples></examples>
      </span>
      <span v-show="sections[3].show">
        <github-api></github-api>
      </span>
    </div>
    <!-- <div id="customFooter"></div> -->
  </span>
</template>

<script>
import AboutMe from './components/AboutMe'
import Examples from './components/Examples'
import Experience from './components/Experience'
import GithubApi from './components/GithubApi'

export default {
  name: 'App',
  components: {
    AboutMe,
    Examples,
    Experience,
    GithubApi
  },
  data () {
    return {
      slideshowMode: true,
      pictures: [
        '001.JPG',
        '002.JPG'
      ],
      currentPicture: 0,
      sections: [
        {
          name: 'About me',
          show: false
        }, {
          name: 'Experience',
          show: false
        }, {
          name: 'Examples',
          show: false
        }, {
          name: 'GitHub API',
          show: false
        }
      ],
      navbar: [
        {
          name: 'Code',
          link: 'https://github.com/BlakeCampbells/vue_project'
        }, {
          name: 'Resume',
          link: '/static/Blake_Campbell_resume.pdf'
        }
      ]
    }
  },
  methods: {
    slideshow: function () {
      this.sections.forEach(function (section) {
        section.show = false
      })
    },
    pictureNext: function () {
      if (this.currentPicture === this.pictures.length - 1) {
        this.currentPicture = -1
      }
      var image = this.pictures[this.currentPicture + 1]
      this.currentPicture += 1
      document.body.setAttribute('style', 'background-image: url(/static/background_images/' + image + ')')
    },
    picturePrevious: function () {
      if (this.currentPicture === 0) {
        this.currentPicture = this.pictures.length
      }
      var image = this.pictures[this.currentPicture - 1]
      this.currentPicture -= 1
      document.body.setAttribute('style', 'background-image: url(/static/background_images/' + image + ')')
    }
  }
}
</script>

<style>
body {
  min-height: 1000px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url('/static/background_images/001.JPG') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#logo__left {
  position: static;
  display: inline-block;
  font-size: 2.1rem;
  padding-left: 20px;
  white-space: nowrap;
}

.card_opacity {
  opacity: 0.5;
}
.card_opacity:hover {
  opacity: 0.9;
}
</style>
