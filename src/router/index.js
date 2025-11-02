import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { title: '中文取名神器' }
  },
  {
    path: '/generate',
    name: 'Generate',
    component: () => import('../views/Generate.vue'),
    meta: { title: '生成结果' }
  },
  {
    path: '/detail/:name',
    name: 'Detail',
    component: () => import('../views/Detail.vue'),
    meta: { title: '名字详情' }
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import('../views/Favorites.vue'),
    meta: { title: '我的收藏' }
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue'),
    meta: { title: '名字测试' }
  },
  {
    path: '/knowledge',
    name: 'Knowledge',
    component: () => import('../views/Knowledge.vue'),
    meta: { title: '取名知识' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '中文取名神器'
  next()
})

export default router
