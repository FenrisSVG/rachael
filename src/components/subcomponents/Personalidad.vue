<template>
	<div class="personalidad">
		<Information
			test="Test de Personalidad"
			description="Este tipo de prueba tiene la finalidad de que segun las respuestas honestas del usuario, se determina que tipo de personalidad es la que tiene."
			:usuario="nombre"
			:apellido="apellido"
			:fecha="fecha"
			class="contact-test contact-test--personality"
		/>

		<header class="personalidad-header">
			<h2 class="personalidad__title">Test de <span>Personalidad</span>.</h2>
			<p class="personalidad__text">Responde las siguientes preguntas.</p>
		</header>
		<section class="personalidad-body">
			<form
				action="/"
				class="personalidad-form"
				autocomplete="off"
				@submit.prevent="getPersonality"
				id="form-personality"
			>
				<div class="personalidad-container">
					<p class="personalidad-container__text">1. Que te gustaria...</p>
					<div class="personalidad-input">
						<label for="amor" class="personalidad-input__label"
							>a. Encontrar el amor de pelicula</label
						>
						<input
							type="checkbox"
							name="amor"
							class="personalidad__input"
							data-response="a"
							v-model="oneYes"
							@change="oneNo = false"
						/>
					</div>
					<div class="personalidad-input">
						<label for="amor" class="personalidad-input__label"
							>b. Ganar 50 Millones de Dolares</label
						>
						<input
							type="checkbox"
							name="amor"
							class="personalidad__input"
							data-response="b"
							v-model="oneNo"
							@change="oneYes = false"
						/>
					</div>
				</div>
				<div class="personalidad-container">
					<p class="personalidad-container__text">2. Preferirias...</p>
					<div class="personalidad-input">
						<label for="amor" class="personalidad-input__label"
							>a. Nunca poder tener acceso a internet.</label
						>
						<input
							type="checkbox"
							name="amor"
							class="personalidad__input"
							data-response="a"
							v-model="twoYes"
							@change="twoNo = false"
						/>
					</div>
					<div class="personalidad-input">
						<label for="amor" class="personalidad-input__label"
							>b. Nunca tener ningun amor.</label
						>
						<input
							type="checkbox"
							name="amor"
							class="personalidad__input"
							data-response="b"
							v-model="twoNo"
							@change="twoYes = false"
						/>
					</div>
				</div>
				<div class="personalidad-container">
					<p class="personalidad-container__text">3. Cual eligirias...</p>
					<div class="personalidad-input">
						<label for="amor" class="personalidad-input__label"
							>a. Legalmente cambiar tu nombre a Hitler.</label
						>
						<input
							type="checkbox"
							name="amor"
							class="personalidad__input"
							data-response="a"
							v-model="threeYes"
							@change="threeNo = false"
						/>
					</div>
					<div class="personalidad-input">
						<label for="amor" class="personalidad-input__label"
							>b. No poder comer comida chatarra.</label
						>
						<input
							type="checkbox"
							name="amor"
							class="personalidad__input"
							data-response="b"
							v-model="threeNo"
							@change="threeYes = false"
						/>
					</div>
				</div>
				<div class="personalidad-container">
					<p class="personalidad-container__text">4. Decide una</p>
					<div class="personalidad-input">
						<label for="amor" class="personalidad-input__label"
							>a. Sacrificar tu vida para que se salve el resto.</label
						>
						<input
							type="checkbox"
							name="amor"
							class="personalidad__input"
							data-response="a"
							v-model="fourYes"
							@change="fourNo = false"
						/>
					</div>
					<div class="personalidad-input">
						<label for="amor" class="personalidad-input__label"
							>b. Sacrificar a todos para TU poder salvarte</label
						>
						<input
							type="checkbox"
							name="amor"
							class="personalidad__input"
							data-response="b"
							v-model="fourNo"
							@change="fourYes = false"
						/>
					</div>
				</div>
				<div class="personalidad-container">
					<p class="personalidad-container__text">5. Escoge una</p>
					<div class="personalidad-input">
						<label for="amor" class="personalidad-input__label"
							>a. Estar deprimido toda la vida</label
						>
						<input
							type="checkbox"
							name="amor"
							class="personalidad__input"
							data-response="a"
						/>
					</div>
					<div class="personalidad-input">
						<label for="amor" class="personalidad-input__label"
							>b. Sacrificar a 5 perritos</label
						>
						<input
							type="checkbox"
							name="amor"
							class="personalidad__input"
							data-response="b"
						/>
					</div>
				</div>
				<div class="personalidad-container">
					<p class="personalidad-container__text">6. Que te gustaria...</p>
					<div class="personalidad-input">
						<label for="amor" class="personalidad-input__label"
							>a. Un año sin ver Netflix ni ningun otro servicio de
							streaming</label
						>
						<input
							type="checkbox"
							name="amor"
							class="personalidad__input"
							data-response="a"
						/>
					</div>
					<div class="personalidad-input">
						<label for="amor" class="personalidad-input__label"
							>b. Alimentarte con mayonesa todo el año.</label
						>
						<input
							type="checkbox"
							name="amor"
							class="personalidad__input"
							data-response="b"
						/>
					</div>
				</div>
				<div class="personalidad-container">
					<p class="personalidad-container__text">7. Que preferirias...</p>
					<div class="personalidad-input">
						<label for="amor" class="personalidad-input__label"
							>a. Saber cuando te vas a morir.</label
						>
						<input
							type="checkbox"
							name="amor"
							class="personalidad__input"
							data-response="a"
							v-model="sevenYes"
							@change="sevenNo = false"
						/>
					</div>
					<div class="personalidad-input">
						<label for="amor" class="personalidad-input__label"
							>b. Saber como te vas a morir.</label
						>
						<input
							type="checkbox"
							name="amor"
							class="personalidad__input"
							data-response="b"
							v-model="sevenNo"
							@change="sevenYes = false"
						/>
					</div>
				</div>
				<div class="personalidad-container">
					<p class="personalidad-container__text">8. Que escogerias...</p>
					<div class="personalidad-input">
						<label for="amor" class="personalidad-input__label"
							>a. Poder predecir el futuro.</label
						>
						<input
							type="checkbox"
							name="amor"
							class="personalidad__input"
							data-response="a"
						/>
					</div>
					<div class="personalidad-input">
						<label for="amor" class="personalidad-input__label"
							>b. Viajar en una capsula de tiempo.</label
						>
						<input
							type="checkbox"
							name="amor"
							class="personalidad__input"
							data-response="b"
						/>
					</div>
				</div>
				<div class="personalidad-container">
					<p class="personalidad-container__text">9. Que te gustaria...</p>
					<div class="personalidad-input">
						<label for="amor" class="personalidad-input__label"
							>a. Quedarte sin olfato</label
						>
						<input
							type="checkbox"
							name="amor"
							class="personalidad__input"
							data-response="a"
							v-model="nineYes"
							@change="nineNo = false"
						/>
					</div>
					<div class="personalidad-input">
						<label for="amor" class="personalidad-input__label"
							>b. Oler algo asqueroso constante toda la vida.</label
						>
						<input
							type="checkbox"
							name="amor"
							class="personalidad__input"
							data-response="b"
							v-model="nineNo"
							@change="nineYes = false"
						/>
					</div>
				</div>
				<div class="personalidad-button">
					<input type="submit" value="Enviar" class="personalidad-submit" />
				</div>
			</form>
		</section>

		<Modal
			id="modal-personalidad"
			:personalidad="this.personalidad"
			contentClass="modal-content--personality"
			trastornoClass="personalidad-diagnosticada"
		/>
		<Footer />
	</div>
</template>

<style scoped>
.contact-test--personality{
	width: 60%;
}
</style>

<script>
import axios from "axios";
import Modal from "./Modal.vue";
import Information from "./Information.vue";
import Footer from "../Footer.vue";

export default {
	name: "Personalidad",
	components: {
		Modal,
		Information,
		Footer
	},
	data() {
		return {
			fecha: null,
			nombre: "Por favor, primero debe de iniciar sesion" ?? null,
			apellido: "Por favor, primero debe iniciar sesion de su cuenta" ?? null,
			personalidad: null ?? "",
			username: null,
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
			nineYes: false,
			nineNo: false,
		};
	},
	methods: {
		getPersonality() {
			const response = document.querySelectorAll(".personalidad__input");
			const modal = document.getElementById("modal-personalidad");
			let aResponse = 0;
			let bResponse = 0;

			const PERSONALITY_aRESPONSE = {
				1: "Eres una persona egoista",
				2: "Eres una persona egoista",
				3: "Eres una persona egoista",
				4: "Poco egoista pero te preocupas por los demás.",
				5: "Poco egoista pero te preocupas por los demás.",
				6: "Poco egoista pero te preocupas por los demás.",
				7: "Eres un amor de persona.",
				8: "Eres un amor de persona.",
				9: "Eres un amor de persona.",
			};

			const DEFAULT_RESPONSE =
				"No hemos tenido suficiente informacion para el diagnostico";

			response.forEach((item) => {
				if (item.checked) {
					if (item.dataset.response == "a") aResponse++;
					else bResponse++;
				}
			});

			const diagnostic = PERSONALITY_aRESPONSE[aResponse] || DEFAULT_RESPONSE;
			this.personalidad = diagnostic || bResponse;

			modal.classList.add("modal--show");
			this.limpiarDatos()
		},
		modalShow(e) {
			if (e.target.classList.contains("modal")) {
				e.target.classList.remove("modal--show");
				
			}
		},
		limpiarDatos(){
			const inputs = document.querySelectorAll('.personalidad__input')

			inputs.forEach(input => input.checked = false)
		},
		obtenerFecha() {
			this.fecha = new Date().toLocaleDateString('es-ES',{
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			});

			const username = document.getElementById("username-login");
			// const login = document.getElementById('login-link')

			// if(login.innerHTML !== 'Login'){
			const response = async () => {
				if (username) {
					const res = await axios.post(
						"http://localhost:8080/autoevaluacion/autoevaluacion.php",
						{ opcion: 10, username: username.innerHTML }
					);

					if (res.data) {
						console.log(res.data);
						res.data.forEach((item) => {
							this.nombre = item.nombre;
							this.apellido = item.apellido;
						});
					}
				}
			};
			response();
			// }
		},
		getData(){ 
			const username = document.getElementById("username-login");
			if (username) {
				if (username.innerHTML !== "") {
					this.username = username.innerHTML;
				}
			}
		},
	},
	mounted() {
		this.$nextTick(() => {
			return this.obtenerFecha();
		});
	},
	created(){
		return window.scrollTo(0, 0);
	},
	beforeMount() {
		return this.getData();
	},
};
</script>
