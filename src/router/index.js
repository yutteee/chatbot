import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../components/views/LoginView.vue'
import UsersPage from '../components/views/UsersPage.vue'
import AdminPage from '../components/views/AdminPage.vue'
import AdminUserDetail from '../components/views/AdminUserDetail.vue'
import AdminLogin from '../components/views/AdminLogin.vue'

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
  {
    path: '/admin/:id',
    name: 'adminUserDetail',
    component: AdminUserDetail
  },
  {
    path: '/adminLogin',
    name: 'adminLogin',
    component: AdminLogin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
