<template>
	<div class="sexo" @click="closeModal">
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
						¡Te ayudamos! Responde unas preguntas y haz match con tu psicólogo.
					</p>
					<button class="article-headers__button" id="comenzar">
						Comenzar.
					</button>
				</div>
				<div class="article-headers__test">
					<p
						class="article-headers__description
							article-headers__description--font"
					>
						¿Cuál es tu género?
					</p>
					<div class="article-headers__inputs">
						<label for="female2" class="article-headers__label">
							<input
								type="checkbox"
								name="female2"
								v-model="woman2"
								@change="(men2 = false), (otro = false)"
							/>
							Mujer.
						</label>
					</div>
					<div class="article-headers__inputs">
						<label for="male2" class="article-headers__label">
							<input
								type="checkbox"
								name="male2"
								v-model="men2"
								@change="(woman2 = false), (otro = false)"
							/>
							Hombre.
						</label>
					</div>
					<div class="article-headers__inputs">
						<label for="otro" class="article-headers__label">
							<input
								type="checkbox"
								name="otro"
								v-model="otro"
								@change="(men2 = false), (woman2 = false)"
							/>
							Prefiero no mencionarlo.
						</label>
					</div>
				</div>
				<div class="article-headers__test">
					<p
						class="article-headers__description
							article-headers__description--font"
					>
						¿En qué rango de edad te encuentras?
					</p>
					<div class="article-headers__inputs">
						<label for="joven" class="article-headers__label">
							<input
								type="checkbox"
								name="joven"
								v-model="joven"
								@change="
									(adolescente = false), (adulto = false), (viejo = false)
								"
							/>
							18-25.
						</label>
					</div>
					<div class="article-headers__inputs">
						<label for="adolescente" class="article-headers__label">
							<input
								type="checkbox"
								name="adolescente"
								v-model="adolescente"
								@change="(joven = false), (viejo = false), (adulto = false)"
							/>
							26-35.
						</label>
					</div>
					<div class="article-headers__inputs">
						<label for="adulto" class="article-headers__label">
							<input
								type="checkbox"
								name="adulto"
								v-model="adulto"
								@change="
									(joven = false), (adolescente = false), (viejo = false)
								"
							/>
							36-45.
						</label>
					</div>
					<div class="article-headers__inputs">
						<label for="viejo" class="article-headers__label">
							<input
								type="checkbox"
								name="viejo"
								v-model="viejo"
								@change="
									(joven = false), (adolescente = false), (adulto = false)
								"
							/>
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
							<input
								type="checkbox"
								name="si"
								v-model="terapiaYes"
								@change="terapiaNo = false"
							/>
							Si.
						</label>
					</div>
					<div class="article-headers__inputs">
						<label for="no" class="article-headers__label">
							<input
								type="checkbox"
								name="no"
								v-model="terapiaNo"
								@change="terapiaYes = false"
							/>
							No.
						</label>
					</div>
				</div>
				<div class="article-headers__test">
					<p class="article-headers__description">
						¿Con qué género te sientes mas cómodo compartiendo lo que sucede?
					</p>
					<div class="article-headers__inputs">
						<label for="hombre" class="article-headers__label">
							<input
								type="checkbox"
								name="hombre"
								v-model="hombre"
								
							/>
							Hombre.
						</label>
					</div>
					<div class="article-headers__inputs">
						<label for="mujer" class="article-headers__label">
							<input
								type="checkbox"
								name="mujer"
								v-model="mujer"
								
							/>
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
							<input
								type="checkbox"
								name="individual2"
								v-model="individual2"
								
							/>
							Individual.
						</label>
					</div>
					<div class="article-headers__inputs">
						<label for="pareja2" class="article-headers__label">
							<input
								type="checkbox"
								name="pareja2"
								v-model="pareja2"
								
							/>
							Pareja.
						</label>
					</div>
				</div>
			</div>
			<!-- SPINNE R -->
			<div
				class="article-headers__test
							article-headers__test--spinner"
			>
				<p class="article-headers__description">
					Estamos haciendo match con tu psicologo ideal...
				</p>
				<div class="spinner"></div>
			</div>
			<div class="article-headers__buttons" id="psicologo-buttons">
				<div class="prev-test" id="prev-test">
					<button>Atrás</button>
				</div>
				<div class="next-test" id="next-test">
					<button>Siguiente</button>
				</div>
			</div>
		</article>
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
export default {
    name: 'TestPsicologos',
    data(){
        return{
            men2: false,
			woman2: false,
			otro: false,
			joven: false,
			adolescente: false,
			adulto: false,
			viejo: false,
			terapiaYes: false,
			terapiaNo: false,
        }
    },
    methods:{
        closeModal(e) {
			const close = document.querySelector(".psicologo-terapeutico--close");
			const test = Array.from(
				document.querySelectorAll(".article-headers__test")
			);

			if (e.target.classList.contains("sexo--show")) {
				e.target.classList.remove("sexo--show");
				this.cleanData();
				test.map((tests) =>
					tests.classList.remove("article-headers__test--opacity")
				);
				test[0].classList.add("article-headers__test--opacity");
			}

			if (close) {
				close.addEventListener("click", () => {
					close.parentElement.parentElement.parentElement.classList.remove(
						"sexo--show"
					);
					this.cleanData();
					test.map((tests) =>
						tests.classList.remove("article-headers__test--opacity")
					);
					test[0].classList.add("article-headers__test--opacity");
				});
			}

			document.addEventListener("keydown", (e) => {
				if (e.key === "Escape") {
					this.cleanData();
					close.parentElement.parentElement.parentElement.classList.remove(
						"sexo--show"
					);
					test.map((tests) =>
						tests.classList.remove("article-headers__test--opacity")
					);
					test[0].classList.add("article-headers__test--opacity");
				}
			});
		},
        cleanData() {
			this.men2 = false;
			this.female2 = false;
			this.otro = false;
			this.joven = false;
			this.adolescente = false;
			this.adulto = false;
			this.viejo = false;
            
			this.terapiaYes = false;
			this.terapiaNo = false;
		},
        testControls() {
			const test = Array.from(
				document.querySelectorAll(".article-headers__test")
			);
			const prev = document.getElementById("prev-test");
			const next = document.getElementById("next-test");
			const comenzar = document.getElementById("comenzar");
			const sexo = document.getElementById("sexo");
			const buttons = document.getElementById("psicologo-buttons");

			let cont = 0;

			comenzar.addEventListener("click", () => {
				setClass("next");
				buttons.style.opacity = 1;
			});

			if (prev) {
				prev.addEventListener("click", () => setClass("prev"));
			}

			if (next) {
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
					else {
						cont = 1;
						if (this.men2 || this.woman2 || this.otro) {
							cont = 2;
							if (this.joven || this.adolescente || this.adulto || this.viejo) {
								cont = 3;
								if (this.terapiaYes || this.terapiaNo) {
									cont = 4;
									if (this.$store.state.filter.hombre
                                        || this.$store.state.filter.mujer) {
										cont = 5;
										if (this.$store.state.filter.individual2
                                            || this.$store.state.filter.pareja2) {
											cont = 6;
											buttons.style.opacity = 0;
											setTimeout(() => {
												sexo.classList.remove("sexo--show");
											}, 5000);
											this.cleanData()
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
    computed:{
        hombre: {
			get() {
				return this.$store.state.filter.hombre;
			},
			set(val) {
				this.$store.commit("SET_HOMBRE", val);
			},
		},
		mujer: {
			get() {
				return this.$store.state.filter.mujer;
			},
			set(val) {
				this.$store.commit("SET_MUJER", val);
			},
		},
		individual2: {
			get() {
				return this.$store.state.filter.individual2;
			},
			set(val) {
				this.$store.commit("SET_INDIVIDUAL2", val);
			},
		},
		pareja2: {
			get() {
				return this.$store.state.filter.pareja2;
			},
			set(val) {
				this.$store.commit("SET_PAREJA2", val);
			},
		},
    },
    mounted(){
        return this.testControls();
    }
}
</script>

