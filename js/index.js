// HACER UNA FUNCION DE QUE CUANDO INICIE LA PAGINA, RECORRA EL ARRAY DE USUARIOS Y SI HAY UNO CON LOGIN TRUE, QUE TE MANDE AL HOME, SINO TE DEJE EN EL INDEX.
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
