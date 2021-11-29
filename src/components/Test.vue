<template>
    <div class="test-container">
      <h2 class="test-container__text" v-scroll-reveal="{delay: 300}">Test Psicologicos Mentales.</h2>
      <section class="test-information" v-scroll-reveal="{delay: 300}">
          <div class="test-information__text">
            <p>Los Test Psicologicos, son instrumentos experimentales con una firme base científica y 
              una amplia validez estadística que tienen como finalidad la medición y/o evaluación de 
              alguna característica psicológica –ya sea específica o general de un determinado sujeto–,
               tal como lo puede ser, por ejemplo: <strong> (a) el proceso de medir su nivel de inteligencia para
                efectos de poder comparar su rendimiento intelectual en relación con su grupo de pares,
                 (b) la evaluación y medición de los rasgos generales de personalidad de un individuo, (c)
                  la determinación de un perfil psicológico específico, (d) la constatación –a nivel clínico
                   y psiquiátrico– de trastornos mentales y el consiguiente diagnóstico y tratamiento 
                   psicoterapéutico, y finalmente (e) verificar –ahora en el ámbito laboral– si los rasgos
                    psicológicos, las competencias y las características personales que distinguen a
                     una determinada persona se correlacionan con el perfil del cargo que ha sido levantado
                      por alguna organización, sea ésta pública o privada.</strong></p>
          </div>
          <div class="test-information__img">
            <img src="../assets/desktop/test.jpg" alt="">
          </div>

      </section>

      <h2 v-scroll-reveal="{delay: 300}" class="test-container__text">Tipos de Test Psicologicos.</h2>
        <section class="test" v-scroll-reveal="{delay: 300}">
          <header class="test-header">
            <img src="../assets/desktop/test-psicologico.jpeg" alt="">
          </header>

          <div class="test-body">
            <h2>Test De <span>Autoevaluacion.</span></h2>
            <p>Examen dedicado a evaluar la diferente caracteristica psicologica, como habilidades, capacidades, cogniciones y sentimientos.
              En esta pagina, ofrecemos un tipo de test psicologico para conocerte mejor a ti mismo y para detectr posibles transtorno o problema que tengas...
            </p>
          </div>
          <footer class="test-footer">
            <router-link :to="{name: 'Autoevaluacion',params:{query: 'autoevaluacion'}}">Realizar</router-link>
          </footer>
        </section>
        <Footer/>
    </div>
</template>

<script>
    
import Footer from './Footer.vue';


export default {
  name: 'Test',
  components:{
    Footer
  }
}
</script>


