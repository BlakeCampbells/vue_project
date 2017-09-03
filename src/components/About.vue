<template>
  <div class="row">
    <div class="col l6 m6 s12 offset-l3 offset-m3">
      <div class="card blue darken-1">
        <div class="card-content">
          <div class="card-title">
            <h5 class="white-text">About</h5>
          </div>
          <p class="white-text"> <b>{{about.intro}}</b></p>
          <p class="white-text">{{about.summary}}</p>
          <br>
          <a class="white-text" :href="about.photosLink" target="_blank"><u>MY PHOTOGRAPHY</u></a>
          <br>
          <a class="white-text" :href="about.writingLink" target="_blank"><u>MY WRITING</u></a>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      about: {
        intro: 'My name is Blake Campbell',
        summary: "I've been developing web applications for 4 years. Outside of coding I love taking pictures and reading.",
        photosLink: 'https://photos.app.goo.gl/UttRL3GCpnWWlB9u1',
        writingLink: 'https://medium.com/blake-campbell'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .padding {
    padding: 2em;
  }
</style>
