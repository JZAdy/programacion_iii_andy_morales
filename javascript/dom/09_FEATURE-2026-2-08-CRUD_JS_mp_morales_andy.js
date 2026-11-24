const tarea = document.getElementById("tarea");
const agregar = document.getElementById("agregar");
const lista = document.getElementById("lista");
const arreglo = [];

function renderizar() {
  lista.innerHTML = "";

  arreglo.forEach(function (dato, indice) {
    lista.innerHTML += `
      <li>
        ${dato}
        <button onclick="editar(${indice})">Editar</button>
        <button onclick="eliminar(${indice})">Eliminar</button>
      </li>
    `;
  });
}

agregar.addEventListener("click", function () {
  if (tarea.value.trim() !== "") {
    arreglo.push(tarea.value);
    tarea.value = "";
    renderizar();
  }
});

function editar(indice) {
  const nuevoValor = prompt("Editar tarea:", arreglo[indice]);
  if (nuevoValor !== null && nuevoValor.trim() !== "") {
    arreglo[indice] = nuevoValor;
    renderizar();
  }
}

function eliminar(indice) {
  arreglo.splice(indice, 1);
  renderizar();
}
