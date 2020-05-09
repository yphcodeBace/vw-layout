import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login'
import userManage from '@/pages/userManage'
import null404 from '@/pages/null404'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '',redirect: '/Login'},
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/userManage',
      name: 'userManage',
      component: userManage
    },
    {
      path: '*',
      name: 'null404',
      component: null404
    },
    
  ]
})
