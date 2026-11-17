const modelos = [
  { nombre: "Parque", habitaciones: 2, area: 82 },
  { nombre: "Familiar", habitaciones: 3, area: 110 },
  { nombre: "Jardín", habitaciones: 3, area: 104 }
];

const listaModelos = document.getElementById("lista-modelos");
const botonModelos = document.getElementById("ver-modelos");

function mostrarModelos() {
  listaModelos.textContent = "";

  for (const modelo of modelos) {
    const elemento = document.createElement("li");
    elemento.textContent = `${modelo.nombre}: ${modelo.habitaciones} habitaciones, ${modelo.area} m²`;
    listaModelos.appendChild(elemento);
  }
}

botonModelos.addEventListener("click", mostrarModelos);
