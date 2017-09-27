import Vue from 'vue'
import Router from 'vue-router'

// PC页面
import main from '@/page/main'
import schoolday from '@/page/schoolday'
import SD from '@/page/SD'
import seven from '@/page/720'
import f from '@/page/frame'
import s from '@/page/schoolPage'

// 手机版页面
import m_main from '@/mobile/main'
import m_schoolday from '@/mobile/schoolday'
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

    { path: '*', 
      component: main 
    },
    {
      path: '/schoolday',
      name: 'schoolday',
      component: schoolday
    },
    {
      path: '/s/:school',
      name: 's',
      component: s
    },
    {
      path: '/seven/:school',
      name: 'seven',
      component: seven
    },
    {
      path: '/sd/:name',
      name: 'SD',
      component: SD
    },
    {
      path: '/f/:school',
      name: 'f',
      component: f
    },

// 手机版页面
    {
      path: '/m',
      name: 'm_main',
      component: m_main
    },
    {
      path: '/m/schoolday',
      name: 'm_schoolday',
      component: m_schoolday
    },
    {
      path: '/m/sd/:name',
      name: 'm_SD',
      component: m_SD
    }
  ]
})
