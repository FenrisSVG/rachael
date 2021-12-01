<template>
    <div class="login-2" id="form-login-2">
        <p class="login-2__title">Log-In</p>  
        <form method="POST" class="login-2-form"  id="form-login-2">
            <label for="text">Username: </label>
            <input type="text" name="text" class="mail-2" placeholder="Username" autofocus required v-model="username" v-on:change="mostrarLogin">
            <label for="password-login">Password:</label>
            <input type="password" v-model="password" name="password-login" class="pass-2" placeholder="Contraseña" required>
            <button type="submit" @click="login">Login</button>
        </form>
        <div class="login-text-2">
            <router-link to="/signup">Sign-up</router-link>
            <a href="#" class="login-text__link-2">¿Forgot ur password?</a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
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