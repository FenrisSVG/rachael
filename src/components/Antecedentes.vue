<template>
	<div class="antecedentes">
		<header class="antecedentes-header" v-scroll-reveal="{ delay: 500 }">
			<div class="wave2"></div>
			<div class="antecedentes-header__text">
				<h2 class="antecedentes-header__title">
					Realiza tu
					<span class="antecedentes-header__title-color"> Entrevista </span>
				</h2>
				<p class="antecedentes-header__description">
					Entrevista de autoevaluacion para diagnostico del trastorno mental.
				</p>
				<div class="antecedentes-header__button">
					<!-- <a href="#work"><span>¿Que puede hacer?</span></a> -->
					<a href="#antecedentes" class="antecedentes-header__link"
						><span>Ir a la Entrevista</span></a
					>
				</div>
			</div>
			<div class="antecedentes-header__illustration">
				<img
					src="../assets/svg/interview.svg"
					alt="illustration two people in a interview psicology"
					class="antecedentes-header__img"
					loading="lazy"
				/>
			</div>
		</header>

		<div class="antecedentes-card" v-scroll-reveal="{ delay: 500 }">
			<h2
				v-scroll-reveal="{ delay: 500, scale: 2 }"
				class="antecedentes-card__title"
			>
				Categorizacion de las preguntas del Diagnostico.
			</h2>
			<div class="services" v-scroll-reveal="{ delay: 500 }">
				<svg>
					<rect></rect>
				</svg>
				<header class="antecedentes-card__header">
					<img
						src="../assets/desktop/Sexo.jpg"
						alt="icons services psicology"
						loading="lazy"
						class="antecedentes-card__header-image"
					/>
				</header>
				<footer class="antecedentes-card__text">
					<h6 class="antecedentes-card__text-title">
						<span>1. Datos Personales</span>
					</h6>
					<p class="antecedentes-card-text-description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
						quidem.
					</p>
				</footer>
			</div>
			<div class="services" v-scroll-reveal="{ delay: 600 }">
				<svg>
					<rect></rect>
				</svg>
				<header class="antecedentes-card__header">
					<img src="../assets/desktop/autoestima.jpg" alt="" loading="lazy" />
				</header>
				<footer class="antecedentes-card__text">
					<h6><span>2. Antecedentes</span></h6>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
						quidem.
					</p>
				</footer>
			</div>
			<div class="services" v-scroll-reveal="{ delay: 700 }">
				<svg>
					<rect></rect>
				</svg>
				<header class="antecedentes-card__header">
					<img src="../assets/desktop/estres.jpg" alt="" loading="lazy" />
				</header>
				<footer class="antecedentes-card__text">
					<h6><span>3. Diagnostico Previo</span></h6>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
						quidem.
					</p>
				</footer>
			</div>
			<div class="services" v-scroll-reveal="{ delay: 800 }">
				<svg>
					<rect></rect>
				</svg>
				<header class="antecedentes-card__header">
					<img src="../assets/desktop/desarollo.jpg" alt="" loading="lazy" />
				</header>
				<footer class="antecedentes-card__text">
					<h6><span>4. Test de Autoevaluacion</span></h6>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
						quidem.
					</p>
				</footer>
			</div>
			<div class="services" v-scroll-reveal="{ delay: 900 }">
				<svg>
					<rect></rect>
				</svg>
				<header class="antecedentes-card__header">
					<img src="../assets/desktop/desarollo.jpg" alt="" loading="lazy" />
				</header>
				<footer class="antecedentes-card__text">
					<h6><span>5. Papel Completo</span></h6>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
						quidem.
					</p>
				</footer>
			</div>
		</div>

		<div
			class="entrevista"
			v-scroll-reveal="{ delay: 500 }"
			id="antecedentes"
			v-if="isLogin"
		>
			<h2 class="entrevista-title">Entrevista al paciente</h2>
			<div class="entrevista-nav" id="entrevista-nav">
				<span class="entrevista-nav--active" id="one">1</span>
				<span id="two">2</span>
				<span id="four">4</span>
				<span id="five">5</span>
			</div>
			<form
				@submit.prevent="insertData"
				class="entrevista-form"
				autocomplete="off"
				id="entrevista"
			>
				<div class="datos antecedentes-input--active" id="datos">
					<h2 class="datos-title">I. Datos Personales</h2>
					<div class="datos-personales">
						<label for="referencia">Tipo de Referencia: </label>
						<input
							class="datos-personales__input"
							type="checkbox"
							name="referencia"
						/>
						<label for="urgente">Urgente</label>
						<input
							class="datos-personales__input"
							type="checkbox"
							name="urgente"
						/>
						<label for="no-urgente">No Urgente</label>
					</div>
					<div class="datos-personales">
						<label for="expediente">Expediente</label>
						<input
							class="datos-personales__input default"
							type="text"
							name="expediente"
							id="idpaciente"
						/>
					</div>
					<div class="datos-personales">
						<label for="nombre">Nombre:</label>
						<input
							class="datos-personales__input default"
							type="text"
							name="nombre"
							placeholder="Escriba su nombre..."
							required
							id="name"
						/>
						<label for="surname" class="datos-personales__surname"
							>Apellido:</label
						>
						<input
							class="datos-personales__input default"
							type="text"
							name="surname"
							required
							placeholder="Escriba su apellido..."
							id="surname"
						/>
					</div>
					<div class="datos-personales">
						<label for="fecha">Fecha:</label>
						<input
							class="datos-personales__input default"
							type="text"
							name="fecha"
							id="fecha-antecedente"
						/>
					</div>
					<div class="datos-personales">
						<p>Genero:</p>
						<label for="masculino">Masculino</label>
						<input
							class="datos-personales__input"
							type="checkbox"
							name="masculino"
							id="masculino"
						/>
						<label for="femenino">Femenino</label>
						<input
							class="datos-personales__input"
							type="checkbox"
							name="femenino"
							id="femenino"
						/>
					</div>
				</div>
				<div class="datos" id="antecedentes-form">
					<h2 class="antecedentes-title">II. Antecedentes</h2>
					<div class="antecedentes-input">
						<label for="motivo">1. ¿Motivo de referencia de la consulta?</label>
						<textarea
							name="motivo"
							cols="30"
							rows="5"
							placeholder="Escriba su motivo de referencia..."
							id="motivo"
						></textarea>
						<div class="referencia">
							<label for="nivel-intensidad"
								>¿Cual es el grado de intensidad en el que se manifiesta?</label
							>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="alta"
							/>
							<label for="alta">Alta</label>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="Moderada"
							/>
							<label for="Moderada">Moderada</label>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="Baja"
							/>
							<label for="alta">Baja</label>
						</div>
					</div>
					<div class="antecedentes-input">
						<h6>
							2. ¿Ha recibido un tratamiento psico-terapeutico con anterioridad?
						</h6>
						<input
							class="antecedentes-input__input"
							type="checkbox"
							name="si"
							id="tratamiento"
						/>
						<label for="si">Si</label>
						<input
							class="antecedentes-input__input"
							type="checkbox"
							name="no"
							id="tratamiento-no"
						/>
						<label for="no">No</label>
					</div>
					<div class="antecedentes-input">
						<h6>3. Habitos toxicos</h6>
						<div class="habitos">
							<h6>a. Alimenticios</h6>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="sigue-dieta"
								id="dieta"
							/>
							<label for="sigue-dieta">Sigue Dieta</label>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="Moderada"
								id="moderada"
							/>
							<label for="moderada">Moderada</label>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="estricta"
								id="estricta"
							/>
							<label for="estricta">Estricta</label>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="vegano"
								id="vegano"
							/>
							<label for="Vegano">Vegano</label>
						</div>
						<div class="consumo">
							<h6>b. Consumo</h6>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="Alcohol"
								id="alcohol"
							/>
							<label for="Alcohol">Alcohol</label>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="te"
								id="te"
							/>
							<label for="te">Te</label>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="Cafe"
								id="cafe"
							/>
							<label for="Cafe">Cafe</label>
						</div>
						<div class="medicamente">
							<h6>c. Medicamentos</h6>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="drogas"
								id="drogas"
							/>
							<label for="drogas">Rechazo a Drogas</label>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="hipersensibilidad"
								id="hipersensibilidad"
							/>
							<label for="hipersensibilidad">Hipersensibilidad</label>
						</div>
					</div>
					<div class="antecedentes-input">
						<h6>4. Familiares</h6>
						<div class="familiares">
							<h6>a. Adolescencia</h6>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="bullying"
								id="bullying"
							/>
							<label for="bullying">Sufria Bullying</label>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="muerte"
								id="muerte"
							/>
							<label for="muerte">Muerte de Familiar</label>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="padres-separados"
								id="padres"
							/>
							<label for="padres-separados">Padres Separados</label>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="ciudad"
								id="ciudad"
							/>
							<label for="ciudad">Cambio de ciudad constante</label>
						</div>
						<div class="sexo">
							<h6>b. Sexooooooooooooooo</h6>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="activo"
								id="activo"
							/>
							<label for="activo">Activo</label>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="virgen"
								id="virgen"
							/>
							<label for="virgen">Virgen</label>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="ocasional"
								id="ocasional"
							/>
							<label for="ocasional">Ocasional</label>
						</div>
						<div class="familia">
							<h6>c. Clasificas la relacion con tu familia como</h6>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="disfuncional"
								id="disfuncional"
							/>
							<label for="disfuncional">Disfuncional</label>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="tranquila"
								id="tranquila"
							/>
							<label for="tranquila">Tranquila</label>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="confianza"
								id="confianza"
							/>
							<label for="confianza">De confianza</label>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="separados"
								id="separados"
							/>
							<label for="separados">Padres Separados</label>
						</div>
					</div>
					<div class="antecedentes-input">
						<h6>5. Traumas</h6>
						<div class="traumas">
							<h6>
								a. ¿Consideras un acontecimiento de tu vida como traumatico?
							</h6>
							<label for="si">Si</label>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="si"
								id="traumas"
								v-on:change="showTraumas"
							/>
							<label for="no">No</label>
							<input
								class="antecedentes-input__input"
								type="checkbox"
								name="no"
								id="traumas-no"
								v-on:change="traumasChecked"
							/>
						</div>
						<div id="traumas-show" class="traumas-show">
							<div class="traumas-familia">
								<h6>b. ¿El suceso traumatico le ha ocurrido a un familiar?</h6>
								<label for="si">Si</label>
								<input
									class="antecedentes-input__input"
									type="checkbox"
									name="si"
								/>
								<label for="no">No</label>
								<input
									class="antecedentes-input__input"
									type="checkbox"
									name="no"
								/>
							</div>
							<div class="traumas-exposicion">
								<h6>
									c. ¿Se siente expuesto en repetidas ocasiones al trauma?
								</h6>
								<label for="si">Si</label>
								<input
									class="antecedentes-input__input"
									type="checkbox"
									name="si"
								/>
								<label for="no">No</label>
								<input
									class="antecedentes-input__input"
									type="checkbox"
									name="no"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="entrevista-submit" id="btn-entrevista">
					<input
						class="entrevista-submit__input"
						type="submit"
						value="Enviar Datos"
						@click="insertData"
					/>
				</div>
			</form>

			<div class="antecedentes-yes" id="not-login">
				<h2 class="antecedentes-yes__title">
					Querido usuario parece ser que usted ya completo los pasos de ingresar
					sus datos generales y ya nos envio previamente los antecedentes, por
					favor eliga la opcion que quiere realizar.
				</h2>
				<router-link to="/diagnostico/historial" class="antecedentes-yes__link"
					>Ver Historial.</router-link
				>
				<router-link
					to="/test/autoevaluacion/test-autoevaluacion"
					class="antecedentes-yes__link"
					>Ir al Test de Autoevaluacion</router-link
				>
			</div>
		</div>

		<div v-else class="not-login">
			<h2 class="not-login__title">Vaya! Parece que no has iniciado sesion.</h2>
			<span class="not-login__span">Login</span>
			<button @click="redirectLogin" class="not-login__router">Login</button>
		</div>

		<div class="diagnostico-previo" id="diagnostico-previo">
			<h2>IV. Diagnostico Previo.</h2>
			<div class="diagnostico-previo__text">
				<p class="datos-paciente">Datos del paciente</p>
				<p>Paciente:</p>
				<p class="datos-pacientes">{{ nombrepaciente }} {{ apellido }}</p>
				<p>Genero:</p>
				<p class="datos-pacientes" v-if="sexo == 1">Femenino</p>
				<p class="datos-pacientes" v-else>Masculino</p>
				<p>El motivo de su consulta es:</p>
				<p>{{ motivo }}</p>
			</div>
			<div class="for-trastorno" v-for="item in trastorno" :key="item.id">
				<p>
					Segun los datos que nos ha proporcionado y la realizacion con
					anterioridad del test de autoevaluacion se predijo que usted tiene un
					trastorno mental de <span>{{ item.nombre }}</span>
				</p>
				<p>{{ item.descripcion }}</p>
			</div>
		</div>
		<Important />
		<Bot />
		<Footer />
	</div>
</template>

<style scoped>
.not-login__router {
	display: inline-block;
	margin-top: 0.5em;
	padding: 0.8em 1.6em;
	text-decoration: none;
	letter-spacing: 1px;
	border-radius: 0.2em;
	mask: url(https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png);
	mask-size: 2400% 100%;
	color: #fff;
	border: none;
	background-color: var(--danger-color);
	animation: ani2 0.7s steps(22) forwards;
	z-index: 10;
}

@keyframes ani {
	from {
		mask-position: 0 0;
	}
	to {
		mask-position: 100% 0;
	}
}

@keyframes ani2 {
	from {
		mask-position: 100% 0;
	}
	to {
		mask-position: 0 0;
	}
}
.diagnostico-previo__text > * {
	margin: 0.8em 0;
}
.diagnostico-previo p span {
	letter-spacing: 0.5px;
	font-size: 18px;
	color: var(--danger-color);
}
.wave2 {
	position: absolute;
	top: 325px;
	width: 6000px;
	height: 100%;
	background-image: url("../assets/svg/wd1.svg");
	background-position: bottom;
	animation: wave2 7s linear infinite;
}

@keyframes wave2 {
	0% {
		margin-left: 0;
	}
	100% {
		margin-left: -1800px;
	}
}
.antecedentes-card__text h6 {
	font-size: 14px;
	margin-top: 14px;
	margin-bottom: 0;
	color: var(--title-color);
}
.antecedentes-card__text p {
	color: var(--text-color);
	padding: 0.5em;
	font-size: 13px;
}

svg,
rect {
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	fill: transparent;
}

rect {
	stroke: var(--secondary-color);
	stroke-width: 4;
	stroke-dasharray: 400;
	animation: animate 4s linear infinite;
}
@keyframes animate {
	0% {
		stroke-dashoffset: 800;
	}
	100% {
		stroke-dashoffset: 0;
	}
}
</style>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import Bot from "../components/inxdex.vue";
import Footer from "../components/Footer.vue";
import Important from "../components/Important.vue";
// import Autoevaluacion from '../components/subcomponents/TestA.vue'

export default {
	name: "Antecedentes",
	components: {
		Bot,
		Important,
		Footer,
	},
	data() {
		return {
			isLogin: false,
			antecedentes: true,
			user: "",
			iduser: "",
			trastorno: [],
			sexo: 0,
			fechaAdmision: null,
			nombre: "",
			nombrepaciente: "",
			apellido: "",
			surname: "",
			idpaciente: "",
			motivo: "",
		};
	},
	methods: {
		navigation() {
			const one = document.getElementById("one");
			const two = document.getElementById("two");
			const four = document.getElementById("four");
			const datos = document.getElementById("datos");
			const diagnostico = document.getElementById("diagnostico-previo");
			const entrevista = document.getElementById("entrevista");
			//const consultar = document.getElementById('consultar')
			const btnEntrevista = document.getElementById("btn-entrevista");
			const antecedentes = document.getElementById("antecedentes-form");

			if (this.antecedentes == true) {
				if (entrevista) {
					if (one) {
						one.addEventListener("click", () => {
							datos.parentElement.parentElement.style.height = "620px";
							entrevista.style.height = "450px";
							datos.classList.add("antecedentes-input--active");
							one.classList.add("entrevista-nav--active");
							antecedentes.classList.remove("antecedentes-input--active");
							diagnostico.classList.remove("antecedentes-input--active");
							two.classList.remove("entrevista-nav--active");
							four.classList.remove("entrevista-nav--active");
							btnEntrevista.style.opacity = 0;
						});
					}

					if (two) {
						two.addEventListener("click", () => {
							datos.parentElement.parentElement.style.height = "1350px";
							entrevista.style.height = "1180px";
							datos.classList.remove("antecedentes-input--active");
							diagnostico.classList.remove("antecedentes-input--active");
							one.classList.remove("entrevista-nav--active");
							four.classList.remove("entrevista-nav--active");
							antecedentes.classList.add("antecedentes-input--active");
							two.classList.add("entrevista-nav--active");
							btnEntrevista.style.opacity = 1;
						});
					}
				}
			}
		},
		getData() {
			const username = document.getElementById("username-login");
			if (username) {
				if (username.innerHTML !== "") {
					this.isLogin = true;
					this.user = username.innerHTML;
				}
			}
		},
		defaultValue() {
			const name = document.getElementById("name");
			const surname = document.getElementById("surname");
			const idpaciente = document.getElementById("idpaciente");
			const fecha = document.getElementById("fecha-antecedente");

			const getEstado = async () => {
				try {
					const res = await axios.post(
						"http://rachaelbd.42web.io/autoevaluacion.php",
						{
							opcion: 12,
							username: this.user,
						}
					);
					if (res.data) {
						res.data.forEach((item) => {
							if (item.estado == 1) this.antecedentes = false;
							else this.antecedentes = true;
						});

						if (!this.antecedentes) {
							const one = document.getElementById("one");
							const two = document.getElementById("two");
							const four = document.getElementById("four");
							const entrevista = document.getElementById("entrevista");
							const antecedentes = document.getElementById("antecedentes");
							const notLogin = document.getElementById("not-login");

							one.classList.add("cancel-event");
							//two.classList.add('cancel-event')

							if (two) {
								antecedentes.classList.add("antecedentes-ajustado");
								entrevista.style.display = "none";
								notLogin.classList.add("antecedentes-input--active");
								one.classList.remove("entrevista-nav--active");
								two.classList.add("entrevista-nav--active");
								//test.classList.add('antecedentes-input--active')
								two.addEventListener("click", () => {
									antecedentes.style.height = "400px";
									entrevista.style.display = "none";
									notLogin.style.zIndex = 1;
									two.classList.add("entrevista-nav--active");
									notLogin.classList.add("antecedentes-input--active");
									four.classList.remove("entrevista-nav--active");
								});
							}
						}
					}
				} catch (err) {
					console.log(err);
				}
			};
			getEstado();

			const getInput = async () => {
				try {
					const res = await axios.post(
						"http://rachaelbd.42web.io/autoevaluacion.php",
						{
							opcion: 10,
							username: this.user,
						}
					);
					res.data.forEach((item) => {
						if (name) {
							name.value = item.nombre;
							name.setAttribute("readonly", true);
							name.setAttribute("maxlength", item.nombre.length);
						}
						if (surname) {
							surname.value = item.apellido;
							surname.setAttribute("readonly", true);
						}
						if (idpaciente) {
							this.iduser = item.iduser;
							idpaciente.value = item.iduser;
							idpaciente.setAttribute("readonly", true);
						}
						if (fecha) {
							const date = new Date();
							fecha.value = date.toLocaleDateString();
							fecha.setAttribute("readonly", true);
						}
					});
					this.pacientes = res.data;
				} catch (err) {
					console.log(err);
				}
			};
			getInput();
		},
		insertData() {
			const tratamiento = document.getElementById("tratamiento");
			const tratamientoNo = document.getElementById("tratamiento-no");
			const dieta = document.getElementById("dieta");
			const moderada = document.getElementById("moderada");
			const estricta = document.getElementById("estricta");
			const vegano = document.getElementById("vegano");
			const alcohol = document.getElementById("alcohol");
			const te = document.getElementById("te");
			const cafe = document.getElementById("cafe");
			const drogas = document.getElementById("drogas");
			const hipersensibilidad = document.getElementById("hipersensibilidad");
			const bullying = document.getElementById("bullying");
			const muerte = document.getElementById("muerte");
			const padres = document.getElementById("padres");
			const ciudad = document.getElementById("ciudad");
			const activo = document.getElementById("activo");
			const virgen = document.getElementById("virgen");
			const ocasional = document.getElementById("ocasional");
			const disfuncional = document.getElementById("disfuncional");
			const tranquila = document.getElementById("tranquila");
			const confianza = document.getElementById("confianza");
			const separados = document.getElementById("separados");
			const traumas = document.getElementById("traumas");
			const traumasNo = document.getElementById("traumas-no");
			const motivo = document.getElementById("motivo");
			const masculino = document.getElementById("masculino");
			const femenino = document.getElementById("femenino");

			let tratamientos = null;
			let habitoAlimenticio = "";
			let consumoSustancias = "";
			let medicamento = "";
			let vidaAdolescencia = "";
			let vidaSexual = "";
			let relacionFamiliar = "";
			let trauma = null;
			let motivoVisita = "";

			if (tratamiento && tratamientoNo) {
				if (tratamiento.checked) {
					tratamientos = 1;
				} else if (tratamientoNo.checked) {
					tratamientos = 0;
				}
			}

			if (dieta && moderada && estricta && vegano) {
				if (dieta.checked) {
					habitoAlimenticio = "dieta";
				} else if (moderada.checked) {
					habitoAlimenticio = "moderada";
				} else if (estricta.checked) {
					habitoAlimenticio = "estricta";
				} else if (vegano.checked) {
					habitoAlimenticio = "vegano";
				}
			}

			if (alcohol && te && cafe) {
				if (alcohol.checked) {
					consumoSustancias = "alcohol";
				} else if (te.checked) {
					consumoSustancias = "te";
				} else if (cafe.checked) {
					consumoSustancias = "cafe";
				}
			}

			if (drogas && hipersensibilidad) {
				if (drogas.checked) {
					medicamento = "no consumo drogas";
				} else if (hipersensibilidad.checked) {
					medicamento = "hipersensibilidad";
				}
			}

			if (bullying && muerte && padres && ciudad) {
				if (bullying.checked) {
					vidaAdolescencia = "bullying";
				} else if (muerte.checked) {
					vidaAdolescencia = "muerte familiar";
				} else if (padres.checked) {
					vidaAdolescencia = "padres separados";
				} else if (ciudad.checked) {
					vidaAdolescencia = "cambio de ciudad";
				}
			}

			if (activo && virgen && ocasional) {
				if (activo.checked) {
					vidaSexual = "activo";
				} else if (virgen.checked) {
					vidaSexual = "virgen";
				} else if (ocasional.checked) {
					vidaSexual = "ocasional";
				}
			}

			if (disfuncional && tranquila && confianza && separados) {
				if (disfuncional.checked) {
					relacionFamiliar = "disfuncional";
				} else if (tranquila.checked) {
					relacionFamiliar = "tranquila";
				} else if (confianza.checked) {
					relacionFamiliar = "confianza";
				} else if (separados.checked) {
					relacionFamiliar = "padres separados";
				}
			}

			if (traumas && traumasNo) {
				if (traumas.checked) {
					trauma = 1;
				} else if (traumasNo.checked) {
					trauma = 0;
				}
			}

			if (motivo) {
				if (motivo.value == "") motivoVisita = null;
				else motivoVisita = motivo.value;

				this.motivo = motivo.value;
			}

			if (masculino) {
				masculino.checked && this.sexo == 0;
			}

			if (femenino) {
				femenino.checked && this.sexo == 1;
			}

			axios
				.post("http://rachaelbd.42web.io/autoevaluacion.php", {
					opcion: 11,
					tratamiento: tratamientos,
					motivo: motivoVisita,
					alimenticios: habitoAlimenticio,
					sustancias: consumoSustancias,
					medicamentos: medicamento,
					adolescencia: vidaAdolescencia,
					sexo: vidaSexual,
					relacion: relacionFamiliar,
					traumas: trauma,
					username: this.iduser,
				})
				.then(() => {
					Swal.fire({
						title: "Antecedentes",
						text: `Registro de los antecedentes completados exitosamente`,
						icon: "success",
						timer: 10000,
						background: "#161719",
						backdrop: true,
						allowOutsideClick: true,
						allowEscapeKey: true,
						stopKeydownPropagation: false,
						confirmButtonColor: "#972745",
						showCloseButton: true,
					});
					setTimeout(() => {
						this.$router.push("/");
						window.scrollTo(0, 0);
					}, 4000);
				})
				.catch(() => {
					Swal.fire({
						title: "Antecedentes",
						text: `Error al momento de ingresar los datos, verifiquelos de nuevo.`,
						icon: "error",
						timer: 10000,
						background: "#161719",
						backdrop: true,
						allowOutsideClick: true,
						allowEscapeKey: true,
						stopKeydownPropagation: false,
						confirmButtonColor: "#972745",
					});
					this.antecedentes = true;
				});
		},
		showTraumas() {
			const traumasShow = document.getElementById("traumas-show");
			const traumas = document.getElementById("traumas");
			const traumasNo = document.getElementById("traumas-no");

			if (traumas.checked) {
				traumasNo.checked = false;
				traumasShow.classList.add("traumas--show");
			} else traumasShow.classList.remove("traumas--show");
		},
		redirectLogin() {
			setTimeout(() => this.$router.push("/login"), 500);
		},
		traumasChecked() {
			const traumasNo = document.getElementById("traumas-no");
			const traumas = document.getElementById("traumas");
			const traumasShow = document.getElementById("traumas-show");

			if (traumasNo.checked) {
				traumasShow.classList.remove("traumas--show");
				traumas.checked = false;
			}
		},
	},
	mounted() {
		this.$nextTick(function () {
			return this.defaultValue(), this.navigation();
		});
	},
	beforeMount() {
		return this.getData();
	},
};
</script>