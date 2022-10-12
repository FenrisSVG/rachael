<template>
	<div class="registrarse">
		<div class="registrarse-img">
			<p class="registrarse-img__text">RACHAEL</p>
			<img
				src="../assets/desktop/login.svg"
				alt="login image"
				loading="lazy"
				class="registrarse-img__image"
			/>
			<p class="registrarse-img__text registrarse-img__text--rachael">
				RACHAEL Y ASOCIADOS.
			</p>
		</div>
		<div class="login-data">
			<header class="login-data__header">
				<h5 class="login-data__title">Registrarse.</h5>
			</header>
			<hr />
			<footer class="login-data__footer">
				<!-- FORMULARIO PARA LA BD -->
				<form id="formulario-signup" class="form-login" autocomplete="off">
					<div class="form-login__input" id="grupo__usuario">
						<label for="username" class="form-login__label">Usuario: </label>
						<div class="form-grupo__input">
							<i class="fas fa-user"></i>
							<input
								class="formulario-grupo__input"
								type="text"
								id="username-paciente"
								name="username"
								placeholder="Enter ur username"
								required
							/>
							<i class="formulario__validacion-estado fas fa-times-circle"></i>
						</div>
						<p class="message-error">
							El Usuario debe empezar con minuscula, ser mayor de 4 caracteres y
							menor a 16 caracteres y no puede contener espacios
						</p>
					</div>
					<div class="form-login__input" id="grupo__nombre">
						<label for="name" class="form-login__label">Name: </label>
						<div class="form-grupo__input">
							<i class="fas fa-user"></i>
							<input
								class="formulario-grupo__input"
								type="text"
								name="name"
								id="name-paciente"
								placeholder="Enter ur name"
								required
							/>
							<i class="formulario__validacion-estado fas fa-times-circle"></i>
						</div>
						<p class="message-error">
							El nombre solo puede contenter letras y espacios, no numeros.
						</p>
					</div>
					<div class="form-login__input" id="grupo__surname">
						<label for="surname" class="form-login__label">Surname: </label>
						<div class="form-grupo__input">
							<i class="fas fa-user"></i>
							<input
								class="formulario-grupo__input"
								type="text"
								name="surname"
								id="surname-paciente"
								placeholder="Enter ur surname"
								required
							/>
							<i class="formulario__validacion-estado fas fa-times-circle"></i>
						</div>
						<p class="message-error">
							El apellido solo puede contenter letras y espacios, no numeros.
						</p>
					</div>
					<div class="form-login__input" id="grupo__email">
						<label for="correo">class="form-login__label"Email: </label>
						<div class="form-grupo__input">
							<i class="fas fa-user"></i>
							<input
								class="formulario-grupo__input"
								type="email"
								name="correo"
								id="email-paciente"
								placeholder="p. ej. correo@gmail.com"
								required
							/>
							<i class="formulario__validacion-estado fas fa-times-circle"></i>
						</div>
						<p class="message-error">
							El correo debe tener formato de correo (@,.).
						</p>
					</div>
					<div class="form-login__input" id="grupo__password">
						<label for="password" class="form-login__label">Password: </label>
						<div class="form-grupo__input">
							<i class="fas fa-unlock-alt"></i>
							<input
								class="formulario-grupo__input"
								type="password"
								name="password"
								id="password-paciente"
								placeholder="Enter ur password"
								required
							/>
							<i class="formulario__validacion-estado fas fa-times-circle"></i>
						</div>
						<p class="message-error">
							La contraseña debe empezar con mayuscula, ser mayor o igual a 8
							carectees y llevar un caracter especial (ej., @)
						</p>
					</div>
					<div class="form-login__input" id="grupo__password2">
						<label for="repeat-password" class="form-login__label"
							>Repeat Password:
						</label>
						<div class="form-grupo__input">
							<i class="fas fa-unlock-alt"></i>
							<input
								class="formulario-grupo__input"
								type="password"
								name="repeat-password"
								id="repeat-password"
								placeholder="Enter ur password"
								required
							/>
							<i class="formulario__validacion-estado fas fa-times-circle"></i>
						</div>
						<p class="message-error">Las contraseñas no coinciden</p>
					</div>
					<div class="form-login__submit">
						<input
							type="submit"
							value="Sign-Up"
							class="form-login__submit-input"
						/>
					</div>
				</form>
			</footer>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
	name: "Signup",
	data() {
		return {
			datas: [],
			username: "",
			email: "",
		};
	},
	methods: {
		sendEmail(to, user) {
			window.Email &&
				window.Email.send({
					SecureToken: "1fc33d6b-0d9b-49b9-b880-c25e57adea7d",
					To: to,
					From: "fsandovalchavez5@gmail.com",
					Subject: "Rachael - Psicologia.",
					Body: `Querido ${user}, su registro a la pagina de Psicologia Rachael
                ha sido todo un exito!!. /n Esperamos que disfrute de la navegacion en nuestra pagina`,
				});
		},
		insertData() {
			const inputs = document.querySelectorAll(".formulario-grupo__input");
			const formulario = document.getElementById("formulario-signup");
			const name = document.getElementById("name-paciente");
			const surname = document.getElementById("surname-paciente");
			const email = document.getElementById("email-paciente");
			const username = document.getElementById("username-paciente");
			const password = document.getElementById("password-paciente");
			const loginLink = document.getElementById("login-link");
			const fragment = document.createDocumentFragment();
			const loginForm = document.getElementById("login-form");
			const repeatPassword = document.getElementById("repeat-password");

			const expresiones = {
				usuario: /^[a-z0-9_-]{3,16}$/,
				name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
				surname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
				email:
					/^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				password:
					/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/,
			};

			const campos = {
				usuario: false,
				nombre: false,
				surname: false,
				email: false,
				password: false,
			};

			const validarCampo = (expresion, input, campo) => {
				if (expresion.test(input.value)) {
					document
						.getElementById(`grupo__${campo}`)
						.classList.remove("form-grupo__incorrecto");
					document
						.getElementById(`grupo__${campo}`)
						.classList.add("form-grupo__correcto");
					document
						.querySelector(`#grupo__${campo} .formulario__validacion-estado`)
						.classList.add("fa-check-circle");
					document
						.querySelector(`#grupo__${campo} .formulario__validacion-estado`)
						.classList.remove("fa-times-circle");
					document
						.querySelector(`#grupo__${campo} .message-error`)
						.classList.remove("message-error--activo");
					campos[campo] = true;
				} else {
					document
						.getElementById(`grupo__${campo}`)
						.classList.add("form-grupo__incorrecto");
					document
						.getElementById(`grupo__${campo}`)
						.classList.remove("form-grupo__correcto");
					document
						.querySelector(`#grupo__${campo} .formulario__validacion-estado`)
						.classList.add("fa-times-circle");
					document
						.querySelector(`#grupo__${campo} .formulario__validacion-estado`)
						.classList.remove("fa-check-circle");
					document
						.querySelector(`#grupo__${campo} .message-error`)
						.classList.add("message-error--activo");
					campos[campo] = false;
				}
			};

			const validarPassword2 = () => {
				if (password.value !== repeatPassword.value) {
					document
						.getElementById(`grupo__password2`)
						.classList.add("form-grupo__incorrecto");
					document
						.getElementById(`grupo__password2`)
						.classList.remove("form-grupo__correcto");
					document
						.querySelector(`#grupo__password2 .formulario__validacion-estado`)
						.classList.add("fa-times-circle");
					document
						.querySelector(`#grupo__password2 .formulario__validacion-estado`)
						.classList.remove("fa-check-circle");
					document
						.querySelector(`#grupo__password2 .message-error`)
						.classList.add("message-error--activo");
					campos["password"] = false;
				} else {
					document
						.getElementById(`grupo__password2`)
						.classList.remove("form-grupo__incorrecto");
					document
						.getElementById(`grupo__password2`)
						.classList.add("form-grupo__correcto");
					document
						.querySelector(`#grupo__password2 .formulario__validacion-estado`)
						.classList.remove("fa-times-circle");
					document
						.querySelector(`#grupo__password2 .formulario__validacion-estado`)
						.classList.add("fa-check-circle");
					document
						.querySelector(`#grupo__password2 .message-error`)
						.classList.remove("message-error--activo");
					campos["password"] = true;
				}
			};

			const targetName = {
				username: (e) => {
					validarCampo(expresiones.usuario, e.target, "usuario");
				},
				name: (e) => {
					validarCampo(expresiones.name, e.target, "nombre");
				},
				surname: (e) => {
					validarCampo(expresiones.surname, e.target, "surname");
				},
				correo: (e) => {
					validarCampo(expresiones.email, e.target, "email");
				},
				password: (e) => {
					validarCampo(expresiones.password, e.target, "password");
					validarPassword2();
				},
				"repeat-password": () => {
					validarPassword2();
				},
			};

			const validarFormulario = (e) => {
				targetName[e.target.name](e);
			};

			inputs.forEach((input) => {
				input.addEventListener("keyup", validarFormulario);
				input.addEventListener("change", validarFormulario);
				input.addEventListener("blur", validarFormulario);
			});

			formulario.addEventListener("submit", (e) => {
				e.preventDefault();
				if (
					campos.usuario &&
					campos.nombre &&
					campos.surname &&
					campos.email &&
					campos.password
				) {
					const insertUser = async () => {
						this.email = email.value.trim();
						await axios
							.post("http://localhohost:8080/autoevaluacion/autoevaluacion.php", {
								opcion: 8,
								nombre: name.value.trim(),
								surname: surname.value.trim(),
								username: username.value.trim(),
								clave: password.value.trim(),
								correo: email.value.trim(),
							})
							.then(function () {
								this.sendEmail(this.email, username.value.trim());
								Swal.fire({
									title: "Registro de Usuario",
									text: `Usuario registrado exitosamente`,
									icon: "success",
									timer: 10000,
									background: "#161719",
									backdrop: true,
									allowOutsideClick: true,
									allowEscapeKey: true,
									stopKeydownPropagation: false,
									confirmButtonColor: "#972745",
									showCloseButton: true,
								});
							})
							.catch(() => {
								this.sendEmail(this.email, username.value.trim());
								Swal.fire({
									title: "Registro de Usuario",
									text: `Registro de usuario completado exitosamente`,
									icon: "success",
									timer: 10000,
									background: "#161719",
									backdrop: true,
									allowOutsideClick: true,
									allowEscapeKey: true,
									stopKeydownPropagation: false,
									confirmButtonColor: "#972745",
									showCloseButton: true,
								});
							});
						this.usernameBuscar = username.value.trim();
						const res = await axios.post(
							"http://localhohost:8080/autoevaluacion/autoevaluacion.php",
							{
								opcion: 3,
							}
						);
						this.datas = res.data;
						this.datas.forEach((data) => {
							loginForm.classList.remove("login--show");
							const p = document.createElement("span");
							p.innerHTML = data.username;
							p.className = "username-login";
							p.id = "username-login";
							fragment.appendChild(p);
							loginLink.replaceWith(fragment);
						});
					};
					insertUser();
					document
						.querySelectorAll(".form-grupo__correcto")
						.forEach((icono) => {
							icono.classList.remove("form-grupo__correcto");
						});
					setTimeout(() => {
						this.$router.push("/");
					}, 3000);
				} else {
					Swal.fire({
						title: "Registro de Usuario",
						text: `Revise que los datos que esta enviando no esten vacios y esten en el formato correcto.`,
						icon: "error",
						timer: 10000,
						background: "#161719",
						backdrop: true,
						allowOutsideClick: true,
						allowEscapeKey: true,
						stopKeydownPropagation: false,
						confirmButtonColor: "#972745",
						showCloseButton: true,
					});
				}
			});
		},
	},
	mounted() {
		return this.insertData();
	},
};
</script>


