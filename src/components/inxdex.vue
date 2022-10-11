<template>
	<div class="bot" id="bot" @click="showBot" data-test-id="bot-test">
		<!-- <div class="icon-fixed" id="icon-fixed" @click="showBot"></div> -->
		<div class="bot-container" id="container">
			<div class="chatbox" 
            data-test-id="chatbot-test">
				<div class="chatbox-header">
					<img
						src="../assets/desktop/perfil2.jpg"
						class="imgRedonda"
						alt="bot image"
						loading="lazy"
					/>
					<h4>Rachael IA</h4>
				</div>
				<div class="body" id="chatbody">
					<p class="alicia alicia--grid"
                    data-test-id="bot-message">
						Hola! Mi nombre es Rachael. Estoy para responder preguntas
						relacionadas con la psicologia. Espero poder ayudarte.
					</p>
					<div class="scroller"></div>
				</div>
				<form
					class="chat"
					autocomplete="off"
					method="POST"
					@submit.prevent="sendMessage(query)"
				>
					<div class="chat__input">
						<input
							type="text"
							name="query"
							id="query"
							class="input"
							placeholder="Escribeme algo..."
							v-model="query"
                            data-test-id="test-input"
						/>
					</div>
					<div class="chat__message" id="message">
						<p>{{ answer }}</p>
					</div>
					<div class="chat__input chat__submit">
						<input
							type="submit"
							value="Send"
							id="btn"
							class="chat__submit-input"
                            data-test-id="test-submit"
						/>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<style scoped>
.bot {
	background-image: url("../assets/desktop/perfil2.jpg");
}
.icon-fixed--close {
	position: fixed;
	bottom: 22px;
	right: 30px;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background-color: steelblue;
	z-index: 100;
	cursor: pointer;
}
.icon-fixed--close::after,
.icon-fixed--close::before {
	content: "";
	position: absolute;
	display: block;
	top: 28px;
	left: 25%;
	width: 50%;
	height: 2px;
	border-radius: 4px;
	background-color: var(--text-color);
}
.icon-fixed--close::after {
	transform: rotate(310deg);
}

.icon-fixed--close::before {
	transform: rotate(45deg);
}
</style>

<script>
import Swal from "sweetalert2";
import axios from "axios";
//var _ = require('lodash');

export default {
	name: "Bot",
	data() {
		return {
			query: "",
			answer: "No puedo darte una respuesta si no has preguntado nada",
			perfil: require("../assets/desktop/perfil2.jpg"),
		};
	},
	watch: {
		question() {
			this.debouncedGetAnswer();
		},
	},
	methods: {
		sendMessage(msg) {
			const message = document.getElementById("message");

			if (this.message !== "") {
				message.classList.add("chat__message--show");
				this.answer = "Esperando a que termines de escribir...";
			}

			const fragment = document.createDocumentFragment();
			axios.defaults.xsrfHeaderName = "X-CSRFToken";
			axios.defaults.xsrfCookieName = "csrftoken";

			this.answer = "Rachael esta pensando...";

			axios({
				method: "GET",
				url: "http://localhost:8000/api/rachael/" + msg,
				data: {
					query: msg,
				},
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then(function(res) {
					const chatBody = document.querySelector(".scroller");
					const divCpu = document.createElement("div");
					const iconVoice = document.createElement("i");
					iconVoice.className = "fas fa-volume-up";
					iconVoice.id = "volume";
					divCpu.className = "alicia visible";
					const img = document.createElement("img");
					img.setAttribute("src", require("../assets/desktop/perfil2.jpg"));
					fragment.append(img);
					divCpu.append(fragment);
					const p = document.createElement("p");
					setTimeout(() => {
						message.classList.remove("chat__message--show");
					}, 800);
					p.innerHTML = res.data;
					if (
						p.innerText ==
						"Hemos detectado una serie de mensajes de sentimientos negativos."
					) {
						p.innerHTML += ` Le recomendamos ir a realizar nuestro <a href="/antecedentes" style="color: var(--danger-color)">test de autoevaluacion</a>`;
						fragment.append(p);
					}
					p.id = "speak";
					fragment.append(p);
					divCpu.append(fragment);
					fragment.append(iconVoice);
					divCpu.append(fragment);
					const divUser = document.createElement("div");
					divUser.className = "me visible";
					const icon = document.createElement("i");
					icon.className = "fas fa-user";
					fragment.append(icon);
					divUser.append(fragment);
					const p2 = document.createElement("p");
					p2.innerHTML = msg;
					fragment.append(p2);
					divUser.append(fragment);
					fragment.append(divUser);
					chatBody.append(fragment);
					chatBody.parentElement.scrollTop = chatBody.scrollHeight;
					setTimeout(() => {
						fragment.append(divCpu);
						chatBody.append(fragment);
						chatBody.parentElement.scrollTop = chatBody.scrollHeight;
					}, 800);

					iconVoice.addEventListener("click", () => {
						speechSynthesis.speak(new SpeechSynthesisUtterance(res.data));
					});
				})
				.catch(() => {
					Swal.fire({
						title: "Rachael",
						text: `Rachael no esta disponible en este momento`,
						icon: "error",
						backdrop: true,
						timer: 10000,
						background: "#161719",
						allowOutsideClick: true,
						allowEscapeKey: true,
						stopKeydownPropagation: false,
						confirmButtonColor: "#972745",
						showCloseButton: true,
					});
					message.classList.remove("chat__message--show");
				});

			this.query = "";
		},
		showBot(e) {
			const bot = document.getElementById("bot");
			const container = document.getElementById("container");

			const openBot = e.target.classList.contains("icon-fixed--close");

			container.classList.toggle("bot-container--show", !openBot);
			bot.classList.toggle("bot", openBot);
			bot.classList.toggle("icon-fixed--close", !openBot);

			// if(e.target.classList.contains('bot')){
			//     container.classList.add('bot-container--show')
			//     bot.classList.remove('bot')
			//     bot.classList.add('icon-fixed--close')
			// }else if(e.target.classList.contains('icon-fixed--close')){
			//     container.classList.remove('bot-container--show')
			//     bot.classList.add('bot')
			//     bot.classList.remove('icon-fixed--close')
			// }
		},
	},
};
</script>
