<template>
    <div>
      <section class="trastornos">
        <h2>Trastorno de Ansiedad Por Separacion.</h2>

        <article class="trastornos-container">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/ansiedad-generalizada.jpg" alt="">
          </header>
          <footer class="trastornos-container__text">
            <p><strong>Los Trastornos por Separacion</strong> se dan ya sea por <strong>preocupaciones excesita y
            persistente</strong> por la posible perdida de las figuras de <strong>mayor apego</strong> o de que puedan sufrir un posible daño, como una 
            enfermedad o incluso peor <strong>la muerte</strong> o tambien por <strong>social, apatia, tristeza o dificultad para concentrarse en el trabajo o juego</strong> vinculado. 
            Asimismo muestran preocupacion por los acontecimientos adversos que pueden sucederles a ellos mismos, como miedo
            a perderse o ser secuestrados o a sufrir un accidente.</p>
            <p>Al alejarse del hogar o de las personas de gran apego, se puede manifestar de modo recurrente retraimento
              <strong>social, apatia, tristeza o dificultad para concentrarse en el trabajo.</strong>.
            </p>
            <h3><strong>Sintomas clinicos de la Ansiedad Por Separacion.</strong></h3>
            <p>Algunos sintomas del Trastorno de la Ansiedad por Separacion son,</p>
            <div class="sintomas">
              <ol class="sintomas-menu" v-if="sintomas != ''">
                <li v-for="(item,index) in sintomas" :key="index" class="sintomas-menu__item">{{item}}</li>
              </ol>
            </div>
            <h3>Desarollo y curso</h3>
            <p>Los periodos de ansiedad elevada por la separacion de las figuras de apego forman parte 
              normal del desarollo temprano y pueden indicar el desarollo de relaciones de apego seguras
              (p. ej., se puede sufriar ansiedad ante los extraños)
            </p>
            <h3><strong>Consecuencias que tiene este Trastorno por Separacion.</strong></h3>
            <p>Las personas que se les diagnostica este trastorno a menudo limitan sus actividades 
              independientes del hogar o de las personas que sienten apego.
            </p>
            <h3>Riesgos de suicidio</h3>
            <p>Este trastorno esta asociado al suicidio asi que no lo hagas bro, cuidate mejor, esta asociado
              por el hecho de que si se le muere una persona de apego al intermediario pues este puede contraer trastorno
              de depresion y estar extrañando a su amado y querer acompañarlo.
            </p>
            <h3><strong>¿Como se trata la Ansiedad Por Separacion?</strong></h3>
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
  name: 'Separacion',
  components:{
    Footer
  },
  data(){
    return{
      sintomas:["Nauseas","Agitacion","Taquicardia","Dificultad para concentrarse"]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>