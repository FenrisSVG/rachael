<template>    
<div class="error-view">
    <div class="error-404">
        <img src="../assets/desktop/Yoda.png" alt="Imagen de Yoda" loading="lazy">
    </div>
    <div class="error-404__text">
        <h3>Si un Yedi quieres ser volver al inicio debes hacer</h3>
        <p>Pagina no encontrada</p>
        <div class="error-404__button">
            <router-link to="/" class="btn"><span>Regresar al lado luminoso</span></router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
   name: 'PageNotFound'
}
</script>