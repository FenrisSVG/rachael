<template>
    <div class="contact" >
      <!-- <h2 v-scroll-reveal="{delay: 300}" class="form-title"><span>Test de Autoevaluacion</span> para el Diagnostico de Trastorno.</h2> -->
      <form v-scroll-reveal="{delay: 300}" class="form-container" v-if="inputs !== []" autocomplete="off" @submit.prevent="modalShow" id="consultar">  
          <!-- <div class="form-container__input">
            <div class="form-container__header" v-for="(input,id) in inputs" :key="id">
              <label :for="input.for">{{input.label}}</label>
              <input type="text" class="input" :placeholder="input.placeholder" :id="input.id2">
              <span class="form-container__icon"><i class="fas fa-user"></i></span>
            </div>
          </div> -->

          <!-- CATEGORIZACION DE LA ANSIEDAD -->
          <div class="form-container__body show-opacity">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>A continuacion se le presentan diversas preguntas, por favor seleccione el cual
              considere la opcion correcta.
            </h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(0,1)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/nerviosismo.jpg" alt="nerviosimo img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>
          <!-- CATEGORIZACION OBSESIVOS-COMPULSIVOS -->
          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Pregunta relacionada con el insomnio</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(1,2)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/insomnio.jpg" alt="insomnio img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>
          <!-- CATEGORIZACION DEPRESIVOS -->
          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Pregunta relacionada a la agitacion.</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(2,3)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/agitacion.jpg" alt="agitacion img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>
          <!-- CATEGORIZACION RELACIONADA AL TRAUMA Y ESTRES -->
          <div class="form-container__body">   
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Pregunta relacionada a los temblores.</h2>      
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(3,4)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/temblores.jpg" alt="temblores img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>
          <!-- CATEGORIZACION PERSONALIDAD -->
          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Pregunta relacionada al cansancio</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(4,5)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/cansancio.jpg" alt="temblores img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>
          <!-- CATEGORIZACION BIPOLARIDAD -->
          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Pregunta relacionada a un malestar abdominal</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(5,6)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
                            <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/malestar.jpg" alt="temblores img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Pregunta relacionada a tener nauseas</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(6,7)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
                            <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/nauseas.jpg" alt="nauseas img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Pregunta relacionada a un malestar en el torax.</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(7,8)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/torax.jpg" alt="torax img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Pregunta relacionada al sintoma del Pesimismo</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(8,9)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/pesimismo.jpg" alt="pesimismo img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Sintoma de incapacidad para concentrarte</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(9,10)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/concentracion.jpg" alcon="temblores img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Sintoma de la taquicardia</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(10,11)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/taquicardia.jpg" alt="temblores img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Sintoma de los problemas gastrointestinales</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(11,12)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/gastrointestinales.jpg" alt="temblores img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Pregunta relacionada a la timidez</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(12,13)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/timidez.jpg" alt="timidez img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Sintoma de la Mania</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(13,14)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/nerviosismo.jpg" alt="nerviosismo img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Personalidad de una baja autoestima</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(14,15)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/baja.jpg" alt="baja img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Personalidad de una Alta Autoestima.</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(15,16)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/alta.jpg" alt="alta img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Personalidad inquieta</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(16,17)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/inquietud.jpg" alt="temblores img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Personalidad de tener pesadillas</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(17,18)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/pesadillas.jpg" alt="pesadillas img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Personalidad de renunciar dificilmente a las posesiones</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(18,19)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/temblores.jpg" alt="temblores img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Personalidad de tener miedo a morir</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(19,20)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/morir.jpg" alt="morir img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Personalidad de una necesidad de admiracion</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(20,21)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/admiracion.jpg" alt="admiracion img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Personalidad a un miedo de perder el control</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(21,22)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/miedo.jpg" alt="miedo img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Personalidad de un miedo excesivo</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(22,23)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/miedo.jpg" alt="miedo img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Personalidad de creer que fallas en todo.</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(23,24)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/fracaso.jpg" alt="fracaso img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Personalidad de imponerse Reglas Estrictas</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(24,25)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/admiracion.jpg" alt="admiracion img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Personalidad e una baja tolerancia al error</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(25,26)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/cansancio.jpg" alt="cansancio img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Personalidad impulsiva.</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(26,27)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/paranoia.jpg" alt="paranoia img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Personalidad de negativismo.</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(27,28)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/negativismo.jpg" alt="negativismo img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Personalidad de cambio continuo del estado de animo.</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(28,29)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/fracaso.jpg" alt="vulnerabilidad img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Consecuencias de una depresion mayor</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(29,30)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/depresion.jpg" alt="depresion img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Consecuencias de un pensamiento desorganizado.</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(30,31)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/vulnerabilidad.jpg" alt="vulnerabilidad img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Consecuencias de tener una falta de atencion</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(31,32)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/admiracion.jpg" alt="admiracion img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Consecuencia de un rencor persistente.</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(32,33)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/miedo.jpg" alt="miedo img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Consecuencia de una mentalidad paranoica</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(33,34)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/paranoia.jpg" alt="paranoia img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Consecuencias de adoptar una personalidad vulnerable.</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(34,35)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/vulnerabilidad.jpg" alt="vulnerabilidad img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Consecuencias de una sensacion cronica de vacio.</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(35,36)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/inquietud.jpg" alt="inquietud img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>
          
          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Consecuencia de un sistema disociativo grave</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(36,37)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/negativismo.jpg" alt="negativismo img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__body">
            <h2 class="test-paciente__autoevaluacion">III. Test de Autoevaluacion</h2>
            <h2>Consecuencias del consumo de una sustancia especifica.</h2>
            <div class="detalle-autoevaluacion" v-for="sintoma in sintomas.slice(37,38)" :key="sintoma.idsintoma">
              <div class="detalle-autoevaluacion__header">
                <p>¿{{sintoma.descripcion}}?</p>
              </div>
              <div class="detalle-autoevaluacion__img">
                <img src="../../assets/sintomas/sustancias.jpg" alt="sustancia img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre"> 
              </div>
            </div>
          </div>

          <div class="form-container__button">
            <input type="submit" value="Consultar" class="button" id="btn-test">
          </div>

          <div class="controls-test">
            <i class="fas fa-chevron-circle-left" id="prev-test"></i>
            <i class="fas fa-chevron-circle-right" id="next-test"></i>
          </div>
      </form>

      <div class="modal" id="modal" v-scroll-reveal="{delay: 100}">
        <h2>Se llego a la prediccion de que tenga el/los siguente(s) trastorno(s)</h2>
        <div class="modal__content" v-for="trastorno in trastornos" :key="trastorno.idtrastorno">
          <h3>{{trastorno.nombre}}</h3>
          <p>{{trastorno.descripcion}}
          </p>
          <h3>Causas</h3>
          <p>{{trastorno.causas}}</p>
          <h3>Recomendaciones</h3>
          <p>{{trastorno.recomendaciones}}</p>
        </div>
      </div>
    </div>
</template>

<style scoped>
.detalle-autoevaluacion__img{
  overflow: hidden;
  margin: 1.5em 0 1.5em;
}

.detalle-autoevaluacion__img img{
  display: block;
  padding: 0 5em;
  max-width: 100%;
  border-radius: .3em;
}

.test-paciente__autoevaluacion{
    background-color: var(--background-color);
    font-size: 21px;
    margin-top: 0;
    width: 100%;
    padding: 1em 0;
}
</style>

<script>
    
import axios from 'axios';

export default {
  name: 'TestA',
  created(){
    return window.scrollTo(0,0)
  },
  data(){
    return{
      sintomas: [],
      sintoma: {
        idsintoma: null,
        nombre: '',
        descripcion: ''
      },
      trastornos: [],
      copyTrastornos: [],
      trastorno: {
        idtrastorno: null,
        nombre: '',
        causas: '',
        recomendaciones: '',
        descripccion: ''
      },
      inputs:[{
          id: 1,
          for: 'name',
          label: 'Name: ',
          placeholder: 'Write ur name',
          id2: 'name'
        },
        {
          id: 2,
          for: 'surname',
          label: 'Surname: ',
          placeholder: 'Write ur surname',
          id2: 'surname'
        },
        {
          id: 3,
          for: 'fecha',
          label: 'Fecha: ',
          placeholder: '',
          id2: 'fecha'
        },
        {
          id: 4,
          for: 'tipo',
          label: 'Tipo de Test:',
          id2: 'tipo'
        }
          ]
    }
  },
  methods:{
   mostrar(){
      axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{opcion: 1})
                .then(res => {
                  this.sintomas = res.data;
                })
      axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{opcion: 4})
                .then(res => {
                    this.copyTrastornos = res.data;                
                  })          
    },
    modalShow(){
      //const btnTest = document.getElementById('btn-test')
      const modal = document.getElementById('modal')
      const paranoia = document.getElementById('Paranoia')
      const nerviosismo = document.getElementById('Nerviosismo')
      const insomnio = document.getElementById('Insomnio')
      const agitacion = document.getElementById('Agitacion')
      const temblores = document.getElementById('Temblores')
      const cansancio = document.getElementById('Cansancio')
      const malestar = document.getElementById('Malestar Abdominal')
      const nauseas = document.getElementById('Nauseas')
      const torax = document.getElementById('Molestias en el torax')
      const pesimismo = document.getElementById('Pesimismo')
      const concentracion = document.getElementById('Incapacidad para concentrarse')
      const taquicardia = document.getElementById('Taquicardia')
      const gastrointestinales = document.getElementById('Problemas Gastrointestinales')
      const timidez = document.getElementById('Timidez')
      const mania = document.getElementById('Mania o Hipomania')
      const baja = document.getElementById('Baja Autoestima')
      const alta = document.getElementById('Alta Autoestima')
      const inquietud = document.getElementById('Inquietud')
      const pesadillas = document.getElementById('Pesadillas')
      const posesiones = document.getElementById('Dificultad para renunciar posesiones')
      const morir = document.getElementById('Miedo a morir')
      const admiracion = document.getElementById('Necesidad de admiracion')
      const control = document.getElementById('Miedo de Perder el control')
      const miedo = document.getElementById('Miedo Excesivo')
      const fracaso = document.getElementById('Fracaso')
      const reglas = document.getElementById('Reglas Estrictas')
      const error = document.getElementById('Baja Tolerancia al error')
      const impulsividad = document.getElementById('Impulsividad')
      const negativismo = document.getElementById('Negativismo')
      const animo = document.getElementById('Cambios en el estado de animo')
      const depresion = document.getElementById('Depresion Mayor')
      const pensamiento = document.getElementById('Pensamiento Desorganizado')
      const atencion = document.getElementById('Falta de atencion')
      const rencor = document.getElementById('Rencor persistente')
      const vulnerabilidad = document.getElementById('Vulnerabilidad')
      const vacio = document.getElementById('Sensacion Cronica De Vacio')
      const disociativo = document.getElementById('Sintomas disociativos grave')
      const sustancia = document.getElementById('Sustancia Especifica')
     
      // axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
      //           opcion: 5,
      //           user: 2
      // }).catch(err => console.log(err))
       
          if(paranoia){
              if(paranoia.checked){
                this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 22);
                axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                    opcion: 6,
                    idtrastorno: 22
                }).catch(err => console.log(err))
              }else if(nerviosismo.checked && agitacion.checked && temblores.checked && concentracion.checked
              && taquicardia.checked && gastrointestinales.checked && pensamiento.checked){
                this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 2)
                axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                  opcion: 6,
                  idtrastorno: 2
                }).catch(err => console.log(err))
              }else if(agitacion.checked && nauseas.checked && concentracion.checked && taquicardia.checked
              && inquietud.checked && pesadillas.checked && miedo.checked){
                this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 3)
                axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                  opcion: 6,
                  idtrastorno: 3
                }).catch(err => console.log(err))
              }else if(nerviosismo.checked && agitacion.checked && temblores.checked && nauseas.checked
              && gastrointestinales.checked && inquietud.checked && pesadillas.checked && miedo.checked){
                this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 4)
                axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                  opcion: 6,
                  idtrastorno: 4
                }).catch(err => console.log(err))
              }else if(nerviosismo.checked && agitacion.checked && nauseas.checked && concentracion.checked
              && taquicardia.checked && timidez.checked && inquietud.checked && miedo.checked){
                  this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 5)
                  axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                  opcion: 6,
                  idtrastorno: 5
                }).catch(err => console.log(err))
              }else if(agitacion.checked && temblores.checked && cansancio.checked && malestar.checked
              && nauseas.checked && torax.checked && concentracion.checked && taquicardia.checked && gastrointestinales.checked
              && inquietud.checked && morir.checked && control.checked){
                this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 6)
                axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                  opcion: 6,
                  idtrastorno: 6
                }).catch(err => console.log(err))
              }else if(nerviosismo.checked && timidez.checked && baja.checked || miedo.checked
              && fracaso.checked && negativismo.checked){
                this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 7)
                axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                  opcion: 6,
                  idtrastorno: 7
                }).catch(err => console.log(err))
              }else if(nerviosismo.checked && nauseas.checked && gastrointestinales.checked && miedo.checked
              && pensamiento.checked && vulnerabilidad.checked){
                this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 8)
                axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                  opcion: 6,
                  idtrastorno: 8
                }).error(err => console.log(err))
              }else if(nerviosismo.checked && agitacion.checked && taquicardia.checked && inquietud.checked
              && fracaso.checked && reglas.checked && error.checked ){
                this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 9)
                axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                  opcion: 6,
                  idtrastorno: 9
                }).catch(err => console.log(err))
              }else if(agitacion.checked && nauseas.checked && baja.checked && inquietud.checked
              && reglas.checked){
                this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 10)
                axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                  opcion: 6,
                  idtrastorno: 10
                }).catch(err => console.log(err))
              }else if(pesimismo.checked || posesiones.checked){
                this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 11)
                axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                  opcion: 6,
                  idtrastorno: 11
                }).error(err => console.log(err))
              }else if(nerviosismo.checked && malestar.checked && nauseas.checked && pesimismo.checked
              && baja.checked && inquietud.checked && reglas.checked){
                this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 12)
                axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                  opcion: 6,
                  idtrastorno: 12
                }).catch(err => console.log(err))
              }else if(pesimismo.checked && baja.checked && inquietud.checked && miedo.checked 
              || depresion.checked && vacio.checked){
                this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 13)
                axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                  opcion: 6,
                  idtrastorno: 13
                }).catch(err => console.log(err))
              }else if(pesimismo.checked && concentracion.checked && baja.checked && morir.checked
              && control.checked && vacio.checked){
                this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 14)
                axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                  opcion: 6,
                  idtrastorno: 14
                }).catch(err => console.log(err))
              }else if(nerviosismo.checked && insomnio.checked && agitacion.checked && pensamiento.checked
              || sustancia.checked){
                this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 15)
                axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                  opcion: 6,
                  idtrastorno: 15
                }).catch(err => console.log(err))
              }else if(nerviosismo.checked && temblores.checked && cansancio.checked && nauseas.checked
              && torax.checked && concentracion.checked && inquietud.checked && morir.checked){
                this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 16)
                axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                  opcion: 6,
                  idtrastorno: 16
                }).error(err => console.log(err))
              }else if(nerviosismo.checked && agitacion.checked && temblores.checked && cansancio.checked
              && malestar.checked && nauseas.checked || torax.checked && concentracion.checked && gastrointestinales.checked
              && morir.checked && control.checked ){
                this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 17)
                axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                  opcion: 6,
                  idtrastorno: 17
                }).catch(err => console.log(err))
              }else if(atencion.checked && vulnerabilidad.checked){
                this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 23)
                axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                  opcion: 6,
                  idtrastorno: 23
                }).catch(err => console.log(err))
              }else if(paranoia.checked && vacio.checked || disociativo.checked){
                this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 24)
                axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                  opcion: 6,
                  idtrastorno: 24
                }).error(err => console.log(err))
              }else if(admiracion.checked && miedo.checked && fracaso.checked && atencion.checked){
                this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 26)
                axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                  opcion: 6,
                  idtrastorno: 26
                }).catch(err => console.log(err))
              }else if(control.checked && miedo .checked){
                this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 27)
                axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                  opcion: 6,
                  idtrastorno: 27
                }).catch(err => console.log(err))
              }else if(mania.checked && animo.checked){
                if(alta.checked && impulsividad.checked && depresion.checked
                 && pensamiento.checked && vacio.checked){
                  this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 28)
                  axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                  opcion: 6,
                  idtrastorno: 28
                }).catch(err => console.log(err))
                }else if(nerviosismo.checked && agitacion.checked && alta.checked && impulsividad.checked
                && depresion.checked && sustancia.checked){
                  this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 29)
                  axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
                  opcion: 6,
                  idtrastorno: 29
                }).catch(err => console.log(err))
                }
              }   
          }else{
            this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 1)
          }

          this.$emit('trastornos', this.trastornos)

          const datos = document.getElementById('datos')

          datos.parentElement.parentElement.style.height = '900px'
          modal.classList.add('modal--show');

      if(modal){
        modal.addEventListener('click',(e)=>{
          if(e.target.classList.contains('modal')){
            modal.classList.remove('modal--show')
            datos.parentElement.parentElement.style.height = '500px'
            const one = document.getElementById('one')
            const two = document.getElementById('two')
            const three = document.getElementById('three')
            const four = document.getElementById('four')
            const test = document.getElementById('test-autoevaluacion')
            const entrevista = document.getElementById('entrevista')
            const btnEntrevista = document.getElementById('btn-entrevista')
            const antecedentes = document.getElementById('antecedentes-form')
            const diagnostico = document.getElementById('diagnostico-previo')

            if(four){
              datos.parentElement.parentElement.style.height = '700px'
              entrevista.style.height = '550px'
              datos.classList.remove('antecedentes-input--active')
              test.classList.remove('antecedentes-input--active')
              one.classList.remove('entrevista-nav--active')
              antecedentes.classList.remove('antecedentes-input--active')
              two.classList.remove('entrevista-nav--active')
              test.classList.remove('antecedentes-input--active')
              three.classList.remove('entrevista-nav--active')
              four.classList.add('entrevista-nav--active')
              diagnostico.classList.add('antecedentes-input--active')
              btnEntrevista.style.opacity = 0
            }
      
            paranoia.checked = false
            nerviosismo.checked = false
            insomnio.checked = false
            agitacion.checked = false
            temblores.checked = false
            cansancio.checked = false
            malestar.checked = false
            nauseas.checked = false
            torax.checked = false
            pesimismo.checked = false
            concentracion.checked = false
            taquicardia.checked = false
            gastrointestinales.checked = false
            timidez.checked = false
            mania.checked = false
            baja.checked = false
            alta.checked = false
            inquietud.checked = false
            pesadillas.checked = false
            posesiones.checked = false
            morir.checked = false
            admiracion.checked = false
            control.checked = false
            miedo.checked = false
            fracaso.checked = false
            reglas.checked = false
            error.checked = false
            impulsividad.checked = false
            negativismo.checked = false
            animo.checked = false
            depresion.checked = false
            pensamiento.checked = false
            atencion.checked = false
            rencor.checked = false
            vulnerabilidad.checked = false
            vacio.checked = false
            disociativo.checked = false
            sustancia.checked = false
          }
        })
      }
    },
    showOpacity(){
          const prev = document.getElementById('prev-test')
          const next = document.getElementById('next-test')
          const images = Array.from(document.querySelectorAll('.form-container__body'))
          
          let cont = 0;

          if(prev){
            prev.addEventListener('click',()=> setClass('prev'))
          }

          if(next){
            next.addEventListener('click',()=> setClass('next'))
          }

          const setClass = (direction)=>{
              images.map(image => image.classList.remove('show-opacity'))
              setCont(direction);
              images[cont].classList.add('show-opacity')
          }

          const setCont = (direction) =>{
            if(direction =='next'){
              if(cont == images.length - 1) cont = 0
              else cont ++
          }else{
            if(cont == 0) cont = images.length - 1
            else cont --
          }
        }
    }
  },
  mounted(){
    this.$nextTick(function(){
      return this.mostrar(),this.showOpacity()
    })
  }
}
</script>