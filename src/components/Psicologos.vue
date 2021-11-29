<template>
    <div class="psicologos-container">
        <p v-scroll-reveal="{delay: 500,scale:2}">¿Buscas un psicologo Online?</p>
        <div class="psicologos">
            <SearchPsicologos v-scroll-reveal="{delay: 500,scale:2}" />
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
                        <a href="/">Comenzar Ahora</a>
                    </div>
                </aside>
                <div class="psicologos-card__card">
                    <PsicologoList :psicologo="psicologo" v-for="psicologo in psicologos" :key="psicologo.id"/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import SearchPsicologos from './SearchPsicologos.vue';
import PsicologoList from './PsicologoList.vue';
import Footer from './Footer.vue';

export default {
  name: 'Psicologos',
  components:{
    SearchPsicologos,PsicologoList,Footer
  },
  data(){
      return{
          motivo: ["Ansiedad","Miedo","Ansiedad por Separacion","Terapia"]
      }
  },
  methods: {
        // filter(person){
        //     console.log(person.name + '' + person.gender + '' + this.gender)
        //     if(person.gender == true && this.gender == true){
        //         return person
        //     }
        // }
  },
  computed:{
      ...mapGetters({
          psicologos: 'filteredPsicologos'
      })
  }
}
</script>
