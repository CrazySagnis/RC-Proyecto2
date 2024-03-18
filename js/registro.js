// Tomo los elementos del HTML

const registroInputUsuario = document.getElementById("registro-input-usuario");

const registroInputPassword = document.getElementById(
  "registro-input-password"
);

const registroInputRPassword = document.getElementById(
  "registro-input-rpassword"
);

const registroBtn = document.getElementById("registro-btn");

const irIniciarSesion = document.getElementById("irIniciarSesion");

const errorUsuarioVacio = document.getElementById("errorUsuarioVacio");

const errorPasswordVacia = document.getElementById("errorPasswordVacia");

const errorRPasswordVacia = document.getElementById("errorRPasswordVacia");

const errorUsuarioRegExp = document.getElementById("errorUsuarioRegExp");

const errorPasswordRegExp = document.getElementById("errorPasswordRegExp");

const errorRPasswordRegExp = document.getElementById("errorRPasswordRegExp");

const ContenedorErrorExito = document.getElementById("ContenedorErrorExito");

errorUsuarioVacio.classList.add("d-none");
errorPasswordVacia.classList.add("d-none");
errorRPasswordVacia.classList.add("d-none");
errorUsuarioRegExp.classList.add("d-none");
errorPasswordRegExp.classList.add("d-none");
errorRPasswordRegExp.classList.add("d-none");

// Aplico placeholder a los elementos

registroInputUsuario.placeholder = "Ingrese su usuario deseado";

registroInputPassword.placeholder = "Ingrese su contraseña deseada";

registroInputRPassword.placeholder = "Repita su contraseña deseada";

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
  rpass: "",
};

// Eventos
const valoresForm = (event) => {
  const { name, value } = event.target;
  formUsuario[name] = value;

  if (name === "usuario") {
    errorUsuarioVacio.classList.add("d-none");
    registroInputUsuario.classList.remove("is-invalid");
    errorUsuarioRegExp.classList.add("d-none");
  }

  if (name === "pass") {
    errorPasswordVacia.classList.add("d-none");
    registroInputPassword.classList.remove("is-invalid");
    errorPasswordRegExp.classList.add("d-none");
  }
  if (name === "rpass") {
    errorRPasswordVacia.classList.add("d-none");
    registroInputRPassword.classList.remove("is-invalid");
    errorRPasswordRegExp.classList.add("d-none");
  }
};

// Button
const enviarForm = (e) => {
  e.preventDefault();

  console.log(formUsuario);

  const { usuario, pass, rpass } = formUsuario;

  ContenedorErrorExito.innerHTML = "";

  const validacionUsuario = new RegExp(/^[a-zA-Z0-9]{5,12}$/).test(usuario);
  const validacionPassword = new RegExp(/^[a-zA-Z0-9]{5,12}$/).test(pass);
  const validacionRPassword = new RegExp(/^[a-zA-Z0-9]{5,12}$/).test(rpass);

  const usuarioExiste = usuarios.find((user) => user.usuarioNombre === usuario);

  // Validar si el usuario ya existe
  if (usuarioExiste) {
    const pUsuarioExistente = document.createElement("p");
    pUsuarioExistente.classList.add("error");
    pUsuarioExistente.classList.add("text-danger");
    pUsuarioExistente.innerHTML =
      "El usuario ya esta en uso. Por favor, elija otro.";
    ContenedorErrorExito.appendChild(pUsuarioExistente);
    return; // Salir de la función si el usuario ya existe
  }

  if (!usuario && !pass && !rpass) {
    errorUsuarioVacio.classList.remove("d-none");
    errorPasswordVacia.classList.remove("d-none");
    errorRPasswordVacia.classList.remove("d-none");
    registroInputUsuario.classList.add("is-invalid");
    registroInputPassword.classList.add("is-invalid");
    registroInputRPassword.classList.add("is-invalid");
  } else if (!usuario) {
    errorUsuarioVacio.classList.remove("d-none");
    registroInputUsuario.classList.add("is-invalid");
  } else if (!validacionUsuario) {
    errorUsuarioRegExp.classList.remove("d-none");
    registroInputUsuario.classList.add("is-invalid");
  } else if (!pass && !rpass) {
    errorPasswordVacia.classList.remove("d-none");
    registroInputPassword.classList.add("is-invalid");
    errorRPasswordVacia.classList.remove("d-none");
    registroInputRPassword.classList.add("is-invalid");
  } else if (!pass) {
    errorPasswordVacia.classList.remove("d-none");
    registroInputPassword.classList.add("is-invalid");
  } else if (!rpass) {
    errorRPasswordVacia.classList.remove("d-none");
    registroInputRPassword.classList.add("is-invalid");
  } else if (!validacionPassword && !validacionRPassword) {
    errorPasswordRegExp.classList.remove("d-none");
    registroInputPassword.classList.add("is-invalid");
    errorRPasswordRegExp.classList.remove("d-none");
    registroInputRPassword.classList.add("is-invalid");
  } else if (!validacionPassword) {
    errorPasswordRegExp.classList.remove("d-none");
    registroInputPassword.classList.add("is-invalid");
  } else if (!validacionRPassword) {
    errorRPasswordRegExp.classList.remove("d-none");
    registroInputRPassword.classList.add("is-invalid");
  } else {
    if (
      pass === rpass &&
      pass &&
      rpass &&
      validacionUsuario &&
      validacionPassword &&
      validacionRPassword
    ) {
      //si no hago las validaciones extra, me crea un usuario con password vacias
      if (usuarios.length > 0) {
        const idUsuario = usuarios[usuarios.length - 1].id + 1;

        const nuevoUsuario = {
          id: idUsuario,
          usuarioNombre: usuario,
          pass,
          login: false,
          delete: false,
          rol: "usuario",
        };
        // SE CREA LA CUENTA CON ID DINAMICO
        usuarios.push(nuevoUsuario);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        const pCuentaCreada = document.createElement("p");
        pCuentaCreada.classList.add("exito");
        pCuentaCreada.classList.add("text-success");
        pCuentaCreada.innerHTML = "Cuenta creada exitosamente.";
        ContenedorErrorExito.appendChild(pCuentaCreada);
        registroBtn.classList.add("d-none");
        irIniciarSesion.classList.remove("d-none");
      } else {
        const nuevoUsuario = {
          id: 1,
          usuarioNombre: usuario,
          pass,
          login: false,
          delete: false,
          rol: "usuario",
        };
        // SE CREA LA PRIMER CUENTA
        usuarios.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        const pCuentaCreada = document.createElement("p");
        pCuentaCreada.classList.add("exito");
        pCuentaCreada.classList.add("text-success");
        pCuentaCreada.innerHTML = "Cuenta creada exitosamente.";
        ContenedorErrorExito.appendChild(pCuentaCreada);
        registroBtn.classList.add("d-none");
        irIniciarSesion.classList.remove("d-none");
      }
    } else {
      //PASSWORDS NO COINCIDEN
      const pErrorPasswords = document.createElement("p");
      pErrorPasswords.classList.add("error");
      pErrorPasswords.classList.add("text-danger");
      pErrorPasswords.innerHTML = "Las contraseñas no coinciden";
      ContenedorErrorExito.appendChild(pErrorPasswords);
    }
  }
};

registroBtn.addEventListener("click", enviarForm);
// INPUTS

// Input Usuario
registroInputUsuario.addEventListener("input", valoresForm);
// Input Pass
registroInputPassword.addEventListener("input", valoresForm);
// Input RPass
registroInputRPassword.addEventListener("input", valoresForm);
