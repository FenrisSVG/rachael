<template>
    <div>
      <section class="trastornos">
        <h2>Trastorno Mutismo Selectivo</h2>

        <article class="trastornos-container">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/ansiedad-generalizada.jpg" alt="">
          </header>
          <footer class="trastornos-container__text">
            <p><strong>El Trastornos Mutismo Selectivo</strong> es el fracaso constante para hablar en
            situaciones sociales especificas en las que existe expectativa por hablar a pesar de hacerlo en otras situaciones. La alteracion
            interfiere en los logros educativos o laborales, o en la comunicacion social, se puede atribuir a la falta de conocimiento
            o a la comodidad con el lenguaje necesario en la situacion social.</p>
            <p>Las personas con este trastorno no inician un dialogo si no que esperan a que alguien les hable primero, pueden hablar
                con total normalidad con sus familias pero les cuesta con sus amigos. <strong>Una persona con Mutismo Selectivo
                    debe ser diagnosticada tambien con Trastorno de Ansiedad Social.
                </strong>
            </p>
            <h3><strong>Sintomas clinicos del Trastorno Mutismo Selectivo</strong></h3>
            <p>Algunos sintomas del Trastorno del Mutismo Selectivo son,</p>
            <div class="sintomas">
              <ol class="sintomas-menu" v-if="sintomas != ''">
                <li v-for="(item,index) in sintomas" :key="index" class="sintomas-menu__item">{{item}}</li>
              </ol>
            </div>
            <h3>Desarollo y curso</h3>
            <p>Habitualmente inicia antes de la edad de 5 años, pero el trastorno puede no consultarse hasta haberse realizado
                el ingreso en el instituto, donde hay un aumento de interaccion social y del desempeño de tareas.
            </p>
            <h3><strong>Consecuencias que tiene este Trastorno Mutismo Selectivo</strong></h3>
            <p>Sus consecuencias es el desarrollo de <strong>timidez excesiva, miedo a la humillacion social, aislamiento y
                retraimiento social, rasgos compulsivos, negativismo y pataletas.
            </strong> Puede dar lugar a un deterioro social, ya que la persona puede sentirse demasiado ansiosa a la hora de participar.
            </p>
            <h3>Comorbilidad</h3>
            <p>Los sujetos con <strong>Trastorno Mutismo Selectivo</strong> tienen condicion comorbida con el trastorno de ansiedad social, seguido
            por el de ansiedad por separacion y fobia especifica.
            </p>
            <h3><strong>¿Como se trata el Trastorno Mutismo Selectivo?</strong></h3>
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
  name: 'Mutismo',
  components:{
    Footer
  },
  data(){
    return{
      sintomas:["Nerviosismo","Timidez","Pataletas"]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>