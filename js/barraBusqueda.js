const arrayProductos = [
  "Apple",
  "Arturo",
  "Banana",
  "Orange",
  "Mango",
  "Pear",
  "Grape",
];

function crearBarraDeBusquedaConAutocompletar(etiqueta, items, itemElegido) {
  // etiqueta = El contenedor padre de todo el codigo.
  const barraDeBusqueda = document.querySelector(etiqueta);
  // Trae el contendor padre al JS.
  if (!barraDeBusqueda) return;
  // Por si no existe el contenedor padre

  const input = document.getElementById("inputBarraBusqueda");
  // Creo un input

  const sugerenciasPanel = document.createElement("div");
  // Creo un nuevo div
  sugerenciasPanel.id = "sugerenciasPanel";
  // Asigno ID para style.css
  barraDeBusqueda.appendChild(sugerenciasPanel);
  // Lo agrego al contenedor padre

  input.addEventListener("input", function () {
    const inputText = this.value.toLowerCase();
    // Cada vez que ingrese un caracter, lo transforme a minuscula y lo guarde en la variable
    sugerenciasPanel.innerHTML = "";
    // Inicio el panel de sugerencias vacio
    const sugerencias = items.filter(function (item) {
      return item.toLowerCase().startsWith(inputText);
      // Creo un array llamado 'sugerencias' donde se guarda cada item que inicie con las letras tipeadas.
    });
    sugerencias.forEach(function (sugerido) {
      const div = document.createElement("div");
      div.innerHTML = sugerido;
      // Recorro el nuevo array con los resultados, creo un div por cada uno, que contenga su nombre.
      div.addEventListener("click", function () {
        input.value = sugerido;
        sugerenciasPanel.innerHTML = ""; // Limpia el panel después de seleccionar
        if (typeof itemElegido === "function") {
          itemElegido(sugerido);
          // Chequea si el tercer parametro 'itemElegido' es una funcion. En caso de serlo, la invoca con el parametro 'sugerido'
        }
      });
      sugerenciasPanel.appendChild(div);
    });
    if (inputText === "") {
      // Si el buscador esta vacio, el panel de sugerencias aparece vacio
      sugerenciasPanel.innerHTML = ""; // Limpia el panel si el input está vacío
    } else if (sugerencias.length === 0) {
      // Si el array se inicializa por insertar un caracter y no coincide con ningun item, aparece el siguiente error.
      sugerenciasPanel.innerHTML = "<div>No se encontraron coincidencias</div>";
    }
  });

  input.addEventListener("focus", function () {
    sugerenciasPanel.style.display = "block"; // Muestra el panel de sugerencias al enfocar el input de busqueda
  });

  // REVISAR //
  input.addEventListener("blur", function () {
    setTimeout(() => {
      sugerenciasPanel.style.display = "none";
    }, 100); // Oculta el panel al desenfocar, con delay para permitir click en sugerencia
  });
}

// Ejemplo de invocación
document.addEventListener("DOMContentLoaded", function () {
  crearBarraDeBusquedaConAutocompletar(
    "#contenedorBusqueda",
    arrayProductos,
    function (resultado) {
      console.log("Ítem seleccionado:", resultado);
    }
    //MODIFICARLO PARA QUE ME LLEVE AL LINK DEL SUGERIDO
  );
});
