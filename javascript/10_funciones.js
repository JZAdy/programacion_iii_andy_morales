function abrirPortal() {
    console.log("Portal abierto. ¡Vamos a otra dimensión!");
}

abrirPortal();
abrirPortal();
abrirPortal();
abrirPortal();
abrirPortal();

function pilotoNave(nombre) {
    console.log("El piloto " + nombre + " está a bordo de la nave.");
}

pilotoNave("Rick");
pilotoNave("Morty");


function recargarPistola(energiaActual, recarga) {
    let energiaTotal = energiaActual + recarga;

    if (energiaTotal > 100) {
        energiaTotal = 100;
    }
    console.log("Pistola de portales recargada. Nivel de energía: " + energiaTotal + "%");
    return energiaTotal;
}

let energiaPistola = 50;
energiaPistola = recargarPistola(energiaPistola, 30);
energiaPistola = recargarPistola(energiaPistola, 40);


console.log("Calcular descuentos intedimensionales");
function calcularDescuento(precio, descuento) {
    let precioFinal = precio - (precio * (descuento / 100));
    return precioFinal;
}
let precioOriginal = 100;
let porcentajeDescuento = 20;
let precioConDescuento = calcularDescuento(precioOriginal, porcentajeDescuento);
console.log("Precio original: " + precioOriginal + ", Precio con descuento: " + precioConDescuento);

function evaluarCombustibleExamen(combustible, correctas, totalPreguntas) {

    let porcentajeCorrectas = (correctas / totalPreguntas) * 100;

    if (combustible < 20) {

        console.log("Advertencia: Combustible bajo. Nivel actual: " + combustible + "%");

    }

    if (porcentajeCorrectas >= 70) {

        console.log("¡Felicidades! Has aprobado el examen con un " + porcentajeCorrectas + "% de respuestas correctas.");

    } else {

        console.log("Lo siento, has reprobado el examen con un " + porcentajeCorrectas + "% de respuestas correctas.");

    }

}

evaluarCombustibleExamen(15, 8, 10);

evaluarCombustibleExamen(50, 6, 10);



function calcularTotalCristales(cristales) {
    let total = 0;
    for (let i = 0; i < cristales.length; i++) {
        total += cristales[i];
    }
    return total;
}

let cristalesRecolectados = [5, 10, 15, 20, 25];
let totalCristales = calcularTotalCristales(cristalesRecolectados);
console.log("Total de cristales recolectados: " + totalCristales);