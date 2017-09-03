<template>
  <span>
    <div id="app">
      <div class="row">
        <div class="card col l12 m12 no-padding no-margin header__card">
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
              :href="resume.link"
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
    </div>
  </span>
</template>

<script>
import Contact from './components/Contact'
import Experience from './components/Experience'

export default {
  name: 'App',
  components: {
    Contact,
    Experience
  },
  data () {
    return {
      profile: '',
      resume: {
        link: '/static/Blake_Campbell_resume.pdf'
      },
      sections: [
        {
          name: 'Experience',
          show: true
        }, {
          name: 'Contact',
          show: true
        }
      ]
    }
  },
  created: function () {
    this.$http.get('https://api.github.com/users/BlakeCampbells').then(function (response) {
      this.profile = response.data
    })
  },
  methods: {}
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
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.no-padding {
  padding: 0;
}
.no-margin {
  margin: 0;
}
.header__card {
  background: #5f2c82;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #49a09d, #5f2c82);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #49a09d, #5f2c82); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
.avatar__image {
  border-radius: 50%;
  max-width: 15%;
  max-height: 15%;
  width: auto;
  height: auto;
}
</style>
