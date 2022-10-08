<template>
	<section>
		<h2 class="contact-test__title">
			<span> {{test}}</span>
		</h2>
		<article class="contact-test__text">
			<p class="contact-test__text-test">
				{{description}}
			</p>
			<div class="contact-test__name">
				<p class="contact-test__data">
					Nombre del Usuario: <br />
					<span>{{ usuario }}</span>
				</p>
			</div>
			<div class="contact-test__surname">
				<p class="contact-test__data">
					Apellido del Usuario: <br />
					<span>{{ apellido }}</span>
				</p>
			</div>
			<div class="contact-test__date">
				<p class="contact-test__data">
					Fecha a realizar el test: <br />
					<span>{{ fecha }}</span>
				</p>
			</div>
		</article>
	</section>
</template>

<script>
export default {
	name: "Information",
	props: {
		test: {
			type: String,
			default: "Error la recuperar el Test a realziar.",
		},
        description:{
            type: String,
            default: 'No se encontro una descripcion al test seleccionado.'
        },
		usuario: {
			type: String,
			default: "No ha iniciado sesión o no se encuentra su usuario",
		},
		apellido: {
			type: String,
			default: "No registro apellido en los datos.",
		},
		fecha: {
			type: String,
			default: "Sexo anal.",
		},
	},
};
</script>

