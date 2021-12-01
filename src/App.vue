<template>
  <div id="app">
   <header class="header">
    <div class="logo-container">
      <img src="./assets/logo.png" alt="Rachael Logo" class="logo">
      <h6>Rachael</h6>
      <Search />
    </div> 
    <div class="menu" id="menu" v-on:click="iconClose()"></div>
    <nav id="nav" class="nav">
      <ul class="main-menu">
        <li class="main-menu__item">
          <router-link to="/" class="main-menu__link">Home</router-link>
        </li>
        <li class="main-menu__item">
          <router-link to="/psicologos" class="main-menu__link">Psicologos</router-link>
        </li>
        <li class="main-menu__item main-menu__item--icon"  id="resources">
          <router-link to="/trastornos" class="main-menu__link">Trastorno</router-link> 
        </li>
        <li class="main-menu__item">
          <router-link to="/antecedentes" class="main-menu__link">Diagnostico</router-link> 
        </li>
        <li class="main-menu__item">
          <router-link to="/test" class="main-menu__link">Test</router-link> 
        </li>
        <li class="main-menu__item">
          <router-link to="/rachael" class="main-menu__link">Rachael</router-link> 
        </li>
        <li class="main-menu__item" id="login" @click="show()">
          <span><i class="fas fa-user icon-red"></i></span>
          <p class="main-menu__link p" data-set="login" id="login-link">Login</p> 

          <div class="login" id="login-form">
            <p class="login__title">Log-In</p>  
            <form method="POST" class="login-form" id="form-login" action="/">
                <input type="text" name="text" class="mail" placeholder="Username" autofocus required v-model="username" v-on:change="mostrarLogin">
                <input type="password" v-model="password" name="password" class="pass" placeholder="Contraseña" required>
                <button type="submit" @click="login()">Login</button>
            </form>
            <div class="login-text">
                <router-link to="/signup" @click="close()">Sign-up</router-link>
                <a href="#" class="login-text__link">¿Forgot ur password?</a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
   </header>
     <router-view></router-view>
  </div>
</template>

<script>
// import axios from 'axios'
import Search from './components/Search.vue'
import Swal from 'sweetalert2'
import axios from 'axios'

export default{
  name:'App',
  components:{
    Search
  },
  data(){
    return{
      username: '',
      password: '',
      user: '',
      clave: '',
      datas: [],
      data:{
        iduser: '',
        user: '',
        password:''
      }
    }
  },
  methods: {
    iconClose(){
      const menu = document.getElementById('menu');
      const nav = document.getElementById('nav');

      if(menu){
          console.log('Hola')
          menu.addEventListener('click',(e)=>{
              if(e.target.classList.contains('menu')){
                  nav.classList.toggle('active');
                  menu.classList.toggle('menu--close');
              }
          })
      }
    },
    rotateIcon(){
      const icon = document.getElementById('icon');
      const submenu = document.getElementById('submenu');

      if(icon){
        icon.addEventListener('click',(e)=>{
            if(e.target.style.transform === "rotate(180deg)"){
                e.target.style.transform = "rotate(0)";
                submenu.classList.add('show');
            }else{
              e.target.style.transform = "rotate(180deg)";
              submenu.classList.remove('show');
            }
        })
      }
    },
    show(){
          const login = document.getElementById('login');
          const loginForm = document.getElementById('login-form');
          // const body = document.getElementsByTagName('BODY');
          
          if(login){
              login.addEventListener('click',(e)=>{
                   if(e.target.dataset.set == 'login') {
                     loginForm.classList.toggle('login--show');
                   }else if(e.target.className !== 'main-menu__link'){
                     //loginForm.classList.remove('login--show');
                   }
              });

              // login.addEventListener('mousedown',(e)=>{
              //   console.log(e.target)
              //   if(e.target.classList.contains('login')){
              //       loginForm.classList.remove('login--show');
              //   }
              // });
          }

    },
    login(){
      const formLogin = document.getElementById('form-login');
      const loginForm = document.getElementById('login-form');
      const loginLink = document.getElementById('login-link');
      const fragment = document.createDocumentFragment();
      //const name = document.getElementById('name');

      if(formLogin){
        formLogin.addEventListener('submit',(e)=>{
          e.preventDefault();
          if(this.username == this.user && this.password == this.clave){
            loginForm.classList.remove('login--show');
            (async()=>{
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
              const p = document.createElement('span');
              p.innerHTML = this.username;
              p.className = 'username-login'
              p.id = "username-login"
              fragment.appendChild(p);
              loginLink.replaceWith(fragment);
            })()
          }else{
            Swal.fire({
                title: 'Inicio de Sesion',
                text: `Nombre de Usuario y/o contraseña incorrectos`,
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
    close(){
      const loginForm = document.getElementById('login-form');
      loginForm.classList.remove('login--show');
    }
  }
}
</script>



