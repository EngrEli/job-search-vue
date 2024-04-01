import { createWebHashHistory, createRouter } from 'vue-router'

// import HomeView from '@/JobSearch/MainHero.vue'
import HomeView from '@/components/JobSearch/MainHero.vue'
import AboutView from '@/components/JobSearch/About.vue'
// import AboutView from '@/JobSearch/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  { path: '/about', component: AboutView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
