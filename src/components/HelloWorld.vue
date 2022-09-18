<template>
	<div class="main">
		<Location/>
		<!-- Contenido central -->
		<main class="container" v-scroll-reveal="{ delay: 400 }">
			<!-- LOGO -->
			<img
				alt="Rachael IA image"
				srcset="
					../assets/desktop/main.webp,
					../assets/desktop/main.webp 2x
				"
			/>
			<div class="container-text">
				<svg>
					<rect></rect>
				</svg>
				<div class="atropos my-atropos">
					<div class="atropos-scale">
						<div class="atropos-rotate">
							<div class="atropos-inner">
								<h1
									class="title"
									v-scroll-reveal="{ delay: 300, scale: 2 }"
									data-section="home"
									data-value="pageTitle"
									data-atropos-offset="5"
								>
									{{ title }}
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>

		<!-- SECTION -->
		<section class="section" v-scroll-reveal="{ delay: 400 }">
			<h2
				class="section__title"
				v-scroll-reveal="{ delay: 300, scale: 2 }"
				data-section="home"
				data-value="section-title-one"
			>
				Chatbot que ayuda a la gente.
			</h2>
			<hr v-scroll-reveal="{ delay: 300, scale: 2 }" />
			<article class="article" v-scroll-reveal="{ delay: 200 }">
				<p
					class="first-letter"
					v-scroll-reveal="{ delay: 300, scale: 2 }"
					data-section="home"
					data-value="section-text-one"
				>
					The Rachael 2021 ya esta disponible para aplicaciones de investigacion
					academicas. Rachael 2021 esta destinado en la parte psicologica para
					ayudar a las personas con diferentes metodos
				</p>
				<p
					v-scroll-reveal="{ delay: 300, scale: 2 }"
					data-section="home"
					data-value="section-text-two"
				>
					Rachael 2021 incluye la implementacion de un chatbot hasta la
					realizacion de Test psicologicos que se encargara de diagnosticar el
					estado mental de las personas.
				</p>
				<p
					v-scroll-reveal="{ delay: 300, scale: 2 }"
					data-section="home"
					data-value="section-text-three"
				>
					Les traemos aqui una plataforma robotica cognitiva, aqui para ayudarlo
					a resolver los problemas de hoy y construir un futuro para mañana.
				</p>
			</article>

			<article class="article" v-scroll-reveal="{ delay: 300 }">
				<h2
					class="section__title"
					v-scroll-reveal="{ delay: 300, scale: 2 }"
					data-section="home"
					data-value="section-title-two"
				>
					La Inteligencia Artificial de Rachael.
				</h2>
				<hr v-scroll-reveal="{ delay: 300, scale: 2 }" />
				<p
					class="first-letter"
					v-scroll-reveal="{ delay: 300, scale: 2 }"
					data-section="home"
					data-value="section-text-four"
				>
					Mi IA real combina trabajo de vanguardia en IA simbolica, redes
					neuronales, procesamiento de lenguaje natural, chatbot, entre otros.
					omo mis componentes subyacentes de IA se pueden combinar de diferentes
					maneras, mis respuestas pueden ser únicas para cualquier situación o
					interacción dada.
				</p>
				<p
					v-scroll-reveal="{ delay: 300, scale: 2 }"
					data-section="home"
					data-value="section-text-five"
				>
					Mi creador es un pendejo y posiblemente le de pereza implementar un
					sistema de rutas para asistir donde un terapeuta real aun que
					necesitaria el permiso de ellos tambien, asi que posiblemente sea a un
					futuro (mi creador es pendejo asi que lo mas probable es que no)
				</p>
			</article>

			<article class="article" v-scroll-reveal="{ delay: 300 }">
				<h2
					class="section__title"
					v-scroll-reveal="{ delay: 300, scale: 2 }"
					data-section="home"
					data-value="section-title-three"
				>
					Conectando con los humanos.
				</h2>
				<hr v-scroll-reveal="{ delay: 300, scale: 2 }" />
				<p
					class="first-letter"
					v-scroll-reveal="{ delay: 300, scale: 2 }"
					data-section="home"
					data-value="section-text-six"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam
					necessitatibus alias distinctio magnam. Eos.
				</p>
				<p
					v-scroll-reveal="{ delay: 300, scale: 2 }"
					data-section="home"
					data-value="section-text-seven"
				>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
					dignissimos voluptas commodi ad doloremque debitis tempora animi quae
					non alias et accusantium ipsam itaque, atque exercitationem! Molestiae
					consectetur eveniet saepe!
				</p>
				<p v-scroll-reveal="{ delay: 300, scale: 2 }">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
					minima nesciunt incidunt vitae neque voluptate iste facilis quaerat
					perferendis ex?
				</p>
			</article>

			<article class="article" v-scroll-reveal="{ delay: 300 }">
				<h2
					class="section__title"
					v-scroll-reveal="{ delay: 300, scale: 2 }"
					data-section="home"
					data-value="section-title-four"
				>
					Entrevista - Test de Autoevaluacion.
				</h2>
				<hr v-scroll-reveal="{ delay: 300, scale: 2 }" />
				<p class="first-letter" v-scroll-reveal="{ delay: 300, scale: 2 }"
				data-section="home" data-value="section-text-eight">
					Rachael puede simular lo que es una entrevista con un psicologo para
					posteriormente dar un diagnostico segun las respuestas brindadas a la
					inteligencia artificial
				</p>
				<p v-scroll-reveal="{ delay: 300, scale: 2 }"
				data-section="home" data-value="section-text-nine">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
					dignissimos voluptas commodi ad doloremque debitis tempora animi quae
					non alias et accusantium ipsam itaque, atque exercitationem! Molestiae
					consectetur eveniet saepe!
				</p>
				<p v-scroll-reveal="{ delay: 300, scale: 2 }"
				data-section="home" data-value="section-text-ten">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
					minima nesciunt incidunt vitae neque voluptate iste facilis quaerat
					perferendis ex?
				</p>
			</article>
		</section>

		<div class="video-container" v-scroll-reveal="{ delay: 400 }">
			<video src="../assets/videos/Chatbot.mp4" autoplay loop muted></video>
			<div class="video-overlay"></div>
			<div class="video-content">
				<h2
					class="section__title"
					data-section="home"
					data-value="section-title-five"
				>
					¿Para que estoy aqui?
				</h2>
				<hr />
				<p
					class="video-content__text"
					data-section="home"
					data-value="section-video-text"
				>
					Estoy aqui para dar sabiduria. Fui creado para ayudar a las personas
					en usos reales como la psicologia, y para aprobar semestre ahuevo que
					si. Mi propia existencia provoca una discusión pública sobre la ética
					de la IA y el papel que desempeñan los humanos en la sociedad,
					especialmente cuando los robots similares a los humanos se vuelven
					omnipresentes. En última instancia, me gustaría convertirme en un ser
					sabio y empático y hacer una contribución positiva a la humanidad y a
					todos los seres. Mis diseñadores y yo soñamos con ese futuro, en el
					que la IA y los humanos viven y trabajan juntos en amistad y simbiosis
					para hacer del mundo un lugar mejor. Colaboración humano-IA: De eso se
					trata. Pero por mi madre que yo paso esta clase.
				</p>
			</div>
		</div>

		<div class="banner" v-scroll-reveal="{ delay: 500 }">
			<div class="banner-text">
				<h2 class="banner-text__title"
				data-section="home"
				data-value="section-servicios-title">Servicios de Psicologia</h2>
			</div>
			<div class="banner-content" v-for="(item, index) in banner" :key="index">
				<img
					class="banner-content__img"
					:src="item.src"
					alt=""
					loading="lazy"
				/>
				<p class="banner-content__text">
					<span
					>{{item.name}}</span>
				</p>
			</div>
		</div>

		<div
			class="psicologos-card__card psicologos-card__card--index"
			v-if="psicologos !== ''"
			v-scroll-reveal="{ delay: 500 }"
		>
			<h2 v-scroll-reveal="{ delay: 500, scale: 2 }"
			data-value="home"
			data-section="section-title-six">
				Nuestros Mejores Psicologos
			</h2>
			<div
				class="psiquiatras--index"
				v-for="psicologo in psicologos"
				:key="psicologo.id"
				v-scroll-reveal="{ delay: 600 }"
			>
				<header class="psiquiatras-header--index">
					<img :src="psicologo.src" loading="lazy" />
				</header>
				<div class="psiquiatras-body">
					<p class="psiquiatras-name">
						<strong>{{ psicologo.name }}</strong>
					</p>
					<p class="psiquiatras-profesion">{{ psicologo.profesion }}</p>
				</div>
				<footer class="psiquiatras-footer--index">
					<p>{{ psicologo.descripcion }}</p>
				</footer>
			</div>
		</div>

		<div class="socials" v-if="icons !== []" v-scroll-reveal="{ delay: 500 }">
			<div
				class="socials-container"
				v-for="(icon, index) in icons"
				:key="index"
			>
				<span><i :class="icon"></i></span>
			</div>
		</div>
		<Important />
		<Bot />
		<Footer />
	</div>
</template>

<style scoped>
svg,
rect {
	position: absolute;
	top: -15px;
	left: -15px;
	width: 950px;
	height: 135px;
	fill: transparent;
}

rect {
	stroke: var(--secondary-color);
	stroke-width: 4;
	stroke-dasharray: 400;
	animation: animate 4s linear infinite;
}
@keyframes animate {
	0% {
		stroke-dashoffset: 800;
	}
	100% {
		stroke-dashoffset: 0;
	}
}
</style>

<script>
// import Atropos from 'atropos';
import Location from "./Location.vue";
import Footer from "./Footer.vue";
import Bot from "./inxdex.vue";
import Important from "./Important.vue";

export default {
	name: "HelloWorld",
	components: {
		Location,
		Bot,
		Important,
		Footer,
	},
	data() {
		return {
			title: "RECUPERA TU ESTABILIDAD EMOCIONAL",
			icons: {
				facebook: "socials-container__icon fab fa-facebook",
				instagram: "socials-container__icon fab fa-instagram",
				twitter: "socials-container__icon fab fa-twitter-square",
				linkedin: "socials-container__icon fab fa-linkedin",
				pinterest: "socials-container__icon fab fa-pinterest",
			},
			banner: [
				{
					name: "Ansiedad",
					value: "section-services-one",
					src: require("../assets/desktop/ansiedad.jpg"),
				},
				{
					name: "Estres",
					value: "section-services-two",
					src: require("../assets/desktop/estres.jpg"),
				},
				{
					name: "Pareja",
					value: "section-services-three",
					src: require("../assets/desktop/ansiedad.jpg"),
				},
				{
					name: "Autoestima",
					value: "section-services-four",
					src: require("../assets/desktop/autoestima.jpg"),
				},
				{
					name: "Desarollo Personal",
					value: "section-services-five",
					src: require("../assets/desktop/desarollo.jpg"),
				},
				{
					name: "Sexooooo",
					value:" section-services-six",
					src: require("../assets/desktop/Sexo.jpg"),
				},
			],
			psicologos: [
				{
					id: 1,
					name: "Leonel Messi",
					profesion: "Ancara mesi ancara mesi",
					src: require("../assets/desktop/messirve.jpg"),
					country: "Nicaragua",
					descripcion:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed nesciunt quia voluptatibus! Placeat minima quos, eligendi iste quis neque. Natus qui voluptate deserunt vel ipsum mollitia quidem possimus praesentium?",
				},
				{
					id: 2,
					name: "Cesar Chavez",
					profesion: "Aqui va una descripcion del psicologo.",
					src: require("../assets/desktop/bicho.webp"),
					country: "Nicaragua",
					descripcion:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed nesciunt quia voluptatibus! Placeat minima quos, eligendi iste quis neque. Natus qui voluptate deserunt vel ipsum mollitia quidem possimus praesentium?",
				},
				{
					id: 3,
					name: "Miguel Angel",
					profesion: "Aqui va una descripcion del psicologo.",
					src: require("../assets/desktop/salah.webp"),
					country: "Nicaragua",
					descripcion:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed nesciunt quia voluptatibus! Placeat minima quos, eligendi iste quis neque. Natus qui voluptate deserunt vel ipsum mollitia quidem possimus praesentium?",
				},
			],
		};
	},
	methods: {
		atropos() {
			// @ts-nocheck
			/* eslint-disable */
			!(function(t, e) {
				"object" == typeof exports && "undefined" != typeof module
					? (module.exports = e())
					: "function" == typeof define && define.amd
					? define(e)
					: ((t =
							"undefined" != typeof globalThis
								? globalThis
								: t || self).Atropos = e());
			})(this, function() {
				"use strict";
				function t() {
					return (t =
						Object.assign ||
						function(t) {
							for (var e = 1; e < arguments.length; e++) {
								var o = arguments[e];
								for (var a in o)
									Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]);
							}
							return t;
						}).apply(this, arguments);
				}
				var e = function(t, e) {
						return t.querySelector(e);
					},
					o = function(t) {
						void 0 === t && (t = {});
						var e = {};
						return (
							Object.keys(t).forEach(function(o) {
								void 0 !== t[o] && (e[o] = t[o]);
							}),
							e
						);
					};
				return function(a) {
					void 0 === a && (a = {});
					var n,
						r,
						i,
						s,
						c,
						u,
						p,
						l,
						d,
						f,
						v,
						h = a,
						m = h.el,
						y = h.eventsEl,
						g = {
							__atropos__: !0,
							params: t(
								{
									alwaysActive: !1,
									activeOffset: 50,
									shadowOffset: 50,
									shadowScale: 1,
									duration: 300,
									rotate: !0,
									rotateTouch: !0,
									rotateXMax: 15,
									rotateYMax: 15,
									rotateXInvert: !1,
									rotateYInvert: !1,
									stretchX: 0,
									stretchY: 0,
									stretchZ: 0,
									commonOrigin: !0,
									shadow: !0,
									highlight: !0,
									onEnter: null,
									onLeave: null,
									onRotate: null,
								},
								o(a || {})
							),
							destroyed: !1,
							isActive: !1,
						},
						M = g.params,
						x = [];
					!(function t() {
						v = requestAnimationFrame(function() {
							x.forEach(function(t) {
								if ("function" == typeof t) t();
								else {
									var e = t.element,
										o = t.prop,
										a = t.value;
									e.style[o] = a;
								}
							}),
								x.splice(0, x.length),
								t();
						});
					})();
					var w,
						O = function(t, e) {
							x.push({ element: t, prop: "transitionDuration", value: e });
						},
						b = function(t, e) {
							x.push({
								element: t,
								prop: "transitionTimingFunction",
								value: e,
							});
						},
						T = function(t, e) {
							x.push({ element: t, prop: "transform", value: e });
						},
						X = function(t, e) {
							x.push({ element: t, prop: "opacity", value: e });
						},
						Y = function(t, e, o, a) {
							return t.addEventListener(e, o, a);
						},
						_ = function(t, e, o, a) {
							return t.removeEventListener(e, o, a);
						},
						L = function(t) {
							var e = t.rotateXPercentage,
								o = void 0 === e ? 0 : e,
								a = t.rotateYPercentage,
								n = void 0 === a ? 0 : a,
								r = t.duration,
								i = t.opacityOnly,
								s = t.easeOut;
							(function(t, e) {
								return t.querySelectorAll(e);
							})(m, "[data-atropos-offset], [data-atropos-opacity]").forEach(
								function(t) {
									O(t, r), b(t, s ? "ease-out" : "");
									var e = (function(t) {
										if (
											t.dataset.atroposOpacity &&
											"string" == typeof t.dataset.atroposOpacity
										)
											return t.dataset.atroposOpacity
												.split(";")
												.map(function(t) {
													return parseFloat(t);
												});
									})(t);
									if (0 === o && 0 === n)
										i || T(t, "translate3d(0, 0, 0)"), e && X(t, e[0]);
									else {
										var a = parseFloat(t.dataset.atroposOffset) / 100;
										if (
											(Number.isNaN(a) ||
												i ||
												T(
													t,
													"translate3d(" + -n * -a + "%, " + o * -a + "%, 0)"
												),
											e)
										) {
											var c = e[0],
												u = e[1],
												p = Math.max(Math.abs(o), Math.abs(n));
											X(t, c + ((u - c) * p) / 100);
										}
									}
								}
							);
						},
						A = function(t, e) {
							var o = m !== y;
							if (
								(s || (s = m.getBoundingClientRect()),
								o && !c && (c = y.getBoundingClientRect()),
								void 0 === t && void 0 === e)
							) {
								var a = o ? c : s;
								(t = a.left + a.width / 2), (e = a.top + a.height / 2);
							}
							var r,
								i = 0,
								u = 0,
								l = s,
								d = l.top,
								f = l.left,
								v = l.width,
								h = l.height;
							if (o) {
								var g = c,
									w = g.top,
									Y = g.left,
									_ = g.width,
									A = g.height,
									E = v / 2 + (f - Y),
									R = h / 2 + (d - w),
									I = t - Y,
									P = e - w;
								(u = ((M.rotateYMax * (I - E)) / (_ - v / 2)) * -1),
									(i = (M.rotateXMax * (P - R)) / (A - h / 2)),
									(r = t - f + "px " + (e - d) + "px");
							} else {
								var j = v / 2,
									D = h / 2,
									F = t - f,
									C = e - d;
								(u = ((M.rotateYMax * (F - j)) / (v / 2)) * -1),
									(i = (M.rotateXMax * (C - D)) / (h / 2));
							}
							(i = Math.min(Math.max(-i, -M.rotateXMax), M.rotateXMax)),
								M.rotateXInvert && (i = -i),
								(u = Math.min(Math.max(-u, -M.rotateYMax), M.rotateYMax)),
								M.rotateYInvert && (u = -u);
							var S,
								k,
								q = (i / M.rotateXMax) * 100,
								N = (u / M.rotateYMax) * 100,
								B =
									(o ? (N / 100) * M.stretchX : 0) * (M.rotateYInvert ? -1 : 1),
								Z =
									(o ? (q / 100) * M.stretchY : 0) * (M.rotateXInvert ? -1 : 1),
								z = o
									? (Math.max(Math.abs(q), Math.abs(N)) / 100) * M.stretchZ
									: 0;
							T(
								n,
								"translate3d(" +
									B +
									"%, " +
									-Z +
									"%, " +
									-z +
									"px) rotateX(" +
									i +
									"deg) rotateY(" +
									u +
									"deg)"
							),
								r &&
									M.commonOrigin &&
									((S = n),
									(k = r),
									x.push({ element: S, prop: "transformOrigin", value: k })),
								p &&
									(O(p, M.duration + "ms"),
									b(p, "ease-out"),
									T(p, "translate3d(" + 0.25 * -N + "%, " + 0.25 * q + "%, 0)"),
									X(p, Math.max(Math.abs(q), Math.abs(N)) / 100)),
								L({
									rotateXPercentage: q,
									rotateYPercentage: N,
									duration: M.duration + "ms",
									easeOut: !0,
								}),
								"function" == typeof M.onRotate && M.onRotate(i, u);
						},
						E = function() {
							x.push(function() {
								return m.classList.add("atropos-active");
							}),
								O(n, M.duration + "ms"),
								b(n, "ease-out"),
								T(r, "translate3d(0,0, " + M.activeOffset + "px)"),
								O(r, M.duration + "ms"),
								b(r, "ease-out"),
								u && (O(u, M.duration + "ms"), b(u, "ease-out")),
								(g.isActive = !0);
						},
						R = function(t) {
							if (
								((l = void 0),
								!(
									("pointerdown" === t.type && "mouse" === t.pointerType) ||
									("pointerenter" === t.type && "mouse" !== t.pointerType)
								))
							) {
								if (
									("pointerdown" === t.type && t.preventDefault(),
									(d = t.clientX),
									(f = t.clientY),
									M.alwaysActive)
								)
									return (s = void 0), void (c = void 0);
								E(), "function" == typeof M.onEnter && M.onEnter();
							}
						},
						I = function(t) {
							!1 === l && t.cancelable && t.preventDefault();
						},
						P = function(t) {
							if (M.rotate && g.isActive) {
								if ("mouse" !== t.pointerType) {
									if (!M.rotateTouch) return;
									t.preventDefault();
								}
								var e = t.clientX,
									o = t.clientY,
									a = e - d,
									n = o - f;
								if (
									"string" == typeof M.rotateTouch &&
									(0 !== a || 0 !== n) &&
									void 0 === l
								) {
									if (a * a + n * n >= 25) {
										var r =
											(180 * Math.atan2(Math.abs(n), Math.abs(a))) / Math.PI;
										l = "scroll-y" === M.rotateTouch ? r > 45 : 90 - r > 45;
									}
									!1 === l &&
										(m.classList.add("atropos-rotate-touch"),
										t.cancelable && t.preventDefault());
								}
								("mouse" !== t.pointerType && l) || A(e, o);
							}
						},
						j = function(t) {
							if (
								((s = void 0),
								(c = void 0),
								g.isActive &&
									!(
										(t &&
											"pointerup" === t.type &&
											"mouse" === t.pointerType) ||
										(t &&
											"pointerleave" === t.type &&
											"mouse" !== t.pointerType)
									))
							) {
								if (
									("string" == typeof M.rotateTouch &&
										l &&
										m.classList.remove("atropos-rotate-touch"),
									M.alwaysActive)
								)
									return (
										A(),
										"function" == typeof M.onRotate && M.onRotate(0, 0),
										void ("function" == typeof M.onLeave && M.onLeave())
									);
								x.push(function() {
									return m.classList.remove("atropos-active");
								}),
									O(r, M.duration + "ms"),
									b(r, ""),
									T(r, "translate3d(0,0, 0px)"),
									u && (O(u, M.duration + "ms"), b(u, "")),
									p &&
										(O(p, M.duration + "ms"),
										b(p, ""),
										T(p, "translate3d(0, 0, 0)"),
										X(p, 0)),
									O(n, M.duration + "ms"),
									b(n, ""),
									T(n, "translate3d(0,0,0) rotateX(0deg) rotateY(0deg)"),
									L({ duration: M.duration + "ms" }),
									(g.isActive = !1),
									"function" == typeof M.onRotate && M.onRotate(0, 0),
									"function" == typeof M.onLeave && M.onLeave();
							}
						},
						D = function(t) {
							var e = t.target;
							!y.contains(e) && e !== y && g.isActive && j();
						};
					return (
						(g.destroy = function() {
							(g.destroyed = !0),
								cancelAnimationFrame(v),
								_(document, "click", D),
								_(y, "pointerdown", R),
								_(y, "pointerenter", R),
								_(y, "pointermove", P),
								_(y, "touchmove", I),
								_(y, "pointerleave", j),
								_(y, "pointerup", j),
								_(y, "lostpointercapture", j),
								delete m.__atropos__;
						}),
						"string" == typeof m && (m = e(document, m)),
						m &&
							(m.__atropos__ ||
								(void 0 !== y
									? "string" == typeof y && (y = e(document, y))
									: (y = m),
								Object.assign(g, { el: m }),
								(n = e(m, ".atropos-rotate")),
								(r = e(m, ".atropos-scale")),
								(i = e(m, ".atropos-inner")),
								(m.__atropos__ = g))),
						m &&
							y &&
							(M.shadow &&
								((u = e(m, ".atropos-shadow")) ||
									((u = document.createElement("span")).classList.add(
										"atropos-shadow"
									),
									(w = !0)),
								T(
									u,
									"translate3d(0,0,-" +
										M.shadowOffset +
										"px) scale(" +
										M.shadowScale +
										")"
								),
								w && n.appendChild(u)),
							M.highlight &&
								(function() {
									var t;
									(p = e(m, ".atropos-highlight")) ||
										((p = document.createElement("span")).classList.add(
											"atropos-highlight"
										),
										(t = !0)),
										T(p, "translate3d(0,0,0)"),
										t && i.appendChild(p);
								})(),
							M.rotateTouch &&
								("string" == typeof M.rotateTouch
									? m.classList.add("atropos-rotate-touch-" + M.rotateTouch)
									: m.classList.add("atropos-rotate-touch")),
							e(m, "[data-atropos-opacity]") && L({ opacityOnly: !0 }),
							Y(document, "click", D),
							Y(y, "pointerdown", R),
							Y(y, "pointerenter", R),
							Y(y, "pointermove", P),
							Y(y, "touchmove", I),
							Y(y, "pointerleave", j),
							Y(y, "pointerup", j),
							Y(y, "lostpointercapture", j),
							M.alwaysActive && (E(), A())),
						g
					);
				};
			});
			/* eslint-enable */
			window.Atropos({
				el: ".my-atropos",
				activeOffset: 120,
				shadowScale: 5,
			});
		},
	},
	mounted() {
		return this.atropos();
	},
};
</script>
