<template>
    <section class="historial-container">
        <article class="historial-article">
            <div class="historial-article__header">
                <h2>Historial del <span>Test de Autoevaluacion</span></h2>
                <p>Aqui podras encontrar todo lo referente al historial
                psicologico del paciente
                </p>
            </div>
            <div class="historial-article__footer">
                <a href="#funciona">¿Como Funciona?</a>
                <a href="#historial">Ver Historial</a>
            </div>
        </article>

        <article class="historial-trastorno">
            <div class="historial-trastorno__header" id="funciona">
                <h3>¿Que es el historial del Test de Autoevaluacion?</h3>
                <p>El historial del <span>test de Autoevaluacion</span> es la seccion
                donde usted como usuario tiene la opcion de poder ver el diagnostico
                diagnosticado previamente en el test de Autoevaluacion por tanto si usted como
                usuario no ha realizado el test de autoevaluacion no podra ver la pestaña siguiente y
                le pedimos que vaya atras a realizarlo.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, porro? Voluptates blanditiis aspernatur praesentium alias temporibus nostrum quod consectetur hic dicta excepturi consequatur totam reprehenderit, quasi accusantium, doloremque voluptatum sequi magnam quibusdam deleniti soluta neque optio vel, aliquam tempora. Assumenda vero provident ipsum non dolore laborum temporibus porro rerum itaque.</p>
            </div>
            <div class="historial-trastorno__footer" id="historial" v-if="historial !== '' && usuario !== ''">
                <h3>Tus diagnosticos anteriores de los trastornos:</h3>
                <div class="diagnosticos" v-for="(item,index) in historial" :key="index">
                    <h3>El Usuario: <span>{{item.username}}</span> tiene diagnosticado el siguiente trastorno</h3>
                    <h3>Trastorno Diagnosticado: </h3>
                    <p>{{item.nombre}}</p>
                    <h3>¿Que quiere decir este trastorno?</h3>
                    <p>{{item.descripcion}}</p>
                </div>
            </div>

            <div class="historial-trastorno__footer" id="historial" v-else>
                <div class="diagnosticos">
                    <h3><span>Debe Iniciar Sesion Primero para la verificacion de su diagnostico personal de los tratornos</span></h3>
                </div>
            </div>
        </article>
        <Footer/>
    </section>
</template>

<style scoped>
.historial-article{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    background-image: url('../../assets/desktop/test-psicologico.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.historial-trastorno__header{
    padding: 1.5em 3em 1em;
}

.historial-trastorno__header h3{
    color: var(--title-color);
}

.historial-trastorno__header p{
    color: var(--text-color);
    line-height: 1.5;
}

.historial-trastorno__header p>span{
    color: var(--danger-color);
}

.historial-trastorno__footer{
    padding: 0 3em 2em;
}

.historial-trastorno__footer h3{
    color: var(--title-color);
}

.diagnosticos{
    padding: 3em;
    text-align: center;
    border-radius: 10px;
    background-color: #000;
}

.diagnosticos > *{
    margin: 1.5em 0;
}

.diagnosticos h3:first-child{
    margin-top: 0;
}

.diagnosticos h3>span{
    color: var(--danger-color);
}

.diagnosticos p{
    font-size: 20px;
    margin: .1em;
    color: var(--danger-color);
}

</style>

<script>
    
import Footer from '../Footer.vue';
import axios from 'axios'

export default {
  name: 'Historial',
  components:{
    Footer
  },
  data(){
      return{
        historial: [],
        usuario: ''
      }
  },
  methods: {
      getData(){
          const p = document.getElementById('username-login')
          this.usuario = p.innerHTML
          axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
              opcion: 7,
              user: 1
              })
          .then(res => this.historial = res.data).catch(err => console.log(err))
      }
  },
  created(){
    return window.scrollTo(0,0),this.getData()
  }
}
</script>