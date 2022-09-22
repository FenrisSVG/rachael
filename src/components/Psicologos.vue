<template>
	<div class="psicologos-container">
		<p v-scroll-reveal="{ delay: 500, scale: 2 }">
			¿Buscas un psicologo Online?
		</p>
		<div class="psicologos">
			<SearchPsicologos v-scroll-reveal="{ delay: 500, scale: 2 }" />
			<div class="modal-terapeutico" id="modal-terapeutico">
				<article class="article-terapeutico">
					<h2 class="article-terapeutico__title">Modelos Terapeuticos</h2>
					<p>
						Es el enfoque que el terapeuta le suele dar al caso. Este afecta en
						cómo se percibe a la persona, las herramientas que se utiliza y la
						duración del proceso.
					</p>
					<div class="modal-terapeutico--close" id="terapeutico-close"></div>
					<section class="article-terapeutico__section">
						<h3 class="article-terapeutico__section-title">
							Cognitivo conductual:
						</h3>
						<p class="article-terapeutico__section-text">
							Se enfoca en conductas y pensamientos que generan dificultades.
							Las sesiones son orientadas a objetivos y usualmente se dejan
							tareas a realizar fuera de sesión.
						</p>
					</section>
					<section class="article-terapeutico__section">
						<h3 class="article-terapeutico__section-title">Psicoanalisis:</h3>
						<p class="article-terapeutico__section-text">
							Se enfoca en conductas y pensamientos que generan dificultades.
							Las sesiones son orientadas a objetivos y usualmente se dejan
							tareas a realizar fuera de sesión.
						</p>
					</section>
					<section class="article-terapeutico__section">
						<h3 class="article-terapeutico__section-title">Cognitivo:</h3>
						<p class="article-terapeutico__section-text">
							Se enfoca en conductas y pensamientos que generan dificultades.
							Las sesiones son orientadas a objetivos y usualmente se dejan
							tareas a realizar fuera de sesión.
						</p>
					</section>
					<section class="article-terapeutico__section">
						<h3 class="article-terapeutico__section-title">
							Psicoanalisis cognitivo:
						</h3>
						<p class="article-terapeutico__section-text">
							Se enfoca en conductas y pensamientos que generan dificultades.
							Las sesiones son orientadas a objetivos y usualmente se dejan
							tareas a realizar fuera de sesión.
						</p>
					</section>
				</article>
			</div>
			<div class="psicologos-card" v-scroll-reveal="{ delay: 500, scale: 2 }">
				<div class="filter">
					<label for="consulta">¿Cual es tu motivo de la consulta?</label>
					<select
						class="filter-consulta"
						name="consulta"
						id="consulta"
						placeholder="¿Cual es el motivo de tu consulta?"
					>
						<option v-for="(item, index) in motivo" :key="index" value="">{{
							item
						}}</option>
					</select>
				</div>
				<aside class="psicologos-card__aside">
					<div class="psicologos-card__aside-img">
						<img
							src="../assets/desktop/psicologo.svg"
							alt="
						icon svg men with a big cellphone"
						/>
					</div>
					<div class="psicologos-card__aside-text">
						<h2 class="psicologos-card__aside-title">
							Encuentra a tu psicologo ideal
						</h2>
						<p>Te ayudamos a encontrar tu psicologo ideal</p>
						<button class="psicologos-card__aside-link" @click="showModal">
							Comenzar Ahora
						</button>
					</div>
				</aside>
				<div class="psicologos-card__card">
					<PsicologoList
						id="psicologo-list"
						:psicologo="psicologo"
						v-for="psicologo in psicologos"
						:key="psicologo.id"
					/>
				</div>
			</div>
			<TestPsicologos id="sexo" />
		</div>
		<Bot />
		<Footer />
	</div>
</template>

<style scoped>
.article-headers__test--spinner {
	bottom: 90px;
}
.spinner {
	margin-inline-start: auto;
	margin-inline-end: auto;
	border: 4px solid rgba(0, 0, 0, 0.1);
	width: 80px;
	height: 80px;
	border-radius: 50%;
	border-left-color: #09f;
	animation: spin 1.5s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>

<script>
import { mapGetters } from "vuex";
import SearchPsicologos from "./SearchPsicologos.vue";
import PsicologoList from "./PsicologoList.vue";
import TestPsicologos from "./TestPsicologos.vue";
import Bot from "./inxdex.vue";
import Footer from "./Footer.vue";

export default {
	name: "Psicologos",
	components: {
		Bot,
		SearchPsicologos,
		PsicologoList,
		TestPsicologos,
		Footer,
	},
	data() {
		return {
			motivo: ["Ansiedad", "Miedo", "Ansiedad por Separacion", "Terapia"],
		};
	},
	methods: {
		showModal(e) {
			const sexo = document.getElementById("sexo");

			if (e.target.classList.contains("psicologos-card__aside-link")) {
				sexo.classList.add("sexo--show");
			}
		},
	},
	computed: {
		...mapGetters({
			psicologos: "filteredPsicologos",
		})
	}
};
</script>
