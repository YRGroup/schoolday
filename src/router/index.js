import Vue from 'vue'
import Router from 'vue-router'

// PC页面
import main from '@/page/main'
import schoolday from '@/page/schoolday'
import SD from '@/page/SD'
import seven from '@/page/720'

// 手机版页面
import mobileschoolday from '@/mobile/schoolday'
import m_SD from '@/mobile/SD'

Vue.use(Router)

export default new Router({
  routes: [

// PC页面
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/schoolday',
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
      name: 'SD',
      component: SD
    },

// 手机版页面
    {
      path: '/m',
      name: 'mobileschoolday',
      component: mobileschoolday
    },
    {
      path: '/m/sd/:name',
      name: 'm_SD',
      component: m_SD
    }
  ]
})
