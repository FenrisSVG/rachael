<template>
    <div class="antecedentes">
        <header class="antecedentes-header" v-scroll-reveal="{delay: 500}">
            <div class="antecedentes-header__text">
                <h2>Antecedentes - Entrevista</h2>
            </div>
            <div class="antecedentes-header__button">
                <a href="#work">¿Que puede hacer?</a>
                <a href="#antecedentes">Realizar Entrevista.</a>
            </div>
        </header>

        <div class="antecedentes-card" id="work" v-scroll-reveal="{delay: 500}">
            <h2 v-scroll-reveal="{delay: 500, scale: 2}">Categorizacion de las preguntas del Diagnostico.</h2>
            <div class="services" v-scroll-reveal="{delay: 500}">
                <header class="antecedentes-card__header">
                    <img src="../assets/desktop/Sexo.jpg" alt="">
                </header>
                <footer class="antecedentes-card__text">
                    <h6><span>1. Datos Personales</span></h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quidem.</p>
                </footer>
            </div>
            <div class="services" v-scroll-reveal="{delay: 600}">
                <header class="antecedentes-card__header">
                    <img src="../assets/desktop/autoestima.jpg" alt="">
                </header>
                <footer class="antecedentes-card__text">
                    <h6><span>2. Antecedentes</span></h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quidem.</p>
                </footer>
            </div>
            <div class="services" v-scroll-reveal="{delay: 700}">
                <header class="antecedentes-card__header">
                    <img src="../assets/desktop/estres.jpg" alt="">
                </header>
                <footer class="antecedentes-card__text">
                    <h6><span>3. Diagnostico Previo</span></h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quidem.</p>
                </footer>
            </div>
            <div class="services" v-scroll-reveal="{delay: 800}">
                <header class="antecedentes-card__header">
                    <img src="../assets/desktop/desarollo.jpg" alt="">
                </header>
                <footer class="antecedentes-card__text">
                    <h6><span>4. Test de Autoevaluacion</span></h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quidem.</p>
                </footer>
            </div>
            <div class="services" v-scroll-reveal="{delay: 900}">
                <header class="antecedentes-card__header">
                    <img src="../assets/desktop/desarollo.jpg" alt="">
                </header>
                <footer class="antecedentes-card__text">
                    <h6><span>5. Papel Completo</span></h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quidem.</p>
                </footer>
            </div>
        </div>

        <div class="entrevista" v-scroll-reveal="{delay: 500}" id="antecedentes">
            <h2>Entrevista al paciente</h2>
            <div class="entrevista-nav" id="entrevista-nav">
                <span class="entrevista-nav--active" id="one">1</span>
                <span id="two">2</span>
                <span id="three">3</span>
                <span id="four">4</span>
                <span id="five">5</span>
            </div>
            <form @submit.prevent="insertData" class="entrevista-form" autocomplete="off" id="entrevista">
                <div class="datos antecedentes-input--active" id="datos">
                    <h2>I. Datos Personales</h2>
                    <div class="datos-personales">
                        <label for="referencia">Tipo de Referencia: </label>
                        <input type="checkbox" name="referencia">
                        <label for="urgente">Urgente</label>
                        <input type="checkbox" name="urgente">
                        <label for="no-urgente">No Urgente</label>
                    </div>
                    <div class="datos-personales">
                        <label for="expediente">Expediente</label>
                        <input type="text" name="expediente" id="idpaciente">
                    </div>
                    <div class="datos-personales">
                        <label for="nombre">Nombre:</label>
                        <input type="text" name="nombre" placeholder="Escriba su nombre..." required id="name">
                        <label for="surname" class="datos-personales__surname">Apellido:</label>
                        <input type="text" name="surname" required placeholder="Escriba su apellido..." id="surname">
                    </div>
                    <div class="datos-personales">
                        <label for="fecha">Fecha:</label>
                        <input type="text" name="fecha" id="fecha-antecedente">
                    </div>
                    <div class="datos-personales">
                        <p>Genero:</p>
                        <label for="masculino">Masculino</label>
                        <input type="checkbox" name="masculino" id="masculino">
                        <label for="femenino">Femenino</label>
                        <input type="checkbox" name="femenino" id="femenino">
                    </div>
                </div>
                <div class="antecedentes-form" id="antecedentes-form">
                    <h2>II. Antecedentes</h2>
                    <div class="antecedentes-input">
                        <label for="motivo">1. ¿Motivo de referencia de la consulta?</label>
                        <textarea name="motivo" cols="30" rows="5" placeholder="Escriba su motivo de referencia..." id="motivo"></textarea>
                        <div class="referencia">
                            <label for="nivel-intensidad">¿Cual es el grado de intensidad en el que se manifiesta?</label>
                            <input type="checkbox" name="alta">
                            <label for="alta">Alta</label>
                            <input type="checkbox" name="Moderada">
                            <label for="Moderada">Moderada</label>
                            <input type="checkbox" name="Baja">
                            <label for="alta">Baja</label>
                        </div>
                    </div>
                    <div class="antecedentes-input">
                        <h6>2. ¿Ha recibido un tratamiento psico-terapeutico con anterioridad?</h6>
                        <input type="checkbox" name="si">
                        <label for="si">Si</label>
                        <input type="checkbox" name="no">
                        <label for="no">No</label>
                    </div>
                    <div class="antecedentes-input">
                        <h6>3. Habitos toxicos</h6>
                        <div class="habitos">
                            <h6>a. Alimenticios</h6>
                            <input type="checkbox" name="sigue-dieta">
                            <label for="sigue-dieta">Sigue Dieta</label>
                            <input type="checkbox" name="Moderada">
                            <label for="moderada">Moderada</label>
                            <input type="checkbox" name="estricta">
                            <label for="estricta">Estricta</label>
                            <input type="checkbox" name="vegano">
                            <label for="Vegano">Vegano</label>
                        </div>
                        <div class="consumo">
                            <h6>b. Consumo</h6>
                            <input type="checkbox" name="Alcohol">
                            <label for="Alcohol">Alcohol</label>
                            <input type="checkbox" name="te">
                            <label for="te">Te</label>
                            <input type="checkbox" name="Cafe">
                            <label for="Cafe">Cafe</label>
                        </div>
                        <div class="medicamente">
                            <h6>c. Medicamentos</h6>
                            <input type="checkbox" name="drogas">
                            <label for="drogas">Rechazo a Drogas</label>
                            <input type="checkbox" name="hipersensibilidad">
                            <label for="hipersensibilidad">Hipersensibilidad</label>
                        </div>
                    </div>
                    <div class="antecedentes-input">
                        <h6>4. Familiares</h6>
                        <div class="familiares">
                            <h6>a. Adolescencia</h6>
                            <input type="checkbox" name="bullying">
                            <label for="bullying">Sufria Bullying</label>
                            <input type="checkbox" name="muerte">
                            <label for="muerte">Muerte de Familiar</label>
                            <input type="checkbox" name="padres-separados">
                            <label for="padres-separados">Padres Separados</label>
                            <input type="checkbox" name="ciudad">
                            <label for="ciudad">Cambio de ciudad constante</label>

                        </div>
                        <div class="sexo">
                            <h6>b. Sexooooooooooooooo</h6>
                            <input type="checkbox" name="activo">
                            <label for="activo">Activo</label>
                            <input type="checkbox" name="virgen">
                            <label for="virgen">Virgen</label>
                            <input type="checkbox" name="ocasional">
                            <label for="ocasional">Ocasional</label>
                        </div>
                        <div class="familia">
                            <h6>c. Clasificas la relacion con tu familia como</h6>
                            <input type="checkbox" name="disfuncional">
                            <label for="disfuncional">Disfuncional</label>
                            <input type="checkbox" name="tranquila">
                            <label for="tranquila">Tranquila</label>
                            <input type="checkbox" name="confianza">
                            <label for="confianza">De confianza</label>
                            <input type="checkbox" name="separados">
                            <label for="separados">Padres Separados</label>
                        </div>
                    </div>
                    <div class="antecedentes-input">
                        <h6>5. Traumas</h6>
                        <div class="traumas">
                            <h6>a. ¿Consideras un acontecimiento de tu vida como traumatico?</h6>
                            <label for="si">Si</label>
                            <input type="checkbox" name="si">
                            <label for="no">No</label>
                            <input type="checkbox" name="no">
                        </div>
                        <div class="traumas-familia">
                            <h6>b. ¿El suceso traumatico le ha ocurrido a un familiar?</h6>
                            <label for="si">Si</label>
                            <input type="checkbox" name="si">
                            <label for="no">No</label>
                            <input type="checkbox" name="no">
                        </div>
                        <div class="traumas-exposicion">
                            <h6>c. ¿Se siente expuesto en repetidas ocasiones al trauma?</h6>
                            <label for="si">Si</label>
                            <input type="checkbox" name="si">
                            <label for="no">No</label>
                            <input type="checkbox" name="no">
                        </div>
                    </div>
                </div>
                    <div class="entrevista__submit" id="btn-entrevista">
                        <input type="submit" value="Enviar Datos">
                    </div>
            </form>
            <Autoevaluacion id="test-autoevaluacion" class="test-autoevaluacion" @trastornos="trastorno = $event"/>

        </div>

        <div class="diagnostico-previo" id="diagnostico-previo">
            <h2>IV. Diagnostico Previo.</h2>
            <div class="diagnostico-previo__text" v-for="item in pacientes" :key="item.id">
                <p class="datos-paciente">Datos del paciente</p>
                <p>Paciente: </p>
                <p class="datos-pacientes">{{item.nombre}}  {{item.apellido}}</p>
                <p>Genero: </p>
                <p class="datos-pacientes" v-if="item.sexo == 1">Femenino</p>
                <p class="datos-pacientes" v-else>Masculino</p>
                <p>Fecha de Registro: </p>
                <p class="datos-pacientes">{{item.fecha_admision}}</p>
                <p>El motivo de su consulta es:</p>
                <p>{{item.motivo}}}</p>
            </div>
            <div class="for-trastorno" v-for="item in trastorno" :key="item.id">
                <p>Segun los datos que nos ha proporcionado y la realizacion con anterioridad
                    del test de autoevaluacion se predijo que usted tiene un trastorno mental de <span>{{item.nombre}}</span></p>
                <p>{{item.descripcion}}</p>
            </div>
        </div>

        <Footer/>
    </div>
</template>

<style scoped>
.antecedentes{
    position: relative;
}
.diagnostico-previo{
    position: absolute;
    width: 80%;
    top: 58.5%;
    left: 50%;
    color: var(--title-color);
    background-color: var(--primary-color);
    border-radius: 5px;
    transform: translate(-50%);
    opacity: 0;
    transition: opacity .8s ease-in-out;
    z-index: -1;
}

.diagnostico-previo__text,.for-trastorno{
    padding-left: 2em;
}

.datos-pacientes{
    color: var(--text-color);
}

.datos-paciente{
    text-align: center;
    font-size: 20px;
    padding: .3em 0 .7em;
    border-bottom: 1px solid var(--danger-color)
}

.diagnostico-previo__text{
    color: var(--title-color);
}

.diagnostico-previo__text > *{
    margin: .8em 0;
}

.diagnostico-previo h2{
    margin-top: 0;
    padding: 1.5em 0;
    text-align: center;
    color: var(--title-color);
    font-size: 20px;
    background-color: var(--background-color);
}

.diagnostico-previo p span{
    letter-spacing: .5px;
    font-size: 18px;
    color: var(--danger-color);
}

.antecedentes-header{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 500px;
    border-radius: 0 0 0 200px;
    background-color: var(--primary-color);
    overflow: hidden;
    background-image: url('../assets/desktop/trastorno5.jpg');
    background-repeat: no-repeat;
}

.antecedentes-header::after{
    content: '';
    display: block;
    position: absolute;
    /* left: -80px;
    top: -20px;
    width: 420px;
    height: 400px;
    transform: rotate(35deg); */
    right: 0;
    border-right: 800px solid var(--danger-color);
    border-top: 500px solid transparent;
    border-bottom: 0px solid transparent;
}

.antecedentes-header__text{
    margin-bottom: 3em;
    z-index: 10;
}

.antecedentes-header__text h2{
    font-size: 28px;
    letter-spacing: 1px;
    color: #fff;
}

.antecedentes-header__button{
    z-index: 10;
}

.antecedentes-header__button a{
    margin: 0 1em;
    text-decoration: none;
    color: #fff;
    background-color: var(--danger-color);
    padding: .8em 2em;
    border-radius: 6px;
}

.antecedentes-header__button a:nth-child(2){
    background-color: lightblue;
    color: var(--primary-color);
}

.antecedentes-card{
    margin-top: 2em;
    padding-bottom: 1em;
    text-align: center;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(5,200px);
    gap: 20px;
}

.antecedentes-card h2{
    color: var(--title-color);
    margin-bottom: 1.4em;
    grid-column: 1/6;
}

.antecedentes-card__header img{
    padding-top: .8em;
    max-width: 50%;
    border-radius: 60%;
}

.antecedentes-card__text h6{
    color: var(--title-color);
    font-size: 14px;
    margin-bottom: .7em;
}

.antecedentes-card__text p{
    color: var(--text-color);
    padding: .5em;
    font-size: 13px;
}

.services{
    bordeR: 1px solid #ccc;
    background-color: var(--primary-color);
}

.entrevista-nav{
    width: 50%;
    display: flex;
    justify-content: center;
    margin: .5em auto;
}

.entrevista-nav span{
    height: 70px;
    width: 70px;
    margin: 0 1em;
    padding-top: 1.6em;
    text-align: center;
    border-radius: 50%;
    color: #fff;
    border: 1px solid var(--danger-color);
    cursor: pointer;
    transition: transform 1s ease;
}

.entrevista-nav--active{
    transform: scale(1.2);
}

.antecedentes-input--active{
    opacity: 1;
    z-index: 100;
}
</style>

<script>

import axios from 'axios';
import Footer from '../components/Footer.vue'
import Autoevaluacion from '../components/subcomponents/TestA.vue'

export default {
  name: 'Antecedentes',
  components: {
    Footer, Autoevaluacion
  },
  data(){
      return{
          trastorno: [],
          pacientes: [],
          paciente: {
              idpaciente: null,
              nombre: '',
              apellido: '',
              sexo: '',
              fecha_admision: '',
              motivo: ''
          }
      }
  },
  methods:{
      defaultValue(){
      
      const fecha = document.getElementById('fecha-antecedente')

      const date = new Date();

      if(fecha){
        fecha.setAttribute('readonly',true)
        fecha.setAttribute('maxlength',9)
        fecha.value = date.toLocaleDateString()
      }
    }, 
    navigation(){
        const one = document.getElementById('one')
        const two = document.getElementById('two')
        const three = document.getElementById('three')
        const four = document.getElementById('four')
        const datos = document.getElementById('datos')
        const test = document.getElementById('test-autoevaluacion')
        const diagnostico = document.getElementById('diagnostico-previo')
        const entrevista = document.getElementById('entrevista')
        const btnEntrevista = document.getElementById('btn-entrevista')
        const antecedentes = document.getElementById('antecedentes-form')

        if(one){
            one.addEventListener('click',()=>{
                datos.parentElement.parentElement.style.height = '620px'
                entrevista.style.height = '450px'
                datos.classList.add('antecedentes-input--active')
                one.classList.add('entrevista-nav--active')
                antecedentes.classList.remove('antecedentes-input--active')
                test.classList.remove('antecedentes-input--active')
                diagnostico.classList.remove('antecedentes-input--active')
                two.classList.remove('entrevista-nav--active')
                three.classList.remove('entrevista-nav--active')
                four.classList.remove('entrevista-nav--active')
                btnEntrevista.style.opacity = 0
            })
        }

        if(two){
            two.addEventListener('click',()=>{
                datos.parentElement.parentElement.style.height = '1350px'
                entrevista.style.height = '1180px'
                datos.classList.remove('antecedentes-input--active')
                test.classList.remove('antecedentes-input--active')
                diagnostico.classList.remove('antecedentes-input--active')
                one.classList.remove('entrevista-nav--active')
                four.classList.remove('entrevista-nav--active')
                antecedentes.classList.add('antecedentes-input--active')
                two.classList.add('entrevista-nav--active')
                three.classList.remove('entrevista-nav--active')
                btnEntrevista.style.opacity = 1
            })
        }

        if(three){
            three.addEventListener('click',()=>{
                datos.parentElement.parentElement.style.height = '500px'
                entrevista.style.height = '340px'
                datos.classList.remove('antecedentes-input--active')
                test.classList.remove('antecedentes-input--active')
                one.classList.remove('entrevista-nav--active')
                antecedentes.classList.remove('antecedentes-input--active')
                diagnostico.classList.remove('antecedentes-input--active')
                two.classList.remove('entrevista-nav--active')
                test.classList.add('antecedentes-input--active')
                three.classList.add('entrevista-nav--active')
                four.classList.remove('entrevista-nav--active')
                btnEntrevista.style.opacity = 0
            })
        }

    },
    insertData(){
        const idpaciente = document.getElementById('idpaciente')
        const name = document.getElementById('name')
        const surname = document.getElementById('surname')
        const masculino = document.getElementById('masculino')
        const femenino = document.getElementById('femenino')
        const motivo = document.getElementById('motivo')
        let genero = null


        if(masculino.checked) genero = 0
            
        if(femenino.checked) genero = 1

        if(!isNaN(idpaciente.value) && name.value.trim() !== '' && surname.value.trim() !== ''
        && motivo.value.trim() !== ''){
            axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                opcion: 8,
                idpaciente: idpaciente.value,
                nombre: name.value.trim(),
                surname: surname.value.trim(),
                genero: genero,
                motivo: motivo.value.trim()
            }).then(function(){
                alert('Datos ingresados correctamente')
                idpaciente.value = ''
                name.value = ''
                surname.value = ''
                motivo.value = ''
                masculino.checked = false
                femenino.checked = false
            }).catch(err => console.log(err))

            axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{opcion: 9})
            .then(res => {
                this.pacientes = res.data;            
            })  
        }else{
            alert('Hubo un error al ingresar los datos, verifique que esten bien.')
        }
    }
  },
  mounted(){
      return this.defaultValue(),this.navigation();
  }
}
</script>