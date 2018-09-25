
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
            e.currentTarget.style.backgroundColor = "#d1d1d1"
            e.currentTarget.setAttribute("title", "Show the profile")
        }
        else{
            e.currentTarget.style.backgroundColor = "#80f442";
            e.currentTarget.setAttribute("title", "Hide the profile")
        }
    }
    function ocultaExperimentos(e){
        experimentos.classList.toggle("oculta")
        if(experimentos.classList.contains("oculta")){
            e.currentTarget.style.backgroundColor = "#d1d1d1";
            e.currentTarget.setAttribute("title", "Show the experiments");
        }
        else{
            e.currentTarget.style.backgroundColor = "#80f442";
            e.currentTarget.setAttribute("title", "Hide the experiments");
        }
    }

    //Aquí creo el evento
    togglePerfil.addEventListener("click", ocultaPerfil);
    toggleExperimentos.addEventListener("click", ocultaExperimentos);

    //
}

//añadimos buscador de estudiantes con un en el html
 //seleccionamos input
 var input = document.querySelector('.search input');
 //añadimos evento para cuando escribamos en el input
   input.addEventListener('keyup', handleKeyUp);
   input.addEventListener('click', function(event){
       event.stopPropagation();
   })
 
   document.body.addEventListener('keyup', function(event){
    if(event.key === 'Escape'){
        searchResultsElement.innerHTML ='';
    }
   });
   document.body.addEventListener('click', function(){
    searchResultsElement.innerHTML ='';
   })

   //función que limpia la pantalla

 //función para el evento
 function findStudents(searchTerm){
   var results = [];
   if(searchTerm){
   results = students.filter(function(student){
     var studentName = student.name.toLowerCase();
     if(studentName.indexOf(searchTerm) !== -1){
       return true;
     }
   })
 }
 return results;
 }  
 
 var searchResultsElement = document.querySelector('.search-results');

 function displayResults (results){
     searchResultsElement.innerHTML = '';
     var searchResultsListElement = document.createElement('ul');
     results.forEach(function(result){
       var resultLink = document.createElement('a');
       resultLink.innerText = result.name;
       resultLink.setAttribute('href', '../' + result.url);
       var resultListItem = document.createElement('li');
       resultListItem.appendChild(resultLink);
       searchResultsListElement.appendChild(resultListItem);
     })
     searchResultsElement.appendChild(searchResultsListElement);
 }
function handleKeyUp(){
    var searchTerm = input.value.toLowerCase();
    var results = findStudents(searchTerm);
    displayResults(results); 
}

//Counter de tiempo
var counterContainer = document.querySelector(".counter-container")

var counterNumber = document.querySelector(".counter-number");
var counter = 10;
counterNumber.innerText = counter;
var intervalId = setInterval(function(){
    counter--
    counterNumber.innerText = counter;
    if(!counter){
        clearInterval(intervalId);
        counterContainer.style.display = "none"
    }
}, 1000);

 
 //hacemos evento para que cargue main
 window.addEventListener("load", main);