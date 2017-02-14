<template>
  <div class="row">
    <div v-for="(item, index) in cards">
      <div class="col s12 m3">
        <div class="card small blue darken-1 hoverable">
          <div class="card-content">
            <span class="card-title activator white-text">
              {{item.name}}
            </span>
            <div class="white-text activator" v-html="item.title"></div>
          </div>
          <div class="card-reveal">
            <!-- <span class="grey-text text-darken-4">{{item.title}}</span> -->
            <a v-bind:href="item.url" target="_blank">{{item.title}}</a>
            <p>{{item.description}}</p>
            <span v-if="item.notable.length">
              <u>Tools used</u>
            </span>
            <ul>
              <li v-for="(tool, indx) in item.notable">
                {{ tool }}
              </li>
            </ul>
            <div class="card-action activator">
              <i class="material-icons center card-title">keyboard_arrow_up</i>
            </div>
          </div>
          <div class="card-action activator">
            <i class="material-icons center">keyboard_arrow_down</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  data () {
    return {
      cards: [{
        name: 'Work',
        title: 'Full Stack Developer at MortarStone',
        url: 'https://www.mortarstone.com',
        expand: false,
        description: 'Building, maintaining and testing a financial analytics web application. Built with AngularJS and Rails. Applications intended for churches and non-profits.',
        notable: ['Ruby on Rails', 'AngularJS', 'NodeJS', 'Prawn Gem']
      }, {
        name: 'OpenSource',
        title: 'Experian Data Dictionary',
        url: 'https://rubygems.org/gems/experian-data-dictionary/versions/1.4',
        expand: false,
        description: 'Created an Experian Data Dictionary for public use. Translating between columns and values to definitions. Currently at 5,000+ downloads. Included tests and examples. ',
        notable: ['Ruby', 'RSpec', 'Rubocop']
      }, {
        name: 'Small Utility Site',
        title: '126 Hours',
        url: 'http://www.126hours.com/',
        expand: false,
        description: 'A little hobby project tracking hours left in a week after sleeping. Includes testing and examples.',
        notable: ['JavaScript', 'SASS', 'VueJS']
      }, {
        name: 'Portfolio Site',
        title: 'BlakeCampbell.com',
        url: 'http://www.blakecampbell.com/',
        expand: false,
        description: 'VueJS front-end site as a working demo. Includes testing with mocha.',
        notable: ['JavaScript', 'SASS', 'VueJS']
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
