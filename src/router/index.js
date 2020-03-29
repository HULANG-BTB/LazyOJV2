// 路由文件 router.js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Index',
      component: () => import("@/view/index/layout"),
      children: [
        {
          path: '/Index/Index',
          component: () => import('@/view/index/index/index'),
          meta: {
            title: 'Index'
          }
        },
        {
          path: '',
          redirect: './Index'
        }
      ]
    },
    {
      path: '/Admin',
      component: () => import('@/view/admin/layout'),
      children: [
        {
          path: '/Admin/Index',
          component: () => import('@/view/index/index/index')
        },
        {
          path: '',
          redirect: './Index'
        }
      ]
    },
    {
      path: '',
      redirect: './Index'
    }
  ]
})
