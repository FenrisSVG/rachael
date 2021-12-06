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

        <div class="entrevista" v-scroll-reveal="{delay: 500}" id="antecedentes" v-if="isLogin">
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
                        <input type="text" name="expediente" id="idpaciente" class="default">
                    </div>
                    <div class="datos-personales">
                        <label for="nombre">Nombre:</label>
                        <input class="default" type="text" name="nombre" placeholder="Escriba su nombre..." required id="name">
                        <label for="surname" class="datos-personales__surname">Apellido:</label>
                        <input class="default" type="text" name="surname" required placeholder="Escriba su apellido..." id="surname">
                    </div>
                    <div class="datos-personales">
                        <label for="fecha">Fecha:</label>
                        <input class="default" type="text" name="fecha" id="fecha-antecedente">
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
                        <input type="checkbox" name="si" id="tratamiento">
                        <label for="si">Si</label>
                        <input type="checkbox" name="no" id="tratamiento-no">
                        <label for="no">No</label>
                    </div>
                    <div class="antecedentes-input">
                        <h6>3. Habitos toxicos</h6>
                        <div class="habitos">
                            <h6>a. Alimenticios</h6>
                            <input type="checkbox" name="sigue-dieta" id="dieta">
                            <label for="sigue-dieta">Sigue Dieta</label>
                            <input type="checkbox" name="Moderada" id="moderada">
                            <label for="moderada">Moderada</label>
                            <input type="checkbox" name="estricta" id="estricta">
                            <label for="estricta">Estricta</label>
                            <input type="checkbox" name="vegano" id="vegano">
                            <label for="Vegano">Vegano</label>
                        </div>
                        <div class="consumo">
                            <h6>b. Consumo</h6>
                            <input type="checkbox" name="Alcohol" id="alcohol">
                            <label for="Alcohol">Alcohol</label>
                            <input type="checkbox" name="te" id="te">
                            <label for="te">Te</label>
                            <input type="checkbox" name="Cafe" id="cafe">
                            <label for="Cafe">Cafe</label>
                        </div>
                        <div class="medicamente">
                            <h6>c. Medicamentos</h6>
                            <input type="checkbox" name="drogas" id="drogas">
                            <label for="drogas">Rechazo a Drogas</label>
                            <input type="checkbox" name="hipersensibilidad" id="hipersensibilidad">
                            <label for="hipersensibilidad">Hipersensibilidad</label>
                        </div>
                    </div>
                    <div class="antecedentes-input">
                        <h6>4. Familiares</h6>
                        <div class="familiares">
                            <h6>a. Adolescencia</h6>
                            <input type="checkbox" name="bullying" id="bullying">
                            <label for="bullying">Sufria Bullying</label>
                            <input type="checkbox" name="muerte" id="muerte">
                            <label for="muerte">Muerte de Familiar</label>
                            <input type="checkbox" name="padres-separados" id="padres">
                            <label for="padres-separados">Padres Separados</label>
                            <input type="checkbox" name="ciudad" id="ciudad">
                            <label for="ciudad">Cambio de ciudad constante</label>

                        </div>
                        <div class="sexo">
                            <h6>b. Sexooooooooooooooo</h6>
                            <input type="checkbox" name="activo" id="activo">
                            <label for="activo">Activo</label>
                            <input type="checkbox" name="virgen" id="virgen">
                            <label for="virgen">Virgen</label>
                            <input type="checkbox" name="ocasional" id="ocasional">
                            <label for="ocasional">Ocasional</label>
                        </div>
                        <div class="familia">
                            <h6>c. Clasificas la relacion con tu familia como</h6>
                            <input type="checkbox" name="disfuncional" id="disfuncional">
                            <label for="disfuncional">Disfuncional</label>
                            <input type="checkbox" name="tranquila" id="tranquila">
                            <label for="tranquila">Tranquila</label>
                            <input type="checkbox" name="confianza" id="confianza">
                            <label for="confianza">De confianza</label>
                            <input type="checkbox" name="separados" id="separados">
                            <label for="separados">Padres Separados</label>
                        </div>
                    </div>
                    <div class="antecedentes-input">
                        <h6>5. Traumas</h6>
                        <div class="traumas">
                            <h6>a. ¿Consideras un acontecimiento de tu vida como traumatico?</h6>
                            <label for="si">Si</label>
                            <input type="checkbox" name="si" id="traumas">
                            <label for="no">No</label>
                            <input type="checkbox" name="no" id="traumas-no">
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
                        <input type="submit" value="Enviar Datos" @click="insertData">
                    </div>
            </form>
            
            <div class="antecedentes-yes" id="not-login">
                <h2>Querido usuario parece ser que usted ya completo los pasos de ingresar sus
                    datos generales y ya nos envio previamente los antecedentes, por favor eliga la opcion
                    que quiere realizar.
                </h2>
                <router-link to="/diagnostico/historial" class="antecedentes__link">Ver Historial.</router-link>
                <button href="" class="antecedentes__link" id="nextStep">Ir al Test de Autoevaluacion</button>
            </div>

            <Autoevaluacion id="test-autoevaluacion" class="test-autoevaluacion" @trastornos="trastorno = $event"/>  
        </div>

        <div v-else class="not-login">
            <h2>Vaya! Parece que no has iniciado sesion.</h2>
            <router-link to="/login" class="not-login__router">Login</router-link>
        </div>

        <div class="diagnostico-previo" id="diagnostico-previo">
            <h2>IV. Diagnostico Previo.</h2>
            <div class="diagnostico-previo__text">
                <p class="datos-paciente">Datos del paciente</p>
                <p>Paciente: </p>
                <p class="datos-pacientes">{{nombrepaciente}}  {{apellido}}</p>
                <p>Genero: </p>
                <p class="datos-pacientes" v-if="sexo == 1">Femenino</p>
                <p class="datos-pacientes" v-else>Masculino</p>
                <p>El motivo de su consulta es:</p>
                <p>{{motivo}}</p>
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
.antecedentes-yes{
    position: absolute;
    width: 80%;
    background-color: #000;
    text-align: center;
    top: 45%;
    left: 50%;
    border-radius: .3em;
    padding: 2em;
    z-index: 300;
    opacity: 0;
    transform: translate(-50%);
}

.antecedentes-yes h2{
    font-size: 20px;
    margin-top: 0em;
    margin-bottom: 1.5em;
}

.antecedentes__link{
    text-decoration: none;
    color: #fff;
    background-color: var(--danger-color);
    padding: .6em 1em;
    margin: 0 .5em;
    border-radius: .2em;
    cursor: pointer;
}

.default{
    background-color: transparent;
    text-align: center;
    color: #fff;
    outline: none;
    border-bottom: 1px solid var(--danger-color);
}

.antecedentes{
    position: relative;
}

.not-login__router{
    display: inline-block;
    text-decoration: none;
    color: #fff;
    padding: .8em 1.5em;
    margin-top: .5em;
    border-radius: .2em;
    background-color: var(--danger-color);
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
    z-index: 310;
}

.not-login{
    width: 80%;
    background-color: var(--primary-color);
    padding: 2em 0;
    margin: 5em auto;
    text-align: center;
    border-radius: 6px;
}

.not-login h2{
    font-size: 22px;
    text-align: center;
    color: var(--danger-color);
}

.cancel-event{
    pointer-events: none
}

.antecedentes-ajustado{
    height: 400px;
}

#nextStep{
    bordeR: none;
}
</style>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import Footer from '../components/Footer.vue'
import Autoevaluacion from '../components/subcomponents/TestA.vue'

export default {
  name: 'Antecedentes',
  components: {
    Footer, Autoevaluacion
  },
  data(){
      return{
          isLogin: false,
          antecedentes: true,
          user: '',
          iduser: '',
          trastorno: [],
          sexo: 0,
          fechaAdmision: null,
          nombre: '',
          nombrepaciente: '',
          apellido: '',
          surname: '',
          idpaciente: '',
          motivo: ''
      }
  },
  methods:{
    navigation(){
        const one = document.getElementById('one')
        const two = document.getElementById('two')
        const three = document.getElementById('three')
        const four = document.getElementById('four')
        const datos = document.getElementById('datos')
        const test = document.getElementById('test-autoevaluacion')
        const diagnostico = document.getElementById('diagnostico-previo')
        const notLogin = document.getElementById('not-login')
        const entrevista = document.getElementById('entrevista')
        //const consultar = document.getElementById('consultar')
        const btnEntrevista = document.getElementById('btn-entrevista')
        const antecedentes = document.getElementById('antecedentes-form')

        if(this.antecedentes == true){
            if(entrevista){
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
                        datos.parentElement.parentElement.style.height = '1000px'
                        entrevista.style.height = '880px'
                        //consultar.style.opacity = 1
                        datos.classList.remove('antecedentes-input--active')
                        one.classList.remove('entrevista-nav--active')
                        antecedentes.classList.remove('antecedentes-input--active')
                        diagnostico.classList.remove('antecedentes-input--active')
                        two.classList.remove('entrevista-nav--active')
                        test.classList.add('antecedentes-input--active')
                        notLogin.classList.remove('antecedentes-input--active')
                        three.classList.add('entrevista-nav--active')
                        four.classList.remove('entrevista-nav--active')
                        btnEntrevista.style.opacity = 0
                        axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                            opcion: 10,
                            username: this.user
                        }).then(res => {
                            res.data.forEach(item => {
                                this.nombrepaciente = item.nombre
                                this.apellido = item.apellido
                            })
                        })
                    })
                }
            }
        }
    },
    getData(){
        const username = document.getElementById('username-login')
        if(username){
            if(username.innerHTML !== ''){
                this.isLogin = true;
                this.user = username.innerHTML;
            }
        }
    },
    defaultValue(){
        const name = document.getElementById('name')
        const surname = document.getElementById('surname')
        const idpaciente = document.getElementById('idpaciente')
        const fecha = document.getElementById('fecha-antecedente')

        const getEstado = async() => {
            try{
                const res = await axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                    opcion: 12,
                    username: this.user
                })
                if(res.data){
                    res.data.forEach(item => {
                        if(item.estado == 1 ) this.antecedentes = false
                        else this.antecedentes = true
                    })

                    if(!this.antecedentes){
                        const one = document.getElementById('one')
                        const two = document.getElementById('two')
                        const three = document.getElementById('three')
                        const four = document.getElementById('four')
                        const test = document.getElementById('test-autoevaluacion')
                        const entrevista = document.getElementById('entrevista')
                        //const consultar = document.getElementById('consultar')
                        const antecedentes = document.getElementById('antecedentes')
                        const notLogin = document.getElementById('not-login')
                        const nextStep = document.getElementById('nextStep')
                        const datos = document.getElementById('datos')

                        one.classList.add('cancel-event')        
                        //two.classList.add('cancel-event')     
                        
                        if(nextStep){
                            nextStep.addEventListener('click',()=>{
                                datos.parentElement.parentElement.style.height = '1000px'
                                entrevista.style.height = '880px'
                                datos.classList.remove('antecedentes-input--active')
                                one.classList.remove('entrevista-nav--active')
                                antecedentes.classList.remove('antecedentes-input--active')
                                two.classList.remove('entrevista-nav--active')
                                test.classList.add('antecedentes-input--active')
                                notLogin.classList.remove('antecedentes-input--active')
                                three.classList.add('entrevista-nav--active')
                                four.classList.remove('entrevista-nav--active')
                                notLogin.style.zIndex = -1                         
                            })
                        }

                        if(two){
                            antecedentes.classList.add('antecedentes-ajustado')
                            entrevista.style.display = 'none'
                            notLogin.classList.add('antecedentes-input--active')
                            one.classList.remove('entrevista-nav--active')
                            two.classList.add('entrevista-nav--active')
                            //test.classList.add('antecedentes-input--active')
                            two.addEventListener('click',()=>{
                                antecedentes.style.height = '400px'
                                entrevista.style.display = 'none'
                                notLogin.style.zIndex = 1
                                test.classList.remove('antecedentes-input--active')
                                two.classList.add('entrevista-nav--active')
                                notLogin.classList.add('antecedentes-input--active')
                                three.classList.remove('entrevista-nav--active')
                                four.classList.remove('entrevista-nav--active')
                            })
                        }
                    }
                }
            }catch(err){
                console.log(err)
            }
        }
        getEstado()

        const getInput = async() =>{
            try{
                const res = await axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                    opcion: 10,
                    username: this.user
                })
                res.data.forEach(item =>{
                    if(name){
                        name.value = item.nombre
                        name.setAttribute('readonly',true)
                        name.setAttribute('maxlength',item.nombre.length)
                    }
                    if(surname){
                        surname.value = item.apellido
                        surname.setAttribute('readonly',true)
                    }
                    if(idpaciente){
                        this.iduser = item.iduser
                        idpaciente.value = item.iduser
                        idpaciente.setAttribute('readonly',true)
                    }
                    if(fecha){
                        const date = new Date()
                        fecha.value = date.toLocaleDateString()
                        fecha.setAttribute('readonly',true)
                    }
                })
                this.pacientes = res.data
            }catch(err){
                console.log(err)
            }
        }
        getInput()
    },
    insertData(){
        const tratamiento = document.getElementById('tratamiento')
        const tratamientoNo = document.getElementById('tratamiento-no')
        const dieta = document.getElementById('dieta')
        const moderada = document.getElementById('moderada')
        const estricta = document.getElementById('estricta')
        const vegano = document.getElementById('vegano')
        const alcohol = document.getElementById('alcohol')
        const te = document.getElementById('te')
        const cafe = document.getElementById('cafe')
        const drogas = document.getElementById('drogas')
        const hipersensibilidad = document.getElementById('hipersensibilidad')
        const bullying = document.getElementById('bullying')
        const muerte = document.getElementById('muerte')
        const padres = document.getElementById('padres')
        const ciudad = document.getElementById('ciudad')
        const activo = document.getElementById('activo')
        const virgen = document.getElementById('virgen')
        const ocasional = document.getElementById('ocasional')
        const disfuncional = document.getElementById('disfuncional')
        const tranquila = document.getElementById('tranquila')
        const confianza = document.getElementById('confianza')
        const separados = document.getElementById('separados')
        const traumas = document.getElementById('traumas')
        const traumasNo = document.getElementById('traumas-no')
        const motivo = document.getElementById('motivo')
        const masculino = document.getElementById('masculino')
        const femenino = document.getElementById('femenino')

        let tratamientos = null
        let habitoAlimenticio = ''
        let consumoSustancias = ''
        let medicamento = ''
        let vidaAdolescencia = ''
        let vidaSexual = ''
        let relacionFamiliar = ''
        let trauma = null
        let motivoVisita = ''

        if(tratamiento && tratamientoNo){
            if(tratamiento.checked){
                tratamientos = 1
            }else if(tratamientoNo.checked){
                tratamientos = 0
            }
        }

        if(dieta && moderada && estricta && vegano){
            if(dieta.checked){
                habitoAlimenticio = 'dieta'
            }else if(moderada.checked){
                habitoAlimenticio = 'moderada'
            }else if(estricta.checked){
                habitoAlimenticio = 'estricta'
            }else if(vegano.checked){
                habitoAlimenticio = 'vegano'
            }
        }

        if(alcohol && te && cafe){
            if(alcohol.checked){
                consumoSustancias ='alcohol'
            }else if(te.checked){
                consumoSustancias = 'te'
            }else if(cafe.checked){
                consumoSustancias = 'cafe'
            }
        }

        if(drogas && hipersensibilidad){
            if(drogas.checked){
                medicamento = 'no consumo drogas'
            }else if(hipersensibilidad.checked){
                medicamento = 'hipersensibilidad'
            }
        }

        if(bullying && muerte && padres && ciudad){
            if(bullying.checked){
                vidaAdolescencia = 'bullying'
            }else if(muerte.checked){
                vidaAdolescencia = 'muerte familiar'
            }else if(padres.checked){
                vidaAdolescencia = 'padres separados'
            }else if(ciudad.checked){
                vidaAdolescencia = 'cambio de ciudad'
            }
        }

        if(activo && virgen && ocasional){
            if(activo.checked){
                vidaSexual = 'activo'
            }else if(virgen.checked){
                vidaSexual = 'virgen'
            }else if(ocasional.checked){
                vidaSexual = 'ocasional'
            }
        }

        if(disfuncional && tranquila && confianza && separados){
            if(disfuncional.checked){
                relacionFamiliar = 'disfuncional' 
            }else if(tranquila.checked){
                relacionFamiliar = 'tranquila'
            }else if(confianza.checked){
                relacionFamiliar = 'confianza'
            }else if(separados.checked){
                relacionFamiliar = 'padres separados'
            }
        }

        if(traumas && traumasNo){
            if(traumas.checked){
                trauma = 1
            }else if(traumasNo.checked){
                trauma = 0
            }
        }

        if(motivo){
            if(motivo.value == '') motivoVisita = null
            else motivoVisita = motivo.value

            this.motivo = motivo.value
        }

        if(masculino){
            masculino.checked && this.sexo == 0
        }

        if(femenino){
            femenino.checked && this.sexo == 1
        }

        axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
            opcion: 11,
            tratamiento: tratamientos,
            motivo: motivoVisita,
            alimenticios: habitoAlimenticio,
            sustancias: consumoSustancias,
            medicamentos: medicamento,
            adolescencia: vidaAdolescencia,
            sexo: vidaSexual,
            relacion: relacionFamiliar,
            traumas: trauma,
            username: this.iduser
        }).then(() => {
            Swal.fire({
                title: 'Antecedentes',
                text: `Registro de los antecedentes completados exitosamente`,
                icon: 'success',
                timer: 10000,
                background: '#161719',
                backdrop: true,
                allowOutsideClick: true,
                allowEscapeKey: true,
                stopKeydownPropagation: false,
                confirmButtonColor: '#972745',
                showCloseButton: true
            })
            setTimeout(()=>{
                this.$router.push('/')
                window.scrollTo(0,0)
            },4000)
        }).catch(() => {
            Swal.fire({
                title: 'Antecedentes',
                text: `Error al momento de ingresar los datos, verifiquelos de nuevo.`,
                icon: 'error',
                timer: 10000,
                background: '#161719',
                backdrop: true,
                allowOutsideClick: true,
                allowEscapeKey: true,
                stopKeydownPropagation: false,
                confirmButtonColor: '#972745',
            })
            this.antecedentes = true
        })
    }
  },
  mounted(){
      this.$nextTick(function(){
          return this.defaultValue(),this.navigation()
      })
  },
  beforeMount(){
      return this.getData()
  }
}
</script>