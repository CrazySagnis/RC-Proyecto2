// Tomo los elementos del HTML

const registroInputUsuario = document.getElementById("registro-input-usuario");

const registroInputPassword = document.getElementById(
  "registro-input-password"
);

const registroInputRPassword = document.getElementById(
  "registro-input-rpassword"
);

const registroBtn = document.getElementById("registro-btn");

// Aplico placeholder a los elementos

registroInputUsuario.placeholder = "Ingrese su usuario deseado";

registroInputPassword.placeholder = "Ingrese su password deseada";

registroInputRPassword.placeholder = "Repita su password";

// Array de Usuarios en LocalStorage
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

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
};

// Button
const enviarForm = (e) => {
  e.preventDefault();

  console.log(formUsuario);

  const { usuario, pass, rpass } = formUsuario;

  if (!usuario || !pass || !rpass) {
    alert("Uno de los campos esta vacio");
  } else {
    if (pass === rpass) {
      if (usuarios.length > 0) {
        const idUsuario = usuarios[usuarios.length - 1].id + 1;

        const nuevoUsuario = {
          id: idUsuario,
          usuario,
          pass,
        };
        usuarios.push(nuevoUsuario);

        localStorage.setItem("user", JSON.stringify(usuarios));
        alert("Usuario registrado");
      } else {
        const nuevoUsuario = {
          id: 1,
          usuario,
          pass,
        };
        usuarios.push(nuevoUsuario);
        localStorage.setItem("user", JSON.stringify(usuarios));
        alert("Usuario registrado");
      }
    } else {
      alert("Las passwords no coinciden");
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
