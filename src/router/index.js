import { createRouter, createWebHistory } from 'vue-router'
import AccountsPage from '../views/AccountsPage.vue'
import HomePage from '../views/HomePage.vue'
const routes = [
  {
    path: '/',
    component: AccountsPage
  },
  {
    path: '/home',
    component: HomePage
  },
  
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router