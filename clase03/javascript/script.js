/*window.addEventListener("load", ()=>{document.getElementById("miBoton").addEventListener("click", ()=>{console.log("Hola");})});*/

//tambien se puede usar evento "DOMContentLoaded"


//si uso el atributo defer puedo evitar agregar el event listener load a window
document.getElementById("miBoton").addEventListener("click", ()=>{console.log("Hola");});