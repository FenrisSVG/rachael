<template>
	<section class="nosotros">
		<div class="nosotros-container" v-if="images.length > 0">
			<div class="nosotros-container__img">
				<div
					class="nosotros-container__header"
					v-for="item in images"
					:key="item.id"
				>
					<img
						:src="item.src"
						:alt="item.alt"
						loading="lazy"
						class="nosotros-container__image"
					/>
				</div>
                <div class="nosotros-container__text">
                    <p class="nosotros-container__title">¡Conoce acerca de Rachael!</p>
                </div>
			</div>
			<div class="nosotros-information">
				<div class="nosotros-information__flex">
					<div class="nosotros-information__image">
						<i class="fa-solid fa-message nosotros-information__icon"></i>
					</div>
					<div class="nosotros-information__text">
						<h3 class="nosotros-information__title">
							¿Nos Conoces?
						</h3>
						<p class="nosotros-information__description">
							Somos una plataforma de <span>psicologia</span> que nace con el
							objetivo de ayudar a las personas a informarse sobre los
							<span>trastornos mentales</span>
							y toda la informacion acerca de la psicologia y mantener la
							<span>estabilidad emocional</span> que necesitan para su vida
							diaria.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="nosotros-valores">
			<header class="nosotros-valores__header">
				<h3 class="nosotros-valores__title">Nuestros Valores.</h3>
				<div class="nosotros-valores__transform">
					<img
						src="../assets/svg/day67-dog.svg"
						alt="a girl freelancer"
						loading="lazy"
						class="nosotros-container__image"
					/>
				</div>
			</header>
			<footer class="nosotros-valores__footer" v-if="valores.length > 0">
				<section class="nosotros-card" v-for="item in valores" :key="item.id">
					<header class="nosotros-card__header">
						<i :class="item.icon"></i>
						<p class="nosotros-card__title">{{ item.title }}</p>
					</header>
					<footer class="nosotros-card__footer">
						<p class="nosotros-card__description">{{ item.text }}</p>
					</footer>
				</section>
			</footer>
		</div>
	</section>
</template>

<script>
export default {
	name: "Nosotros",
	data() {
		return {
			images: [
				{
					id: 1,
					src: require("../assets/svg/day13-it-girl.svg"),
					alt: "a girl freelancer",
				},
				{
					id: 2,
					src: require("../assets/svg/105-freelancer.svg"),
					alt: "a boy freelancer",
				},
			],
			valores: [
				{
					id: 1,
					icon: "fa-solid fa-hand-middle-finger nosotros-card__icon",
					title: "Somos autenticos.",
					text:
						"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus doloribus eligendi nisi neque necessitatibus harum consequuntur asperiores a quasi. Omnis.",
				},
				{
					id: 2,
					icon: "fa-solid fa-person-hiking nosotros-card__icon",
					title: "Pensamos en Grande.",
					text:
						"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus doloribus eligendi nisi neque necessitatibus harum consequuntur asperiores a quasi. Omnis.",
				},
				{
					id: 3,
					icon: "fa-solid fa-thumbs-up nosotros-card__icon",
					title: "Nos Aventuramos.",
					text:
						"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus doloribus eligendi nisi neque necessitatibus harum consequuntur asperiores a quasi. Omnis.",
				},
				{
					id: 4,
					icon: "fa-solid fa-person-praying nosotros-card__icon",
					title: "Te ayudamos con tus problemas.",
					text:
						"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus doloribus eligendi nisi neque necessitatibus harum consequuntur asperiores a quasi. Omnis.",
				},
			],
		};
	},
};
</script>
