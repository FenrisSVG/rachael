<template>
	<section class="historial-container">
		<article class="historial-article">
			<div class="historial-article__header">
				<h2 class="historial-article__title">
					Historial del <span>Test de Autoevaluacion</span>
				</h2>
				<p class="historial-article__text">
					Aqui podras encontrar todo lo referente al historial psicologico del
					paciente
				</p>
			</div>
			<div class="historial-article__footer">
				<a class="historial-article__link" href="#funciona" rel="nofollow"
					>¿Como Funciona?</a
				>
				<a class="historial-article__link" href="#historial" rel="nofollow"
					>Ver Historial</a
				>
			</div>
		</article>

		<article class="historial-trastorno">
			<div class="historial-trastorno__header" id="funciona">
				<h3 class="historial-trastorno__header-title">
					¿Que es el historial del Test de Autoevaluacion?
				</h3>
				<p class="historial-trastorno__header-text">
					El historial del <span>test de Autoevaluacion</span> es la seccion
					donde usted como usuario tiene la opcion de poder ver el diagnostico
					diagnosticado previamente en el test de Autoevaluacion por tanto si
					usted como usuario no ha realizado el test de autoevaluacion no podra
					ver la pestaña siguiente y le pedimos que vaya atras a realizarlo.
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, porro?
					Voluptates blanditiis aspernatur praesentium alias temporibus nostrum
					quod consectetur hic dicta excepturi consequatur totam reprehenderit,
					quasi accusantium, doloremque voluptatum sequi magnam quibusdam
					deleniti soluta neque optio vel, aliquam tempora. Assumenda vero
					provident ipsum non dolore laborum temporibus porro rerum itaque.
				</p>
			</div>

			<div class="historial-trastorno__footer" v-if="antecedentes !== ''">
				<h3 class="historial-trastorno__footer-title">
					Antecedentes del Paciente
				</h3>
				<div
					class="diagnosticos"
					v-for="(item, index) in antecedentes"
					:key="index"
				>
					<header class="antecedentes-info__data">
						<div class="antecedentes-info__name">
							<h5 class="antecedentes-info__data-title">
								Nombre del Paciente:
							</h5>
							<p class="antecedentes-info__data-text">{{ item.nombre }}</p>
						</div>
						<div class="antecedentes-info__surname">
							<h5 class="antecedentes-info__data-title">
								Apellido del Paciente:
							</h5>
							<p class="antecedentes-info__data-text">{{ item.apellido }}</p>
						</div>
						<div class="antecedentes-info__date">
							<h5 class="antecedentes-info__data-title">Fecha del registro:</h5>
							<p class="antecedentes-info__data-text">
								{{ item.fecha_registro }}
							</p>
						</div>
					</header>
					<div class="antecedentes-info__text">
						<p class="antecedentes-info__text-data">
							Segun los datos proporcionados nos podemos dar cuenta que usted
							como usuario
							<span v-if="item.tratamiento == 1"
								>ha recibido un tratamiento previo</span
							>
							<span v-else>no ha recibido un tratamiento previo</span>, tiene
							una alimentacion de <span>{{ item.alimentacion }}</span
							>, tambien de acuerdo al consumo de sustancias nos damos cuenta
							que usted consume <span>{{ item.sustancias }}</span
							>, con respecto a los medicamentos usted
							<span>{{ item.medicamentos }}</span
							>, la informacion con respecto a su vida pasada(adolescencia)
							usted sufria mucho de
							<span
								>{{ item.adolescencia }}, su vida sexual ha sido
								<span>{{ item.sexo }}</span
								>, su relacion con la familia es
								<span>{{ item.relacionFamilia }}</span> y por ultimo
								<span v-if="item.traumas == 1">si ha presentado traumas </span>
								<span v-else>no ha presentado traumas</span>
							</span>
						</p>
					</div>
				</div>
			</div>
			<div
				class="historial-trastorno__footer"
				id="historial"
				v-if="historial !== []"
			>
				<h3 class="historial-trastorno__footer-title">
					Tus diagnosticos anteriores de los trastornos:
				</h3>
				<div
					class="diagnosticos"
					v-for="(item, index) in historial"
					:key="index"
				>
					<h3 class="diagnosticos-title">
						La prediccion previa del test de autoevaluacion, realizada por el
						usuario: <span>{{ item.username }}</span> determino que tiene
						diagnosticado el siguiente trastorno
					</h3>
					<div class="diagnosticos__trastorno">
						<h3 class="diagnosticos__title">Trastorno Diagnosticado:</h3>
						<p class="diagnosticos__text">{{ item.nombre }}</p>
					</div>
					<div class="diagnosticos__sintomas">
						<h3 class="diagnosticos__title">Sintomas del Trastorno:</h3>
						<pre class="sintomas__item">{{ item.sintoma + "\n" }}</pre>
					</div>
					<div class="diagnosticos__description">
						<h3 class="diagnosticos__title">
							¿Que quiere decir este trastorno?
						</h3>
						<p class="diagnosticos__text">{{ item.descripccion }}</p>
					</div>
					<div class="diagnosticos__trastorno">
						<h3 class="diagnosticos__title">
							Fecha en que se realizo el test:
						</h3>
						<p class="diagnosticos__text">{{ dateFormatted }}</p>
					</div>
				</div>
			</div>
			<div class="historial-trastorno__footer" v-else>
				<h2>
					Usted no tiene historial del test por ende no ha realizado el test de
					autoevaluacion previamente
				</h2>
			</div>
		</article>
		<Footer />
	</section>
</template>

<style scoped>
.historial-article {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 400px;
	background-image: url("../../assets/desktop/test-psicologico.jpeg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}
.historial-trastorno__header p > span {
	color: var(--danger-color);
}
.diagnosticos > * {
	margin: 1.5em 0;
}
.diagnosticos h3:first-child {
	margin-top: 0;
}
.antecedentes-info__text p span {
	color: var(--danger-color);
}
</style>

<script>
import Footer from "../Footer.vue";
import axios from "axios";

export default {
	name: "Historial",
	components: {
		Footer,
	},
	data() {
		return {
			historial: [],
			antecedentes: [],
			sintomas: [],
			trastorno: "",
			username: "",
			formatDate: null,
			iduser: null,
		};
	},
	methods: {
		getData() {
			const getId = async () => {
				const res = await axios.post(
					"http://localhohost:8080/autoevaluacion/autoevaluacion.php",
					{
						opcion: 10,
						username: this.username,
					}
				);
				res.data.forEach((item) => (this.iduser = item.iduser));

				const antecedente = await axios.post(
					"http://localhohost:8080/autoevaluacion/autoevaluacion.php",
					{
						opcion: 13,
						user: this.iduser,
					}
				);
				this.antecedentes = antecedente.data;

				const response = await axios.post(
					"http://localhohost:8080/autoevaluacion/autoevaluacion.php",
					{
						opcion: 7,
						user: this.iduser,
					}
				);

				response.status == 200
					? (this.historial = response.data)
					: console.log(res.statusText);

				this.historial.find((item) => {
					this.formatDate = new Date(item.fecha);
				});

				this.historial.forEach((item) => {
					axios
						.post("http://localhohost:8080/autoevaluacion/autoevaluacion.php", {
							opcion: 14,
							trastorno: item.nombre,
						})
						.then((res) => {
							this.sintomas = res.data;
						});
				});
			};
			getId();
		},
		getUsername() {
			const username = document.getElementById("username-login");

			if (username) {
				if (username.innerHTML !== "") {
					this.username = username.innerHTML;
				}
			}
		},
	},
	computed: {
		dateFormatted() {
			return this.formatDate.toLocaleDateString("es-ES", {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric",
			});
		},
		// ordererDate: function(){
		//     return _.orderBy(this.historial,'fecha')
		// }
	},
	created() {
		return window.scrollTo(0, 0);
	},
	mounted() {
		this.$nextTick(() => {
			return this.getData();
		});
	},
	beforeMount() {
		return this.getUsername();
	},
};
</script>
