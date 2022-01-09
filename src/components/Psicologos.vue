<template>
    <div class="psicologos-container">
        <p v-scroll-reveal="{delay: 500,scale:2}">¿Buscas un psicologo Online?</p>
        <div class="psicologos">
            <SearchPsicologos v-scroll-reveal="{delay: 500,scale:2}" />
            <div class="modal-terapeutico" id="modal-terapeutico">
                <article class="article-terapeutico">
                    <h2>Modelos Terapeuticos</h2>
                    <p>Es el enfoque que el terapeuta le suele dar al caso. Este afecta en cómo se percibe a la persona, las herramientas que se utiliza y la duración del proceso.</p>
                    <div class="modal-terapeutico--close" id="terapeutico-close"></div>
                    <section class="article-terapeutico__text">
                        <h5>Cognitivo conductual:</h5>
                        <p>Se enfoca en conductas y pensamientos que generan dificultades. Las sesiones son orientadas a objetivos y usualmente se dejan tareas a realizar fuera de sesión.</p>
                    </section>
                    <section class="article-terapeutico__text">
                        <h5>Psicoanalisis:</h5>
                        <p>Se enfoca en conductas y pensamientos que generan dificultades. Las sesiones son orientadas a objetivos y usualmente se dejan tareas a realizar fuera de sesión.</p>
                    </section>
                    <section class="article-terapeutico__text">
                        <h5>Cognitivo:</h5>
                        <p>Se enfoca en conductas y pensamientos que generan dificultades. Las sesiones son orientadas a objetivos y usualmente se dejan tareas a realizar fuera de sesión.</p>
                    </section>
                    <section class="article-terapeutico__text">
                        <h5>Psicoanalisis cognitivo:</h5>
                        <p>Se enfoca en conductas y pensamientos que generan dificultades. Las sesiones son orientadas a objetivos y usualmente se dejan tareas a realizar fuera de sesión.</p>
                    </section>
                </article>
            </div>
            <div class="psicologos-card" v-scroll-reveal="{delay: 500,scale:2}">
                <div class="filter">
                    <label for="consulta">¿Cual es tu motivo de la consulta?</label>
                    <select class="consulta"  name="consulta" id="consulta" placeholder="¿Cual es el motivo de tu consulta?">
                        <option v-for="(item,index) in motivo" :key="index" value="">{{item}}</option>
                    </select>
                </div>   
                <aside class="psicologos-card__aside">  
                    <div class="psicologos-card__aside-img">
                        <img src="../assets/desktop/psicologo.svg" alt="">
                    </div>
                    <div class="psicologos-card__aside-text">
                        <h2>Encuentra a tu psicologo ideal</h2>
                        <p>Te ayudamos a encontrar tu psicologo ideal</p>
                        <router-link to="/" rel="nofollow">Comenzar Ahora</router-link>
                    </div>
                </aside>
                <div class="psicologos-card__card">
                    <PsicologoList id="psicologo-list" :psicologo="psicologo" v-for="psicologo in psicologos" :key="psicologo.id"/>
                </div>
            </div>
        </div>
        <Bot />
        <Footer/>
    </div>
</template>


<script>
import {mapGetters} from 'vuex'
import SearchPsicologos from './SearchPsicologos.vue';
import PsicologoList from './PsicologoList.vue';
import Bot from './inxdex.vue';
import Footer from './Footer.vue';

export default {
  name: 'Psicologos',
  components:{
    Bot,SearchPsicologos,PsicologoList,Footer
  },
  data(){
      return{
          motivo: ["Ansiedad","Miedo","Ansiedad por Separacion","Terapia"]
      }
  },
  computed:{
      ...mapGetters({
          psicologos: 'filteredPsicologos'
      })
  }
}
</script>
