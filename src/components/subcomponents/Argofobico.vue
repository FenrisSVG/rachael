<template>
    <div>
      <section class="trastornos">
        <h2>Trastorno Agorafobia.</h2>

        <article class="trastornos-container">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/ansiedad-generalizada.jpg" alt="">
          </header>
          <footer class="trastornos-container__text">
            <p><strong>El <span>Trastorno Agorafobico</span></strong> es el miedo o ansiedad intensa en situaciones como,
            <strong>Uso del transporte publico, estar en espacios abiertos, estar en sitios cerrados, hacer cola y estar
                fuera de casa solo</strong>. Por lo general el individuo teme o evita estas situaciones debido a la idea
                de que escapar podria ser dificil, por lo general requeiren a un acompañante para que el individuo se tranquilice.</p>
            <p>Es un miedo intenso por la exposicion real o anticipatoria a una gama alta de situaciones. La cantidad de miedo experimentado puede
                variar con la proximidad a la situacion temida y puede ocurrir en anticipacion.
            </p>
            <h3><strong>Sintomas clinicos del Trastorno Agorafobico.</strong></h3>
            <p>Algunos sintomas del Trastorno Agorafobico son,</p>
            <div class="sintomas">
              <ol class="sintomas-menu" v-if="sintomas != ''">
                <li v-for="(item,index) in sintomas" :key="index" class="sintomas-menu__item">{{item}}</li>
              </ol>
            </div>
            <h3>Desarollo y curso</h3>
            <p>La mayoria de los individuos con trastorno de panico muestan signos de ansiedad y agorafobia. Aparece 
                antes de los 35 años. Las caracteristicas clinicas de la agorafobia son relativamente constantes durante
                toda la vida, aunque el tipo de situaciones agorafobicas puede variar. En los adoslecentes generalmente la situacio
                mas de miedo es estar solos en una tienda y en espacios abiertos.
            </p>
            <h3><strong>Consecuencias que tiene este Trastorno Agorafobico.</strong></h3>
            <p>Tiene una consecuencia de una considerable deficiencia y discapacidad en lo que se refiere a funcionalidad,
                productividad laboral y dias de incapacidad. Su gravedad es un fuerte determinante del grado de discapacidad, independientemente
                de la presencia comorbida de un trastorno de panico.
            </p>
            <h3>Comorbilidad</h3>
            <p>La mayoria que padecen este trastorno tambien tienen otros trastornos mentales. Los mas frecuentes son
                Trastorno de ansiedad, trastornos depresivos.
            </p>
            <h3><strong>¿Como se trata el Trastorno Agorafobico.?</strong></h3>
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
  name: 'Argofobico',
  components:{
    Footer
  },
  data(){
    return{
      sintomas:["Nerviosismo","Nauseas","Problemas Gastrointestinales"]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>