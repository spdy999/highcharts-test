<template>
  <highcharts :constructor-type="'mapChart'" :options="mapOptions" class="map"></highcharts>
</template>

<script>
import geojson from '../js/europe.geo.json';

export default {
  data() {
    return {
      mapOptions: {
        // chart: {
        //   map: geojson
        // },

        title: {
          text: 'Nordic countries'
        },
        subtitle: {
          text:
            'Demo of drawing all areas in the map, only highlighting partial data'
        },

        legend: {
          enabled: false
        },
        plotOptions: {
          series: {
            mapData: geojson
          }
        },
        series: [
          {
            name: 'Country',
            joinBy: 'hc-key',
            color: 'red',
            data: [
              ['is', 1],
              ['no', 1],
              ['se', 1],
              ['dk', 1],
              ['fi', 1]
            ].slice(),
            dataLabels: {
              enabled: true,
              color: '#FFFFFF',
              formatter: function() {
                if (this.point.value) {
                  return this.point.name;
                }
              }
            }
          },
          {
            type: 'mapbubble',
            data: [['is', 1], ['no', 1], ['se', 1], ['dk', 1], ['fi', 1]],
            joinBy: 'hc-key',
            minSize: 30,
            maxSize: 40,
            dataLabels: {
              enabled: true,
              format: '{point.name}'
            }
          }
        ]
      }
    };
  }
};
</script>
 <style scoped>
.map {
  min-height: 500px;
}
</style>
