<template>
    <div>
        <section class="trastornos">
        <h2 v-scroll-reveal="{delay: 300}" class="trastornos-title">Test de Autoevaluacion.</h2>
        <article class="trastornos-container" v-scroll-reveal="{delay: 300}">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/test.jpg" alt="" loading="lazy">
          </header>
          <footer class="trastornos-container__text">
            <div class="trastornos-mean">
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
            </div>
            <h3 class="trastornos-container__title"><strong>Como realiza el analisis el sistema de la autoevaluacion.</strong></h3>
            <p>La verdad ni yo se como lo hace pero lo hace jasjasjd eso es lo que importa.</p>
            <h3 class="trastornos-container__title">Dios nos ha abandonado</h3>
            <p>Definitivamente Dios nos ha abandonado hoy pierden a muchos integrantes 5to año.
            </p>
           <div class="trastornos-resultado">
              <h3 class="trastornos-container__title"><strong>¿Que hago una vez obtengo el resultado de mi Test?</strong></h3>
              <p>Una vez obtenido la prediccion del test, el siguiente paso seria ir a verificarlo
                donde un psicologo a concluir si nuestra prediccion fue correcta o no y hacer una retroalimentacion
                en base a la respuesta.</p>
              <p>Haga click en el siguiente boton para realizar su test o para ver su historial clinico.</p>
           </div>
            <div class="trastornos-container__link">
              <router-link to="/test/autoevaluacion/test-autoevaluacion" class="diagnosticar">
                <div class="test-footer--icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                  </svg>
                </div>
                <span>Diagnosticar</span>
              </router-link>
              <router-link to="/diagnostico/historial" class="historial">
                <div class="test-footer--icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                  </svg>
                </div>
                <span>Ver Historial.</span>
              </router-link>
            </div>
          </footer>
        </article>
      </section>
        <Footer/>
    </div>
</template>

<style scoped>
.trastornos-container__link{
    display: flex;
    align-items: center;
    gap: 20px;
}

.trastornos-container__link a span{
  transition: transform .5s ease-in-out;
}

.trastornos-container__link a{
  position: relative;
  display: flex;
  overflow: hidden;
}

.trastornos-container__link a:hover span{
  transform: translate(-20px);
}

.trastornos-container__link a:hover .test-footer--icon{
  transform: translate(165px)
}
</style>

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