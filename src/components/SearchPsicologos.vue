<template>
    <div class="side-bar">
        <p>Filtrar por</p>
        <hr>
        <div class="side-bar__input">
            <label for="date">¿Que dia te gustaria tomar tu sesión?</label>
            <input type="date" name="date" id="date" placeholder="Elegir Fecha">
        </div>
        <hr>
        <div class="side-bar__input">
            <p for="gender">Género</p>
            <input type="checkbox" name="man" id="man" v-model="men">
            <label for="man">Hombre</label>
            <input type="checkbox" name="female" id="female" v-model="female">
            <label for="female">Mujer</label>
        </div>
        <hr>
        <div class="side-bar__input">
            <p for="sesion">Tipo de Sesion</p>
            <input type="checkbox" name="individual" id="individual" v-model="individual"> 
            <label for="individual">Individual</label>
            <input type="checkbox" name="pareja" id="pareja" v-model="pareja"> 
            <label for="pareja">Pareja</label>
        </div>
        <hr>
        <div class="side-bar__input">
            <p for="duracion">Duracion</p>
            <input type="checkbox" name="duracion50" id="50" v-model="minutos50"> 
            <label for="duracion50">50 minutos</label>
            <input type="checkbox" name="duracion" id="100" v-model="minutos100"> 
            <label for="duracion">100 minutos</label>
        </div>
        <hr>
        <div class="side-bar__input help">
            <p for="modelos">Modelos terapeuticos</p>
            <i class="fas fa-question-circle icon-help" id="question" @click="modalTerapeutico"></i>
            <input type="checkbox" name="cognitivoconductual" id="cognitivoconductual"> 
            <label for="cognitivoconductual">Cognitivo-Conductual</label>
            <input type="checkbox" name="psicoanalisis" id="psicoanalisis"> 
            <label for="psicoanalisis">Psicoanalisis</label>
            <input type="checkbox" name="cognitivo" id="cognitivo"> 
            <label for="cognitivo">Cognitivo</label>
            <input type="checkbox" name="psicoanalisiscognitivo" id="psicoanalisiscognitivo">
            <label for="psicoanalisiscognitivo">Psicoanalisis-Cognitivo</label>
        </div>
    </div>
</template>

<script>
export default {
   name: 'SearchPsicologo',
   computed:{
    men:{
        get(){
            return this.$store.state.filter.men
        },
        set(val){
            this.$store.commit('SET_MEN',val)
        }
    },
    female:{
        get(){
            return this.$store.state.filter.female
        },
        set(val){
            this.$store.commit('SET_FEMALE',val)
        }
    },
    individual:{
        get(){
            return this.$store.state.filter.individual
        },
        set(val){
            this.$store.commit('SET_INDIVIDUAL',val)
        }
    },
    pareja:{
        get(){
            return this.$store.state.filter.pareja
        },
        set(val){
            this.$store.commit('SET_PAREJA',val)
        }
    },
    minutos50:{
        get(){
            return this.$store.state.filter.minutos50
        },
        set(val){
            this.$store.commit('SET_50',val)
        }
    },
    minutos100:{
        get(){
            return this.$store.state.filter.minutos100
        },
        set(val){
            this.$store.commit('SET_100',val)
        }
    }
  },
  methods:{
      modalTerapeutico(){
        const modal = document.getElementById('modal-terapeutico')
        const close = document.getElementById('terapeutico-close')
        const question = document.getElementById('question')

        if(question) modal.classList.add('modal-terapeutico--show');

        if(modal){
            modal.addEventListener('click',(e)=>{
                if(e.target.classList.contains('modal-terapeutico')){
                    modal.classList.remove('modal-terapeutico--show') 
                }
            })
        }

        if(close){
            close.addEventListener('click',(e)=>{
                if(e.target.classList.contains('modal-terapeutico--close')){
                    modal.classList.remove('modal-terapeutico--show') 
                }
            })
        }
    }
  }
}
</script>
