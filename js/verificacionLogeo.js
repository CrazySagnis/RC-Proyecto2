const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function cargarVerificacionLogeo() {
  document.addEventListener("DOMContentLoaded", chequearLogeo);
}

function chequearLogeo() {
  const usuarioLogeado = usuarios.find((usuario) => usuario.login);
  if (usuarioLogeado) {
    location.href = "../pages/Home.html";
  }
}

export { usuarios, cargarVerificacionLogeo, chequearLogeo };
