<template>
  <span>
    <div id="app">
      <div class="row">
        <div class="card col l12 m12 no-padding no-margin header__card white">
          <div class="card-content">
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
            <div class="col s12 m4" v-for="(section, index) in sections">
              <div class="card hoverable white"  :for="'sections_checkbox' + index">
                <label :for="'sections_checkbox' + index">
                  <div class="card-content">
                    <div class="left-align">
                      <span class="card-title">
                        <input
                          type="checkbox"
                          :id="'sections_checkbox' + index"
                          v-model="section.show"
                          value="true"
                        >
                        <label :for="'sections_checkbox' + index">
                          <b>{{ section.name }}</b>
                        </label>
                      </span>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span v-show="sections[0].show">
        <about></about>
      </span>
      <span v-show="sections[1].show">
        <experience></experience>
      </span>
      <span v-show="sections[2].show">
        <contact></contact>
      </span>
    </div>
  </span>
</template>

<script>
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'

export default {
  name: 'App',
  components: {
    About,
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
          name: 'ABOUT',
          show: true
        }, {
          name: 'EXPERIENCE',
          show: true
        }, {
          name: 'CONTACT',
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
/* label color */
 .input-field label {
   color: #0000ff;
 }
 /* label focus color */
 .input-field input[type=text]:focus + label {
   color: #0000ff;
 }
 /* label underline focus color */
 .input-field input[type=text]:focus {
   border-bottom: 1px solid #0000ff;
   box-shadow: 0 1px 0 0 #0000ff;
 }
 /* valid color */
 .input-field input[type=text].valid {
   border-bottom: 1px solid #0000ff;
   box-shadow: 0 1px 0 0 #0000ff;
 }
 /* invalid color */
 .input-field input[type=text].invalid {
   border-bottom: 1px solid #0000ff;
   box-shadow: 0 1px 0 0 #0000ff;
 }
 /* icon prefix focus color */
 .input-field .prefix.active {
   color: #000;
 }
.no-padding {
  padding: 0;
}
.no-margin {
  margin: 0;
}
.header__card {
  color: $primary-color;
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
