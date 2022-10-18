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
						"es a PLUMA como PEZ es a",
					answer: { a: "Aire - Mar", b: "Ave - Escama", c: "Ave - Mar", d: "Huevo - Escama" },
					correctAnswer: "b",
				},
				{
					id: 2,
					question: "es a PASTEL como LIMON es a ",
					answer: { a: "Sabroso - Agrio", b: "Dulce - Aspero", c: "Dulce - Acido", d: "Delicioso - Acido" },
					correctAnswer: "c",
				},
				{
					id: 3,
					question:
						"r,a,s,b,t,c,u,d,?",
					answer: { a: "T", b: "V",c: "M", d: 'A' },
					correctAnswer: "b",
				},
				{
					id: 4,
					question:
						"a,c,b,d,c,e,d,f,e,g",
					answer: { a: "F", b: "I",c: "H", d: 'D' },
					correctAnswer: "a",
				},
				{
					id: 5,
					question:
						"5,11,17,23,29,...",
					answer: { a: "37", b: "34",c: "39", d: '35' },
					correctAnswer: "d",
				},
				{
					id: 6,
					question:
						"Indica el sinónimo de 'pedazo'",
					answer: { a: "Amarrete", b: "Trozo",c: "Humillación", d: 'Lamento' },
					correctAnswer: "b",
				},
				{
					id: 7,
					question:
						"¿Si me encuentro en una maratón y en plena carrera mi persona le gana al segundo, en que posición termino la carreta?",
					answer: { a: "Primero", b: "Tercero",c: "Bleach", d: 'Segundo' },
					correctAnswer: "d",
				},
				{
					id: 8,
					question:
						"Entras en una habitación oscura, con unos fósforos en la mano y no hay electricidad, pero te encuentras una vela, una recarga de gas y una lámpara de petróleo. ¿Que enciendes primero?",
					answer: { a: "Vela", b: "Recarga",c: "Lámpara", d: 'Fósforo' },
					correctAnswer: "b",
				},
				{
					id: 9,
					question:
						"Los siguientes grupos de letras, excepto uno, siguen un mismo patrón. Elije el grupo de letras diferente al resto:",
					answer: { a: "RTW", b: "QOM", c: "IKG", d: 'IKM' },
					correctAnswer: "a",
				},
				{
					id: 10,
					question:
						"Los siguientes grupos de letras, excepto uno, siguen un mismo patró. Eliga el grupo de letras diferente al resto:",
					answer: { a: "H", b: "Z",c: "Q", d: 'T' },
					correctAnswer: "c",
				},
				{
					id: 11,
					question:
						"Enmedio de una frase ¿Cómo se escribe la siguiente palabra? '_irenáico'",
					answer: { a: "p", b: "P"},
					correctAnswer: "a",
				},
				{
					id: 12,
					question:
						"Enmedio de una frase ¿Cómo se escribe la sigueinte palabra? '_ios'",
					answer: { a: "d", b: "D"},
					correctAnswer: "b",
				},
				{
					id: 13,
					question:
						"Enmedio de una frase ¿Cómo se escribe la siguiente palabra? '_irectivo'",
					answer: { a: "d", b: "D"},
					correctAnswer: "a",
				},
				{
					id: 14,
					question:
						"Las dos siguientes sumas ¿Dan un mismo resultado? '3 + 4 + 3 y 2 + 5 + 3'",
					answer: { a: "Verdadero", b: "Falso"},
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