//import {autos} from "./autos.js";
import { Anuncio } from "../assets/js/anuncio.js";
import {crearTabla} from "./dinamicas.js";

const $divTabla = document.getElementById("divTabla");
const anuncios = JSON.parse(localStorage.getItem("anuncios")) || [];
console.log(anuncios);
actualizarTabla();



window.addEventListener("click", (e)=>{

    if(e.target.matches("td")){

        console.log(e.target.parentElement.dataset.id);
        let id = e.target.parentElement.dataset.id;
        cargarFormulario(anuncios.find((anuncio)=> anuncio.id == id));
    }else if(e.target.matches("#btnDelete")){
        handlerDelete(parseInt($formulario.txtId.value));
        $formulario.txtId.value = "";
        const $btnEliminar = document.getElementById("btnDelete").classList.add("oculto");
        const $btnCxl = document.getElementById("btnCxl").classList.add("oculto");
        $formulario.reset();
    }else if(e.target.matches("#btnCxl")){
        const $btnEliminar = document.getElementById("btnDelete").classList.add("oculto");
        const $btnCxl = document.getElementById("btnCxl").classList.add("oculto");
        $formulario.reset();
    }
});

const $formulario = document.forms[0];

function cargarFormulario(anuncio){
    const {txtId, titulo, transaccion, descripcion, precio, cantBanios, cantAutos, cantDorm} = $formulario;
    txtId.value = anuncio.id;
    titulo.value = anuncio.titulo;
    transaccion.value = anuncio.transaccion;
    descripcion.value = anuncio.descripcion;
    precio.value = anuncio.precio;
    cantBanios.value = anuncio.banios;
    cantAutos.value = anuncio.autos;
    cantDorm.value = anuncio.dormitorios;

    const $submit = document.getElementsByClassName("submit")[0];
    $submit.value = "Modificar";
    const $btnEliminar = document.getElementById("btnDelete").classList.remove("oculto");
    const $btnCxl = document.getElementById("btnCxl").classList.remove("oculto");
}



$formulario.addEventListener("submit", (e)=>{

    e.preventDefault();
    console.log("Enviando...");
    
    const {txtId, titulo, transaccion, descripcion, precio, cantBanios, cantAutos, cantDorm} = $formulario;
    
    const formAuto = new Anuncio(txtId.value, titulo.value, transaccion.value, descripcion.value, precio.value, cantBanios.value, cantAutos.value, cantDorm.value);

    if(formAuto.id === ''){
        //alta
        formAuto.id = Date.now();
        handlerCreate(formAuto);

    } else {

        //modificacion
        handlerUpdate(formAuto);
        const $btnEliminar = document.getElementById("btnDelete").classList.add("oculto");
        const $btnCxl = document.getElementById("btnCxl").classList.add("oculto");
        $formulario.txtId.value = "";
    }


    $formulario.reset();
});

const handlerCreate = (nuevoAnuncio)=>{

    anuncios.push(nuevoAnuncio);
    actualizarStorage(anuncios);
    agregarSpinner();
    setTimeout(()=>{
        actualizarTabla();
        eliminarSpinner();
    },2000);
    //actualizarTabla();
};

const handlerUpdate = (anuncioEditado)=>{
    let indice = anuncios.findIndex((anuncio)=>{
        return anuncio.id == anuncioEditado.id;
    });

    if(confirm("Confirma modificacion?")){

        anuncios.splice(indice, 1, anuncioEditado);
        actualizarStorage(anuncios);
        agregarSpinner();
        setTimeout(()=>{
            actualizarTabla();
            eliminarSpinner();
        },2000);

    }

    const $submit = document.getElementsByClassName("submit")[0];
    $submit.value = "Guardar";

};

const handlerDelete = (id)=>{

    let indice = anuncios.findIndex((anuncio)=>{
        return anuncio.id == id;
    });

    if(confirm("Confirma eliminacion?")){

        anuncios.splice(indice, 1);
        actualizarStorage(anuncios);
        agregarSpinner();
        setTimeout(()=>{
            actualizarTabla();
            eliminarSpinner();
        },2000);
        
    }

    const $submit = document.getElementsByClassName("submit")[0];
    $submit.value = "Guardar";
};

function actualizarTabla(){

    while($divTabla.hasChildNodes()){
        $divTabla.removeChild($divTabla.firstChild);
    }

    const data = JSON.parse(localStorage.getItem("anuncios"));
    if(data){
        data.sort(function(a,b){return b.precio - a.precio});
        $divTabla.appendChild(crearTabla(anuncios));
    }
    
};

const actualizarStorage = (data)=>{

    localStorage.setItem("anuncios", JSON.stringify(data));
    
};

// No tocar


function agregarSpinner(){
    let spinner = document.createElement("img");
    spinner.setAttribute("src","./assets/1488.gif");
    spinner.setAttribute("alt","Imagen spinner");
    document.getElementById("spinner-container").appendChild(spinner);
}

// No tocar

function eliminarSpinner(){
    //document.getElementById("spinner-container").innerHTML="";

    const $spinnerContainer = document.getElementById("spinner-container");

    while($spinnerContainer.hasChildNodes()){
        $spinnerContainer.removeChild($spinnerContainer.firstElementChild);
    }
}

//actualizarTabla(autos);

