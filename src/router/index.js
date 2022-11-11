import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../components/views/LoginView.vue'
import UsersPage from '../components/views/UsersPage.vue'

const routes = [
  {
    path: '/',
    name: 'loginView',
    component: LoginView
  },
  {
    path:'/users',
    name: 'usersPage',
    component: UsersPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
