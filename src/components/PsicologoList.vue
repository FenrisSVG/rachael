<template>
        <div class="psiquiatras">
          <header>
            <img :src="psicologo.src">
            <p class="psiconame"><strong>{{psicologo.name}}</strong></p>
            <p class="nacionalidad">{{psicologo.country}}</p>
            <p class="psiquiatras-telefono"><span>Telefono</span> +505-21321313</p>
        </header>
        <footer class="psiquiatras-footer">
            <p>{{psicologo.descripcion}}</p>
            <router-link :to="{name: psicologo.router, params:{query: psicologo.link}}">{{psicologo.button}}</router-link>
        </footer>
        </div>
</template>

<style scoped>
.psiquiatras{
  position: relative;
}

.psiquiatras-footer a:hover::after{
  transform: translateX(0);
}

.psiquiatras-footer a:hover{
  box-shadow: 0 1px 10px #cccccc40;
  border: 1px solid var(--primary-color)
}

.psiquiatras-telefono{
  font-size: 14px;
  font-weight: bold;
}

.psiquiatras-telefono span{
  color: var(--danger-color)
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
