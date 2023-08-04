import { createRouter, createWebHistory } from 'vue-router'
import AccountsPage from '../views/AccountsPage.vue'
const routes = [
  {
    path: '/',
    component: AccountsPage
  },
  
  
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router