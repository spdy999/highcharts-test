import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyChart from '@/components/MyChart'
import MyMap from '@/components/MyMap'
import MapEurope from '@/components/MapEurope'
import MapThai from '@/components/MapThai'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mapthai',
      name: 'MapThai',
      component: MapThai
    },
    {
      path: '/mapeurope',
      name: 'MapEurope',
      component: MapEurope
    },
    {
      path: '/mymap',
      name: 'Highmaps',
      component: MyMap
    },
    {
      path: '/mychart',
      name: 'Highcharts',
      component: MyChart
    }
  ]
})
