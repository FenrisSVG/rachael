<template>

    <div class="bot" v-scroll-reveal.reset="{delay: 600}">
        <div class="container">
            <div class="chatbox">
                    <div class="chatbox-header">
                        <img src='../assets/desktop/perfil2.jpg' class='imgRedonda' alt="bot image"/> 
                        <h4>Rachael IA </h4>              
                    </div>
                    <div class="body" id="chatbody">
                        <p class="alicia alicia--grid">Hola! Mi nombre es Rachael. Estoy para responder preguntas relacionadas con la psicologia. Espero poder ayudarte.</p>
                        <div class="scroller">

                        </div>
                    </div>
                    <form class="chat" autocomplete="off" method="POST" @submit.prevent="sendMessage(query)">
                        <div class="chat__input">
                            <input type="text" name="query" id="query" class="input" placeholder="Escribeme algo..." v-model="query">
                        </div>
                        <div class="chat__message" id="message">
                            <p>{{answer}}</p>
                        </div>
                        <div class="chat__input chat__submit">
                            <input type="submit" value="Send" id="btn">
                        </div>
                    </form>
            </div>
        </div>
        <div class="whatIDo" v-scroll-reveal="{delay: 500}">
            <h2 class="whatIDo-title" v-scroll-reveal="{delay: 500, scale: 1.5}">Chatbot Rachael</h2>
            <div class="whatIDo-container" v-scroll-reveal="{delay: 600}">
                <div class="whatIDo-container__img show-opacity">
                    <img src="../assets/desktop/r2d2.jpg" alt="">
                </div>
                <div class="whatIDo-container__text show-opacity">
                    <h2>¿Que puede hacer Rachael?</h2>
                    <p>Rachael es un chatbot destinado para varias tareas como 
                        puedes tener una conversacion con el, puede ser tu asistente si tienes una
                        duda sobre un trastorno o un sintoma de el o puede ser tu asistente de la 
                        pagina web integrada con inteligencia artificial.
                    </p>
                </div>

                <div class="whatIDo-container__img">
                    <img src="../assets/desktop/Rachael-desktop.jpg" alt="">
                </div>
                <div class="whatIDo-container__text left">
                    <h2>Como asistente sobre consultas de los Trastornos</h2>
                    <p>Rachael esta entrenado para responderte si tienes una duda sobre el significado,
                        consecuencia, sintomas de un trastorno ya sea que tu experto te haya diagnosticado
                        o bien de un trastorno que te haya diagnosticado el test de autoevaluacion integrado
                        en la pagina o bien de un sintoma de tu preferencia a conocer.
                    </p>
                </div>

                <div class="whatIDo-container__img">
                    <img src="../assets/desktop/bot.jpg" alt="">
                </div>
                <div class="whatIDo-container__text">
                    <h2>Asistente de la Pagina Web</h2>
                    <p>Si tienes una duda sobre como acceder a los test, como iniciar sesion,
                        o quieres saber quienes hicieron esta pagina o una consulta sobre los
                        trastornos puedes preguntarle a Rachael y ella te respondera.
                    </p>
                </div>

                <div class="whatIDo-container__img">
                    <img src="../assets/desktop/feels.jpg" alt="">
                </div>
                <div class="whatIDo-container__text left">
                    <h2>IA de analisis de sentimientos - emociones</h2>
                    <p>Rachael esta equipada con una inteligencia artificial para analizar los sentimientos
                        del usuario y en caso de ser constantes esos mensajes deprimentes y llegar hasta un numero determinado
                        se podria digamos ejecutar una accion como enviarle un mensaje o llamar a la policia.
                    </p>
                </div>
            </div>
        </div>

        <div class="controls-rachael">
             <i class="fas fa-chevron-circle-left" id="prev-rachael"></i>
             <i class="fas fa-chevron-circle-right" id="next-rachael"></i>
        </div>
        
    <Footer/>
    </div>
</template>


<script>
import Swal from 'sweetalert2'
import Footer from './Footer.vue'
import axios from 'axios'
//var _ = require('lodash');

export default {
  name: 'Bot',
  components: {
     Footer
  },
  data(){
      return{
         query: '',
         answer: 'No puedo darte una respuesta si no has preguntado nada',
         perfil: require('../assets/desktop/perfil2.jpg')
      }
  },
  watch: {
    question() {
      this.debouncedGetAnswer()
    }
  },
  methods:{
      sendMessage(msg){
          const message = document.getElementById('message');
          if(this.message !== ''){
              message.classList.add('chat__message--show');
              this.answer = 'Esperando a que termines de escribir...'
          }

          const fragment = document.createDocumentFragment();
          axios.defaults.xsrfHeaderName = "X-CSRFToken";
          axios.defaults.xsrfCookieName = "csrftoken";

          this.answer = 'Rachael esta pensando...'
          axios({
              method: "GET",
              url: "http://localhost:8000/api/rachael/" + msg,
              data:{
                query : msg
              },
              headers:{
                  "Content-Type" : "application/json"
              }
            }).then(function(res){
                const chatBody = document.querySelector(".scroller");
                const divCpu = document.createElement("div");
                const iconVoice = document.createElement('i');
                iconVoice.className = "fas fa-volume-up";
                iconVoice.id = "volume";
                divCpu.className = "alicia visible";
                const img = document.createElement('img');
                img.setAttribute("src",require("../assets/desktop/perfil2.jpg"));
                fragment.append(img);
                divCpu.append(fragment);
                const p = document.createElement("p");
                setTimeout(()=>{
                    message.classList.remove('chat__message--show');
                }, 800)
                p.innerHTML = res.data;
                if(p.innerText == 'Hemos detectado una serie de mensajes de sentimientos negativos.'){
                    p.innerHTML += ` Le recomendamos ir a realizar nuestro <a href="/antecedentes" style="color: var(--danger-color)">test de autoevaluacion</a>`
                    fragment.append(p);
                }
                p.id = "speak"
                fragment.append(p);
                divCpu.append(fragment);
                fragment.append(iconVoice);
                divCpu.append(fragment);
                const divUser = document.createElement("div");
                divUser.className = "me visible";
                const icon = document.createElement('i');
                icon.className = "fas fa-user";
                fragment.append(icon);
                divUser.append(fragment);
                const p2 = document.createElement("p");
                p2.innerHTML = msg;
                fragment.append(p2);
                divUser.append(fragment);
                fragment.append(divUser);
                chatBody.append(fragment);
                    chatBody.parentElement.scrollTop = chatBody.scrollHeight;
                setTimeout(() => {
                    fragment.append(divCpu);
                    chatBody.append(fragment);
                    chatBody.parentElement.scrollTop = chatBody.scrollHeight;
                }, 800);

                iconVoice.addEventListener('click',()=>{
                    speechSynthesis.speak(new SpeechSynthesisUtterance(res.data));
                })
            })
            .catch(() => {
                Swal.fire({
                    title: 'Rachael',
                    text: `Rachael no esta disponible en este momento`,
                    icon: 'error',
                    backdrop: true,
                    timer: 10000,
                    background: '#161719',
                    allowOutsideClick: true,
                    allowEscapeKey: true,
                    stopKeydownPropagation: false,
                    confirmButtonColor: '#972745',
                    showCloseButton: true
                })
                message.classList.remove('chat__message--show');
            })

            this.query = '';
      },
      showOpacity(){
          const prev = document.getElementById('prev-rachael')
          const next = document.getElementById('next-rachael')
          const images = Array.from(document.querySelectorAll('.whatIDo-container__img'))
          const texts = Array.from(document.querySelectorAll('.whatIDo-container__text'))
          
          let cont = 0;

          if(prev){
              prev.addEventListener('click',()=> setClass('prev'))
          }

          if(next){
              next.addEventListener('click',()=> setClass('next'))
          }

          const setClass = (direction)=>{
              images.map(image => image.classList.remove('show-opacity'))
              texts.map(text => text.classList.remove('show-opacity'))
              setCont(direction);
              images[cont].classList.add('show-opacity')
              texts[cont].classList.add('show-opacity')
          }

          const setCont = (direction) =>{
              if(direction =='next'){
                  if(cont == images.length - 1 ) cont = 0
                  else cont++
              }else{
                  if(cont == 0) cont = images.length - 1
                  else cont--
              }
          }
      }
  },
  mounted(){
      return this.showOpacity()
  }
}
</script>