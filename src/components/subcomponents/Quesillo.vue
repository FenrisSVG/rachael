<template>
    <section class="quesillo">
      <h2 class="quesillo-title">Sobre el Psicologo Quesillo El Apuñalador</h2>
      <article class="article-quesillo">
          <header class="article-quesillo__header">
              <div class="quesillo-img">
                <img src="../../assets/desktop/quesillo.jpg" alt="" loading="lazy">
              </div>
              <div class="quesillo-text">
                <h6 class="quesillo-text__title">Quesillo el Apuñalador</h6>
                <p class="quesillo-text__info"><span>Idiomas:</span> Español, Ingles, Alienigena, Mukulkun, Chino, Ruso, Aleman, Arabe, Latin, Hebreo Antiguo, Lenguaje de Señas.</p>
                <p class="quesillo-text__info"><span>Nacionalidad: </span> Enviado de Dios.</p>
                <p class="quesillo-text__info"><span>Modelo de Trabajo Terapeutico:</span> Modo Sexo.</p>
                <p class="quesillo-text__info"><span>Email:</span> <img src="../../assets/desktop/quesillocom.png" loading="lazy" alt="messi mail"></p>
                <p class="quesillo-text__info"><span>Celular:</span> +505-88888888</p>
                <aside class="aside-quesillo">
                  <span class="aside-quesillo__item">Diversidad</span>
                  <span class="aside-quesillo__item">Equilibrio e Inteligencia Emocional</span>
                  <span class="aside-quesillo__item">Soledad</span>
                </aside>
                <p class="quesillo-text__info">¿Es que hay algo que este hombre no puede hacer bien? "Te propongo trabajar juntos sobre la base de un modelo vincular en donde te brindaré herramientas para convivir con las personas que te rodean respetando las diferencias, identificando los conflictos y aprendiendo a utilizar el diálogo y la conversación como modo de superar problemas familiares, de pareja, con compañeros de trabajo o amigos. Revisaremos los vínculos que te preocupan y te hacen sufrir para recuperar/reinventar tus ganas, energía y placer de estar y vivir con las personas que te rodean".</p>
              </div>
          </header>
          <div class="article-quesillo__body">
            <div class="atencion">
              <h6 class="atencion-title">Areas de Atencion</h6>
              <ul class="main-menu__quesillo main-menu__quesillo--grid" v-if="atencion !== ''">
                <li class="main-list__quesillo" v-for="(item,index) in atencion" :key="index">
                  {{item.name}}
                </li>
              </ul>
            </div>
            <div class="atencion">
              <h6 class="atencion-title">Experiencia Personal</h6>
              <ul class="main-menu__quesillo" v-if="experiencia !== ''">
                <li class="main-list__quesillo" v-for="(item,index) in experiencia" :key="index">
                  {{item.name}}
                </li>
              </ul>
            </div>
            <div class="atencion">
              <h6 class="atencion-title">Formacion Academica</h6>
              <ul class="main-menu__quesillo" v-if="academica !== []">
                <li class="main-list__quesillo" v-for="(item,index) in academica" :key="index">
                  {{item.name}}
                </li>
              </ul>
            </div>
            <div class="atencion">
              <h6 class="atencion-title">Sobre mi</h6>
              <p>"Yo soy GOD y ustedes zzzzzzz", *le critica los componentes de la pc y se pone a jugar pokemon*</p>
            </div>
          </div>
          <footer class="article-quesillo__footer">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.0198525071537!2d-86.23101438898574!3d12.110793371496474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f73ff8a63e3d4d7%3A0x48444cf29f782c1d!2sNacatamales%20Rizo!5e0!3m2!1ses-419!2sni!4v1637131739963!5m2!1ses-419!2sni" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" class="maps"></iframe>
          </footer>
      </article>
        <Bot />
        <Important/>
        <Footer/>
    </section>
</template>

<script>
import Bot from '../inxdex.vue';
import Footer from '../Footer.vue';
import Important from '../Important.vue';
export default {
  name: 'Quesillo',
  components:{
    Bot,Important, Footer
  },
  data(){
    return{
      atencion: [{
        name: 'Conflictos de Pareja'
      },
      {
        name: 'Diversidad'
      },
      {
        name: 'Identidad de Genero'
      },
      {
        name: 'Problemas familiares'
      },
      {
        name: 'Terapia de Pareja'
      },
      {
        name: 'Conflictos Personales'
      },
      {
        name: 'Equilibrio e Inteligencia Emocional'
      },
      {
        name: 'Problemas de Comunicacion'
      },
      {
        name: 'Soledad'
      }
      ],
      experiencia: [{
        name: 'Consultoría y asesoramiento en comportamiento organizacional'
      },
      {
        name: 'Asesoramiento en procesos de cambio y crisis organizacional en Argentina y LATAM.'
      },
      {
        name: 'Consultorio privado'
      }
      ],
      academica: [{
        name: 'Instituto Pedagogico La Salle - Managua'
      },
      {
        name: 'Licenciatura en psicología.'
      },
      {
        name: 'Universidad Nacional de Ingenieria - Managua'
      },
      {
        name: 'Universidad de Hardvard'
      }
      ]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>