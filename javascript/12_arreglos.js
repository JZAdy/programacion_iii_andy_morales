let personajes =["Rick","Morty","Summer","Jerry", "leon","Memy"];
console.log("Elemento 0", personajes[0]);
console.log("Elemento 2", personajes[2]);
console.log("Elemento 5", personajes[5]);
console.log("Elemento 4", personajes[4]);
console.log("ETamaño del arreglo", personajes.length);
console.log("Personajes:",personajes)

console.log("Incluir elemntos a un arreglo con Push");
personajes.push("Paucay");
personajes.unshift("Vale");
console.log("Modificar elementos a un arreglo");
personajes[0]="Valeska";
console.log("Personajes:",personajes)

console.log("Eliminar un elemento del arerglo:")
personajes.pop();
console.log("Personajes:",personajes)
personajes.shift();
console.log("Personajes:",personajes)
personajes.splice(1,1);
console.log("Personajes:",personajes)