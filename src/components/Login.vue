<template>
    <div class="login-2" id="form-login-2">
        <p class="login__title login__title--secondary">Inicio de Sesion</p>  
        <form method="POST" class="login-form login-form--secondary" id="form-login-2">
            <div class="login-form__container">
              <label for="text">Username: </label>
              <input class="login-form__input login-form__input--secondary" type="text" name="text" placeholder="Username" autofocus required v-model="username" v-on:change="mostrarLogin">
            </div>
            <div class="login-form__container">
              <label for="password-login">Password:</label>
              <input class="login-form__input login-form__input--secondary" type="password" v-model="password" name="password-login" placeholder="Contraseña" required>
            </div>
            <div class="login-form__button">
              <input class="login-form__submit login-form__submit--secondary" type="submit" @click="login" value="Log in">
            </div>
        </form>
        <div class="login-text login-text--secondary">
            <router-link class="login-text__link login-text__link--secondary" to="/signup">Sign-up</router-link>
            <a href="#" class="login-text__link login-text__link--secondary login-text__link--padding">¿Forgot ur password?</a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'Login',
  data(){
      return{
          username: '',
          password:'',
          datas: []
      }
  },
  methods:{
    ...mapActions(['mocklogin']),
    mostrarLogin(){
      axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
        opcion: 9,
        username: this.username
      }).then(res => {
            this.datas = res.data;
            this.datas.forEach(data =>{
              this.user = data.username,
              this.clave = data.clave
            })
      })
    },
    login(){
      const formLogin = document.getElementById('form-login-2');
      const loginLink = document.getElementById('login-link');
      const fragment = document.createDocumentFragment();
      //const name = document.getElementById('name');

      if(formLogin){

        formLogin.addEventListener('submit',(e)=>{
          e.preventDefault();
          if(this.username == this.user && this.password == this.clave){
            const p = document.createElement('span');
            p.innerHTML = this.username;
            p.className = 'username-login'
            p.id = "username-login"
            fragment.appendChild(p);
            loginLink.replaceWith(fragment);
            (async ()=>{
                await Swal.fire({
                    title: 'Inicio de Sesion',
                    text: `Inicio de Sesion del Usuario: ${this.user} exitosamente`,
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
                this.mockLogin()
                this.$router.push('/')
            })()
          }else{
              Swal.fire({
                    title: 'Inicio de Sesion Fallido',
                    text: `Nombre de usuario y/o contraseña incorrecto!`,
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
    }
  }
}
</script>