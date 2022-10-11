import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Rachael from '../views/Rachael.vue'
import Test from '../views/Test.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Nosotros from '../components/Nosotros.vue'
import Antecedentes from '../views/Antecedentes.vue'
import Autoevaluacion from '../views/Autoevaluacion.vue'
import TestA from '../views/TestA.vue'
import Historial from '../views/Historial.vue'
import Messi from '../views/Messi.vue'
import Personalidad from '../views/Personalidad.vue'
import Bicho from '../views/Bicho.vue'
import Quesillo from '../views/Quesillo.vue'
import Psicologos from '../views/Psicologos.vue'
import PageNotFound from '../views/PageNotFound.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Test,
    meta: {requiresAuth: true}
  },
  {
    path: '/signup',
    name: 'Signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  },
  {
    path: '/antecedentes',
    name: 'Antecedentes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Antecedentes
  },
  {
    path: '/personalidad',
    name: 'Personalidad',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Personalidad
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Nosotros
  },
  {
    path: '/test/:query',
    name: 'Autoevaluacion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Autoevaluacion,
    props: true
  },
  {
    path: '/test/autoevaluacion/test-autoevaluacion',
    name: 'TestA',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: TestA
  },
  {
    path: '/diagnostico/historial',
    name: 'Historial',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Historial
  },
  {
    path: '/psicologos',
    name: 'Psicologos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Psicologos,
    meta: {requiresAuth: true}
  },
  {
    path: '/psicologos/:query',
    name: 'Quesillo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Quesillo
  },
  {
    path: '/psicologos/:query',
    name: 'Messi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Messi
  },
  {
    path: '/psicologos/:query',
    name: 'Bicho',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Bicho
  },
  {
    path: '*',
    name: 'PageNotFound',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.matched.some(route => route.meta.requiresAuth) && !store.state.loggedIn){
    next('/login')
  }else{
    next()
  }
})

export default router
