<template>
  <highcharts :constructor-type="'mapChart'" :options="mapOptions" class="map"></highcharts>
</template>

<script>
import geojson from '../js/th-all.geo.json';

export default {
  name: 'ThailandMapComponent',
  data() {
    return {
      mapOptions: {
        chart: {
          map: geojson
        },

        title: {
          text: 'GeoJSON in Highmaps'
        },

        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },

        colorAxis: {
          tickPixelInterval: 100
        },

        series: [
          {
            data: [
              ['Amnat Charoen', 19.97],
              ['Ang Thong', 14.2],
              ['Bangkok Metropolis', 20.76],
              ['Bueng Kan', 0],
              ['Buri Ram', 23.69],
              ['Chachoengsao', 17.46],
              ['Chai Nat', 16],
              ['Chaiyaphum', 16],
              ['Chanthaburi', 26.6],
              ['Chiang Mai', 20.86],
              ['Chiang Rai', 22.62],
              ['Chon Buri', 18.68],
              ['Chumphon', 29.37],
              ['Kalasin', 30.15],
              ['Kamphaeng Phet', 20.62],
              ['Kanchanaburi', 23.11],
              ['Khon Kaen', 25.12],
              ['Krabi', 27.49],
              ['Lampang', 20.17],
              ['Lamphun', 25.64],
              ['Loei', 25.19],
              ['Lop Buri', 19.02],
              ['Mae Hong Son', 29.93],
              ['Maha Sarakham', 27.61],
              ['Mukdahan', 28.22],
              ['Nakhon Nayok', 18.45],
              ['Nakhon Pathom', 12.83],
              ['Nakhon Phanom', 26.89],
              ['Nakhon Ratchasima', 20.58],
              ['Nakhon Sawan', 18.32],
              ['Nakhon Si Thammarat', 26.62],
              ['1.7977E+308', 11.71],
              ['Narathiwat', 25.9],
              ['Nong Bua Lam Phu', 28.91],
              ['Nong Khai', 24.16],
              ['Nonthaburi', 11.4],
              ['Pathum Thani', 14.26],
              ['Pattani', 26.49],
              ['Phangnga', 18.4],
              ['Phatthalung', 22.52],
              ['Phayao', 20.46],
              ['Phetchabun', 24.83],
              ['Phetchaburi', 22.84],
              ['Phichit', 19.82],
              ['Phitsanulok', 19.32],
              ['Phra Nakhon Si Ayutthaya', 14.71],
              ['Phrae', 18.39],
              ['Phuket', 17.6],
              ['Prachin Buri', 18.59],
              ['Prachuap Khiri Khan', 26.45],
              ['Ranong', 26.94],
              ['Ratchaburi', 18.09],
              ['Rayong', 19.45],
              ['Roi Et', 28.11],
              ['Sa Kaeo', 22.13],
              ['Sakon Nakhon', 26.37],
              ['Samut Prakan', 20.07],
              ['Samut Sakhon', 14.14],
              ['Samut Songkhram', 20.09],
              ['Saraburi', 19.62],
              ['Satun', 22.96],
              ['Si Sa Ket', 31.59],
              ['Sing Buri', 14.59],
              ['Songkhla', 19.89],
              ['Sukhothai', 19.98],
              ['Suphan Buri', 16.71],
              ['Surat Thani', 22.03],
              ['Surin', 24.15],
              ['Tak', 30.82],
              ['Trang', 27.74],
              ['Trat', 19.16],
              ['Ubon Ratchathani', 27.09],
              ['Udon Thani', 24.62],
              ['Uthai Thani', 20.83],
              ['Uttaradit', 18.03],
              ['Yala', 20.18],
              ['Yasothon', 23.06]
            ],
            keys: ['name', 'value'],
            joinBy: 'name',
            name: 'Random data',
            states: {
              hover: {
                color: '#a4edba'
              }
            },
            dataLabels: {
              enabled: true,
              format: '{point.properties.postal}'
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
