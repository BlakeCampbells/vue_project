<template>
  <div>
    <div class="row">
      <div class="col s12 m6" v-for="(item, index) in items">
        <div class="card white">
          <div class="card-content white-text">
            <div class="left-align">
              <span class="card-title">
                <input type="checkbox" :id="'checkbox' + index" v-model="item.checked" value="true">
                <label :for="'checkbox' + index">{{ item.name }}</label>
                <a class="btn-floating right blue darken-2" @click="removeTask(index)"><i class="material-icons">delete</i></a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col s12 m12">
        <div class="card white">
          <div class="card-content black-text">
            <div class="left-align">
              <span class="card-title">
                <input type="text" name="name" v-model="newTask.name">
                <a class="btn-floating right blue lighten-2" @click="addTask(newTask)"><i class="material-icons">add</i></a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo',
  data () {
    return {
      items: [{
        name: 'this',
        checked: false
      }, {
        name: 'that',
        checked: false
      }, {
        name: 'another',
        checked: false
      }, {
        name: 'stuff',
        checked: false
      }],
      newTask: { name: 'Here', checked: false }
    }
  },
  methods: {
    addTask: function (task) {
      this.items.push(task)
      this.newTask = { name: '', checked: false }
    },
    removeTask: function (index) {
      this.items.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
