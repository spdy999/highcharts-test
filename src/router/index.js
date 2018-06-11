import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyChart from '@/components/MyChart'
import MyMap from '@/components/MyMap'
import MapEurope from '@/components/MapEurope'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
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
