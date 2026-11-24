const formulario = document.getElementById("formulario-solicitud");
const entradaSolicitud = document.getElementById("solicitud");
const listaSolicitudes = document.getElementById("lista-solicitudes");
const solicitudes = [];

function mostrarSolicitudes() {
  listaSolicitudes.textContent = "";

  solicitudes.forEach(function (descripcion, indice) {
    const elemento = document.createElement("li");
    const texto = document.createElement("span");
    const botonEditar = document.createElement("button");
    const botonEliminar = document.createElement("button");

    texto.textContent = descripcion + " ";
    botonEditar.textContent = "Editar";
    botonEliminar.textContent = "Eliminar";

    botonEditar.addEventListener("click", function () {
      const actualizada = window.prompt("Editar solicitud:", solicitudes[indice]);
      if (actualizada !== null && actualizada.trim() !== "") {
        solicitudes[indice] = actualizada.trim();
        mostrarSolicitudes();
      }
    });

    botonEliminar.addEventListener("click", function () {
      solicitudes.splice(indice, 1);
      mostrarSolicitudes();
    });

    elemento.append(texto, botonEditar, " ", botonEliminar);
    listaSolicitudes.appendChild(elemento);
  });
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const descripcion = entradaSolicitud.value.trim();

  if (descripcion !== "") {
    solicitudes.push(descripcion);
    entradaSolicitud.value = "";
    mostrarSolicitudes();
  }
});
