import { arrayProductos } from "./datosProductos.js";

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
      return item.nombre.toLowerCase().startsWith(inputText.toLowerCase());
      // Ahora, 'sugerencias' guarda cada objeto cuyo nombre inicie con las letras tipeadas, sin importar mayúsculas o minúsculas.
    });

    sugerencias.forEach(function (sugerido) {
      const div = document.createElement("div");
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.gap = "10px"; // Espacio entre el texto y la imagen

      // Crear el elemento de imagen y configurarlo
      const img = document.createElement("img");
      img.src = sugerido.img;
      img.alt = sugerido.nombre;
      img.style.width = "30px"; // Ajusta según necesidades
      img.style.height = "30px"; // Ajusta según necesidades
      img.style.objectFit = "cover"; // Para mantener la relación de aspecto

      // Crear el elemento de texto
      const texto = document.createTextNode(sugerido.nombre);

      // Añadir el texto y la imagen al div
      div.appendChild(img);
      div.appendChild(texto);

      div.addEventListener("click", function () {
        input.value = sugerido.nombre;
        sugerenciasPanel.innerHTML = ""; // Limpia el panel después de seleccionar
        if (typeof itemElegido === "function") {
          itemElegido(sugerido);
        }
      });

      // Añade este div al panel de sugerencias
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
      window.location.href = `producto-pagina.html?id=${resultado.id}`;
    }
  );
});
