import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    isFilter: false,
    trastornos: [
      {
        id: 1,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno ansiedad generalizada',
        link: 'ansiedad-generalizada',
        router: 'Ansiedad'
      },
      {
        id: 2,
        image: require('../assets/desktop/ansiedad-generalizada.jpg'),
        name: 'trastorno ansiedad por separacion',
        link: 'ansiedad-por-separacion',
        router: 'Separacion'
      },
      {
        id:3,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'fobia especifica',
        link: 'fobia-especifica',
        router: 'Fobia'
      },
      {
        id: 4,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno de ansiedad social',
        link: 'ansiedad-social',
        router: "Social"
      },
      {
        id: 5,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno de panico',
        link: 'panico',
        router: 'Panico'
      },
      {
        id: 6,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno mutismo selectivo',
        link: 'mutismo-selectivo',
        router: 'Mutismo'
      },
      {
        id: 7,
        image: require('../assets/desktop/ansiedad-generalizada.jpg'),
        name: 'trastorno argofobico',
        link: 'argofobico',
        router: 'Argofobico'
      },
      {
        id: 8,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno obsesivo-compulsivo',
        link: 'obsesivo-compulsivo',
        router: 'Obsesivo'
      },
      {
        id: 9,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'Transtorno dismotfico corporal',
        link: 'dismotfico-corporal',
        router: "Dismotfico"
      },
      {
        id: 10,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno de acumulacion',
        link: 'acumulacion',
        router: 'Acumulacion'
      }
    ],
    psicologos: [{
        id: 1,
        name: 'Leonel Messi',
        src: require('../assets/desktop/messirve.jpg'),
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
        name: 'Cristiano Ronaldo',
        src: require('../assets/desktop/bicho.jpg'),
        country: 'Nicaragua',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed nesciunt quia voluptatibus! Placeat minima quos, eligendi iste quis neque. Natus qui voluptate deserunt vel ipsum mollitia quidem possimus praesentium?',
        button: 'Ver perfil completo',
        gender: 0,
        sesion: 1,
        duracion: 1,
        modelo: 'Cognitivo-conductual',
    },
    {
        id: 3,
        name: 'Mohammed Salah',
        src: require('../assets/desktop/salah.jpg'),
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
        name: 'Rosario Murillo',
        src: require('../assets/desktop/chayo.jpg'),
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
        src: require('../assets/desktop/amlo.jpg'),
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
      name: 'Quesillo',
      src: require('../assets/desktop/quesillo.jpg'),
      country: 'Nicaragua',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed nesciunt quia voluptatibus! Placeat minima quos, eligendi iste quis neque. Natus qui voluptate deserunt vel ipsum mollitia quidem possimus praesentium?',
      button: 'Ver perfil completo',
      gender: 0,
      sesion: 0,
      duracion: 1,
      modelo: 'Psicoanalisis',
      router: 'Quesillo',
      link: 'quesillo'
    }
    ],
    filter: {
      query: '',
      men: false,
      female: false,
      individual: false,
      pareja: false,
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
    },
    SET_FEMALE(state,check){
      state.filter.female = check
    },
    SET_INDIVIDUAL(state,check){
      state.filter.individual = check
    },
    SET_PAREJA(state,check){
      state.filter.pareja = check
    },
    SET_50(state,check){
      state.filter.minutos50 = check
    },
    SET_100(state,check){
      state.filter.minutos100 = check
    },
    updateTestStatus(state,payload){
      state.testStatus = payload.testStatus
    }
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
      return state.psicologos
    }
  },
  actions: {
  },
  modules: {
  }
})
