<template>
  <div class="row">
    <div class="col s12 m10 l10 offset-l1 offset-m1">
      <div class="card blue">
        <div class="card-content white-text">
          <span class="row">
            <div class="col m4 l4">
              <img width="50" height="" class="avatar__image" :src="profile.avatar_url" alt=""/>
            </div>
            <div class="col m8 l8">
              <h4>
                <span>{{ profile.name }}</span>
              </h4>
              <hr>
              <p>{{ profile.bio }}</p>
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data () {
    return {
      profile: {}
    }
  },
  methods: {},
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

.avatar__image {
  border-radius: 50%;
  display: block;
  max-width: 75%;
  max-height: 75%;
  width: auto;
  height: auto;
}
</style>
