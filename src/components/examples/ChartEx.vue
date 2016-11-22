<template>
  <div class="card blue charting-example">
    <div class="card-content white-text">
      <span class="card-title" v-on:click="buildChart()">Charting Example</span>
    </div>
    <div class="row">
      <div class="col s12 m12">
        <div class="card white">
          <div class="card-content black-text activator">
            <canvas id="votesChart"></canvas>
            <div class="card-action activator">
              <i class="material-icons center">keyboard_arrow_down</i>
            </div>
          </div>
          <div class="card-reveal activator">
            Chart Values
            <table>
              <thead>
                <tr>
                  <th data-field="id">Label</th>
                  <th data-field="name">Votes</th>
                  <th data-field="price">Hex Value</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(section, indx) in sections">
                  <td><input type="text" v-model="section.label"/></td>
                  <td><input type="number" v-model="section.votes"/></td>
                  <td><input type="text" v-model="section.hex"></td>
                </tr>
              </tbody>
            </table>
            <div class="card-action activator">
              <i class="material-icons center card-title" v-on:click="updateChart()">keyboard_arrow_up</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
export default {
  name: 'chartEx',
  data () {
    return {
      sections: [
        {
          label: 'Red',
          votes: 12,
          hex: '#ff6384'
        }, {
          label: 'Blue',
          votes: 10,
          hex: '#0a2998'
        }, {
          label: 'Green',
          votes: 15,
          hex: '#3fda34'
        }, {
          label: 'Orange',
          votes: 9,
          hex: '#e0921d'
        }
      ]
    }
  },
  // Used to initialize the chart
  mounted: function () {
    this.buildChart()
  },
  methods: {
    updateChart: function () {
      if (this.votesChart) {
        this.votesChart.destroy()
      }
      this.buildChart()
    },
    buildChart: function () {
      var self = this
      this.votes = []
      this.labels = []
      this.colors = []
      this.sections.forEach(function (section) {
        self.votes.push(section.votes)
        self.labels.push(section.label)
        self.colors.push(section.hex)
      })
      var ctx = document.getElementById('votesChart')
      this.votesChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: self.labels,
          datasets: [{
            label: '# of Votes',
            data: self.votes,
            backgroundColor: self.colors,
            borderColor: self.colors,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      })
      console.log('My chart', this.votesChart)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
