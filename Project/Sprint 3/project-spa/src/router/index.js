import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/estate/propertyType',
    name: 'propertyType',   
    component: () => import('../views/estate/PropertyType.vue')
  },
  {
    path: '/estate/costManagement',
    name: 'costManagement',   
    component: () => import('../views/estate/CostManagement.vue')
  },
  {
    path: '/security/permission',
    name: 'permission',   
    component: () => import('../views/security/PermissionView.vue')
  },
  {
    path: '/security/role',
    name: 'role',   
    component: () => import('../views/security/RoleView.vue')
  },
  {
    path: '/security/permissionRole',
    name: 'permissionRole',   
    component: () => import('../views/security/PermissionRoleView.vue')
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
