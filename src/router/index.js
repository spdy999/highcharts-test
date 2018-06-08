import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyChart from '@/components/MyChart'
import MyMap from '@/components/MyMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
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
