<template>
    <div>
      <section class="trastornos">
        <h2 v-scroll-reveal="{delay: 300}">Trastorno de Ansiedad Generalizada.</h2>
        <article class="trastornos-container" v-scroll-reveal="{delay: 300}">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/ansiedad-generalizada.jpg" alt="">
          </header>
          <footer class="trastornos-container__text">
            <p><strong>Los <span>Trastornos de ansiedad</span></strong> son los que comparten caracteristicas de miedo
            y ansiedad excesivos, asi como alteraciones conductiales asociativas. El <strong>miedo</strong> es
            una respuesta emocional a una amenaza inminente, real o imaginaria, mientras que la <strong>ansiedad</strong>
            es una respuesta antisipatoria a una amenaza futura, debido a esto uno tiene costantes ataques de crisis de panico.</p>
            <h3><strong>Sintomas clinicos de la Ansiedad Generalizada.</strong></h3>
            <p>Algunos sintomas del Trastorno de la Ansiedad Generalizada son,</p>
            <div class="sintomas">
              <ol class="sintomas-menu" v-if="sintomas != ''">
                <li v-for="(item,index) in sintomas" :key="index" class="sintomas-menu__item">{{item}}</li>
              </ol>
            </div>
            <h3><strong>Consecuencias que tiene este Trastorno de Ansiedad.</strong></h3>
            <p>La unica <strong>consecuencia</strong> que se puede llegar a tener de este trastorno es
            el <strong>pensamiento desorganizado</strong> dicho anteriormente esto es debido a los 
            <strong>ataques de panico</strong> constante que le da a la persona.</p>
            <h3><strong>¿Como se trata la Ansiedad Generalizada?</strong></h3>
            <p>La manera de tratar este problema es con medicamentos psicofarmaceuticos, pero lo mejor
              es que <strong>consulte con un experto de verdad no con unos pendejos como nosotros.</strong>
            </p>
            <h3><strong>Recuerda que no estas solo.</strong></h3>
            <p>Sabemos que la ansiedad puede ser un problema dificil pero <strong>no estas solo</strong>
            Recuerda que buscar ayuda siempre está bien, no hay nada mejor que contar con un especialista que te pueda enseñar qué hacer para superar la depresión. No lo dudes,  
            realmente te sorprenderás con los resultados si buscas ayuda contra la ansiedad hoy</p>
          </footer>
        </article>
      </section>
        <Footer/>
    </div>
</template>

<script>
    
import Footer from '../Footer.vue';


export default {
  name: 'Ansiedad',
  components:{
    Footer
  },
  data(){
    return{
      sintomas:["Nerviosismo","Agitacion","Temblores","Incapacidad de concentracion","Taquicardia","Problemas Gastrointestinales"]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>