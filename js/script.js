//selecciono botón del DOM
const button = document.querySelector("#button");

button.addEventListener("click", (e) => {
    //alert("me han pulsado");
    document.querySelectorAll("#filtro").forEach((e) => {
        e.style.visibility = 'visible';
    });

    //mostrar botones
    document.querySelectorAll("#btn_lista_deseo").forEach((e) => {
        e.style.visibility = 'visible';
    });

    //mostrar lista pokemon
    mostrarPokemon();
    
});

function mostrarPokemon(){
    document.querySelector(".cargando-datos").style.visibility = "visible";
};