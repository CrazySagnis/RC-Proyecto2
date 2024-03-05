alert("bienvenidos a nuestra pagina");
const divProductos = document.getElementById("divProductos");
const productos = [
  { id: 1, nombre: "Producto 1", precio: 10.99, codigo: "ABC123" },
  { id: 2, nombre: "Producto 2", precio: 19.99, codigo: "DEF456" },
  { id: 3, nombre: "Producto 3", precio: 5.49, codigo: "GHI789" },
  { id: 4, nombre: "Producto 4", precio: 15.75, codigo: "JKL012" },
  { id: 5, nombre: "Producto 5", precio: 8.25, codigo: "MNO345" },
  { id: 6, nombre: "Producto 6", precio: 12.5, codigo: "PQR678" },
  { id: 7, nombre: "Producto 7", precio: 7.99, codigo: "STU901" },
  { id: 8, nombre: "Producto 8", precio: 23.45, codigo: "VWX234" },
  { id: 9, nombre: "Producto 9", precio: 14.2, codigo: "YZA567" },
  { id: 10, nombre: "Producto 10", precio: 11.3, codigo: "BCD890" },
];

divProductos.innerHTML = productos
  .map(
    (producto) => `
<div class='col-12 col-md-6 col-lg-3 my-3'>
  <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.precio}.</p>
       <p class="card-text">${producto.codigo}.</p>
       <a href="#" class="btn btn-primary">Ver Mas</a>
    </div>
  </div>  
</div>


`
  )
  .join("");
