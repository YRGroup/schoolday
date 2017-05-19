import Vue from 'vue'
import Router from 'vue-router'

// PC页面
import schoolday from '@/page/schoolday'
import schooldayV2 from '@/page/schooldayV2'
import seven from '@/page/720'

// 手机版页面
import mobileschoolday from '@/mobile/schoolday'
import mobileschooldayV2 from '@/mobile/schooldayV2'

Vue.use(Router)

export default new Router({
  routes: [

// PC页面
    {
      path: '/',
      name: 'schoolday',
      component: schoolday
    },
    {
      path: '/s/:school',
      name: 'seven',
      component: seven
    },
    {
      path: '/sd/:name',
      name: 'schooldayV2',
      component: schooldayV2
    },

// 手机版页面
    {
      path: '/m',
      name: 'mobileschoolday',
      component: mobileschoolday
    },
    {
      path: '/msd/:name',
      name: 'mobileschooldayV2',
      component: mobileschooldayV2
    }
  ]
})
