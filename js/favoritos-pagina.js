const favoritos = JSON.parse(localStorage.getItem("favs"));
const idDivCards = document.getElementById("idDivCards");
idDivCards.innerHTML = favs
  .map(
    (idproductos) => `

  <div class="card" style="width: 18rem;">
    <img src="${prod.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${prod.title}</h5>
      <p class="card-text">${prod.description}</p>
      <div class='d-flex justify-content-center'>
      <a href="#" class="btn btn-danger">Eliminar</a>
    </div>
  </div>
`
  )
  .join("");
