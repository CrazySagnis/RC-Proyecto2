import { arrayProductos } from "./datosProductos.js";
import { removerDeFavoritos } from "./favoritosManager.js";
import { cargarVerificacionLogeoOff, LogOut } from "./verificacionLogeo.js";
cargarVerificacionLogeoOff();
LogOut();

document.addEventListener("DOMContentLoaded", () => {
  mostrarFavoritos();
});

function mostrarFavoritos() {
  // Obtengo el array de localStorage
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  // Convertir la lista de objetos con IDs en un array de IDs numéricos
  const idsFavoritos = favoritos.map((favorito) => Number(favorito.id));

  // Filtrar los productos favoritos basados en idsFavoritos
  const productosFavoritos = arrayProductos.filter((producto) =>
    idsFavoritos.includes(producto.id)
  );

  const listaFavoritos = document.getElementById("lista-favoritos");
  listaFavoritos.innerHTML = ""; // Limpia el contenedor antes de actualizar la cantidad, sino borra el que quiero, pero repite los restantes

  if (productosFavoritos.length === 0) {
    listaFavoritos.innerHTML = `<p style="text-align:center; margin-top:20px;">Aún no tienes productos favoritos. Agrégalos haciendo clic en el corazón de la página de producto.</p>`;
  } else {
    // Mostrar productos favoritos
    productosFavoritos.forEach((producto) => {
      const elementoProducto = document.createElement("div");
      elementoProducto.classList.add("producto-favorito");
      elementoProducto.innerHTML = `
        <div class="contenedor-producto">
          <img src="${producto.img}" alt="${producto.nombre}" style="width:100px; height:100px;">
          <a href="producto-pagina.html?id=${producto.id}" class="link-negro"">
            <h2 class="card-title-fav">${producto.nombre}</h2>
          </a>
          <h6 class="cuotas">$${producto.descuento}<label class="descuento">15%OFF</label></h6>    
          <p class="card-text-precio">$${producto.precio}</p>
        </div>
      `;
      // Crear botón eliminar
      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar de favoritos";
      botonEliminar.classList.add("btn-eliminar"); //Para darle css
      botonEliminar.addEventListener("click", function () {
        removerDeFavoritos(producto.id);
        mostrarFavoritos();
      });

      // Agregar botón al elementoProducto
      elementoProducto.appendChild(botonEliminar);

      listaFavoritos.appendChild(elementoProducto);
    });
  }
}
