<template>
    <div class="trastorno-container" v-if="trastornos.length > 0">
        <h2 v-scroll-reveal="{delay: 400}" :class="{'trastorno-container__text': !isFilter , 'trastorno-information--none': isFilter}">Trastornos Mentales</h2>
        <main v-scroll-reveal="{delay: 400}" :class="{'trastorno-information--none': isFilter,'trastorno-information': !isFilter}">
            <header class="trastorno-information__header">
                <h3>¿Que son los <span>Trastornos Mentales</span> ?</h3>
                <p>Los trastornos mentales son aquellos que se caracterizan por una combinacion de
                    alteraciones de pensmiento, las percepciones, emociones, la conducta y las relaciones
                    con los demas. En la actualidad se disponen de estrategias eficaces para prevenir algunos
                    trastornos mentales y medidas para aliviar el sufrimiento que causan. Existen muchos de ellos y
                    en esta pagina te vamos a explicar y mas informacion acerca de ellos. Haga clic en el siguiente enlace
                    para saber los 
                    <a href="#peligrosos" data="trastornos mas peligrosos">
                      trastornos mas peligrosos</a> que te pueden diagnosticar.
                </p>
            </header>
            <footer class="trastorno-information__footer">
              <img src="../assets/desktop/trastorno.jpg" alt="trastorno image">         
            </footer>
        </main>
      
      <h2 class="test-container__text" v-scroll-reveal="{delay: 300}">Tipos de Trastornos Mentales.</h2>
        <Trastorno :trastorno="trastorno" v-for="trastorno in trastornos.slice(0,5)" :key="trastorno.id"/>
        <Paginacion/>
        
        <section class="danger-trastorno" v-if="danger !== []" id="peligrosos">
          <h2>Trastornos mas peligrosos que te pueden diagnosticar</h2>
          <div class="danger" v-for="item in danger" :key="item.id">
              <div class="danger__img">
                <img :src="item.src" :alt="item.alt">
              </div>
              <div class="danger__text">
                <p>{{item.name}}</p>
              </div>
          </div>
        </section>
        <Footer/>
    </div>
</template>

<style scoped>
.trastorno-information__header p a:hover::before{
  width: 100%;
}

.trastorno-information__header p a:hover{
  text-decoration-color: var(--danger-color);
}
</style>

<script>

import {mapGetters,mapState} from 'vuex'
import Trastorno from './TrastornoItem.vue';
import Footer from './Footer.vue';
import Paginacion from './Paginacion.vue';

export default {
  name: 'Trastornos',
  components:{
    Trastorno,Footer,Paginacion
  },
  computed: {
    ...mapGetters({
      trastornos: 'filteredTrastornos'
    }),
    ...mapState(['isFilter'])
  },
  data(){
    return{
      danger:[{
        id: 1,
        src: require('../assets/desktop/trastorno.jpg'),
        name: 'Trastorno Obsesivo Compulsivo',
        alt: 'trastonro mas peligrosos trastorno obsesivo compulsivo image'
      },
      {
        id: 2,
        src: require('../assets/desktop/trastorno2.jpg'),
        name: 'Trastorno Depresivos.',
        alt: 'trastonro mas peligrosos trastorno depresivos image'
      },
      {
        id: 3,
        src: require('../assets/desktop/trastorno3.jpg'),
        name: 'Trastornos de Ansiedad.',
        alt: 'trastonro mas peligrosos trastorno ansiedad image'
      },
      {
        id: 4,
        src: require('../assets/desktop/trastorno4.jpg'),
        name: 'Trastorno Azperger',
        alt: 'trastonro mas peligrosos trastorno azperger image'
      },
      {
        id: 5,
        src: require('../assets/desktop/trastorno5.jpg'),
        name: 'Trastorno Alzheimer',
        alt: 'trastonro mas peligrosos trastorno ezquizofrenia image'
      }]
    }
  }
}
</script>


