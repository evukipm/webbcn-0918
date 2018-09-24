
function main(){

    //Código que muestra/oculta las secciones
    console.log("Código de Eva Pérez");
    
    //Primero selecciono los dos elementos del HTML sobre el que aplicar el evento
    var togglePerfil = document.querySelector(".toggle-perfil");
    var toggleExperimentos = document.querySelector(".toggle-experimentos");
    var perfil = document.querySelector(".perfil");
    var experimentos = document.querySelector(".experimentos");

    //Aquí creo la función
    function ocultaPerfil(e){
        perfil.classList.toggle("oculta");
        if(perfil.classList.contains("oculta")){
            e.currentTarget.innerText = "Muestra el perfil"
        }
        else{
            e.currentTarget.innerText = "Oculta el perfil"
        }
    }
    function ocultaExperimentos(e){
        experimentos.classList.toggle("oculta")
        if(experimentos.classList.contains("oculta")){
            e.currentTarget.innerText = "Muestra los experimentos"
        }
        else{
            e.currentTarget.innerText = "Oculta los experimentos"
        }
    }

    //Aquí creo el evento
    togglePerfil.addEventListener("click", ocultaPerfil);
    toggleExperimentos.addEventListener("click", ocultaExperimentos);

    //
}

window.addEventListener("load", main);