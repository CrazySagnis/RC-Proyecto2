import { arrayProductos } from "./datosProductos.js";
import { cargarVerificacionLogeoOff } from "./verificacionLogeo.js";
import { botonFavorito } from "./favoritosManager.js";
cargarVerificacionLogeoOff();

document.addEventListener("DOMContentLoaded", function () {
  // Extrae el ID del producto desde la URL
  const urlParams = new URLSearchParams(window.location.search);
  const urlid = urlParams.get("id"); // 'id' es el nombre del parámetro en tu URL
  const idNumerico = Number(urlid);
  mostrarInformacionProducto(idNumerico);
});

function mostrarInformacionProducto(productoId) {
  const producto = arrayProductos.find((p) => p.id === productoId);

  if (producto) {
    console.log(producto); // Después de encontrar el producto
    const contenedorProducto = document.getElementById("contenedor-producto");
    if (producto.stock <= 0) {
      contenedorProducto.innerHTML = `
      <div class='contenedor-producto'>
        <div class="imagen-producto ms-5">
          <img src="${producto.img}" alt="${producto.nombre}">
        </div>
        <div class="detalles-producto">
        <h1 class="nombre-producto">${producto.nombre}</h1>
        <h6 class="cuotas">$${producto.descuento}<label class="descuento">15%OFF</label></h6>    
        <p class="card-text-precio">$${producto.precio}</p> 
          <p>NO HAY STOCK DISPONIBLE</p>
          <button class="btn btn-primary" data-id="${producto.id}">Añadir a Favoritos</button>
        </div>
      </div>
      <div >
        <h1 class="descripcion-producto my-3">Descripcion del Producto y Datos Tecnicos</h1>
          <p class="text-center mx-5 px-5 mb-5">${producto.descripcion}</p>
      </div>`;
    } else {
      contenedorProducto.innerHTML = `
      <div class='contenedor-producto'>
        <div class="imagen-producto ms-5">
          <img src="${producto.img}" alt="${producto.nombre}">
        </div>
        <div class="detalles-producto">
          <h1 class="nombre-producto">${producto.nombre}</h1>
          <h6 class="cuotas">$${
            producto.descuento
          }<label class="descuento">15%OFF</label></h6>    
          <p class="card-text-precio">$${producto.precio}</p>  
          <p>Stock disponible: ${producto.stock} unidades</p>
          <div class="seleccion-cantidad">
            <label for="cantidad-producto">Cantidad:</label>
            <select id="cantidad-producto" name="cantidad">
              ${Array.from(
                { length: producto.stock },
                (_, i) =>
                  `<option value="${i + 1}">
                  ${i + 1} unidad${i > 0 ? "es" : ""}
                </option>`
              ).join("")}
            </select>
          </div>
          <div class="acciones-compra">
          <button class="btn btn-primary" data-id="${
            producto.id
          }">Añadir a Favoritos</button>
          <a href="" class="btn btn-carr mx-2"><i class="fa-solid fa-cart-plus"></i></a
          >
          </div>
        </div>
      </div><div>
      <h2 class="descripcion-producto my-3">Descripcion del Producto y Datos Tecnicos</h2>
        <p class="text-center mx-5 px-5 mb-5">${producto.descripcion}</p>
    </div>`;
    }
  }
}

botonFavorito();
