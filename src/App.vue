<template>
  <span>
    <div id="app">
      <div class="row">
        <div class="switch col l2 m2 s2 offset-l10 offset-m10 offset-s10 white-text">
          Slideshow Mode
          <label>
            <input type="checkbox" v-on:click="slideshow()" value="true">
            <span class="lever"></span>
          </label>
        </div>
      </div>
      <div class="row">
        <div class="valign" v-show="slideshowMode == true">
          <div class="col l2 m2 s2">
            <i class="fa fa-arrow-circle-left fa-4x" aria-hidden="true" v-on:click="picturePrevious()"></i>
          </div>
          <div class="col l2 m2 s2 offset-l8 offset-m8 offset-s8">
            <i class="fa fa-arrow-circle-right fa-4x" aria-hidden="true" v-on:click="pictureNext()"></i>
          </div>
        </div>
      </div>
      <div class="row" v-show="slideshowMode != true">
        <div class="card blue-grey col l8 offset-l2 card_opacity">
          <div class="card-content white-text">
            <div class="row">
              <img width="50" height="" class="avatar__image" :src="profile.avatar_url" alt=""/>
            </div>
            <span class="card-title">Blake Campbell</span>
            <br>
            <a
              class="btn waves-effect waves-light blue"
              type="submit"
              name="action"
              target="_blank"
              :href="navbar[1].link"
            >Resume
              <i class="material-icons right">file_download</i>
            </a>
            <br>
            <hr>
            <span class="card-content">
              Developer with a passion for programming. Always playing with new ideas.
            </span>
          </div>
          <div class="row">
            <div class="col s12 m6" v-for="(section, index) in sections">
              <div class="card white hoverable">
                <div class="card-content white-text">
                  <div class="left-align">
                    <span class="card-title">
                      <input
                        type="checkbox"
                        :id="'sections_checkbox' + index"
                        v-model="section.show"
                        value="true"
                      >
                      <label :for="'sections_checkbox' + index">{{ section.name }}</label>
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
        <contact></contact>
      </span>
      <span v-for="(picture, index) in pictures">
        <img
          :src="'/static/background_images/' + picture"
          style="display: none"
        >
      </span>
    </div>
  </span>
</template>

<script>
import Contact from './components/Contact'
import Experience from './components/Experience'
var existingInterval

export default {
  name: 'App',
  components: {
    Contact,
    Experience
  },
  data () {
    return {
      profile: '',
      slideshowMode: false,
      pictures: [
        '001.JPG', '002.JPG', '003.JPG', '004.JPG', '005.JPG', '006.JPG',
        '007.JPG', '008.JPG', '009.JPG', '010.JPG'
      ],
      currentPicture: 0,
      sections: [
        {
          name: 'Experience',
          show: false
        }, {
          name: 'Contact',
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
  created: function () {
    this.$http.get('https://api.github.com/users/BlakeCampbells').then(function (response) {
      this.profile = response.data
    })
  },
  methods: {
    slideshow: function () {
      this.slideshowMode = !this.slideshowMode
      this.sections.forEach(function (section) {
        section.show = false
      })
      var self = this
      if (this.slideshowMode === true) {
        existingInterval = setInterval(function () {
          self.pictureNext()
        }, 8000)
      } else {
        window.clearInterval(existingInterval)
        existingInterval = undefined
      }
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
  min-height: 100%;
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
.fa-arrow-circle-left {
  background: white;
  border-radius: 50%;
  height: 1em;
  width: 1em;
}
.fa-arrow-circle-right {
  background: white;
  border-radius: 50%;
  height: 1em;
  width: 1em;
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
.avatar__image {
  border-radius: 50%;
  max-width: 15%;
  max-height: 15%;
  width: auto;
  height: auto;
}
</style>
