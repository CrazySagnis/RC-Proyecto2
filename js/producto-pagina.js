(async () => {
  const Divproductopagina = document.getElementById("idDivproductopagina");
  const idproductos = location.search.split("=")[1];
  const productosApi = await fetch(
    `https://fakestoreapi.com/products/${idproductos}`
  );
  const dataApi = await productosApi.json();
  Divproductopagina.innerHTML`
  <div class="card">
    <img src="${dataApi.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${dataApi.title}</h5>
      <p class="card-text">${dataApi.price}</p>
      <p class="card-text">${dataApi.description}</p>
      <a href="../pages/producto-pagina.html?id=${dataApi.id})" class="btn btn-primary">Ver Mas</a>
    </div>
  </div>  
</div>



  `;
})();
