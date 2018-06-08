// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueHighcharts from 'highcharts-vue'
import Highcharts from 'highcharts'
import HighMaps from '../node_modules/highcharts/highmaps.js'
import stockInit from 'highcharts/modules/stock'
import mapInit from 'highcharts/modules/map'
// import addWorldMap from './js/worldmap'

Vue.config.productionTip = false
stockInit(Highcharts)
mapInit(Highcharts)
// addWorldMap(Highcharts)
Vue.use(VueHighcharts,  { Highcharts })
Vue.use(HighMaps)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
