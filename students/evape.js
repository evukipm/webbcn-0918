//Código que muestra/oculta las secciones
console.log("Código de Eva Pérez");
//Primero selecciono los dos elementos del HTML sobre el que aplicar el evento
var togglePerfil = document.querySelector(".toggle-perfil");
var toggleExperimentos = document.querySelector(".toggle-experimentos");
var perfil = document.querySelector(".perfil");
var experimentos = document.querySelector(".experimentos");

//Aquí creo la función
function ocultaPerfil(){
    perfil.classList.toggle("oculta")
}
function ocultaExperimentos(){
    experimentos.classList.toggle("oculta")
}

//Aquí creo el evento
togglePerfil.addEventListener("click", ocultaPerfil);
toggleExperimentos.addEventListener("click", ocultaExperimentos);