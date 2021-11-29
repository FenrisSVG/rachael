<template>
        <div class="psiquiatras">
            <header>
            <img :src="psicologo.src">
            <p class="psiconame"><strong>{{psicologo.name}}</strong></p>
            <p class="nacionalidad">{{psicologo.country}}</p>
        </header>
        <footer>
            <p>{{psicologo.descripcion}}</p>
            <router-link :to="{name: psicologo.router, params:{query: psicologo.link}}">{{psicologo.button}}</router-link>
        </footer>
        </div>
</template>

<style scoped>
.psiquiatras{
  position: relative;
}

.psiquiatras::before{
  content: '';
  display: block;
  position: absolute;
  top: 15px;
  height: 35px;
  width: 35px;
  right: 15px;
  border-radius: 50%;
  background-image: url('../assets/desktop/nicaragua.jpg');
  background-size: cover;
  background-position: center;
}
</style>

<script>
export default {
  props:{
    psicologo:{
        type: Object,
        required: true
    }
  }
}
</script>
