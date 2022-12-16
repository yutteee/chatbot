import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../components/views/LoginView.vue'
import UsersPage from '../components/views/UsersPage.vue'
import AdminPage from '../components/views/AdminPage.vue'

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
  {
    path:'/admin',
    name: 'adminPage',
    component: AdminPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
