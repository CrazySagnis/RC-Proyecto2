// Tomo los elementos del HTML

const loginInputUsuario = document.getElementById("login-input-usuario");
const loginInputPassword = document.getElementById("login-input-password");
const loginBtn = document.getElementById("login-btn");
const errorUsuarioVacio = document.getElementById("errorUsuarioVacio");
const errorPasswordVacia = document.getElementById("errorPasswordVacia");
const ContenedorError = document.getElementById("ContenedorError");

errorUsuarioVacio.classList.add("d-none");
errorPasswordVacia.classList.add("d-none");

// Aplico placeholder a los elementos

loginInputUsuario.placeholder = "Ingrese su USUARIO";
loginInputPassword.placeholder = "Ingrese su CONTRASEÑA";

// Array de Usuarios en LocalStorage
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
document.body.onload = function () {
  chequearLogeo();
};

function chequearLogeo() {
  const usuarioLogeado = usuarios.find((usuario) => usuario.login);
  if (usuarioLogeado) {
    location.href = "../pages/Home.html";
  }
}

// Objeto para guardar la informacion

const formUsuario = {
  usuario: "",
  pass: "",
};

// Eventos
const valoresForm = (event) => {
  const { name, value } = event.target;
  formUsuario[name] = value;

  if (name === "usuario") {
    errorUsuarioVacio.classList.add("d-none");
    loginInputUsuario.classList.remove("is-invalid");
  }

  if (name === "pass") {
    errorPasswordVacia.classList.add("d-none");
    loginInputPassword.classList.remove("is-invalid");
  }
};

// Button
const enviarForm = (e) => {
  e.preventDefault();

  const { usuario, pass } = formUsuario;

  ContenedorError.innerHTML = "";

  if (!usuario && !pass) {
    errorUsuarioVacio.classList.remove("d-none");
    errorPasswordVacia.classList.remove("d-none");
    loginInputUsuario.classList.add("is-invalid");
    loginInputPassword.classList.add("is-invalid");
  } else if (!usuario) {
    errorUsuarioVacio.classList.remove("d-none");
    loginInputUsuario.classList.add("is-invalid");
  } else if (!pass) {
    errorPasswordVacia.classList.remove("d-none");
    loginInputPassword.classList.add("is-invalid");
  } else {
    const usuarioExiste = usuarios.find(
      (user) => user.usuarioNombre === usuario
    );
    const usuarioIndice = usuarios.findIndex(
      (user) => user.usuarioNombre === usuario
    );
    if (!usuarioExiste) {
      const loginError = document.createElement("p");
      loginError.classList.add("error");
      loginError.classList.add("text-danger");
      loginError.innerHTML = "Usuario y/o contraseña incorrectos";
      ContenedorError.appendChild(loginError);
      console.log("usuario no existe");
    }
    if (pass === usuarioExiste.pass) {
      usuarios[usuarioIndice].login = true;
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      location.href = "../pages/Home.html";
    } else {
      //Usuario o Password incorrectas
      const loginError = document.createElement("p");
      loginError.classList.add("error");
      loginError.classList.add("text-danger");
      loginError.innerHTML = "Usuario y/o contraseña incorrectos";
      ContenedorError.appendChild(loginError);
    }
  }
};

loginBtn.addEventListener("click", enviarForm);
// INPUTS

// Input Usuario
loginInputUsuario.addEventListener("input", valoresForm);
// Input Pass
loginInputPassword.addEventListener("input", valoresForm);
// Input RPass
