import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../Pages/HomePages.vue'
import loginPage from '../Pages/loginPage.vue'
import ActivitiesPage from '../Pages/ActivitiesPages.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: loginPage },
  { path: '/activities', component: ActivitiesPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router