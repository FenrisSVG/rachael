<template>
    <div class="psiquiatras">
        <div class="psiquiatras-header">
          <div class="psiquiatras-header__img">
            <img :src="psicologo.src" loading="lazy">
          </div>
          <div class="psiquiatras-header__info">
            <p class="psiconame"><strong>{{psicologo.name}}</strong></p>
            <p class="nacionalidad">{{psicologo.country}}</p>
            <p class="psiquiatras-telefono"><span>Telefono</span> +505-21321313</p>
          </div>
        </div>
        <div class="psiquiatras-footer">
            <p>{{psicologo.descripcion}}</p>
            <router-link class="psiquiatras-footer__link"
            :to="{name: psicologo.router, params:{query: psicologo.link}}" rel="nofollow nopreferer noopener">
              {{psicologo.button}}</router-link>
        </div>
      </div>
</template>

<style scoped>
.psiconame{
    font-size: 1.3rem;
}
  
.psiquiatras-telefono,
.nacionalidad{
    font-size: 15px;
    font-weight: bold;
}

.psiquiatras-telefono span{
  color: var(--danger-color)
}

.psiquiatras::before{
  content: '';
  display: block;
  position: absolute;
  top: 14px;
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
