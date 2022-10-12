<template>
	<div class="quiz">
		<Information
			test="Test Psicometrico"
			description="Test psicometrico destinado a poner aqui una larga descripcion"
			usuario="José"
			apellido="Ramón"
			fecha="hoy"
			class="contact-test"
		/>

		<div class="quiz-container" v-if="questions.length > 0">
			<h2 class="quiz-title">Test Psicometrico para estudiantes.</h2>
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
							@change="answered(e)"
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
							Next %gt
						</button>
						<button
							class="quiz-container__button-next"
							v-show="selectedAnswer !== '' && index === count - 1"
							@click="showResults"
						>
							Finish!
						</button>
					</div>
				</div>
                <div v-else
                class="quiz-results">
                    <h2 class="quiz-results__title">Results</h2>
                    <div class="quiz-results__answers">
                        <p class="quiz-results__correct">Correc Answer: <span>{{correctAnswer}}</span></p>
                        <p class="quiz-results__incorrect">Correc Answer: {{correcAnswer}}</p>
                    </div>
                </div>
			</div>
		</div>
	</div>
</template>

<script>
import Information from "./subcomponents/Information.vue";
export default {
	name: "QuizApp",
	components: {
		Information,
	},
	data() {
		return {
			index: 0,
			selectedAnswer: "",
            correctAnswer: 0,
            wrongAnswer: 0,
			count: 3,
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
					correctAnswer: "b",
				},
			],
		};
	},
	methods: {
		answered(e) {
			this.selectedAnswer = e.target.value;
            (this.selectedAnswer == this.questions[this.index][this.correctAnswer])
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
	},
};
</script>