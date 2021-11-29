<template>
        <section class="trastorno">
          <header class="trastorno-header" v-scroll-reveal.reset="{delay: 500}">
            <img :src="trastorno.image" alt="">
            <h2>{{trastorno.name}}</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sequi est 
              modi quis aut. Molestias officia quaerat accusantium minima placeat!...</p>
            <router-link :to="{name: trastorno.router, params:{query: trastorno.link}}">Ver mas...</router-link>
            </header>
        </section>
</template>

<script>
export default{
    props:{
        trastorno:{
            type: Object,
            required: true
        }
    }
}

</script>
