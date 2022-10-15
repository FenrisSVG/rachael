<template>
	<div class="test-container">
		<h2 class="test-container__title" v-scroll-reveal="{ delay: 300 }">
			Test Psicologicos Mentales.
		</h2>
		<section class="test-information" v-scroll-reveal="{ delay: 300 }">
			<div class="test-information__text">
				<p class="test-information__text-info">
					Los Test Psicologicos, son instrumentos experimentales con una firme
					base científica y una amplia validez estadística que tienen como
					finalidad la medición y/o evaluación de alguna característica
					psicológica –ya sea específica o general de un determinado sujeto–,
					tal como lo puede ser, por ejemplo:
					<strong>
						(a) el proceso de medir su nivel de inteligencia para efectos de
						poder comparar su rendimiento intelectual en relación con su grupo
						de pares, (b) la evaluación y medición de los rasgos generales de
						personalidad de un individuo, (c) la determinación de un perfil
						psicológico específico, (d) la constatación –a nivel clínico y
						psiquiátrico–de trastornos mentales y el consiguiente diagnóstico y
						tratamiento psicoterapéutico, y finalmente (e) verificar –ahora en
						el ámbito laboral– si los rasgos psicológicos, las competencias y
						las características personales que distinguen a una determinada
						persona se correlacionan con el perfil del cargo que ha sido
						levantado por alguna organización, sea ésta pública o
						privada.</strong
					>
				</p>
			</div>
			<div class="test-information__img">
				<img src="../assets/desktop/test.jpg" alt="" loading="lazy" />
			</div>
		</section>
		<h2 v-scroll-reveal="{ delay: 300 }" class="test-container__title">
			Tipos de Test Psicologicos.
		</h2>
		<section class="test" v-scroll-reveal="{ delay: 300 }">
			<header class="test-header">
				<img
					src="../assets/desktop/test-psicologico.jpeg"
					alt=""
					loading="lazy"
				/>
			</header>
			<div class="test-body">
				<h2 class="test-body__title">Test De <span>Autoevaluacion.</span></h2>
				<p class="test-body__text">
					Examen dedicado a evaluar la diferente caracteristica psicologica,
					como habilidades, capacidades, cogniciones y sentimientos. En esta
					pagina, ofrecemos un tipo de test psicologico para conocerte mejor a
					ti mismo y para detectr posibles transtorno o problema que tengas...
				</p>
			</div>
			<footer class="test-footer">
				<router-link
					class="test-footer__link"
					rel="nofollow"
					:to="{ name: 'Autoevaluacion', params: { query: 'autoevaluacion' } }"
				>
					<div class="test-footer--icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-arrow-right-short"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
							/>
						</svg>
					</div>
					<span>Realizar</span>
				</router-link>
			</footer>
		</section>
		<!-- PERSONALIDAD -->
		<section class="test" v-scroll-reveal="{ delay: 300 }">
			<header class="test-header">
				<img
					src="../assets/desktop/test-psicologico.jpeg"
					alt=""
					loading="lazy"
				/>
			</header>
			<div class="test-body">
				<h2 class="test-body__title">Test De <span>Personalidad.</span></h2>
				<p class="test-body__text">
					Examen dedicado a evaluar la diferente caracteristica psicologica,
					como habilidades, capacidades, cogniciones y sentimientos. En esta
					pagina, ofrecemos un tipo de test psicologico para conocerte mejor a
					ti mismo y para detectr posibles transtorno o problema que tengas...
				</p>
			</div>
			<footer class="test-footer">
				<router-link
					class="test-footer__link"
					rel="nofollow"
					:to="{ name: 'Personalidad', params: { query: 'personalidad' } }"
				>
					<div class="test-footer--icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-arrow-right-short"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
							/>
						</svg>
					</div>
					<span>Realizar</span>
				</router-link>
			</footer>
		</section>
		<!-- PSICOMETRICO -->
		<section class="test" v-scroll-reveal="{ delay: 300 }">
			<header class="test-header">
				<img
					src="../assets/desktop/test-psicologico.jpeg"
					alt=""
					loading="lazy"
				/>
			</header>
			<div class="test-body">
				<h2 class="test-body__title">Test <span>Psicometrico.</span></h2>
				<p class="test-body__text">
					Examen dedicado a evaluar la diferente caracteristica psicologica,
					como habilidades, capacidades, cogniciones y sentimientos. En esta
					pagina, ofrecemos un tipo de test psicologico para conocerte mejor a
					ti mismo y para detectr posibles transtorno o problema que tengas...
				</p>
			</div>
			<footer class="test-footer">
				<router-link
					class="test-footer__link"
					rel="nofollow"
					:to="{ name: 'QuizApp', params: { query: 'psicometrico' } }"
				>
					<div class="test-footer--icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-arrow-right-short"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
							/>
						</svg>
					</div>
					<span>Realizar</span>
				</router-link>
			</footer>
		</section>
		<Bot />
		<Footer />
	</div>
</template>

<script>
import Bot from "./inxdex.vue";
import Footer from "./Footer.vue";

export default {
	name: "Test",
	components: {
		Bot,
		Footer,
	},
};
</script>


