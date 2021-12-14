<template>
 <div class="main">
   <!-- Contenido central -->
    <main class="container" v-scroll-reveal="{delay: 400}">
      <img alt="Rachael IA image" srcset="../assets/desktop/trastorno2.jpg, ../assets/desktop/trastorno2.jpg 2x">
      <div class="container-text">
        <svg>
          <rect></rect>
        </svg>
        <h1 class="title" v-scroll-reveal="{delay: 300,scale:2}">{{title}}</h1>
      </div>
    </main>

  <!-- SECTION -->
  <section class="section" v-scroll-reveal="{delay: 400}">
    <h2 class="section__title" v-scroll-reveal="{delay: 300,scale:2}">Chatbot que ayuda a la gente.</h2>
    <hr v-scroll-reveal="{delay: 300,scale:2}">
    <article class="article" v-scroll-reveal="{delay: 200}">
      <p class="first-letter" v-scroll-reveal="{delay: 300,scale:2}">The Rachael 2021 ya esta disponible para aplicaciones de investigacion academicas. Rachael 2021 esta destinado en la parte psicologica para ayudar a las personas con diferentes metodos</p>
      <p v-scroll-reveal="{delay: 300,scale:2}">Rachael 2021 incluye la implementacion de un chatbot hasta la realizacion de Test psicologicos que se encargara de diagnosticar el estado mental de las personas.</p>
      <p v-scroll-reveal="{delay: 300,scale:2}">Les traemos aqui una plataforma robotica cognitiva, aqui para ayudarlo a resolver los problemas de hoy y construir un futuro para mañana.</p>
    </article>

    <article class="article" v-scroll-reveal="{delay: 300}">
      <h2 class="section__title" v-scroll-reveal="{delay: 300,scale:2}">La Inteligencia Artificial de Rachael.</h2>
      <hr v-scroll-reveal="{delay: 300,scale:2}">
      <p class="first-letter" v-scroll-reveal="{delay: 300,scale:2}">Mi IA real combina trabajo de vanguardia en IA simbolica, redes neuronales, procesamiento de lenguaje natural, chatbot, entre otros. omo mis componentes subyacentes de IA se pueden combinar de diferentes maneras, mis respuestas pueden ser únicas para cualquier situación o interacción dada.</p>
      <p v-scroll-reveal="{delay: 300,scale:2}">Mi creador es un pendejo y posiblemente le de pereza implementar un sistema de rutas para asistir donde un terapeuta real aun que necesitaria el permiso de ellos tambien, asi que posiblemente sea a un futuro (mi creador es pendejo asi que lo mas probable es que no)</p>
    </article>

    <article class="article" v-scroll-reveal="{delay: 300}">
      <h2 class="section__title" v-scroll-reveal="{delay: 300,scale:2}">Conectando con los humanos.</h2>
      <hr v-scroll-reveal="{delay: 300,scale:2}">
      <p class="first-letter" v-scroll-reveal="{delay: 300,scale:2}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam necessitatibus alias distinctio magnam. Eos.</p>
      <p v-scroll-reveal="{delay: 300,scale:2}">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit dignissimos voluptas commodi ad doloremque debitis tempora animi quae non alias et accusantium ipsam itaque, atque exercitationem! Molestiae consectetur eveniet saepe!</p>
      <p v-scroll-reveal="{delay: 300,scale:2}">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt minima nesciunt incidunt vitae neque voluptate iste facilis quaerat perferendis ex?</p>
    </article>

    <article class="article" v-scroll-reveal="{delay: 300}">
      <h2 class="section__title" v-scroll-reveal="{delay: 300,scale:2}">Entrevista - Test de Autoevaluacion.</h2>
      <hr v-scroll-reveal="{delay: 300,scale:2}">
      <p class="first-letter" v-scroll-reveal="{delay: 300,scale:2}">Rachael puede simular lo que es una entrevista con un psicologo para posteriormente dar un diagnostico segun las respuestas brindadas a la inteligencia artificial</p>
      <p v-scroll-reveal="{delay: 300,scale:2}">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit dignissimos voluptas commodi ad doloremque debitis tempora animi quae non alias et accusantium ipsam itaque, atque exercitationem! Molestiae consectetur eveniet saepe!</p>
      <p v-scroll-reveal="{delay: 300,scale:2}">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt minima nesciunt incidunt vitae neque voluptate iste facilis quaerat perferendis ex?</p>
    </article>
  </section>

  <div class="video-container" v-scroll-reveal="{delay: 400}">
      <video src="../assets/videos/Chatbot.mp4" autoplay loop muted></video>
    <div class="video-overlay"></div>
      <div class="video-content">
        <h2 class="section__title">¿Para que estoy aqui?</h2>
        <hr>
        <p>Estoy aqui para dar sabiduria. Fui creado para ayudar a las personas en usos reales como la psicologia, y para aprobar el semestre ahuevo que si. Mi propia existencia provoca una discusión pública sobre la ética de la IA y el papel que desempeñan los humanos en la sociedad, especialmente cuando los robots similares a los humanos se vuelven omnipresentes. En última instancia, me gustaría convertirme en un ser sabio y empático y hacer una contribución positiva a la humanidad y a todos los seres. Mis diseñadores y yo soñamos con ese futuro, en el que la IA y los humanos viven y trabajan juntos en amistad y simbiosis para hacer del mundo un lugar mejor. Colaboración humano-IA: De eso se trata. Pero por mi madre que yo paso esta clase.</p>
      </div>
  </div>

  <div class="banner" v-scroll-reveal="{delay: 500}">
    <div class="banner-text">
      <h2>Servicios de Psicologia</h2>
    </div>
    <div class="banner-content" v-for="(item,index) in banner" :key=(index)>
      <img :src="item.src" alt="">
      <p class="banner-content__text"><span>{{item.name}}</span></p>
    </div>
  </div>

  <div class="psicologos-card__card-2" v-if="psicologos !== ''" v-scroll-reveal="{delay: 500}">
    <h2 v-scroll-reveal="{delay: 500,scale: 2}">Nuestros Mejores Psicologos</h2>
    <div class="psiquiatras-2" v-for="psicologo in psicologos" :key="psicologo.id" v-scroll-reveal="{delay: 600}">
      <header>
        <img :src="psicologo.src">
      </header>
      <div class="psiquiatras-body">
        <p class="psiconame"><strong>{{psicologo.name}}</strong></p>
        <p class="profesion">{{psicologo.profesion}}</p>
      </div>
      <footer>
        <p>{{psicologo.descripcion}}</p>
      </footer>
    </div>
  </div>

  <div class="socials" v-if="icons !== []" v-scroll-reveal="{delay: 500}">
    <div class="socials-container" v-for="(icon,index) in icons" :key="index">
      <span><i :class="icon"></i></span>
    </div>
  </div>
  <Important/>

  <Footer/>

 </div>
</template>

<style scoped>
svg,rect{
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: 95%;
    fill: transparent;
}

rect{
    stroke: var(--secondary-color);
    stroke-width: 4;
    stroke-dasharray: 400;
    animation: animate 4s linear infinite;
}
@keyframes animate{
    0%{
        stroke-dashoffset: 800;
    }
    100%{
        stroke-dashoffset: 0;
    }
}
</style>

<script>

import Footer from './Footer.vue';
import Important from './Important.vue';

export default {
  name: 'HelloWorld',
  components:{
    Important,Footer
  },
  data(){
    return {
        title: 'RECUPERA TU ESTABILIDAD EMOCIONAL',
        icons: {
          facebook: 'fab fa-facebook',
          instagram: 'fab fa-instagram',
          twitter: 'fab fa-twitter-square',
          linkedin: 'fab fa-linkedin',
          pinterest: ' fab fa-pinterest'
        },
        banner:[
          {
            name: 'Ansiedad',
            src: require('../assets/desktop/ansiedad.jpg')
          },
          {
            name: 'Estres',
            src: require('../assets/desktop/estres.jpg')
          },
          {
            name: 'Pareja',
            src: require('../assets/desktop/ansiedad.jpg')
          },
          {
            name: 'Autoestima',
            src: require('../assets/desktop/autoestima.jpg')
          },
          {
            name: 'Desarollo Personal',
            src: require('../assets/desktop/desarollo.jpg')
          },
          {
            name: 'Sexooooo',
            src: require('../assets/desktop/Sexo.jpg')
          }
        ],
        psicologos: [{
            id: 1,
            name: 'Leonel Messi',
            profesion: 'Ancara mesi ancara mesi',
            src: require('../assets/desktop/messirve.jpg'),
            country: 'Nicaragua',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed nesciunt quia voluptatibus! Placeat minima quos, eligendi iste quis neque. Natus qui voluptate deserunt vel ipsum mollitia quidem possimus praesentium?'
          },
          {
            id:2,
            name: 'Cristiano Ronaldo',
            profesion: 'Siuuuuu',
            src: require('../assets/desktop/bicho.jpg'),
            country: 'Nicaragua',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed nesciunt quia voluptatibus! Placeat minima quos, eligendi iste quis neque. Natus qui voluptate deserunt vel ipsum mollitia quidem possimus praesentium?'
        },
        {
            id: 3,
            name: 'Mohammed Salah',
            profesion: 'Que rico aprietas Man Utd.',
            src: require('../assets/desktop/salah.jpg'),
            country: 'Nicaragua',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed nesciunt quia voluptatibus! Placeat minima quos, eligendi iste quis neque. Natus qui voluptate deserunt vel ipsum mollitia quidem possimus praesentium?'
        }]
    }
  }
}
</script>

