const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

function removerDeFavoritos(id) {
  // Busca la posicion del elemento que coincida con el id a remover.
  // Cuando lo encuentra, corta desde esa posicion 1 para adelante.
  const index = favoritos.findIndex((fav) => fav.id == id);
  if (index >= 0) {
    favoritos.splice(index, 1);
    // Actualiza el localStorage
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }
}

function añadirAFavoritos(id) {
  // Si no matchea el id, lo agrega al localStorage
  if (!favoritos.some((fav) => fav.id == id)) {
    // Es lo mismo que poner id: id
    favoritos.push({ id });
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }
}

function botonFavorito() {
  document.addEventListener("DOMContentLoaded", () => {
    // Agarro todos los botones con dataid y guardo el valor de dataid en la variable idProducto
    document.querySelectorAll(".btn[data-id]").forEach((button) => {
      const idProducto = button.getAttribute("data-id");
      actualizarTextoBoton(button, idProducto);

      button.addEventListener("click", function () {
        // Al hacerle click, guardo su valor id, y lo comparo con los valores del array favoritos el cual recorro. Si no existe, lo agrega, si existe lo saca.
        const idProducto = this.getAttribute("data-id");
        const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

        if (!favoritos.some((fav) => fav.id === idProducto)) {
          añadirAFavoritos(idProducto);
        } else {
          removerDeFavoritos(idProducto);
        }

        // this toma el ultimo elemento recorrido.
        actualizarTextoBoton(this, idProducto);
      });
    });
  });

  function actualizarTextoBoton(button, idProducto) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    if (favoritos.some((fav) => fav.id == idProducto)) {
      button.innerHTML = `<i class="icono-fav fa-solid fa-heart-circle-minus"></i>`;
    } else {
      button.innerHTML = `<i class="fa-solid fa-heart-circle-plus"></i>`;
    }
  }
}

export { añadirAFavoritos, removerDeFavoritos, botonFavorito };
