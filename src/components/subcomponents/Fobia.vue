<template>
    <div>
      <section class="trastornos">
        <h2>Trastorno de Fobia Especifica.</h2>

        <article class="trastornos-container">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/ansiedad-generalizada.jpg" alt="">
          </header>
          <footer class="trastornos-container__text">
            <p><strong>Los <span>Trastornos de Fobia Especifica</span></strong> es el miedo o Ansiedad por un objeto
            o situacion especifica (p. ej., volar, alturas, animales, inyeccion, entre otras), el objeto
            o la situacion fobica casi siempre provoca ansiedad. El nivel de miedo experimentado puede
            variar con la proximidad del objeto o la situacion temida y puede ocurrir como anticipacion del mismo
            o en presencia real del objeto o situacion.</p>
            <p>Otra caracteristica es que la exposicion al estimulo logico provoca casi invariablemente una
                respuesta de ansiedad inmediata. Por lo tanto, una persona que se pone ansiosa solo de vez en
                cuando al ser confortado por la situacion no seria diagnosticada con <strong>Fobia Especifica.</strong>
            </p>
            <h3><strong>Sintomas clinicos del Trastorno de Fobia Especifica.</strong></h3>
            <p>Algunos sintomas del Trastorno de Fobia Especifican son,</p>
            <div class="sintomas">
              <ol class="sintomas-menu" v-if="sintomas != ''">
                <li v-for="(item,index) in sintomas" :key="index" class="sintomas-menu__item">{{item}}</li>
              </ol>
            </div>
            <h3>Desarollo y curso</h3>
            <p>Se desarolla generalmente tras un acontecimiento traumatico, la observacion de otros individuos que
                sufren traumatismos (p. ej., presenciar caidas), una crisis de panico inesperada en una situacion que se 
                convertira a futuro en temida. Sin embargo muchas personas son incapaces de recordar a la razon concreta
                por la que aparecieron sus fobias.
            </p>
            <h3><strong>Consecuencias que tiene este Trastorno de Fobia Especifica.</strong></h3>
            <p>Las personas que se les diagnostica este trastorno generalmente desarollan una personalidad
                de <strong>miedo y ansiedad constante,</strong> tambien debido al miedo desarollan una
                <strong>inquietud y pesadillas</strong> de la sitaucion u objeto de la situacion fobica.
            </p>
            <h3>Riesgos de suicidio</h3>
            <p>Los sujetos con fobia especifica tienen un 60% mas de probabilidades de cometer intentos de suicidio
                que las personas no diagnosticadas. Sin embargo, es probable que estas tasas elevadas se deban
                principalmente a la comorbilidad con los trastornos de la personalidad y otros trastornos de ansiedad.
            </p>
            <h3><strong>¿Como se trata la Fobia Especifica?</strong></h3>
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
  name: 'Fobia',
  components:{
    Footer
  },
  data(){
    return{
      sintomas:["Nerviosismo","Agitacion","Temblores","Nauseas","Problemas Gastrointestinales"]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>