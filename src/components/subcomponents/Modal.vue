<template>
	<div class="modal" @click="modalShow" v-scroll-reveal="{ delay: 100 }">
		<h2 class="modal__title">Test de Personalidad</h2>
		<div class="modal-content" :class="contentClass">
			<h3 class="trastorno-diagnosticado" :class="trastornoClass">
				Resultado:
			</h3>
			<div class="trastorno-diagnosticado__causas">
				<h3 class="modal-content__title">
					Personalidad <span>{{ personalidad }}</span>
				</h3>
				<p class="modal-content__text">
					Eres una persona {{ personalidad }} lo que significa que te gusta
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
					dolore culpa ducimus officia itaque soluta nostrum rerum perspiciatis
					nesciunt corporis, excepturi fuga aspernatur sed ex porro sapiente
					consectetur velit laborum..
				</p>
			</div>
			<hr />
			<p class="important">
				<strong class="important--color">Importante</strong>, esto solo es un
				diagnostico previo, no es oficial el diagnostico y le recomendamos ir
				donde un experto a validar nuestra informacion
			</p>
		</div>
	</div>
</template>

<style scoped>
    .important--color {
        color: var(--secondary-color);
    }
</style>

<script>
export default {
	name: "Modal",
	props: {
		contentClass: {
			type: String,
			default: "",
		},
		trastornoClass: {
			type: String,
			default: "",
		},
        personalidad: {
            type: String,
            default: ""
        }

	},
    methods: {
        modalShow(e){
            if(e.target.classList.contains('modal')){
                e.target.classList.remove('modal--show') 
            }
        }
    }
};
</script>
