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
                <form class="form-login" autocomplete="off" @submit.prevent="insertData">
                    <div class="form-login__input">
                        <label for="username">Usuario: </label>
                        <input type="text" id="username-paciente" name="username" placeholder="Enter ur username" required>
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="form-login__input">
                        <label for="name">Name: </label>
                        <input type="name" name="name" id="name-paciente" placeholder="Enter ur name" required>
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="form-login__input">
                        <label for="surname">Surname: </label>
                        <input type="surname" name="surname" id="surname-paciente" placeholder="Enter ur surname" required>
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="form-login__input">
                        <label for="password">Password: </label>
                        <input type="password" name="repeat-password" id="password-paciente" placeholder="Enter ur password" required>
                        <i class="fas fa-unlock-alt"></i>
                    </div>
                    <div class="form-login__input">
                        <label for="repeat-password">Repeat Password: </label>
                        <input type="password" name="repeat-password" id="repeat-password" placeholder="Enter ur password" required>
                        <i class="fas fa-unlock-alt"></i>
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
    width:  50%;
    background-color: var(--primary-color);
    border-radius: 10px 0 0 10px;
}

.registrarse-img p{
    color:  var(--danger-color);
    padding: .8em 3em;
    letter-spacing: 2px;
    font-size:  14px;
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
    margin-top: 2em;
}

.login-data__header h5{
    font-size:  22px;
}

.form-login__input{
    position:  relative;
    display:  flex;
    flex-direction: column;
    padding-top:  .4em;
}

.form-login__input label{
    font-size:  14px;
    padding-bottom:  .4em;
}

.form-login__input i{
    position:  absolute;
    top: 37px;
    left: 15px;
    color:  var(--danger-color);
}

.form-login__input input{
    outline: none;
    height:  35px;
    padding-left: 40px;
    border-radius: 6px;
    font-size: 15px;
    border:  1px solid #ccc;
}

.form-login__submit{
    margin-top: 1em;
}

.form-login__submit input{
    padding:  .8em 0;
    width:  100%;
    background-color: var(--danger-color);
    color:  #fff;
    outline: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.form-login__input input:focus{
    border:  1px solid #ee4400;
    transition: border .4s ease-in;
}

.form-login__input input:focus + i{
    color:  #ee4400;
    transition: color .4s ease-in;
}


.fa-unlock-alt{
    top: 50px;
}

.registrarse-img p:nth-child(3){
    color:  #fff;
    text-align: center;
    font-size: 22px;
    margin:  0 auto;
    letter-spacing: 1px;
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
        const name = document.getElementById('name-paciente')
        const surname = document.getElementById('surname-paciente')
        const username = document.getElementById('username-paciente')
        const password = document.getElementById('password-paciente')
        const loginLink = document.getElementById('login-link');
        const fragment = document.createDocumentFragment();
        const loginForm = document.getElementById('login-form');
        const repeatPassword = document.getElementById('repeat-password')

        if(name.value.trim() !== '' && surname.value.trim() !== ''
        && username.value.trim() !== '' && password.value.trim() !== ''){
            if(password.value.trim() == repeatPassword.value.trim()){
                axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
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
                console.log(this.usernameBuscar)

                axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                    opcion: 3
                    })
                    .then(res => {
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
                })

                setTimeout(()=>{
                    this.$router.push('/')
                },2000)

            }else{
                Swal.fire({
                    title: 'Registro de Usuario',
                    text: `Las contraseñas no coinciden, por favor vuelva a intentarlo`,
                    icon: 'error',
                    timer: 10000,
                    background: '#161719',
                    allowOutsideClick: true,
                    allowEscapeKey: true,
                    stopKeydownPropagation: false,
                    confirmButtonColor: '#972745',
                    showCloseButton: true
              })
            }
        }else{
            Swal.fire({
                    title: 'Registro de Usuario',
                    text: `Los campos a ingresar no pueden ser vacios!`,
                    icon: 'error',
                    timer: 10000,
                    background: '#161719',
                    allowOutsideClick: true,
                    allowEscapeKey: true,
                    stopKeydownPropagation: false,
                    confirmButtonColor: '#972745',
                    showCloseButton: true
              })
        }
    }
  }
}
</script>


