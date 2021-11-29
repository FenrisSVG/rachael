<template>
    <div class="trastorno-container" v-scroll-reveal.reset="{delay: 300}">
      <h2 class="test-container__text">Tipos de Trastornos Mentales.</h2>
        <section class="trastorno" v-if="trastornos !== '' ">
          <header class="trastorno-header" v-for="(item) in trastornos" :key="item.id" v-scroll-reveal.reset="{delay: 500}">
            <img :src="item.image" alt="">
            <h2>{{item.name}}</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sequi est 
              modi quis aut. Molestias officia quaerat accusantium minima placeat!...</p>
            <router-link :to="{name: item.router, params:{query: item.link}}">Ver mas...</router-link>
            </header>
        </section>
        <Paginacion/>
        <Footer/>
    </div>
</template>

<script>
    
import Footer from './Footer.vue';
import Paginacion from './Paginacion.vue';


export default {
  name: 'Trastornos3',
  components:{
    Footer,Paginacion
  },
  data(){
    return {
        trastornos: [
          {
            id: 1,
            image: require("../assets/desktop/ansiedad-generalizada.jpg"),
            name: 'Transtorno de EXcoriación',
            link: 'excoriacion',
            router: 'Excoriacion'
          },
          {
            id: 2,
            image: require('../assets/desktop/ansiedad-generalizada.jpg'),
            name: 'Trastorno Depresion Mayor',
            link: 'depresion-mayor',
            router: 'Depresion'
          },
          {
            id:3,
            image: require("../assets/desktop/ansiedad-generalizada.jpg"),
            name: 'Trastorno Depresivo Persistente',
            link: 'depresivo-persistente',
            router: 'Depresivo'
          },
          {
            id: 4,
            image: require("../assets/desktop/ansiedad-generalizada.jpg"),
            name: 'Transtorno Depresivo Inducido por un Medicamento',
            link: 'depresivo-inducido-por-medicamento',
            router: "Medicamento"
          },
          {
            id: 5,
            image: require("../assets/desktop/ansiedad-generalizada.jpg"),
            name: 'Transtorno Depresivo Debido a Afección Medica',
            link: 'depresivo-afeccion-medica',
            router: 'Medica'
          }
        ]
    }
  },
  watch:{
    "$route.query.query":{
      immediate: true,
      handler(query){
          console.log(query);
      }
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>


