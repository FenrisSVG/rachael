<template>
    <div>
      <section class="trastornos">
        <h2>Trastorno de Panico</h2>

        <article class="trastornos-container">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/ansiedad-generalizada.jpg" alt="">
          </header>
          <footer class="trastornos-container__text">
            <p><strong>Los trastornos de Panico</strong> son ataques de panico imprevistos recurrentes. Un ataque de panico
            es la aparicion subita de miedo intenso o malestar intenso que alcanza su maxima expresion en minutos. El termino
            recurrente significa literalmente mas de una crisis de panico inesperada, es decir el ataque parece ocurrir
            de la nada, como cuando un individuo se relaja, o aparece durante el sueño.</p>
            <p>Los individuos afectados por este trastorno se preocupan de manera caracteristica por las implicaciones o Consecuencias
                que estos pueden tener sobre sus vidas. Algunos temen que sean el anuncio de una enfermedad no diagnosticada que pueda poner
                en peligro la vida.
            </p>
            <h3><strong>Sintomas clinicos del Trastorno de Panico</strong></h3>
            <p>Algunos sintomas del Trastorno de Fobia Especifican son,</p>
            <div class="sintomas">
              <ol class="sintomas-menu" v-if="sintomas != ''">
                <li v-for="(item,index) in sintomas" :key="index" class="sintomas-menu__item">{{item}}</li>
              </ol>
            </div>
            <h3>Desarollo y curso</h3>
            <p>En los adolescentes tiende a tener un curso cronico y suele ser cormobido con el trastorno
                de depresion y el de bipolar. Sin embargo, los adolescentes pueden estar menos preocupados
                por los ataques de panico que los adultos jovenes.
            </p>
            <h3><strong>Consecuencias que tiene este Trastorno de Panico</strong></h3>
            <p>Las personas que se les diagnostica este trastorno generalmente desarollan una personalidad
                de <strong>miedo y ansiedad constante,</strong> tambien debido al miedo desarollan una
                <strong>inquietud y pesadillas</strong> de la sitaucion u objeto de la situacion fobica.
            </p>
            <h3>Riesgos de suicidio</h3>
            <p>Los sujetos con <strong>Trastorno de panico</strong> con ataques de panico en los ultimos 12 meses estan
            relacionados con una mayor tasa de intentos de suicidio y de ideacion suicida en los ultimos 12 meses, incluso si
            consideran la comorbilidad, los antecedentes de maltrato infantil y otros factores de riesgos de suicidio.
            </p>
            <h3><strong>¿Como se trata el Trastorno de Panico?</strong></h3>
            <p>La manera de tratar este problema es con medicamentos psicofarmaceuticos, pero lo mejor
              es que <strong>consulte con un experto de verdad no con unos pendejos como nosotros.</strong>
            </p>
            <h3><strong>Recuerda que no estas solo.</strong></h3>
            <p>Sabemos que la ansiedad puede ser un problema dificil pero <strong>no estas solo</strong>
            Recuerda que buscar ayuda siempre está bien, no hay nada mejor que contar con un especialista que te pueda enseñar qué hacer para superar la depresión. No lo dudes,  
            realmente te sorprenderás con los resultados si buscas ayuda contra la ansiedad hoy</p>
          </footer>
        </article>
      </section>
        <Footer/>
    </div>
</template>

<script>
    
import Footer from '../Footer.vue';


export default {
  name: 'Panico',
  components:{
    Footer
  },
  data(){
    return{
      sintomas:["Agitacion","Temblores","Cansancio","Malestar Abdominal","Nauseas","Molestias en el torax","Incapacidad para concentrase","Taquicardia","Problemas Gastrointestinales","Sudoracion","Sensacion de ahogo","Hormigueo"]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>