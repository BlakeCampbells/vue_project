<template>
  <div class="row">
    <div class="col s12 m8 l8 offset-l2 offset-m2">
      <div class="card blue darken-1">
        <div class="card-content white-text">
          <span class="row">
            <div class="col m4 l4">
              <img width="50" height="" class="avatar__image" :src="profile.avatar_url" alt=""/>
            </div>
            <div class="col m8 l8">
              <h4>
                <span class="left-align">{{ profile.name }}</span>
              </h4>
              <hr>
              <p class="left-align">{{ profile.bio }}</p>
            </div>
          </span>
          <span class="row">
            <div class="col m12 l12">
              <span class="input-field">
                <input id="icon_prefix" type="text" class="validate" v-model="profile.login">
              </span>
              <i class="fa fa-github prefix fa-3x" aria-hidden="true" v-on:click="update()"></i>
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'githubApi',
  data () {
    return {
      profile: {}
    }
  },
  methods: {
    update: function () {
      this.$http.get('https://api.github.com/users/' + this.profile.login).then(function (response) {
        this.profile = response.data
      })
    }
  },
  created: function () {
    this.$http.get('https://api.github.com/users/BlakeCampbells').then(function (response) {
      this.profile = response.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-field .prefix.active {
  color: #000;
}
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
.avatar__image {
  border-radius: 50%;
  display: block;
  max-width: 75%;
  max-height: 75%;
  width: auto;
  height: auto;
}
</style>
