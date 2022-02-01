<template>
    <div class="personalidad">
        <header class="personalidad-header">
            <h2 class="personalidad__title">Test de <span>Personalidad</span>.</h2>
            <p class="personalidad__text">Responde las siguientes preguntas.</p>
        </header>   
        <section class="personalidad-body">
            <form action="/" class="personalidad-form" autocomplete="off" 
            @submit.prevent="getPersonality" id="form-personality">
                <div class="personalidad-container">
                    <p class="personalidad-container__text">1. Que te gustaria...</p>
                    <div class="personalidad-input">
                        <label for="amor">a. Encontrar el amor de pelicula</label>
                        <input type="checkbox" name="amor" class="personalidad__input" data-response="a"
                        v-model="oneYes" @change="oneNo = false">
                    </div>
                    <div class="personalidad-input">
                        <label for="amor">b. Ganar 50 Millones de Dolares</label>
                        <input type="checkbox" name="amor" class="personalidad__input" data-response="b"
                        v-model="oneNo" @change="oneYes = false">
                    </div>
                </div>
                <div class="personalidad-container">
                    <p class="personalidad-container__text">2. Preferirias...</p>
                    <div class="personalidad-input">
                        <label for="amor">a. Nunca poder tener acceso a internet.</label>
                        <input type="checkbox" name="amor" class="personalidad__input" data-response="a"
                        v-model="twoYes" @change="twoNo = false">
                    </div>
                    <div class="personalidad-input">
                        <label for="amor">b. Nunca tener ningun amor.</label>
                        <input type="checkbox" name="amor" class="personalidad__input" data-response="b"
                        v-model="twoNo" @change="twoYes = false">
                    </div>
                </div>
                <div class="personalidad-container">
                    <p class="personalidad-container__text">3. Cual eligirias...</p>
                    <div class="personalidad-input">
                        <label for="amor">a. Legalmente cambiar tu nombre a Hitler.</label>
                        <input type="checkbox" name="amor" class="personalidad__input" data-response="a">
                    </div>
                    <div class="personalidad-input">
                        <label for="amor">b. No poder comer comida chatarra.</label>
                        <input type="checkbox" name="amor" class="personalidad__input" data-response="b">
                    </div>
                </div>
                <div class="personalidad-container">
                    <p class="personalidad-container__text">4. Decide una</p>
                    <div class="personalidad-input">
                        <label for="amor">a. Sacrificar tu vida para que se salve el resto.</label>
                        <input type="checkbox" name="amor" class="personalidad__input" data-response="a">
                    </div>
                    <div class="personalidad-input">
                        <label for="amor">b. Sacrificar a todos para TU poder salvarte</label>
                        <input type="checkbox" name="amor" class="personalidad__input" data-response="b">
                    </div>
                </div>
                <div class="personalidad-container">
                    <p class="personalidad-container__text">5. Escoge una</p>
                    <div class="personalidad-input">
                        <label for="amor">a. Estar deprimido toda la vida</label>
                        <input type="checkbox" name="amor" class="personalidad__input" data-response="a">
                    </div>
                    <div class="personalidad-input">
                        <label for="amor">b. Sacrificar a 5 perritos</label>
                        <input type="checkbox" name="amor" class="personalidad__input" data-response="b">
                    </div>
                </div>
                <div class="personalidad-container">
                    <p class="personalidad-container__text">6. Que te gustaria...</p>
                    <div class="personalidad-input">
                        <label for="amor">a. Un año sin ver Netflix ni ningun otro servicio de streaming</label>
                        <input type="checkbox" name="amor" class="personalidad__input" data-response="a">
                    </div>
                    <div class="personalidad-input">
                        <label for="amor">b. Alimentarte con mayonesa todo el año.</label>
                        <input type="checkbox" name="amor" class="personalidad__input" data-response="b">
                    </div>
                </div>
                <div class="personalidad-container">
                    <p class="personalidad-container__text">7. Que preferirias...</p>
                    <div class="personalidad-input">
                        <label for="amor">a. Saber cuando te vas a morir.</label>
                        <input type="checkbox" name="amor" class="personalidad__input" data-response="a">
                    </div>
                    <div class="personalidad-input">
                        <label for="amor">b. Saber como te vas a morir.</label>
                        <input type="checkbox" name="amor" class="personalidad__input" data-response="b">
                    </div>
                </div>
                <div class="personalidad-container">
                    <p class="personalidad-container__text">8. Que escogerias...</p>
                    <div class="personalidad-input">
                        <label for="amor">a. Poder predecir el futuro.</label>
                        <input type="checkbox" name="amor" class="personalidad__input" data-response="a">
                    </div>
                    <div class="personalidad-input">
                        <label for="amor">b. Viajar en una capsula de tiempo.</label>
                        <input type="checkbox" name="amor" class="personalidad__input" data-response="b">
                    </div>
                </div>
                <div class="personalidad-container">
                    <p class="personalidad-container__text">9. Que te gustaria...</p>
                    <div class="personalidad-input">
                        <label for="amor">a. Quedarte sin olfato</label>
                        <input type="checkbox" name="amor" class="personalidad__input" data-response="a">
                    </div>
                    <div class="personalidad-input">
                        <label for="amor">b. Oler algo asqueroso constante toda la vida.</label>
                        <input type="checkbox" name="amor" class="personalidad__input" data-response="b">
                    </div>
                </div>
                <div class="personalidad-button">
                    <input type="submit" value="Enviar" class="personalidad-submit">
                </div>
            </form>
        </section>
        <div class="modal" id="modal-personalidad" v-scroll-reveal="{delay: 100}">
        <h2 class="modal__title">Test de Personalidad </h2>
        <div class="modal-content modal-content--personality">
          <h3 class="trastorno-diagnosticado personalidad-diagnosticada">Resultado:</h3>
          <div class="trastorno-diagnosticado__causas">
            <h3 class="modal-content__title">Personalidad <span>{{this.personalidad}}</span></h3>
            <p class="modal-content__text">Eres una persona Lorem ipsum dolor sit amet.</p>
          </div>
          <hr>
          <p class="important"><strong>Importante</strong>, esto solo es un diagnostico previo, no es oficial el diagnostico y le recomendamos ir donde un experto a validar nuestra informacion</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Personalidad',
    data(){
        return {
            personalidad: null ?? '',
            oneYes: false,
            oneNo: false,
            twoYes: false,
            twoNo: false,
            threeYes: false,
            threeNo: false,
            fourYes: false,
            fourNo: false,
            fiveYes: false,
            fiveNo: false,
            sixYes: false,
            sixNo: false,
            sevenYes: false,
            sevenNo: false,
        }
    },
    methods:{
        getPersonality(){
            const response = document.querySelectorAll('.personalidad__input')
            let aResponse = 0
            let bResponse = 0

            const PERSONALITY_aRESPONSE = {
                1: 'Marihuano',
                2: 'Marihuano',
                3: 'Marihuano',
                4: 'Drogadicto',
                5: 'Drogadicto',
                6: 'Drogadicto',
                7: 'Alcoholico',
                8: 'Alcoholico',
                9: 'Alcoholico',
            }

            const DEFAULT_RESPONSE = 'No hemos tenido suficiente informacion para el diagnostico'

            response.forEach(item => {
                if(item.checked){
                    if(item.dataset.response == "a") aResponse++
                    else bResponse++
                }
            })

            const diagnostic = PERSONALITY_aRESPONSE[aResponse] || DEFAULT_RESPONSE
            this.personalidad = diagnostic || bResponse
            this.modalShow()
        },
        modalShow(){
             const modal = document.getElementById('modal-personalidad')

             modal.classList.add('modal--show')
             if(modal){
                modal.addEventListener('click',(e)=>{
                    if(e.target.classList.contains('modal')){
                        modal.classList.remove('modal--show') 
                    }
                })
            }
        }
    }
}
</script>