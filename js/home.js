import { arrayProductos } from "./datosProductos.js";
import { cargarVerificacionLogeoOff, LogOut } from "./verificacionLogeo.js";
import { botonFavorito } from "./favoritosManager.js";
cargarVerificacionLogeoOff();
LogOut();

const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");
const container4 = document.getElementById("container4");

llenarDiv(container1, 0);
llenarDiv(container2, 4);
llenarDiv(container3, 8);
llenarDiv(container4, 12);
function llenarDiv(div, inicio) {
  div.innerHTML = arrayProductos
    .slice(inicio, inicio + 4)
    .map((producto) =>
      // <a href="producto-pagina.html?id=${producto.id}"><img src="${producto.img}" class="card-img-top" alt="..."></a> No puedo hacer que al apretar click en la imagen lleve al producto porque se rompen las dimensiones del card.
      {
        return ` 
      <div class='col-12 col-md-6 col-lg-3 my-3'>
    <div class="card">
    <img src="${producto.img}" class="card-img-top" alt="...">
      <div class="card-body">
      <a href="producto-pagina.html?id=${producto.id}" class="link-negro"">
      <h5 class="card-title producto">${producto.nombre}</h1>
    </a>
          <h6 class="cuotas">$${producto.descuento}<label class="descuento">15%OFF</label></h6>    
          <p class="card-text-precio">$${producto.precio}</p>          
          <button class="btn btn-fav" data-id="${producto.id}"></button>          
          <a href="producto-pagina.html?id=${producto.id}" class="btn btn-ver"><i class="fa-solid fa-eye"></i></a>
          <p class="card-text-envio mt-2">
          Envío a S. M. de Tucumán: $7799. Llega aprox. en 72hs.</p>
        </div>
      </div>
    </div>
  </div>`;
      }
    )
    .join("");
}

botonFavorito();
