import { arrayProductos } from "./datosProductos.js";

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
        <div class="imagen-producto">
          <img src="${producto.img}" alt="${producto.nombre}">
        </div>
        <div class="detalles-producto">
          <h1>${producto.nombre}</h1>
          <p>${producto.precio}</p>
          <p>NO HAY STOCK DISPONIBLE</p>
          <div class="acciones-compra">
            <button type="button " class="btn btn-secondary" disabled>Comprar Ahora</button>
            <button type="button" class="btn btn-primary">Añadir a favoritos</button> 
            <button type="button " class="btn btn-secondary" disabled>Añadir a carrito</button>
          </div>
        </div>
      </div>
      <div >
        <h1>Descripcion del Producto y Datos Tecnicos</h1>
          <p>${producto.descripcion}</p>
      </div>`;
    } else {
      contenedorProducto.innerHTML = `
      <div class='contenedor-producto'>
        <div class="imagen-producto">
          <img src="${producto.img}" alt="${producto.nombre}">
        </div>
        <div class="detalles-producto">
          <h1>${producto.nombre}</h1>
          <p>${producto.precio}</p>
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
            <button type="button" class="btn btn-primary">Añadir al carrito</button> 
            <button type="button" class="btn btn-primary">Añadir a favoritos</button> 
            <button type="button" class="btn btn-secondary">Comprar Ahora</button>
          </div>
        </div>
      </div><div>
      <h2>Descripcion del Producto y Datos Tecnicos</h2>
        <p>${producto.descripcion}</p>
    </div>`;
    }
  }
}
