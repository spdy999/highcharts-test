<template>
  <div id="mychart">
    <div class="title-row">
      <p>High Chart</p>
    </div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import { Chart } from 'highcharts-vue';

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
          text: 'Title'
        },
        series: [
          {
            data: [10, 0, 8, 2, 6, 4, 5, 5]
          }
        ]
      }
    };
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
