import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    isFilter: false,
    psicologos: [{
        id: 1,
        name: 'Leonel Messi',
        src: require('../assets/desktop/messirve.webp'),
        country: 'Nicaragua',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed nesciunt quia voluptatibus! Placeat minima quos, eligendi iste quis neque. Natus qui voluptate deserunt vel ipsum mollitia quidem possimus praesentium?',
        button: 'Ver perfil completo',
        gender: 0,
        sesion: 0,
        duracion: 0,
        modelo: 'Cognitivo-conductual',
        router: 'Messi',
        link: 'leonel-messi'
    },
    {
        id:2,
        name: 'Cesar Chavez',
        src: require('../assets/desktop/bicho.webp'),
        country: 'Nicaragua',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed nesciunt quia voluptatibus! Placeat minima quos, eligendi iste quis neque. Natus qui voluptate deserunt vel ipsum mollitia quidem possimus praesentium?',
        button: 'Ver perfil completo',
        gender: 0,
        sesion: 1,
        duracion: 1,
        modelo: 'Cognitivo-conductual',
        router: 'Bicho',
        link: 'cesar-chavez'
    },
    {
        id: 3,
        name: 'Miguel Angel',
        src: require('../assets/desktop/salah.webp'),
        country: 'Nicaragua',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed nesciunt quia voluptatibus! Placeat minima quos, eligendi iste quis neque. Natus qui voluptate deserunt vel ipsum mollitia quidem possimus praesentium?',
        button: 'Ver perfil completo',
        gender: 0,
        sesion: 1,
        duracion: 0,
        modelo: 'Psicoanalisis',
    },
    {
        id: 4,
        name: 'Maryelly Nohemi',
        src: require('../assets/desktop/chayo.webp'),
        country: 'Nicaragua',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed nesciunt quia voluptatibus! Placeat minima quos, eligendi iste quis neque. Natus qui voluptate deserunt vel ipsum mollitia quidem possimus praesentium?',
        button: 'Ver perfil completo',
        gender: 1,
        sesion: 1,
        duracion: 1,
        modelo: 'Cognitivo-conductual',
    },
    {
        id: 5,
        name: 'Andres Manuel Lobrez Obrador',
        src: require('../assets/desktop/amlo.webp'),
        country: 'Nicaragua',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed nesciunt quia voluptatibus! Placeat minima quos, eligendi iste quis neque. Natus qui voluptate deserunt vel ipsum mollitia quidem possimus praesentium?',
        button: 'Ver perfil completo',
        gender: 0,
        sesion: 0,
        duracion: 1,
        modelo: 'Psicoanalisis-Conductual',
    },
    {
      id: 6,
      name: 'ALEXANDER Espinoza',
      src: require('../assets/desktop/quesillo.webp'),
      country: 'Nicaragua',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed nesciunt quia voluptatibus! Placeat minima quos, eligendi iste quis neque. Natus qui voluptate deserunt vel ipsum mollitia quidem possimus praesentium?',
      button: 'Ver perfil completo',
      gender: 0,
      sesion: 0,
      duracion: 1,
      modelo: 'Psicoanalisis',
      router: 'Quesillo',
      link: 'alexander-espinoza'
    }
    ],
    filter: {
      query: '',
      men: false,
      female: false,
      hombre: false,
      mujer: false,
      individual: false,
      pareja: false,
      individual2: false,
      pareja2: false,
      minutos50: false,
      minutos100: false
    },
    getTrastorno: '',
    testStatus: false
  },
  mutations: {
    SET_QUERY(state,query){
      state.filter.query = query
    },
    SET_MEN(state,check){
      state.filter.men = check
      state.filter.female = false
    },
    SET_HOMBRE(state,check){
      state.filter.hombre = check
      state.filter.mujer = false
    },
    SET_FEMALE(state,check){
      state.filter.female = check
      state.filter.men = false
    },
    SET_MUJER(state,check){
      state.filter.mujer = check
      state.filter.hombre = false
    },
    SET_INDIVIDUAL(state,check){
      state.filter.individual = check
      state.filter.pareja = false
    },
    SET_INDIVIDUAL2(state,check){
      state.filter.individual2 = check
      state.filter.pareja2 = false
    },
    SET_PAREJA(state,check){
      state.filter.pareja = check
      state.filter.individual = false
    },
    SET_PAREJA2(state,check){
      state.filter.pareja2 = check
      state.filter.individual2 = false
    },
    SET_50(state,check){
      state.filter.minutos50 = check
      state.filter.minutos100 = false
    },
    SET_100(state,check){
      state.filter.minutos100 = check
      state.filter.minutos50 = false
    },
    updateTestStatus(state,payload){
      state.testStatus = payload.testStatus
    },
    loggedIn(state){
      state.loggedIn = true
    },
  },
  getters:{
    filteredTrastornos(state){
      if(state.filter.query.length >= 1){
        state.isFilter = true
        return state.trastornos.filter(item=> item.name.toLowerCase().includes(state.filter.query))
      }
      state.isFilter = false
      return state.trastornos
    },
    filteredPsicologos(state){
      if(state.filter.men){
        return state.psicologos.filter(item=> item.gender != state.filter.men)
      }
      if(state.filter.female){
        return state.psicologos.filter(item=> item.gender == state.filter.female)
      }
      if(state.filter.individual){
        return state.psicologos.filter(item=> item.sesion != state.filter.individual)
      }
      if(state.filter.pareja){
        return state.psicologos.filter(item=> item.sesion == state.filter.pareja)
      }
      if(state.filter.minutos50){
        return state.psicologos.filter(item=> item.duracion != state.filter.minutos50)
      }
      if(state.filter.minutos100){
        return state.psicologos.filter(item=> item.duracion == state.filter.minutos100)
      }
      if(state.filter.hombre && state.filter.individual2){
        return state.psicologos.filter(item => item.gender != state.filter.hombre && item.sesion != state.filter.individual2)
      }
      if(state.filter.mujer && state.filter.individual2){
        return state.psicologos.filter(item => item.gender == state.filter.mujer && item.sesion != state.filter.individual2)
      }
      if(state.filter.hombre && state.filter.pareja2){
        return state.psicologos.filter(item => item.gender != state.filter.hombre && item.sesion == state.filter.pareja2)
      }
      if(state.filter.mujer && state.filter.pareja2){
        return state.psicologos.filter(item => item.gender == state.filter.mujer && item.sesion == state.filter.pareja2)
      }
      return state.psicologos
    },
    
  },
  actions: {
    mocklogin({commit}){
      commit('loggedIn')
    }
  },
  modules: {
  }
})
