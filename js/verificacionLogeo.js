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

function LogOut() {
  const siCerrarSesion = document.getElementById("siCerrarSesion");
  const cerrarSesion = () => {
    const posicionUsuario = usuarios.findIndex((usuario) => usuario.login);
    usuarios[posicionUsuario].login = false;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  };

  siCerrarSesion.addEventListener("click", cerrarSesion);
}
export {
  usuarios,
  cargarVerificacionLogeo,
  cargarVerificacionLogeoOff,
  LogOut,
};

// LO HICE DE DOS MANERAS DISTINTAS PARA VARIAR
