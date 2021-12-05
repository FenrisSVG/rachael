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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="nerviosismo">
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="nerviosismoNo">  
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="insomnio"> 
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="insomnioNo"> 
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="agitacion"> 
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="agitacionNo"> 
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="temblores"> 
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="tembloresNo"> 
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
                <img src="../../assets/sintomas/cansancio.jpg" alt="cansancio img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="cansancio"> 
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="cansancioNo"> 
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
                <img src="../../assets/sintomas/malestar.jpg" alt="malestar img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="malestar"> 
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="malestarNo"> 
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="nauseas">
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="nauseasNo">  
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="torax">
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="toraxNo">  
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="pesimismo"> 
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="pesimismoNo"> 
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
                <img src="../../assets/sintomas/concentracion.jpg" alcon="concentracion img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="concentracion"> 
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="concentracionNo"> 
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="taquicardia"> 
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="taquicardiaNo"> 
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="gastrointestinales"> 
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="gastrointestinalesNo"> 
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="timidez"> 
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="timidezNo"> 
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
                <img src="../../assets/sintomas/mania.jpg" alt="nerviosismo img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="mania">
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="maniaNo">  
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="baja">
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="bajaNo">  
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="alta"> 
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="altaNo"> 
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="inquietud">
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="inquietudNo">  
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="pesadillas"> 
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="pesadillasNo"> 
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
                <img src="../../assets/sintomas/posesiones.jpg" alt="temblores img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="posesiones"> 
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="posesionesNo"> 
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="morir"> 
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="morirNo"> 
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="admiracion">
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="admiracionNo">  
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
                <img src="../../assets/sintomas/control.jpg" alt="miedo img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="control">
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="controlNo">  
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="miedo"> 
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="miedoNo"> 
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="fracaso">
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="fracasoNo">  
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
                <img src="../../assets/sintomas/reglas.jpg" alt="admiracion img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="reglas">
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="reglasNo">  
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
                <img src="../../assets/sintomas/error.jpg" alt="cansancio img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="error">
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="errorNo">  
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="impulsivo"> 
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="impulsivoNo"> 
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="negativismo"> 
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="negativismoNo"> 
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
                <img src="../../assets/sintomas/animo.jpg" alt="vulnerabilidad img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="animo">
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="animoNo">  
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="depresion"> 
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="depresionNo"> 
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
                <img src="../../assets/sintomas/pensamiento.jpg" alt="vulnerabilidad img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="pensamiento"> 
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="pensamientoNo"> 
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
                <img src="../../assets/sintomas/atencion.jpg" alt="admiracion img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="atencion">
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="atencionNo">  
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="rencor">
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="rencorNo">  
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="paranoia">
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="paranoiaNo">  
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="vulnerabilidad"> 
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="vulnerabilidadNo"> 
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="vacio">
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="vacioNo">  
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
                <img src="../../assets/sintomas/disociativo.jpg" alt="negativismo img">
              </div>
              <div class="detalle-autoevaluacion__footer">
                <label for="si">Si</label>
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="disociativo"> 
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
                <input type="checkbox" name="sintomas" :id="sintoma.nombre" v-model="sustancia"> 
                <label for="no">No</label>
                <input type="checkbox" name="sintomas" v-model="sustanciaNo"> 
              </div>
            </div>
          </div>

          <div class="form-container__button">
            <input type="submit" value="Consultar" class="button" id="btn-test">
          </div>

          <div class="controls-test">
            <i class="fas fa-chevron-circle-left" id="prev-test"></i>
            <i class="fas fa-chevron-circle-right" id="next-test" @click="showOpacity"></i>
          </div>
      </form>

      <div class="cont-temporizador" id="contador">
        <h2>El test de autoevaluacion se reactivara en:</h2>
          <div class="sky">
            <div class="bloque">
              <div class="dias" id="dias">00</div>
              <p>Dias</p>
            </div>
            <div class="bloque">
                <div class="horas" id="horas">--</div>
                <p>Horas</p>
            </div>
            <div class="bloque">
                <div class="minutos" id="minutos">--</div>
                <p>Minutos</p>
            </div>
            <div class="bloque">
                <div class="segundos" id="segundos">--</div>
                <p>Segundos</p>
            </div>
          </div>
        </div>

      <div class="modal" id="modal" v-scroll-reveal="{delay: 100}">
        <h2>Se llego a la prediccion de que tenga el/los siguente(s) trastorno(s)</h2>
        <div class="modal__content" v-for="trastorno in trastornos" :key="trastorno.idtrastorno">
          <h3 id="trastorno-diagnosticado">{{trastorno.nombre}}</h3>
          <p>{{trastorno.descripcion}}
          </p>
          <h3>Causas</h3>
          <p>{{trastorno.causas}}</p>
          <h3>Recomendaciones</h3>
          <p>{{trastorno.recomendaciones}}</p>
          <hr class="linea">
          <p class="important"><strong>Importante</strong>, esto solo es un diagnostico previo, no es oficial el diagnostico y le recomendamos ir donde un experto a validar nuestra informacion</p>
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

.detalle-autoevaluacion__footer label:nth-child(3){
  margin-left: 1em;
}

.test-paciente__autoevaluacion{
    background-color: var(--background-color);
    font-size: 21px;
    margin-top: 0;
    width: 100%;
    padding: 1em 0;
}

.sky{
  display: flex;
  justify-content: center;
}

.cont-temporizador{
    position: absolute;
    top: 0px;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    transform: translate(-50%);
    background-color: var(--primary-color);
    width: 70%;
    border-radius: 5px;
    opacity: 0;
    padding: 1em 0;
    transition: opacity .5s ease-in-out;
}

.cont-temporizador h2{
  margin-top: 10px;
  color: var(--title-color)
}

.bloque{
    margin: 0 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.bloque div{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
    box-shadow: 0 0 6px 2px #727272 inset;
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    width: 100px;
    height: 70px;
    margin-bottom: 10px;
    border-radius: 5px;
}

.bloque p{
    font-size: 11px;
    color: #dedede;
    font-weight: bold;
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
      ],
      iduser: null,
      username: null,
      nerviosismo: false,
      nerviosismoNo: false,
      insomnio: false,
      insomnioNo: false,
      agitacion: false,
      agitacionNo: false,
      temblores: false,
      tembloresNo: false,
      cansancio: false,
      cansancioNo: false,
      malestar: false,
      malestarNo: false,
      nauseas: false,
      nauseasNo: false,
      torax: false,
      toraxNo: false,
      pesimismo: false,
      pesimismoNo: false,
      concentracion: false,
      concentracionNo: false,
      taquicardia: false,
      taquicardiaNo: false,
      gastrointestinales: false,
      gastrointestinalesNo: false,
      timidez: false,
      timidezNo: false,
      mania: false,
      maniaNo: false,
      baja: false,
      bajaNo: false,
      alta: false,
      altaNo: false,
      inquietud: false,
      inquietudNo: false,
      pesadillas: false,
      pesadillasNo: false,
      posesiones: false,
      posesionesNo: false,
      morir: false,
      morirNo: false,
      admiracion: false,
      admiracionNo: false,
      control: false,
      controlNo: false,
      miedo: false,
      miedoNo: false,
      fracaso: false,
      fracasoNo: false,
      reglas: false,
      reglasNo: false,
      error: false,
      errorNo: false,
      impulsivo: false,
      impulsivoNo: false,
      negativismo: false,
      negativismoNo: false,
      animo: false,
      animoNo: false,
      depresion: false,
      depresionNo: false,
      pensamiento: false,
      pensamientoNo: false,
      atencion: false,
      atencionNo: false,
      rencor: false,
      rencorNo: false,
      paranoia: false,
      paranoiaNo: false,
      vulnerabilidad: false,
      vulnerabilidadNo: false,
      vacio: false,
      vacioNo: false,
      disociativo: false,
      disociativoNo: false,
      sustancia: false,
      sustanciaNo: false
    }
  },
  methods:{
   mostrar(){
      const sintomas = async()=>{
        const res = await axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{opcion: 1})
        this.sintomas = res.data
     
        await axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{opcion: 4})
        .then(res => {
          this.copyTrastornos = res.data
          })
      }
      sintomas()
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

      const getId = async()=>{
        try{
          const res = await axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
              opcion: 10,
              username: this.username
          })
          res.data.forEach(item => this.iduser = item.iduser)

          await axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
              opcion: 5,
              user: this.iduser
          })
        }catch(err){
          console.log(err)
        }
      }
      getId()

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
          }else if(nerviosismo.checked && timidez.checked && baja.checked && miedo.checked
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
            }).catch(err => console.log(err))
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
          }else if(pesimismo.checked && posesiones.checked){
            this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 11)
            axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
              opcion: 6,
              idtrastorno: 11
            }).catch(err => console.log(err))
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
            }).catch(err => console.log(err))
          }else if(nerviosismo.checked && agitacion.checked && temblores.checked && cansancio.checked
          && malestar.checked && nauseas.checked && torax.checked && concentracion.checked && gastrointestinales.checked
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
          }else if(paranoia.checked && vacio.checked && disociativo.checked){
            this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 24)
            axios.post('http://localhost:8080/autoevaluacion/autoevaluacion.php',{
              opcion: 6,
              idtrastorno: 24
            }).catch(err => console.log(err))
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
          }else{
            this.trastornos = this.copyTrastornos.filter(item => item.idtrastorno == 1)
          }
      }
      this.$emit('trastornos', this.trastornos)
      const datos = document.getElementById('datos')
      const one = document.getElementById('one')
      const test = document.getElementById('test-autoevaluacion')
      const entrevista = document.getElementById('entrevista')
      const two = document.getElementById('two')
      const three = document.getElementById('three')
      const four = document.getElementById('four')
      const btnEntrevista = document.getElementById('btn-entrevista')
      const consultar = document.getElementById('consultar')
      const antecedentes = document.getElementById('antecedentes-form')
      const diagnostico = document.getElementById('diagnostico-previo')
      const contador = document.getElementById('contador')
      datos.parentElement.parentElement.style.height = '900px'
      modal.classList.add('modal--show');

      if(modal){
        modal.addEventListener('click',(e)=>{
          if(e.target.classList.contains('modal')){
            modal.classList.remove('modal--show')
            consultar.style.opacity = 0
            datos.parentElement.parentElement.style.height = '500px'
            contador.style.opacity = 1
            datos.classList.remove('antecedentes-input--active')
            this.temporizador()

            if(four){
                four.addEventListener('click',()=>{
                  datos.parentElement.parentElement.style.height = '700px'
                  entrevista.style.height = '550px'
                  contador.classList.remove('antecedentes-input--active')
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
                })
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
          //const paranoia = document.getElementById('Paranoia')
          const next = document.getElementById('next-test')
          const images = Array.from(document.querySelectorAll('.form-container__body'))
          
          let cont = 0;

          // if(prev){
          //   prev.addEventListener('click',()=> setClass('prev'))
          // }

          if(next){
            next.addEventListener('click',()=> setClass('next'))
          }

          const setClass = (direction)=>{
              try{
                images.map(image => image.classList.remove('show-opacity'))
                setCont(direction)
                images[cont].classList.add('show-opacity')
              }catch(err){
                console.log(err)
              }
          }

          const setCont = (direction) =>{
            if(direction =='next'){
              if(cont == images.length - 1) cont = 0
              
              if(this.nerviosismo){
                cont = cont + 1
                if(this.insomnio){
                  cont = cont + 1
                  if(this.agitacion){
                    cont = cont + 28
                    if(this.pensamiento){
                      cont = cont + 7
                    }
                  }
                }else if(this.insomnioNo){
                  cont = cont + 1
                  if(this.agitacion){
                    cont = cont + 1
                    if(this.temblores){
                      cont = cont + 1
                      if(this.cansancio){
                        cont = cont + 1
                        if(this.malestar){
                          cont = cont + 1
                          if(this.nauseas){
                            cont = cont + 1
                            if(this.torax){
                              cont = cont + 2
                              if(this.concentracion){
                                cont = cont + 2
                                if(this.gastrointestinales){
                                  cont = cont + 8
                                  if(this.morir){
                                    cont = cont + 2
                                  }
                                }
                              }
                            }
                          }
                        }
                      }else if(this.cansancioNo){
                        cont = cont + 2
                          if(this.nauseas){
                            cont = cont + 5
                            if(this.gastrointestinales){
                              cont = cont + 5
                              if(this.inquietud){
                                cont = cont + 1
                                if(this.pesadillas){
                                  cont = cont + 5
                                }
                              }
                            }
                          }else if(this.nauseasNo){
                            cont = cont + 3
                            if(this.concentracion){
                              cont = cont + 1
                              if(this.taquicardia){
                                cont = cont + 1
                                if(this.gastrointestinales){
                                  cont = cont + 19
                                }
                              }
                            }
                          }
                      }
                    }else if(this.tembloresNo){
                      cont = cont + 3
                      if(this.nauseas){
                        cont = cont + 3
                        if(this.concentracion){
                          cont = cont + 1
                          if(this.taquicardia){
                            cont = cont + 2
                            if(this.timidez){
                              cont = cont + 4
                              if(this.inquietud){
                                cont = cont + 6
                              }
                            }
                          }
                        }
                      }else if(this.nauseasNo){
                        cont = cont + 7
                        if(this.mania){
                          cont = cont + 2
                          if(this.alta){
                            cont = cont + 11
                            if(this.impulsivo){
                              cont = cont + 2
                              if(this.animo){
                                cont = cont + 4
                                if(this.rencor){
                                  cont = cont + 5
                                }
                              }
                            }
                          }else if(this.altaNo){
                            cont = cont + 13
                            if(this.animo){
                               cont = cont + 4
                               if(this.rencor){
                                 cont = cont + 5
                               }
                            }
                          }
                        }else if(this.maniaNo){
                          cont = cont + 3
                          if(this.inquietud){
                            cont = cont + 6
                            if(this.miedo){
                              cont = cont + 8
                            }
                          }
                        }
                      }
                    }
                  }else if(this.agitacionNo){
                    cont = cont + 1
                    if(this.temblores){
                      cont = cont + 1
                      if(this.cansancio){
                        cont = cont + 2
                        if(this.nauseas){
                          cont = cont + 1
                          if(this.torax){
                            cont = cont + 2
                            if(this.concentracion){
                              cont = cont + 7
                              if(this.inquietud){
                                cont = cont + 3
                              }
                            }
                          }
                        }
                      }
                    }else if(this.tembloresNo){
                      cont = cont + 2
                      if(this.malestar){
                        cont = cont + 1
                        if(this.nauseas){
                          cont = cont + 2
                          if(this.pesimismo){
                            cont = cont + 6
                            if(this.baja){
                              cont = cont + 2
                              if(this.inquietud){
                                cont = cont + 8
                              }
                            }
                          }
                        }
                      }else if(this.malestarNo){
                        cont = cont + 1
                        if(this.nauseas){
                          cont = cont + 5
                          if(this.gastrointestinales){
                            cont = cont + 11
                            if(this.miedo){
                              cont = cont + 8
                              if(this.pensamiento){
                                cont = cont + 4
                              }
                            }
                          }
                        }if(this.nauseasNo){
                          cont = cont + 6
                          if(this.timidez){
                            cont = cont + 2
                            if(this.baja){
                              cont = cont + 8
                              if(this.miedo){
                                cont = cont + 1
                                if(this.fracaso){
                                  cont = cont + 4
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }else if(this.nerviosismoNo){
                cont = cont + 2
                if(this.agitacion){
                  cont = cont + 1
                  if(this.temblores){
                    cont = cont + 1
                    if(this.cansancio){
                      cont = cont + 1
                      if(this.malestar){
                        cont = cont + 1
                        if(this.nauseas){
                          cont = cont + 1
                          if(this.torax){
                            cont = cont + 2
                            if(this.concentracion){
                              cont = cont + 1
                              if(this.taquicardia){
                                cont = cont + 1
                                if(this.gastrointestinales){
                                  cont = cont + 5
                                  if(this.inquietud){
                                    cont = cont + 3
                                    if(this.morir){
                                      cont = cont + 2
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }else if(this.malestarNo){
                        cont = cont + 1
                        if(this.nauseas){
                          cont = cont + 1
                            if(this.torax){
                              cont = cont + 2
                              if(this.concentracion){
                                cont = cont + 1
                                if(this.taquicardia){
                                  cont = cont + 1
                                if(this.gastrointestinales){
                                  cont = cont + 5
                                  if(this.inquietud){
                                    cont = cont + 3
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }else if(this.tembloresNo){
                    cont = cont + 3
                    if(this.nauseas){
                      cont = cont + 3
                      if(this.concentracion){
                        cont = cont + 1
                        if(this.taquicardia){
                          cont = cont + 6
                          if(this.inquietud){
                            cont = cont + 1
                            if(this.pesadillas){
                              cont = cont + 5                             
                            }
                          }
                        }
                      }else if(this.concentracionNo){
                        cont = cont + 5
                        if(this.baja){
                          cont = cont + 2
                          if(this.inquietud){
                            cont = cont + 8
                          }
                        }
                      }
                    }else if(this.nauseasNo){
                      cont = cont + 3
                      if(this.concentracion){
                        cont = cont + 1
                        if(this.taquicardia){
                          cont = cont + 1
                          if(this.gastrointestinales){
                            cont = cont + 5
                            if(this.inquietud){
                              cont = cont + 3
                              if(this.morir){
                                cont = cont + 2
                                if(this.control){
                                  cont = cont + 1
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }

              if(this.nerviosismoNo && this.agitacionNo){
                cont = cont + 4
                if(this.nauseasNo){
                  cont = cont + 2
                  if(this.pesimismo){
                    cont = cont + 1
                    if(this.concentracion){
                      cont = cont + 5
                      if(this.baja){
                        cont = cont + 5
                        if(this.morir){
                          cont = cont + 2
                          if(this.control){
                            cont = cont + 14
                          }
                        }
                      }
                    }else if(this.concentracionNo){
                      cont = cont + 5
                      if(this.baja){
                        cont = cont + 2
                        if(this.inquietud){
                          cont = cont + 6
                          if(this.miedo){
                            cont = cont + 7
                            if(this.depresion){
                              cont = cont + 6
                            }
                          }
                        }
                      }else if(this.bajaNo){
                        cont = cont + 4
                      }
                    }
                  }else if(this.pesimismoNo){
                    cont = cont + 5
                    if(this.mania){
                      cont = cont + 2
                      if(this.alta){
                        cont = cont + 11
                        if(this.impulsivo){
                          cont = cont + 2
                          if(this.animo){
                            cont = cont + 4
                            if(this.rencor){
                              cont = cont + 1
                              if(this.paranoia){
                                cont = cont + 2
                              }
                            }
                          }
                        }
                      }else if(this.altaNo){
                        cont = cont + 13
                        if(this.animo){
                          cont = cont + 2
                          if(this.pensamiento){
                            cont = cont + 2  
                          }
                        }
                      }
                    }else if(this.maniaNo){
                      cont = cont + 7
                      if(this.admiracion){
                        cont = cont + 2
                        if(this.miedo){
                          cont = cont + 1
                          if(this.fracaso){
                            cont = cont + 8
                          }
                        }
                      }else if(this.admiracionNo){
                        cont = cont + 1
                        if(this.control){
                          cont = cont + 1
                        }else if(this.controlNo){
                          cont = cont + 10
                          if(this.atencion){
                            cont = cont + 3
                          }else if(this.atencionNo){
                            cont = cont + 1
                            if(this.rencorNo){
                              cont = cont + 1
                              if(this.paranoia){
                                cont = cont + 2
                                if(this.vacio){
                                  cont = cont + 1
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }  
          }
    },
    getData(){
      const username = document.getElementById('username-login')
      if(username){
        if(username.innerHTML !== ''){
            this.username = username.innerHTML;
        }
      }
    },
    temporizador(){
        const segundo = document.getElementById('segundos')
        const minuto = document.getElementById('minutos')
        const hora = document.getElementById('horas')
        const consultar = document.getElementById('consultar')
        const contador = document.getElementById('contador')
        const datos = document.getElementById('datos')
        let horas = 0
        let minutos = 0
        let segundos = 30
        const cargarSegundo = ()=>{
            let txtSegundos
            if(segundos < 0){
                segundos = 59
            }
            if(segundos < 10){
                txtSegundos = `0${segundos}`
            }else{
                txtSegundos = segundos
            }

            if(segundo){
              segundo.innerHTML = txtSegundos;
            }
            segundos--

            cargarMinutos(segundos);
        }

        const cargarMinutos = (segundos)=>{
            let txtMinutos

            if(segundos == -1 && minutos !== 0){
                setTimeout(() =>{
                    minutos--
                },500)
            }else if(segundos == -1 && minutos == 0){
                setTimeout(() =>{
                    minutos = 59
                },500)
            }
            //Mostrar Minutos en pantalla
            if(minutos < 10){
                txtMinutos = `0${minutos}`
            }else{
                txtMinutos = minutos;
            }
            if(minuto){
              minuto.innerHTML = txtMinutos
            }
            cargarHoras(segundos,minutos)
      }

      const cargarHoras = (segundos,minutos)=>{
          let txtHoras;

        if(segundos == -1 && minutos == 0 && horas !== 0){
            setTimeout(() =>{
                horas--;
            },500)
        }else if(segundos == -1 && minutos == 0 && horas == 0){
            setTimeout(() =>{
                contador.style.opacity = 0
                datos.parentElement.parentElement.style.height = '1000px'
                consultar.style.opacity = 1
                setInterval(cargarSegundo,1000)
            },500)
        }
        //Mostrar Horas en pantalla
        if(horas < 10){
            txtHoras = `0${horas}`;
        }else{
            txtHoras = horas;
        }
        if(hora){
          hora.innerHTML = txtHoras
        }
      }
      setInterval(cargarSegundo,1000)
    }
  },
  mounted(){
    this.$nextTick(()=>{
      return this.mostrar()
    })
  },
  beforeMount(){
    return this.getData()
  }
}
</script>