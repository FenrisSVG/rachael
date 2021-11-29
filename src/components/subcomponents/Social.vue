<template>
    <div>
      <section class="trastornos">
        <h2>Trastorno de Ansiedad Social.</h2>

        <article class="trastornos-container">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/ansiedad-generalizada.jpg" alt="">
          </header>
          <footer class="trastornos-container__text">
            <p><strong>Los Trastornos de Ansiedad Social</strong> tienen un criterio diagnostico de
            miedo o ansiedad intensa en una o mas situaciones sociales en las que el individuo esta expuesto
            al posible examen por parte de otras personas (p. ej., mantener una conversacion, reunirse con personas extrañas).
            El individuo tiene miedo de actuar de cierta manera o de mostrar sintomas de ansiedad que se valoren
            negativamente, por lo general estas situaciones le provocan miedo o ansiedad y por consecuente las evitan.
            </p>
            <p>Tiene miedos que son tipicamente los que resultan mas incapacitantes en su vida profesional o en las
              situaciones que requieran hablar en publico de forma habitual. Los individuos pueden ser inadecuadamente
              asertivos o excesivamente sumisos, o, con menor frecuencia, ejercer un gran control sobre las conversaciones.
            </p>
            <h3><strong>Sintomas clinicos de la Ansiedad Social.</strong></h3>
            <p>Algunos sintomas del Trastorno de la Ansiedad Social son,</p>
            <div class="sintomas">
              <ol class="sintomas-menu" v-if="sintomas != ''">
                <li v-for="(item,index) in sintomas" :key="index" class="sintomas-menu__item">{{item}}</li>
              </ol>
            </div>
            <h3>Desarollo y curso</h3>
            <p>Los adolescentes manifiestan un patron mas amplio de miedo y evitacion, incluidas las citas
              amorosas. Expresan niveles de ansiedad social mas bajos pero en una amplia gama de situaciones. 
            </p>
            <h3><strong>Consecuencias que tiene este Trastorno Social.</strong></h3>
            <p>Las personas que se les diagnostica este trastorno generalmente desarollan miedo o ansiedad, a diferencia
              de los demas este miedo es provocado al estar en situaciones sociales, miedo a que lo humillen por una equivocacion
              o a no poder mantener una convesacion.
            </p>
            <p>Tambien tiene como consecuencias el abandono escolar y alteraciones de bienestar, el empleo,
              la productividad laboral y su calidad de vida, se asocia tambien con la soledad, soltero o 
              divorciado y con no tener hijos.
            </p>
            <h3>Comorbilidad</h3>
            <p>Este trastorno es a menudo comorbido con otros trastornos de ansiedad, con el trastorno depresivo
             mayor y con los trastornos debido a sustancias especificas.
            </p>
            <h3><strong>¿Como se trata la Ansiedad Social?</strong></h3>
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
  name: 'Social',
  components:{
    Footer
  },
  data(){
    return{
      sintomas:["Nerviosismo","Agitacion","Nauseas","Incapacidad para concentrarse","Taquicardia","Timidez"]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>