import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../Pages/HomePages.vue'
import loginPage from '../Pages/loginPage.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: loginPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router