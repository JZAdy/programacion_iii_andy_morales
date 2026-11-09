const cotizador = document.getElementById("cotizador");
const resultado = document.getElementById("resultado");

cotizador.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const habitaciones = Number(document.getElementById("habitaciones").value);
  const plan = document.getElementById("plan").value;
  const valorBase = 85000;
  const valorPorHabitacion = 12000;
  let estimado = valorBase + habitaciones * valorPorHabitacion;

  if (habitaciones >= 3) {
    estimado -= 5000;
  }

  switch (plan) {
    case "familiar":
      estimado += 10000;
      break;
    case "parque":
      estimado += 0;
      break;
    default:
      resultado.textContent = "Selecciona un plan disponible.";
      return;
  }

  resultado.textContent = "Precio estimado: $" + estimado.toLocaleString("es-ES");
});
