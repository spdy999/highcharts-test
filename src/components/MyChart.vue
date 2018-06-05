<template>
  <div id="mychart">
    <div class="title-row">
      <p>Set the chart title here:</p>
      <input type="text" v-model="title">
    </div>
    <!-- <highcharts :options="chartOptions"></highcharts> -->
    <highcharts :constructor-type="'stockChart'" :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import { Chart } from 'highcharts-vue'

export default {
  name: 'mychart',
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
  watch: {
    title(newValue) {
      if (newValue === '') {
        this.chartOptions.title.text = 'Entire title'
      } else {
      	this.chartOptions.title.text = newValue
      }

    }
  }

};
</script>

<style>
.title-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #eee;
  padding: 20px;
}
</style>
