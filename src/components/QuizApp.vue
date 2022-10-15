<template>
	<div class="quiz">
		<Information
			test="Test Psicometrico"
			description="Test psicometrico destinado a poner aqui una larga descripcion"
			:usuario="nombre"
			:apellido="apellido"
			:fecha="fecha"
			class="contact-test"
		/>

		<div class="quiz-container" v-if="questions.length > 0">
			<h2 class="quiz-title">Test <span>Psicometrico</span> para 
				<span>estudiantes</span>.</h2>
			<div class="quiz-container__test">
				<div class="quiz-container__show"
                v-if="index < count">
					<p class="quiz-container__question">
						{{ questions[index]["question"] }}
					</p>
					<label
						:for="key"
						class="quiz-container__label"
						v-for="answer,key in questions[index]['answer']"
						:key="key"
						:class="[
							{ 'quiz-container__label--select': selectedAnswer === '' },
							{
								'quiz-container__label--correct':
									key === questions[index]['correctAnswer'] &&
									selectedAnswer !== '',
							},
							{ 'quiz-container__label--incorrect': selectedAnswer === key },
						]"
					>
						<input
							type="radio"
							:value="key"
							class="hidden"
							:id="key"
							@change="answered"
							:disabled="selectedAnswer !== ''"
                            v-model="selectedAnswer"
						/>
						{{ answer }}
					</label>
					<div class="quiz-container__button">
						<button
							class="quiz-container__button-next"
							v-show="selectedAnswer !== '' && index < count - 1"
							@click="nextQuestion"
						>
							Siguiente &gt;
						</button>
						<button
							class="quiz-container__button-next"
							v-show="selectedAnswer !== '' && index === count - 1"
							@click="showResults"
						>
							Completado!
						</button>
					</div>
				</div>
                <div v-else
                class="quiz-results">
                    <h2 class="quiz-results__title">Resultados del Test Psicometrico.</h2>
                    <div class="quiz-results__answers">
                        <p class="quiz-results__correct">Respuestas Correctas: <span>{{correctAnswer}}</span></p>
                        <p class="quiz-results__incorrect">Respuestas Incorrectas: <span>{{wrongAnswer}}</span></p>
                    </div>
                </div>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import Information from "./subcomponents/Information.vue";
import Footer from "./Footer.vue";
import axios from 'axios'
export default {
	name: "QuizApp",
	components: {
		Information,
		Footer
	},
	data() {
		return {
			index: 0,
			selectedAnswer: "",
            correctAnswer: 0,
            wrongAnswer: 0,
			count: 3,
			fecha: null,
			nombre: "Por favor, primero debe de iniciar sesion" ?? null,
			apellido: "Por favor, primero debe iniciar sesion de su cuenta" ?? null,
			questions: [
				{
					id: 1,
					question:
						"Rolex is a company that specializes in what type of product?",
					answer: { a: "Bags", b: "Watches", c: "Shoes", d: "Laptops" },
					correctAnswer: "b",
				},
				{
					id: 2,
					question: "When did Facebook Launch?",
					answer: { a: "2005", b: "2008", c: "2003", d: "2004" },
					correctAnswer: "b",
				},
				{
					id: 3,
					question:
						"Albert Einstein had trouble with mathematics when he was in school?",
					answer: { a: "True", b: "False" },
					correctAnswer: "a",
				},
			],
		};
	},
	methods: {
		answered(e) {
			this.selectedAnswer = e.target.value;
            (this.selectedAnswer == this.questions[this.index]['correctAnswer'])
                ? this.correctAnswer ++
                : this.wrongAnswer ++
		},
		nextQuestion() {
			this.index++;
			this.selectedAnswer = "";
		},
		showResults() {
            this.index++
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
	beforeMount() {
		return this.getData();
	},
};
</script>