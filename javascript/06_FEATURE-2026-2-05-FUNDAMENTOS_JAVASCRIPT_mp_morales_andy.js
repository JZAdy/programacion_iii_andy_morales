let nombre = "Andy";
const edad = 20;
let suma = 10 + 5;
let mayor = edad >= 18;

if (edad >= 18) {
  console.log("Mayor de edad");
}

switch (edad) {
  case 18:
    console.log("Tiene 18");
    break;
  default:
    console.log("Otra edad");
}

console.log(nombre, suma, mayor);
