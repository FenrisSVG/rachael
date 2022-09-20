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
						<img src="../assets/desktop/psicologo.svg" alt="" />
					</div>
					<div class="psicologos-card__aside-text">
						<h2 class="psicologos-card__aside-title">
							Encuentra a tu psicologo ideal
						</h2>
						<p>Te ayudamos a encontrar tu psicologo ideal</p>
						<router-link
							class="psicologos-card__aside-link"
							to="/"
							rel="nofollow"
							>Comenzar Ahora</router-link
						>
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
			<div class="sexo">
				<article class="article-psicologo">
					<div class="article-headers">
						<div class="article-headers__image">
							<img
								src="../assets/desktop/psicologo.svg"
								class="article-headers__img"
								alt=""
							/>
						</div>
						<div class="article-headers__text">
							<h3 class="article-headers__title">
								Encuentra a tu psicólogo ideal.
							</h3>
						</div>
						<div class="modal-terapeutico--close psicologo-terapeutico--close"></div>
						<!-- <div class="article-headers__test">
							<p class="article-headers__description">
								¡Te ayudamos! Responde unas preguntas y haz match con tu
								psicólogo.
							</p>
							<button class="article-headers__button">Comenzar.</button>
						</div> -->
						<div class="article-headers__test">
							<p class="article-headers__description">¿Cuál es tu género?</p>
							<div class="article-headers__inputs">
								<label for="female" class="article-headers__label">
									<input type="checkbox" name="female" />
									Mujer.
								</label>
							</div>
							<div class="article-headers__inputs">
								<label for="male" class="article-headers__label">
									<input type="checkbox" name="male" />
									Hombre.
								</label>
							</div>
							<div class="article-headers__inputs">
								<label for="otro" class="article-headers__label">
									<input type="checkbox" name="otro" />
									Prefiero no mencionarlo.
								</label>
							</div>
						</div>
						<!-- <div class="article-headers__test">
							<p class="article-headers__description">
								¿En qué rango de edad te encuentras?
							</p>
							<div class="article-headers__inputs">
								<label for="joven" class="article-headers__label">
									<input type="checkbox" name="joven" />
									18-25.
								</label>
							</div>
							<div class="article-headers__inputs">
								<label for="adolescente" class="article-headers__label">
									<input type="checkbox" name="adolescente" />
									26-35.
								</label>
							</div>
							<div class="article-headers__inputs">
								<label for="adulto" class="article-headers__label">
									<input type="checkbox" name="adulto" />
									36-45.
								</label>
							</div>
							<div class="article-headers__inputs">
								<label for="viejo" class="article-headers__label">
									<input type="checkbox" name="viejo" />
									45+.
								</label>
							</div>
						</div>
						<div class="article-headers__test">
							<p class="article-headers__description">
								¿En qué rango de edad te encuentras?
							</p>
							<div class="article-headers__inputs">
								<label for="si" class="article-headers__label">
									<input type="checkbox" name="si" />
									Si.
								</label>
							</div>
							<div class="article-headers__inputs">
								<label for="no" class="article-headers__label">
									<input type="checkbox" name="no" />
									No.
								</label>
							</div>
						</div>
						<div class="article-headers__test">
							<p class="article-headers__description">
								¿Con qué género te sientes mas cómodo compartiendo lo que
								sucede?
							</p>
							<div class="article-headers__inputs">
								<label for="hombre" class="article-headers__label">
									<input type="checkbox" name="hombre" />
									Hombre.
								</label>
							</div>
							<div class="article-headers__inputs">
								<label for="mujer" class="article-headers__label">
									<input type="checkbox" name="mujer" />
									Mujer.
								</label>
							</div>
						</div>
						<div class="article-headers__test">
							<p class="article-headers__description">
								¿Qué tipo de terapia buscas?
							</p>
							<div class="article-headers__inputs">
								<label for="individual" class="article-headers__label">
									<input type="checkbox" name="individual" />
									Individual.
								</label>
							</div>
							<div class="article-headers__inputs">
								<label for="pareja" class="article-headers__label">
									<input type="checkbox" name="pareja" />
									Pareja.
								</label>
							</div>
						</div> -->
					</div>
                    <div class="article-headers__buttons">
                        <div class="prev-test"><button>Atrás</button></div>
                        <div class="next-test"><button>Siguiente</button></div>
                    </div>
				</article>
			</div>
		</div>
		<Bot />
		<Footer />
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import SearchPsicologos from "./SearchPsicologos.vue";
import PsicologoList from "./PsicologoList.vue";
import Bot from "./inxdex.vue";
import Footer from "./Footer.vue";

export default {
	name: "Psicologos",
	components: {
		Bot,
		SearchPsicologos,
		PsicologoList,
		Footer,
	},
	data() {
		return {
			motivo: ["Ansiedad", "Miedo", "Ansiedad por Separacion", "Terapia"],
		};
	},
	computed: {
		...mapGetters({
			psicologos: "filteredPsicologos",
		}),
	},
};
</script>
