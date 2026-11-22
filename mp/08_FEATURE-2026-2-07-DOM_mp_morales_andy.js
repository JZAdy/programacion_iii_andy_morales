const nombre = document.getElementById("nombre");
const botonSaludar = document.getElementById("saludar");
const saludo = document.getElementById("saludo");

botonSaludar.addEventListener("click", function () {
  const visitante = nombre.value.trim();
  saludo.textContent = visitante
    ? `¡Bienvenido a Jardín Soleado, ${visitante}!`
    : "¡Te damos la bienvenida a Jardín Soleado!";
  saludo.setAttribute("title", "Saludo actualizado");
});
