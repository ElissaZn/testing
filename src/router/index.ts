import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginPage from '../components/LoginPage.vue';
import UsersPage from '../components/UsersPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: LoginPage
  },
  {
    path: "/users",
    component: UsersPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
