<template>
  <div id="mymap">
    <h1>Map Test</h1>
  </div>
</template>

<script>
import { Chart } from 'highcharts-vue'

export default {
  name: 'mymap',
  components: {
    highcharts: Chart
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Entire title'
        },
        series: [{
          data: [10, 0, 8, 2, 6, 4, 5, 5]
        }]
      },
      title: ''
    }
  },
};
</script>

<style>
</style>
