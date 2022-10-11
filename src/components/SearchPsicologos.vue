<template>
    <div class="side-bar">
        <p class="side-bar__text">Filtrar por</p>
        <hr>
        <div class="side-bar__input side-bar__input--center">
            <label for="date">¿Que dia te gustaria tomar tu sesión?</label>
            <input type="date" name="date" id="date" placeholder="Elegir Fecha">
        </div>
        <hr>
        <div class="side-bar__input">
            <p class="side-bar__input-text">Género</p>
            <div class="sidebar-bar__input">
                <input type="checkbox" name="man" v-model="men">
                <label for="man">Hombre</label>
            </div>
            <div class="sidebar-bar__input">
                <input type="checkbox" name="female" v-model="female">
                <label for="female">Mujer</label>
            </div>
        </div>
        <hr>
        <div class="side-bar__input">
            <p class="side-bar__input-text" for="sesion">Tipo de Sesion</p>
            <div class="sidebar-bar__input">
                <input type="checkbox" name="individual" v-model="individual"> 
                <label for="individual">Individual</label>
            </div>
            <div class="sidebar-bar__input">
                <input type="checkbox" name="pareja" v-model="pareja"> 
                <label for="pareja">Pareja</label>
            </div>
        </div>
        <hr>
        <div class="side-bar__input">
            <p class="side-bar__input-text" for="duracion">Duracion</p>
            <div class="sidebar-bar__input">
                <input type="checkbox" name="duracion50"  v-model="minutos50"> 
                <label for="duracion50">50 minutos</label>
            </div>
            <div class="sidebar-bar__input">
                <input type="checkbox" name="duracion" v-model="minutos100"> 
                <label for="duracion">100 minutos</label>
            </div>
        </div>
        <hr>
        <div class="side-bar__input side-bar__input--help">
            <p class="side-bar__input-text" for="modelos">Modelos terapeuticos</p>
            <i class="fas fa-question-circle icon-help" id="question" @click="modalTerapeutico"></i>
            <div class="sidebar-bar__input">
                <input type="checkbox" name="cognitivoconductual"> 
                <label for="cognitivoconductual">Cognitivo-Conductual</label>
            </div>
            <div class="sidebar-bar__input">
                <input type="checkbox" name="psicoanalisis"> 
                <label for="psicoanalisis">Psicoanalisis</label>
            </div>
            <div class="sidebar-bar__input">
                <input type="checkbox" name="cognitivo"> 
                <label for="cognitivo">Cognitivo</label>
            </div>
            <div class="sidebar-bar__input">
                <input type="checkbox" name="psicoanalisiscognitivo">
                <label for="psicoanalisiscognitivo">Psicoanalisis-Cognitivo</label>
            </div>
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

        if(question) modal.classList.add('modal--show');

        if(modal){
            modal.addEventListener('click',(e)=>{
                if(e.target.classList.contains('modal-terapeutico')){
                    modal.classList.remove('modal--show') 
                }
            })
        }

        if(close){
            close.addEventListener('click',(e)=>{
                if(e.target.classList.contains('modal-terapeutico--close')){
                    modal.classList.remove('modal--show') 
                }
            })
        }

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                modal.classList.remove('modal--show') 
            }
        });
    }
  }
}
</script>
