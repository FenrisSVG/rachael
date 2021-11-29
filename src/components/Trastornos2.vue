<template>
    <div class="trastorno-container" v-scroll-reveal.reset="{delay: 300}">
      <h2 class="test-container__text">Tipos de Trastornos Mentales.</h2>
        <section class="trastorno" v-if="trastornos !== ''">
          <header class="trastorno-header" v-for="(item) in trastornos.slice(5,10)" :key="item.id" v-scroll-reveal.reset="{delay: 500}">
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

import {mapState} from 'vuex'
import Footer from './Footer.vue';
import Paginacion from './Paginacion.vue';


export default {
  name: 'Trastornos2',
  components:{
    Footer,Paginacion
  },
  data(){
    return {

    }
  },
  created(){
    return window.scrollTo(0,0)
  },
  computed:{
    ...mapState(['trastornos'])
  }
}
</script>


