const siCerrarSesion = document.getElementById("siCerrarSesion");
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const cerrarSesion = () => {
  const posicionUsuario = usuarios.findIndex((usuario) => usuario.login);
  usuarios[posicionUsuario].login = false;
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
};

siCerrarSesion.addEventListener("click", cerrarSesion);

const arrayProductos = [
  {
    id: 1,
    nombre: "Iphone 15 PRO (128-256GB) Titanio Gris",
    descuento: 2700000,
    precio: 199999,
    img: "https://static2.o9.de/resource/blob/1504566/5c3b5b8ebb2d87e3933025c6e4cf870e/png/apple-iphone-15-pro-max-natur-gallerybild-1-data.webp",
  },
  {
    id: 2,
    nombre: "Notebook LENOVO Ideapad 114 Gray Intel Dual Core",
    descuento: 599999,
    precio: 369999,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBndBAuOb-sKrwD-2FQwyUmkb2czFxI_KD5fN05Z-MA&s",
  },
  {
    id: 3,
    nombre: "Tablet SAMSUNG Galaxy Tab S6 Lite 64/4gb 10,4 Wifi",
    descuento: 849999,
    precio: 699999,
    img: "https://images.samsung.com/is/image/samsung/ar-galaxy-tab-s6-lite-p610-sm-p610nzauaro-frontgray-282037279?$650_519_PNG$",
  },
  {
    id: 4,
    nombre: 'Smart TV 55" Samsung 4K AU7000',
    descuento: 622999,
    precio: 520199,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD3HIV1mOZNlFSC4jiBJn3Gsv4bOtIov7RtN3Nfd5xig&s",
  },
  {
    id: 5,
    nombre: "Pc Gamer Completa Amd Ryzen 7 5700g 16g Nvme",
    descuento: 928239,
    precio: 888239,
    img: "https://http2.mlstatic.com/D_NQ_NP_634957-MLA72460118206_102023-O.webp",
  },
  {
    id: 6,
    nombre: "Playstation 5 825gb God Of War Ragnarok Bundle",
    descuento: 1429999,
    precio: 999999,
    img: "https://http2.mlstatic.com/D_NQ_NP_661625-MLU72835349237_112023-O.webp",
  },
  {
    id: 7,
    nombre: "Heladera Freezer Superior Samsung No Frost 382 L",
    descuento: 1364999,
    precio: 1149999,
    img: "https://images.samsung.com/is/image/samsung/ar-rt38k5932bs-rt38k5932bs-b3-black-199927592?$650_519_PNG$",
  },
  {
    id: 8,
    nombre: "Lavarropas Inverter Samsung Carga Frontal 9.5kg",
    descuento: 1049999,
    precio: 944999,
    img: "https://www.rodo.com.ar/media/catalog/product/cache/855090a5c67e45b26c9e0d345e7592dc/3/5/353721_lavarropas_samsung_4.jpg",
  },
  {
    id: 9,
    nombre: "Aire acondicionado Philco split frío/calor 2560 frigorías",
    descuento: 722499,
    precio: 577799,
    img: "https://philco.com.ar/media/catalog/product/cache/c8f6a96bef9e9f64cd4973587df2520f/a/i/aire_acondicionado_split_fr_ocalor_2560w_negro_philco.jpg",
  },
  {
    id: 10,
    nombre: "Tostadora Eléctrica Atma To8020i 700w 7 Niveles",
    descuento: 47729,
    precio: 30499,
    img: "https://http2.mlstatic.com/D_NQ_NP_740243-MLU73980704810_012024-O.webp",
  },
  {
    id: 11,
    nombre: "Cafetera Nespresso Essenza C30 Con Aeroccino",
    descuento: 289999,
    precio: 254599,
    img: "https://images.fravega.com/f300/b3a707f361fd16e86041a0500d3e2260.jpg.webp",
  },
  {
    id: 12,
    nombre: "Microondas Samsung Grill Cerámico Triple 23l Sl",
    descuento: 321999,
    precio: 275999,
    img: "https://www.rodo.com.ar/media/catalog/product/cache/855090a5c67e45b26c9e0d345e7592dc/3/1/315656_samsung_microondas_2.jpg",
  },
];

const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");
const container4 = document.getElementById("container4");

llenarDiv(container1, 0);
llenarDiv(container2, 3);
llenarDiv(container3, 6);
llenarDiv(container4, 9);
function llenarDiv(div, inicio) {
  div.innerHTML = arrayProductos
    .slice(inicio, inicio + 3)
    .map((producto) => {
      return `
      
      <div class='col-12 col-md-6 col-lg-3 my-3'>
    <div class="card">
      <img src="${producto.img}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <h6 class="cuotas">$${producto.descuento}<label class="descuento">15%OFF</label></h6>    
          <p class="card-text-precio">$${producto.precio}</p>          
          <a href="" class="btn btn-fav">Añadir a favs</a
          ><a href="" class="btn btn-carr mx-2">Añadir a carrito</a
          ><a href="" class="btn btn-ver">Ver</a>
          <p class="card-text-envio mt-2">
          Envío a S. M. de Tucumán: $7799. Llega aprox. en 48hs.</p>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join("");
}
