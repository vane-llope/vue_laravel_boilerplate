import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const routes = [
    {
        path:'/auth',
        redirect: '/login',
        name:'AuthLayout',
        meta: { isGuest: true },
        component:() => import('../components/DefaultLayout.vue'),
        children:[
          { path: '/login', name: 'Login', component: () => import('../views/Login.vue') },
          { path: '/register',  name: 'Register', component: () => import('../views/Register.vue') }
        ]
      },
      {
        path: '/',
        redirect: '/dashboard',
        name: 'DefaultLayout',
        meta: { requiresAuth: true },
        component: () => import('../components/AuthLayout.vue'),
        children: [
          { path: '/dashboard', name: 'Dashboard', component: () => import('../views/Dashboard.vue') },
          { path: '/surveys', name: 'Surveys', component: () => import('../views/Surveys.vue') }
        ]
      },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  
  // console.log(store.state.user.token);
   if (to.meta.requiresAuth && !store.state.user.token) {
     next({ name: 'Login' })
   }
   else if (store.state.user.token && to.meta.isGuest /*to.meta.isGuest means -> to.name === 'Login' || to.name === 'Register' */) {
     next({ name: 'Dashboard' })
   } else
     next()
 })

export default router
