const personaje = document.getElementById("personaje");
const cambiar = document.getElementById("cambiar");
const verDimension = document.getElementById("verDimension");
const dimension = document.getElementById("dimension");

cambiar.addEventListener("click", function(){

    personaje.setAttribute("src", "morty.jpeg");
    personaje.setAttribute("title", "Morty");

    personaje.dataset.dimension="C-131";
});


verDimension.addEventListener("click", function(){
    dimension.textContent = personaje.dataset.dimension;
});


const portal = document.getElementById("portal");
const activarPortal = document.getElementById("activarPortal");


activarPortal.addEventListener("click", function(){
    portal.style.backgroundColor = "green";
    portal.style.color = "white";
    portal.textContent = "Portal activado";
});