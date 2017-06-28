<template>
  <div class="row">
    <a
      class="btn waves-effect waves-light blue"
      type="submit"
      name="action"
      target="_blank"
    >Resume
    {{stuff}}
      <i class="material-icons right">file_download</i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data () {
    return {
      stuff: 'This'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
