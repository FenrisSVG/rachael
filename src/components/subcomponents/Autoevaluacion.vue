<template>
    <div>
        <section class="trastornos">
        <h2 v-scroll-reveal="{delay: 300}">Test de Autoevaluacion.</h2>

        <article class="trastornos-container" v-scroll-reveal="{delay: 300}">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/test.jpg" alt="">
          </header>
          <footer class="trastornos-container__text">
            <p><strong>El <span>Test de Autoevaluacion</span></strong> es un examen dedicado a evaluar
             la diferente caracteristica psicologica, como habilidades, capacidades, cogniciones y 
             sentimientos.
              En esta pagina, ofrecemos un tipo de test psicologico para conocerte mejor a ti 
              mismo y para detectr posibles transtorno o problema que tengas durante el cumplimiento de una actividad
              o la forma en la que manejas la situacion</p>
            <p>Las pruebas de autoevaluación le ayudarán a familiarizarse con las pruebas de
               acceso con ordenador, que deberá efectuar en la primera fase del procedimiento 
               de selección (por ejemplo, razonamiento verbal y numérico o razonamiento abstracto).
               Estas pruebas son una herramienta de autoevaluación. No son eliminatorias. Los resultados no se registrarán ni 
               contabilizarán si decide presentar su candidatura.
            </p>
            <h3><strong>Como realiza el analisis el sistema de la autoevaluacion.</strong></h3>
            <p>La verdad ni yo se como lo hace pero lo hace jasjasjd eso es lo que importa.</p>
            <h3>Dios nos ha abandonado</h3>
            <p>Definitivamente Dios nos ha abandonado hoy pierden a muchos integrantes 5to año.
            </p>
            <h3><strong>¿Que hago una vez obtengo el resultado de mi Test?</strong></h3>
            <p>Una vez obtenido la prediccion del test, el siguiente paso seria ir a verificarlo
              donde un psicologo a concluir si nuestra prediccion fue correcta o no y hacer una retroalimentacion
              en base a la respuesta.</p>
            <h3 id="clic">Haga click en el siguiente boton para realizar su test o para ver su historial clinico.</h3>
            <router-link to="/test/autoevaluacion/test-autoevaluacion" class="diagnosticar">Diagnosticar</router-link>
            <router-link to="/diagnostico/historial" class="historial">Ver Historial.</router-link>
          </footer>
        </article>
      </section>
        <Footer/>
    </div>
</template>

<script>
    
import Footer from '../Footer.vue';


export default {
  name: 'Autoevaluacion',
  components:{
    Footer
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>