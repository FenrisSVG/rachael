import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Rachael from '../views/Rachael.vue'
import Test from '../views/Test.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Antecedentes from '../views/Antecedentes.vue'
import Trastornos from '../views/Trastornos.vue'
import Trastornos2 from '../views/Trastornos2.vue'
import Trastornos3 from '../views/Trastornos3.vue'
import Trastornos4 from '../views/Trastornos4.vue'
import Trastornos5 from '../views/Trastornos5.vue'
import Ansiedad from '../views/Ansiedad.vue'
import Autoevaluacion from '../views/Autoevaluacion.vue'
import TestA from '../views/TestA.vue'
import Historial from '../views/Historial.vue'
import Separacion from '../views/Separacion.vue'
import Fobia from '../views/Fobia.vue'
import Social from '../views/Social.vue'
import Panico from '../views/Panico.vue'
import Mutismo from '../views/Mutismo.vue'
import Quesillo from '../views/Quesillo.vue'
import Argofobico from '../views/Argofobico.vue'
import Obsesivo from '../views/Obsesivo.vue'
import Dismotfico from '../views/Dismotfico.vue'
import Psicologos from '../views/Psicologos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rachael',
    name: 'Rachael',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Rachael
  },
  {
    path: '/test',
    name: 'Test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Test
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
    path: '/trastornos',
    name: 'Trastornos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Trastornos
  },
  {
    path: '/psicologos',
    name: 'Psicologos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Psicologos
  },
  {
    path: '/trastornos/:page',
    name: 'Trastornos2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Trastornos2
  },
  {
    path: '/trastornos/:page',
    name: 'Trastornos3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Trastornos3
  },
  {
    path: '/trastornos/:page',
    name: 'Trastornos4',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Trastornos4
  },
  {
    path: '/trastornos/:page',
    name: 'Trastornos5',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Trastornos5
  },
  {
    path: '/trastornos/:query',
    name: 'Ansiedad',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Ansiedad
  },
  {
    path: '/trastornos/:query',
    name: 'Separacion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Separacion
  },
  {
    path: '/trastornos/:query',
    name: 'Fobia',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Fobia
  },
  {
    path: '/trastornos/:query',
    name: 'Social',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Social
  },
  {
    path: '/trastornos/:query',
    name: 'Panico',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Panico
  },
  {
    path: '/trastornos/2/:query',
    name: 'Mutismo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Mutismo
  },
  {
    path: '/trastornos/2/:query',
    name: 'Argofobico',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Argofobico
  },
  {
    path: '/trastornos/2/:query',
    name: 'Obsesivo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Obsesivo
  },
  {
    path: '/trastornos/2/:query',
    name: 'Dismotfico',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Dismotfico
  },
  {
    path: '/psicologos/:query',
    name: 'Quesillo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Quesillo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
