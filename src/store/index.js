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
        image: require('../assets/desktop/separacion.jpg'),
        name: 'trastorno ansiedad por separacion',
        link: 'ansiedad-por-separacion',
        router: 'Separacion'
      },
      {
        id:3,
        image: require("../assets/desktop/fobia.jpg"),
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
        image: require("../assets/desktop/panico.jpg"),
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
        image: require('../assets/desktop/agorafobico.jpg'),
        name: 'trastorno argofobico',
        link: 'argofobico',
        router: 'Argofobico'
      },
      {
        id: 8,
        image: require("../assets/desktop/obsesivo.jpg"),
        name: 'trastorno obsesivo-compulsivo',
        link: 'obsesivo-compulsivo',
        router: 'Obsesivo'
      },
      {
        id: 9,
        image: require("../assets/desktop/dismotfico.jpg"),
        name: 'Transtorno dismotfico corporal',
        link: 'dismotfico-corporal',
        router: "Dismotfico"
      },
      {
        id: 10,
        image: require("../assets/desktop/acumulacion.jpg"),
        name: 'trastorno de acumulacion',
        link: 'acumulacion',
        router: 'Acumulacion'
      },
      {
        id: 11,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno de excoriacion',
        link: 'excoriacion',
        router: 'Excoriacion'
      },
      {
        id: 12,
        image: require("../assets/desktop/depresion.jpg"),
        name: 'trastorno de depresion mayor',
        link: 'depresion',
        router: 'Depresion'
      },
      {
        id: 13,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno depresivo persistente',
        link: 'persistente',
        router: 'Persistente'
      },
      {
        id: 14,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno depresivo inducido por medicamentos',
        link: 'medicamentos',
        router: 'Medicamentos'
      },
      {
        id: 15,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno depresivo debido a afeccion medica',
        link: 'afeccion-medica',
        router: 'Afeccion'
      },
      {
        id: 16,
        image: require("../assets/desktop/traumas.jpg"),
        name: 'trastorno relacionado con traumas y factores de estres',
        link: 'traumas',
        router: 'traumas'
      },
      {
        id: 17,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno de apego reactivo',
        link: 'apego',
        router: 'Apego'
      },
      {
        id: 18,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno de estres postraumatico',
        link: 'estres',
        router: 'Estres'
      },
      {
        id: 19,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno de estres agudo',
        link: 'agudo',
        router: 'Agudo'
      },
      {
        id: 20,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno de adaptacion',
        link: 'adaptacion',
        router: 'Adaptacion'
      },
      {
        id: 21,
        image: require("../assets/desktop/paranoia.jpg"),
        name: 'trastorno de personalidad paranoide',
        link: 'paranoide',
        router: 'Paranoide'
      },
      {
        id: 22,
        image: require("../assets/desktop/antisocial.jpg"),
        name: 'trastorno de personalidad antisocial',
        link: 'antisocial',
        router: 'Antisocial'
      },
      {
        id: 23,
        image: require("../assets/desktop/antisocial.jpg"),
        name: 'trastorno de personalidad esquizotipica',
        link: 'esquizotipica',
        router: 'Esquizotipica'
      },
      {
        id: 24,
        image: require("../assets/desktop/limite.jpg"),
        name: 'trastorno de personalidad limite',
        link: 'limite',
        router: 'Limite'
      },
      {
        id: 25,
        image: require("../assets/desktop/limite.jpg"),
        name: 'trastorno de personalidad histrionica',
        link: 'histrionica',
        router: 'Histrionica' 
      },
      {
        id: 26,
        image: require("../assets/desktop/limite.jpg"),
        name: 'trastorno de personalidad dependiente',
        link: 'dependiente',
        router: 'Dependiente'
      },
      {
        id: 27,
        image: require("../assets/desktop/limite.jpg"),
        name: 'trastorno de bipolaridad tipo I',
        link: 'bipolar-1',
        router: 'BipolarI'
      },
      {
        id: 28,
        image: require("../assets/desktop/limite.jpg"),
        name: 'trastorno de bipolaridad tipo II',
        link: 'bipolar-2',
        router: 'BipolarII'
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
        router: 'Bicho',
        link: 'el-bicho'
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
      state.filter.female = false
    },
    SET_FEMALE(state,check){
      state.filter.female = check
      state.filter.men = false
    },
    SET_INDIVIDUAL(state,check){
      state.filter.individual = check
      state.filter.pareja = false
    },
    SET_PAREJA(state,check){
      state.filter.pareja = check
      state.filter.individual = false
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
