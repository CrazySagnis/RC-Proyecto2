const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// VERIFICACION LOGEO ON
function cargarVerificacionLogeo() {
  document.addEventListener("DOMContentLoaded", chequearLogeo);
}

function chequearLogeo() {
  const usuarioLogeado = usuarios.find((usuario) => usuario.login);
  if (usuarioLogeado) {
    location.href = "../pages/Home.html";
  }
}

// VERIFICACION LOGEO OFF
function cargarVerificacionLogeoOff() {
  document.addEventListener("DOMContentLoaded", chequearLogeoOff);
}

function chequearLogeoOff() {
  const usuarioLogeado = usuarios.find((usuario) => usuario.login);
  if (
    (location.href != `InicioSesion-pagina.html` ||
      location.href != `registro-pagina.html` ||
      location.href != `index.html`) &&
    !usuarioLogeado
  ) {
    location.href = "../pages/InicioSesion-pagina.html";
  }
}

export { usuarios, cargarVerificacionLogeo, cargarVerificacionLogeoOff };

// LO HICE DE DOS MANERAS DISTINTAS PARA VARIAR
