<template>
	<section class="quesillo">
		<h2 class="quesillo-title">Sobre la Psicologa Maryelly.</h2>
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
						Psicologa {{ item.Nombre }} {{ item.Apellido }}
					</h6>
					<p class="quesillo-text__info">
						<span>Dirección:</span> {{ item.Direccion }}
					</p>
					<p class="quesillo-text__info">
						<span>Nacionalidad: </span> XD.
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
						<span class="aside-quesillo__item">BeReal Brrrr</span>
						<span class="aside-quesillo__item"
							>Soy penuda.</span
						>
						<span class="aside-quesillo__item">Smirnoff Apple</span>
					</aside>
					<p class="quesillo-text__info">
						Si voy con mis amigos por cerveza a un bar, y ese bar no tiene
                        la delicadeza de una bebida como lo es la smirnoff bebida de los dioses
                        con sabor natural de manzana de la mismisima manzada de los paraisos
                        que comio Adan y Eva en los principios de la historia, entonces yo le doy un 
                        0/5 estrellas a ese bar y prefiero no beber nada a probar otra cerveza.
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
						"BeReal Brrrrrrrrrrrrrrrrrrrr hoy me toca a mi, wuuu es la hora
                        de #BeReal Prefiero probar tierra a una cerveza que no sea Smirnoff"
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
require("leaflet-routing-machine");
import axios from "axios";

export default {
	name: "Maryelly",
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
					name: "¿Quien Soy?",
				},
				{
					name: "Personalidad",
				},
				{
					name: "Uy no si supieras",
				},
				{
					name: "Problemas familiares",
				},
				{
					name: "Terapia Individual",
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
					name: "Ay wey alkapone",
				},
			],
			experiencia: [
				{
					name: "Psicologa privada de Joe Biden",
				},
				{
					name: "Psicologa privada de Romeo Santos.",
				},
				{
					name: "Bad bunny veive brrrrrrr",
				},
			],
			academica: [
				{
					name: "¿Instituto? Que es eso. #BeReal.",
				},
				{
					name: "Licenciatura en Smirnoff.",
				},
				{
					name: "Universidad Nacional de Ingenieria - Managua",
				},
				{
					name: "Universidad de Hardvard.",
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
						{ opcion: 14, ID: 4 }
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
