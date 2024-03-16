const Divproductopagina = document.getElementById("idDivproductopagina");
const idproductos = location.search.split("=")[1];

fetch(`https://fakestoreapi.com/products/${idproductos}`)
  .then((res) => res.json())
  .the((dataApi) => {
    Divproductopagina.innerHTML = `
    <div class="card w-15">
      <img src="${dataApi.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${dataApi.title}</h5>
        <p class="card-text">${dataApi.price}</p>
        <p class="card-text">${dataApi.description}</p>
        <button class='btn btn-success'onclick='addProdFavs(${dataApi.id})'>Añadir a favoritos</button>
        <button class='btn btn-primary'onclick='addProdCart(${dataApi.id})'>Añadir al carrito</button>
      </div>
    </div>  
  </div>
  `;
  });
const addprodCart = async (idproductos) => {
  const cartLocalStorage = JSON.parse(localStorage.getItem("cart"));
  const product = await fetch(
    `https://fakestoreapi.com/products/${idproductos}`
  );
  const data = await product.json();
  const prodExisCart = cartLocalStorage.find(
    (prodCart) => prodCart.id === idproductos
  );

  if (prodExisCart) {
    alert("Producto ya se encuentra en la seccion de favoritos");
    localStorage.setItem("cart", JSON.stringify(favLocalStorage));
  }
};
