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
						<img src="../assets/desktop/psicologo.svg" alt="
						icon svg men with a big cellphone" />
					</div>
					<div class="psicologos-card__aside-text">
						<h2 class="psicologos-card__aside-title">
							Encuentra a tu psicologo ideal
						</h2>
						<p>Te ayudamos a encontrar tu psicologo ideal</p>
						<button
							class="psicologos-card__aside-link"
							@click="showModal"
							>Comenzar Ahora</button
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
			<div class="sexo" id="sexo" @click="closeModal">
				<article class="article-psicologo">
					<div class="article-headers">
						<div class="article-headers__image">
							<img
								src="../assets/desktop/psicologo.svg"
								class="article-headers__img"
								alt="icon svg cellphone with a men"
							/>
						</div>
						<div class="article-headers__text">
							<h3 class="article-headers__title">
								Encuentra a tu psicólogo ideal.
							</h3>
						</div>
						<div
							class="modal-terapeutico--close psicologo-terapeutico--close"
						></div>
						<div
							class="article-headers__test
						article-headers__test--opacity"
						>
							<p class="article-headers__description">
								¡Te ayudamos! Responde unas preguntas y haz match con tu
								psicólogo.
							</p>
							<button class="article-headers__button" id="comenzar">Comenzar.</button>
						</div>
						<div class="article-headers__test">
							<p class="article-headers__description
							article-headers__description--font">¿Cuál es tu género?</p>
							<div class="article-headers__inputs">
								<label for="female2" class="article-headers__label">
									<input type="checkbox" name="female2"
									v-model="men2"
									@change="woman2 = false, otro = false" />
									Mujer.
								</label>
							</div>
							<div class="article-headers__inputs">
								<label for="male2" class="article-headers__label">
									<input type="checkbox" name="male2"
									v-model="woman2"
									@change="(men2 = false, otro = false)" />
									Hombre.
								</label>
							</div>
							<div class="article-headers__inputs">
								<label for="otro" class="article-headers__label">
									<input type="checkbox" name="otro"
									v-model="otro"
									@change="men2 = false, woman2 = false" />
									Prefiero no mencionarlo.
								</label>
							</div>
						</div>
						<div class="article-headers__test">
							<p class="article-headers__description
							article-headers__description--font">
								¿En qué rango de edad te encuentras?
							</p>
							<div class="article-headers__inputs">
								<label for="joven" class="article-headers__label">
									<input type="checkbox" name="joven"
									v-model="joven"
									@change="adolescente = false, adulto = false, viejo = false" />
									18-25.
								</label>
							</div>
							<div class="article-headers__inputs">
								<label for="adolescente" class="article-headers__label">
									<input type="checkbox" name="adolescente"
									v-model="adolescente"
									@change="joven = false, viejo = false, adulto = false" />
									26-35.
								</label>
							</div>
							<div class="article-headers__inputs">
								<label for="adulto" class="article-headers__label">
									<input type="checkbox" name="adulto"
									v-model="adulto"
									@change="joven = false, adolescente = false, viejo = false" />
									36-45.
								</label>
							</div>
							<div class="article-headers__inputs">
								<label for="viejo" class="article-headers__label">
									<input type="checkbox" name="viejo"
									v-model="viejo"
									@change="joven = false, adolescente = false, adulto = false" />
									45+.
								</label>
							</div>
						</div>
						<div class="article-headers__test">
							<p class="article-headers__description">
								¿Es tu primera vez recibiendo una terapia?
							</p>
							<div class="article-headers__inputs">
								<label for="si" class="article-headers__label">
									<input type="checkbox" name="si"
									v-model="terapiaYes"
									@change="terapiaNo = false" />
									Si.
								</label>
							</div>
							<div class="article-headers__inputs">
								<label for="no" class="article-headers__label">
									<input type="checkbox" name="no"
									v-model="terapiaNo"
									@change="terapiaYes = false" />
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
									<input type="checkbox" name="hombre" 
									v-model="hombre"
									@change="mujer = false" />
									Hombre.
								</label>
							</div>
							<div class="article-headers__inputs">
								<label for="mujer" class="article-headers__label">
									<input type="checkbox" name="mujer" 
									v-model="mujer"
									@change="hombre = false" />
									Mujer.
								</label>
							</div>
						</div>
						<div class="article-headers__test">
							<p class="article-headers__description">
								¿Qué tipo de terapia buscas?
							</p>
							<div class="article-headers__inputs">
								<label for="individual2" class="article-headers__label">
									<input type="checkbox" name="individual2"
									v-model="individual2"
									@change="pareja2 = false" />
									Individual.
								</label>
							</div>
							<div class="article-headers__inputs">
								<label for="pareja2" class="article-headers__label">
									<input type="checkbox" name="pareja2"
									v-model="pareja2"
									@change="individual2 = false" />
									Pareja.
								</label>
							</div>
						</div>
					</div>
					<!-- SPINNE R -->
					<div class="article-headers__test
							article-headers__test--spinner">
						<p class="article-headers__description">
							Estamos haciendo match con tu psicologo ideal...
						</p>
						<div class="spinner"></div>
					</div>
					<div class="article-headers__buttons"
					id="psicologo-buttons">
						<div class="prev-test" id="prev-test">
							<button>Atrás</button>
						</div>
						<div class="next-test" id="next-test">
							<button>Siguiente</button>
						</div>
					</div>
				</article>
			</div>
		</div>
		<Bot />
		<Footer />
	</div>
</template>

<style scoped>
.article-headers__test--spinner{
	bottom: 90px;
}
.spinner{
	margin-inline-start: auto;
	margin-inline-end: auto;
	border: 4px solid rgba(0,0,0,.1);
	width: 80px;
	height: 80px;
	border-radius: 50%;
	border-left-color: #09f;
	animation: spin 1.5s linear infinite;
}

@keyframes spin{
	0%{
		transform: rotate(0deg);
	}
	100%{
		transform: rotate(360deg)
	}
}
</style>

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
			men2: false,
			woman2: false,
			otro: false,
			joven: false,
			adolescente: false,
			adulto: false,
			viejo: false,
			terapiaYes: false,
			terapiaNo: false,
			hombre: false,
			mujer: false,
			individual2: false,
			pareja2: false
		};
	},
	methods: {
		showModal(e){
			const sexo = document.getElementById('sexo')

			if(e.target.classList.contains('psicologos-card__aside-link')){
				sexo.classList.add('sexo--show')
			}
		},
		closeModal(e){
			const close = document.querySelector('.psicologo-terapeutico--close')
			const test = Array.from(
				document.querySelectorAll(".article-headers__test")
			);

			if(e.target.classList.contains('sexo--show')){
				e.target.classList.remove('sexo--show')
			}

			if(close){
				close.addEventListener('click', () =>{
					close.parentElement.parentElement.parentElement
					.classList.remove('sexo--show')
					test.map(tests => tests.classList.remove('article-headers__test--opacity'))
					test[0].classList.add('article-headers__test--opacity')
				})
			}

			document.addEventListener('keydown', 
				(e)=>{
					if(e.key === 'Escape'){
						close.parentElement.parentElement.parentElement
						.classList.remove('sexo--show')
					}
				})
			
		},
		testControls() {
			const test = Array.from(
				document.querySelectorAll(".article-headers__test")
			);
			const prev = document.getElementById("prev-test");
			const next = document.getElementById("next-test");
			const comenzar = document.getElementById("comenzar");
			const buttons = document.getElementById("psicologo-buttons");

			let cont = 0;

			comenzar.addEventListener("click", () => {
				setClass('next')
				buttons.style.opacity = 1;
			});

			if (prev) {
				prev.addEventListener("click", () => setClass("prev"));
			}

			if(next){
				next.addEventListener("click", () => setClass("next"));
			}

			const setClass = (direction) => {
				try {
					test.map((image) =>
						image.classList.remove("article-headers__test--opacity")
					);
					setCont(direction);
					test[cont].classList.add("article-headers__test--opacity");
				} catch (err) {
					console.log(err);
				}
			};

			const setCont = (direction) => {
				if (direction == "next") {
					if (cont == test.length - 1) cont = 0;
					else{
						cont = 1
						if(this.men2 || this.woman2 || this.otro){
							cont = 2
							if(this.joven || this.adolescente || this.adulto || this.viejo){
								cont = 3
								if(this.terapiaYes || this.terapiaNo){
									cont = 4
									if(this.hombre || this.mujer){
										cont = 5
										if(this.individual2 || this.pareja2){
											cont = 6
											buttons.style.opacity = 0;
										}
									}
								}
							}
						}
					}											
				} else {
					if (cont == 0) cont = test.lenght - 1;
					else cont--;

				}
			};
		},
	},
	computed: {
		...mapGetters({
			psicologos: "filteredPsicologos",
		}),
	},
	mounted(){
		return this.testControls()
	}
};
</script>
