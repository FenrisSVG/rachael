<template>
	<section class="quesillo">
		<h2 class="quesillo-title">Sobre el Psicologo Alexander Espinoza.</h2>
		<article class="article-quesillo">
			<header class="article-quesillo__header">
				<div class="quesillo-img">
					<img
						src="../../assets/desktop/quesillo.webp"
						alt="picture of a psicologo quesillo"
						loading="lazy"
					/>
				</div>
				<div
					class="quesillo-text"
					v-for="(item, index) in psicologos"
					:key="index"
				>
					<h6 class="quesillo-text__title">
						Psicologo {{ item.Nombre }} {{ item.Apellido }}
					</h6>
					<p class="quesillo-text__info">
						<span>Dirección:</span> {{ item.Direccion }}
					</p>
					<p class="quesillo-text__info">
						<span>Nacionalidad: </span> Enviado de Dios.
					</p>
					<p class="quesillo-text__info">
						<span>Modelo de Trabajo Terapeutico:</span>
						{{ item.ModeloTerapeutico }}
					</p>
					<p class="quesillo-text__info">
						<span>Email:</span>
						<img
							src="../../assets/desktop/quesillocom.png"
							loading="lazy"
							alt="messi mail"
						/>
					</p>
					<p class="quesillo-text__info">
						<span>Celular:</span> {{ item.Celular }}
					</p>
					<aside class="aside-quesillo">
						<span class="aside-quesillo__item">Diversidad</span>
						<span class="aside-quesillo__item"
							>Equilibrio e Inteligencia Emocional</span
						>
						<span class="aside-quesillo__item">Soledad</span>
					</aside>
					<p class="quesillo-text__info">
						¿Es que hay algo que este hombre no puede hacer bien? "Te propongo
						trabajar juntos sobre la base de un modelo vincular en donde te
						brindaré herramientas para convivir con las personas que te rodean
						respetando las diferencias, identificando los conflictos y
						aprendiendo a utilizar el diálogo y la conversación como modo de
						superar problemas familiares, de pareja, con compañeros de trabajo o
						amigos. Revisaremos los vínculos que te preocupan y te hacen sufrir
						para recuperar/reinventar tus ganas, energía y placer de estar y
						vivir con las personas que te rodean".
					</p>
				</div>
			</header>
			<div class="article-quesillo__body">
				<div class="atencion">
					<h6 class="atencion-title">Areas de Atencion</h6>
					<ul
						class="main-menu__quesillo main-menu__quesillo--grid"
						v-if="atencion !== ''"
					>
						<li
							class="main-list__quesillo"
							v-for="(item, index) in atencion"
							:key="index"
						>
							{{ item.name }}
						</li>
					</ul>
				</div>
				<div class="atencion">
					<h6 class="atencion-title">Experiencia Personal</h6>
					<ul class="main-menu__quesillo" v-if="experiencia !== ''">
						<li
							class="main-list__quesillo"
							v-for="(item, index) in experiencia"
							:key="index"
						>
							{{ item.name }}
						</li>
					</ul>
				</div>
				<div class="atencion">
					<h6 class="atencion-title">Formacion Academica</h6>
					<ul class="main-menu__quesillo" v-if="academica !== []">
						<li
							class="main-list__quesillo"
							v-for="(item, index) in academica"
							:key="index"
						>
							{{ item.name }}
						</li>
					</ul>
				</div>
				<div class="atencion">
					<h6 class="atencion-title">Sobre mi</h6>
					<p>
						"Yo soy GOD y ustedes zzzzzzz", *le critica los componentes de la pc
						y se pone a jugar pokemon*
					</p>
				</div>
			</div>
			<footer class="article-quesillo__footer">
				<!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.0198525071537!2d-86.23101438898574!3d12.110793371496474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f73ff8a63e3d4d7%3A0x48444cf29f782c1d!2sNacatamales%20Rizo!5e0!3m2!1ses-419!2sni!4v1637131739963!5m2!1ses-419!2sni" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" class="maps"></iframe> -->
				<div id="map" class="maps" ref="mapElement"></div>
			</footer>
		</article>
		<Bot />
		<Important />
		<Footer />
	</section>
</template>

<style scoped>
.maps {
	/* width: 100%; */
	height: 500px;
}
.quesillo-img {
	position: relative;
}
.quesillo-img::before {
	content: "Hola!";
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 50%;
	right: -40px;
	font-size: 1.2em;
	width: 80px;
	height: 80px;
	border-radius: 50%;
	transform: translateY(-50%);
	transition: all 0.5s ease;
	background-color: #b9e2f8;
}
.quesillo-img:hover::before {
	width: 100%;
	height: 160px;
	font-size: 2em;
	opacity: 0.7;
	letter-spacing: 3px;
	transform: translate(-23.2%, -50%);
}

.leaflet-popup-content-wrapper {
	margin-bottom: 20px;
}

.leaflet-popup-content-text {
	line-height: 1.5;
	font-size: 32px;
	border: 1px solid red;
}
</style>

<script>
import Bot from "../inxdex.vue";
import Footer from "../Footer.vue";
import Important from "../Important.vue";
import L from "leaflet";
// import leafletSearch from 'leaflet-search'
require("leaflet-routing-machine");
import axios from "axios";
// import {mapGetters, mapMutatios} from 'vuex'

export default {
	name: "Quesillo",
	components: {
		Bot,
		Important,
		Footer,
	},
	data() {
		return {
			direccion: null,
			latitude: null,
			longitude: null,
			psicologos: [],
			atencion: [
				{
					name: "Conflictos de Pareja",
				},
				{
					name: "Diversidad",
				},
				{
					name: "Identidad de Genero",
				},
				{
					name: "Problemas familiares",
				},
				{
					name: "Terapia de Pareja",
				},
				{
					name: "Conflictos Personales",
				},
				{
					name: "Equilibrio e Inteligencia Emocional",
				},
				{
					name: "Problemas de Comunicacion",
				},
				{
					name: "Soledad",
				},
			],
			experiencia: [
				{
					name: "Consultoría y asesoramiento en comportamiento organizacional",
				},
				{
					name: "Asesoramiento en procesos de cambio y crisis organizacional en Argentina y LATAM.",
				},
				{
					name: "Consultorio privado",
				},
			],
			academica: [
				{
					name: "Instituto Pedagogico La Salle - Managua",
				},
				{
					name: "Licenciatura en psicología.",
				},
				{
					name: "Universidad Nacional de Ingenieria - Managua",
				},
				{
					name: "Universidad de Hardvard",
				},
			],
		};
	},
	methods: {
		mostrarPsicologo() {
			const psicologo = async () => {
				try {
					const res = await axios.post(
						"http://localhost:8080/autoevaluacion/autoevaluacion.php",
						{ opcion: 14, ID: 1 }
					);
					if (res.status !== 200) throw Error(res.statusText);

					this.psicologos = res.data;

					await axios
						.post("http://localhost:8080/autoevaluacion/autoevaluacion.php", {
							opcion: 16,
						})
						.then((res) => {
							if (res.data) {
								res.data.forEach((item) => {
									this.latitude = item.latitude;
									this.longitude = item.longitude;
								});
							}
						})
						.catch((err) => console.error(err));

					this.psicologos.forEach((item) => {
						this.direccion = item.Direccion;

						fetch(
							`https://nominatim.openstreetmap.org/?addressdetails=1&q=${this.direccion}&format=json&limit=1`
						)
							.then((res) => res.json())
							.then((data) => {
								let map = L.map(this.$refs["mapElement"]).setView(
									[data[0].lat, data[0].lon],
									14
								);

								L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
									maxZoom: 18,
									attribution: "© OpenStreetMap",
								}).addTo(map);

								L.marker([data[0].lat, data[0].lon], {
									alt: "Psicologo Marker",
									title: "Ubicación Psicologo.",
								}).addTo(map);

								L.marker([this.latitude, this.longitude], {
									alt: "Your bitacion marker",
									title: "Tú posición.",
								})
									.bindPopup("<h5>Tu estas aqui</h5>")
									.addTo(map);

								let fromLatLng = L.latLng(data[0].lat, data[0].lon);
								let toLatLng = L.latLng(this.latitude, this.longitude);

								let distance = fromLatLng.distanceTo(toLatLng);

								L.popup()
									.setLatLng([data[0].lat, data[0].lon])
									.setContent(
										`<h5 class="leaflet-popup-content-text"> Te encuentras a una distancia de <br /> ${distance.toFixed(
											3
										)} metros del objetivo</h5>`
									)
									.openOn(map);

								L.Routing.control({
									waypoints: [
										L.latLng(data[0].lat, data[0].lon),
										L.latLng(this.latitude, this.longitude),
									],
									routeWhileDragging: true,
									autoRoute: true,
									language: "es",
									lineOptions: {
										styles: [{ color: "black", weight: 5 }],
									},
									useZoomParameter: true,
								}).addTo(map);
							});
					});
				} catch (e) {
					console.error(e);
				}
			};
			psicologo();
		},
	},
	created() {
		return window.scrollTo(0, 0);
	},
	mounted() {
		this.$nextTick(() => {
			return this.mostrarPsicologo();
		});
	},
};
</script>
