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

            <div class="historial-trastorno__footer" v-if="antecedentes !== ''">
                <h3>Antecedentes del Paciente</h3>
                <div class="diagnosticos" v-for="(item,index) in antecedentes" :key="index">
                    <header class="antecedentes-info__data">
                        <h5>Nombre del Paciente:</h5>
                        <p>{{item.nombre}}</p>
                        <h5>Apellido del Paciente:</h5>
                        <p>{{item.apellido}}</p>
                        <h5>Fecha del registro:</h5>
                        <p>{{item.fecha_registro}}</p>
                    </header>
                    <div class="antecedentes-info__text">
                        <p>Segun los datos proporcionados nos podemos dar cuenta que usted como
                        usuario <span v-if="item.tratamiento == 1">ha recibido un tratamiento previo</span>
                        <span v-else>no ha recibido un tratamiento previo</span>, tiene una alimentacion
                        de <span>{{item.alimentacion}}</span>, tambien de acuerdo al consumo de sustancias 
                        nos damos cuenta que usted consume <span>{{item.sustancias}}</span>, con respecto
                        a los medicamentos usted <span>{{item.medicamentos}}</span>, la informacion con respecto
                        a su vida pasada(adolescencia) usted sufria mucho de <span>{{item.adolescencia}},
                        su vida sexual ha sido <span>{{item.sexo}}</span>, su relacion con la familia es
                        <span>{{item.relacionFamilia}}</span> y por ultimo <span v-if="item.traumas == 1">si 
                            ha presentado traumas
                        </span> <span v-else>no ha presentado traumas</span>
                        </span></p>
                    </div>
                </div>
            </div>
            <div class="historial-trastorno__footer" id="historial" v-if="historial !== []">
                <h3>Tus diagnosticos anteriores de los trastornos:</h3>
                <div class="diagnosticos" v-for="(item,index) in historial" :key="index">
                    <h3>La prediccion previa del usuario: <span>{{item.username}}</span> tiene diagnosticado el siguiente trastorno</h3>
                    <h3>Trastorno Diagnosticado: </h3>
                    <p>{{item.nombre}}</p>
                    <h3>¿Que quiere decir este trastorno?</h3>
                    <p>{{item.descripccion}}</p>
                </div>
            </div>
            <div class="historial-trastorno__footer" v-else>
                <h2>Usted no tiene historial del test por ende no ha realizado el test de autoevaluacion
                    previamente
                </h2>
            </div>

        </article>
        <Footer/>
    </section>
</template>

<style scoped>
.antecedentes-info__data,.antecedentes-info__text{
    text-align: left;
}

.antecedentes-info__data h5{
    color: var(--title-color);
    margin: .5em 0;
    font-size: 16px;
}

.diagnosticos{
    margin: 2em 0;
}
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
    padding: 2.5em 3em;
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

.antecedentes-info__text p{
    color: var(--text-color);
}

.antecedentes-info__text p span{
    color: var(--danger-color)
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
        antecedentes: [],
        username: '',
        iduser: null
      }
  },
  methods: {
      getData(){

        const getId = async()=>{
            const res = await axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                opcion: 10,
                username: this.username
            })
            res.data.forEach(item => this.iduser = item.iduser)

            const antecedente = await axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                opcion: 13,
                user: this.iduser
            })
            this.antecedentes = antecedente.data

            const response = await axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                opcion: 7,
                user: this.iduser
            })
            this.historial = response.data
        }

        getId()
      },
      getUsername(){
        const username = document.getElementById('username-login')
        if(username){
            if(username.innerHTML !== ''){
                this.username = username.innerHTML;
            }
        }
    }
  },
  created(){
    return window.scrollTo(0,0),this.getUsername()
  },
  mounted(){
      this.$nextTick(()=>{
          return this.getData()
      })
  }
}
</script>