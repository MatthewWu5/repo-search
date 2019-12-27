import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/repo-search',
    name: 'repoSearch',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/RepoSearch.vue'),
  },
  {
    path: '/learning-demo',
    name: 'learningDemo',
    component: () =>
      import(/* webpackChunkName: "learning" */ '../learning-demo/index.vue'),
    children: [
      {
        path: '/learning/transform',
        component: () => import('../learning-demo/transform.vue'),
      },
      {
        path: '/learning/center-layout',
        component: () => import('../learning-demo/center-layout.vue'),
      },
      {
        path: '/learning/text-overflow',
        component: () => import('../learning-demo/text-overflow.vue'),
      },
      {
        path: '/learning/display-base',
        component: () => import('../learning-demo/display-base.vue'),
      },
      {
        path: '/learning/display-table',
        component: () => import('../learning-demo/display-table.vue'),
      },
      {
        path: '/learning/display-flex',
        component: () => import('../learning-demo/display-flex.vue'),
      },
      {
        path: '/learning/float',
        component: () => import('../learning-demo/float.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
