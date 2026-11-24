const titulo = document.getElementById("titulo");
const input = document.getElementById("nombre");
const boton = document.getElementById("cambiar");

boton.addEventListener("click", function () {
  titulo.innerHTML = "Hola, " + input.value;
  titulo.setAttribute("title", "Título actualizado");
});
