<template>
    <section class="quesillo">
      <h2>Sobre el Psicologo Cristiano Ronaldo</h2>
      <article class="article-quesillo">
          <header class="article-quesillo__header">
              <div class="quesillo-img">
                <img src="../../assets/desktop/bicho.jpg" alt="El bicho siuuuu" loading="lazy">
              </div>
              <div class="quesillo-text">
                <h6>El bicho</h6>
                <p><span>Idiomas:</span> Español, Ingles, Aleman, bicho, Lenguaje de Señas, Mr.Champions, Arabe, Musulman</p>
                <p><span>Nacionalidad: </span> Bicholandia.</p>
                <p><span>Modelo de Trabajo Terapeutico:</span> Siuuuuuuuuuuuu.</p>
                <p><span>Email:</span> <img src="../../assets/desktop/elbichocom.png" alt=""> </p>
                <p><span>Celular:</span> +505-88888888</p>
                <aside class="aside-quesillo">
                  <span>Ansiedad.</span>
                  <span>Angustia.</span>
                  <span>Manejo de Estres.</span>
                </aside>
                <p>¿Es que hay algo que este hombre no puede hacer bien? "Te propongo trabajar juntos sobre la base de un modelo vincular en donde te brindaré herramientas para convivir con las personas que te rodean respetando las diferencias, identificando los conflictos y aprendiendo a utilizar el diálogo y la conversación como modo de superar problemas familiares, de pareja, con compañeros de trabajo o amigos. Revisaremos los vínculos que te preocupan y te hacen sufrir para recuperar/reinventar tus ganas, energía y placer de estar y vivir con las personas que te rodean".</p>
              </div>
          </header>
          <div class="article-quesillo__body">
            <div class="atencion">
              <h6>Areas de Atencion</h6>
              <ul class="main-menu__quesillo main-menu__quesillo--grid" v-if="atencion !== ''">
                <li class="main-list__quesillo" v-for="(item,index) in atencion" :key="index">
                  {{item.name}}
                </li>
              </ul>
            </div>
            <div class="atencion">
              <h6>Experiencia Personal</h6>
              <ul class="main-menu__quesillo" v-if="experiencia !== ''">
                <li class="main-list__quesillo" v-for="(item,index) in experiencia" :key="index">
                  {{item.name}}
                </li>
              </ul>
            </div>
            <div class="atencion">
              <h6>Formacion Academica</h6>
              <ul class="main-menu__quesillo" v-if="academica !== []">
                <li class="main-list__quesillo" v-for="(item,index) in academica" :key="index">
                  {{item.name}}
                </li>
              </ul>
            </div>
            <div class="atencion">
              <h6>Sobre mi</h6>
              <p>"Siuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu *le mete hat-trick al atletico de madrid jsjs*"</p>
            </div>
          </div>
          <footer class="article-quesillo__footer">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.0198525071537!2d-86.23101438898574!3d12.110793371496474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f73ff8a63e3d4d7%3A0x48444cf29f782c1d!2sNacatamales%20Rizo!5e0!3m2!1ses-419!2sni!4v1637131739963!5m2!1ses-419!2sni" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
  name: 'Bicho',
  components:{
    Bot,Important, Footer
  },
  data(){
    return{
      atencion: [{
        name: 'Abuso Sexual'
      },
      {
        name: 'Manejo del estres'
      },
      {
        name: 'Ansiedad'
      },
      {
        name: 'Problemas familiares'
      },
      {
        name: 'Sexualidad'
      },
      {
        name: 'Orientacion Sexual'
      },
      {
        name: 'Angustia'
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
        name: 'Hospital Neuropsiquiátrico José T. Borda.'
      },
      {
        name: 'Experto en meterle hat-trick al Atletico del Madrid'
      },
      {
        name: 'Delito'
      }
      ],
      academica: [{
        name: 'Instituto Pedagogigo El Bicho'
      },
      {
        name: 'Licenciatura en bichologia.'
      },
      {
        name: 'Universidad Nacional de Ingenieria - Bicholandia'
      },
      {
        name: 'Universidad Bichologa'
      },
      {
          name: 'Postgrado en Bichologia.'
      }
      ]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>