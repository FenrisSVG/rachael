<template>
    <div class="registrarse">
        <div class="registrarse-img">
            <p>RACHAEL</p>
            <img src="../assets/desktop/login.svg" alt="login image">
            <p>RACHAEL Y ASOCIADOS.</p>
        </div>
        <div class="login-data">
            <header class="login-data__header">
                <h5>Registrarse.</h5>
            </header>
            <hr>
            <footer class="login-data__footer">
                <!-- FORMULARIO PARA LA BD -->
                <form id="formulario-signup" class="form-login" autocomplete="off">
                    <div class="form-login__input" id="grupo__usuario">
                        <label for="username">Usuario: </label>
                        <div class="form-grupo__input">
                            <i class="fas fa-user"></i>
                            <input class="formulario-grupo__input" type="text" id="username-paciente" name="username" placeholder="Enter ur username" required>
                            <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        </div>
                        <p class="message-error">El Usuario debe ser mayor de 4 caracteres y menor a 16 caracteres y no puede contener espacios</p>
                    </div>
                    <div class="form-login__input" id="grupo__nombre">
                        <label for="name">Name: </label>
                        <div class="form-grupo__input">
                            <i class="fas fa-user"></i>
                            <input class="formulario-grupo__input" type="name" name="name" id="name-paciente" placeholder="Enter ur name" required>
                            <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        </div>
                         <p class="message-error">El nombre solo puede contenter letras y espacios, no numeros.</p>
                    </div>
                    <div class="form-login__input" id="grupo__surname">
                        <label for="surname">Surname: </label>
                        <div class="form-grupo__input">
                            <i class="fas fa-user"></i>
                            <input class="formulario-grupo__input" type="surname" name="surname" id="surname-paciente" placeholder="Enter ur surname" required>
                            <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        </div>
                        <p class="message-error">El apellido solo puede contenter letras y espacios, no numeros.</p>
                    </div>
                    <div class="form-login__input" id="grupo__password">
                        <label for="password">Password: </label>
                        <div class="form-grupo__input">
                            <i class="fas fa-unlock-alt"></i>
                            <input class="formulario-grupo__input" type="password" name="password" id="password-paciente" placeholder="Enter ur password" required>
                            <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        </div>
                        <p class="message-error">La contraseña debe empezar con mayuscula, ser mayor o igual a 8 carectees y llevar un caracter especial (ej., @)</p>
                    </div>
                    <div class="form-login__input" id="grupo__password2">
                        <label for="repeat-password">Repeat Password: </label>
                        <div class="form-grupo__input">
                            <i class="fas fa-unlock-alt"></i>
                            <input class="formulario-grupo__input" type="password" name="repeat-password" id="repeat-password" placeholder="Enter ur password" required>
                            <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        </div>
                        <p class="message-error">Las contraseñas no coinciden</p>
                    </div>
                    <div class="form-login__submit">
                        <input type="submit" value="Sign-Up">
                    </div>
                </form>
            </footer>
        </div>
    </div>
</template>

<style scoped>
.registrarse{
    display: flex;
}

.registrarse-img{
    width: 50%;
    background-color: var(--primary-color);
    border-radius: 10px 0 0 10px;
}

.registrarse-img p{
    color:  var(--secondary-color);
    padding: .8em 3em;
    letter-spacing: 2px;
    font-size:  15px;
}

.registrarse-img img{
    max-width: 85%;
    margin: 0 auto;
    padding: 2.5em;
}

.login-data{
    width:  50%;
    height:  auto;
    flex-grow:  1;
    padding:  2.5em 4em;
    color: #fff;
    background-color: var(--background-color);
    border-radius: 0 10px 10px 0;
}

.login-data__footer{
    margin-top: 1.6em;
}

.login-data__header h5{
    font-size:  22px;
}

.form-grupo__input{
    position:  relative;
    display:  flex;
    flex-direction: column;
    padding-top:  .4em;
}

.form-grupo__input label{
    font-size:  14px;
    padding-bottom:  .4em;
}

.form-login__input{
    margin-top: .4em;
}

.form-grupo__input i{
    position:  absolute;
    top: 15px;
    left: 15px;
    color:  var(--danger-color);
}

.form-grupo__input input{
    outline: none;
    height:  35px;
    padding-left: 40px;
    width: 90%;
    border-radius: 6px;
    font-size: 15px;
    border:  1px solid #ccc;
}

.form-login__submit{
    margin-top: 1.2em;
}

.form-login__submit input{
    padding:  .5em 0;
    width:  90%;
    background-color: var(--secondary-color);
    color:  #fff;
    outline: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.form-login__submit input:hover{
    background-color: #40e3aa;
    color: #222;
}

.form-login__input input:focus{
    border:  1px solid #ee4400;
    transition: border .4s ease-in;
}

.form-login__input input:focus + i{
    color:  #ee4400;
    transition: color .4s ease-in;
}

.form-grupo__input i:nth-of-type(2){
    left: 85%;
    opacity: 0;
    transition: opacity .3s ease-in;
}

.registrarse-img p:nth-child(3){
    color:  #fff;
    text-align: center;
    font-size: 22px;
    margin:  0 auto;
    letter-spacing: 1px;
}

.message-error{
    display: none;
    font-size: 13px;
    color: var(--danger-color);
    font-weight: bold;
}

.message-error--activo{
    display: block;
}

.form-grupo__correcto .form-grupo__input i:nth-of-type(2){
    color: var(--secondary-color);
    opacity: 1;
}

.form-grupo__incorrecto .form-grupo__input i:nth-of-type(2){
    color: var(--danger-color);
    opacity: 1;
}

.form-grupo__incorrecto .form-grupo__input input{
    border: 3px solid var(--danger-color)
}
</style>

<script>
import axios from 'axios';
import Swal from 'sweetalert2'
export default {
  name: 'Signup',
  data(){
      return{
          datas: [],
          username: ''
      }
  },
  methods:{
      insertData(){
        const inputs = document.querySelectorAll('.formulario-grupo__input')
        const formulario = document.getElementById('formulario-signup')
        const name = document.getElementById('name-paciente')
        const surname = document.getElementById('surname-paciente')
        const username = document.getElementById('username-paciente')
        const password = document.getElementById('password-paciente')
        const loginLink = document.getElementById('login-link');
        const fragment = document.createDocumentFragment();
        const loginForm = document.getElementById('login-form');
        const repeatPassword = document.getElementById('repeat-password')

        const expresiones = {
            usuario: /^[a-z0-9_-]{3,16}$/,
            name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
            surname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
            password: /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/
        }

        const campos = {
            usuario: false,
            nombre: false,
            surname: false,
            password: false,
        }

        const validarCampo = (expresion, input, campo) => {
            if(expresion.test(input.value)){
                document.getElementById(`grupo__${campo}`).classList.remove('form-grupo__incorrecto');
                document.getElementById(`grupo__${campo}`).classList.add('form-grupo__correcto');
                document.querySelector(`#grupo__${campo} .formulario__validacion-estado`).classList.add('fa-check-circle');
                document.querySelector(`#grupo__${campo} .formulario__validacion-estado`).classList.remove('fa-times-circle');
                document.querySelector(`#grupo__${campo} .message-error`).classList.remove('message-error--activo');
                campos[campo] = true;
            } else {
                document.getElementById(`grupo__${campo}`).classList.add('form-grupo__incorrecto');
                document.getElementById(`grupo__${campo}`).classList.remove('form-grupo__correcto');
                document.querySelector(`#grupo__${campo} .formulario__validacion-estado`).classList.add('fa-times-circle');
                document.querySelector(`#grupo__${campo} .formulario__validacion-estado`).classList.remove('fa-check-circle');
                                document.querySelector(`#grupo__${campo} .message-error`).classList.add('message-error--activo');
                campos[campo] = false;
            }
        }

        const validarPassword2 = () => {
            if(password.value !== repeatPassword.value){
                document.getElementById(`grupo__password2`).classList.add('form-grupo__incorrecto');
                document.getElementById(`grupo__password2`).classList.remove('form-grupo__correcto');
                document.querySelector(`#grupo__password2 .formulario__validacion-estado`).classList.add('fa-times-circle');
                document.querySelector(`#grupo__password2 .formulario__validacion-estado`).classList.remove('fa-check-circle');
                document.querySelector(`#grupo__password2 .message-error`).classList.add('message-error--activo');
                campos['password'] = false;
            } else {
                document.getElementById(`grupo__password2`).classList.remove('form-grupo__incorrecto');
                document.getElementById(`grupo__password2`).classList.add('form-grupo__correcto');
                document.querySelector(`#grupo__password2 .formulario__validacion-estado`).classList.remove('fa-times-circle');
                document.querySelector(`#grupo__password2 .formulario__validacion-estado`).classList.add('fa-check-circle');
                document.querySelector(`#grupo__password2 .message-error`).classList.remove('message-error--activo');
                campos['password'] = true;
            }
        }

        const validarFormulario = (e)=>{
            switch(e.target.name){
                case "username":
                    validarCampo(expresiones.usuario, e.target, 'usuario');
                break;
                case "name":
                    validarCampo(expresiones.name, e.target, 'nombre');
                break;
                case "surname":
                    validarCampo(expresiones.surname, e.target, 'surname');
                break;
                case "password":
                    validarCampo(expresiones.password, e.target, 'password');
                    validarPassword2()
                break;
                case "repeat-password":
                    validarPassword2()
                break;
            }
        }

        inputs.forEach((input)=>{
            console.log(campos)
            input.addEventListener('keyup', validarFormulario)
            input.addEventListener('change', validarFormulario)
            input.addEventListener('blur', validarFormulario)
        })
        
        formulario.addEventListener('submit',(e)=>{
            e.preventDefault()
            if(campos.usuario && campos.nombre && campos.surname && campos.password){
                const insertUser = async()=>{
                    await axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                        opcion: 8,
                        nombre: name.value.trim(),
                        surname: surname.value.trim(),
                        username: username.value.trim(),
                        clave: password.value.trim()
                    }).then(async function(){
                            await Swal.fire({
                                title: 'Registro de Usuario',
                                text: `Usuario registrado exitosamente`,
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
                        name.value = ''
                        surname.value = ''
                        password.value = ''
                        repeatPassword.value = ''
                    }).catch(()=>{
                        Swal.fire({
                            title: 'Registro de Usuario',
                            text: `Hubo un error en el registro de usuario, por favor vuelva a intentarlo`,
                            icon: 'error',
                            timer: 10000,
                            background: '#161719',
                            allowOutsideClick: true,
                            allowEscapeKey: true,
                            stopKeydownPropagation: false,
                            confirmButtonColor: '#972745',
                            showCloseButton: true
                        })
                    })
                    this.usernameBuscar = username.value.trim()
                    const res = await axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                        opcion: 3
                    })
                    this.datas = res.data;
                    this.datas.forEach(data =>{
                        loginForm.classList.remove('login--show');
                        const p = document.createElement('span')
                        p.innerHTML = data.username;
                        p.className = 'username-login'
                        p.id = 'username-login'
                        fragment.appendChild(p)
                        loginLink.replaceWith(fragment)     
                    })
                }
                insertUser()
                document.querySelectorAll('.form-grupo__correcto').forEach((icono) => {
                    icono.classList.remove('form-grupo__correcto');
                });
                setTimeout(()=>{
                    this.$router.push('/')
                },3000)
            }else{
                Swal.fire({
                    title: 'Registro de Usuario',
                    text: `Revise que los datos que esta enviando no esten vacios y esten en el formato correcto.`,
                    icon: 'error',
                    timer: 10000,
                    background: '#161719',
                    backdrop: true,
                    allowOutsideClick: true,
                    allowEscapeKey: true,
                    stopKeydownPropagation: false,
                    confirmButtonColor: '#972745',
                    showCloseButton: true
                })
            }
        })
        
        
    }
  },
  mounted(){
      return this.insertData()
  }
}
</script>


