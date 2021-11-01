//import {autos} from "./autos.js";
import { Anuncio_Auto } from "./anuncio.js";
import {crearTabla} from "./dinamicas.js";

const $divTabla = document.getElementById("divTabla");
const autos = JSON.parse(localStorage.getItem("autos")) || [];
console.log(autos);
actualizarTabla();



window.addEventListener("click", (e)=>{

    if(e.target.matches("td")){

        console.log(e.target.parentElement.dataset.id);
        let id = e.target.parentElement.dataset.id;
        cargarFormulario(autos.find((auto)=> auto.id == id));
    }else if(e.target.matches("#btnDelete")){
        handlerDelete(parseInt($formulario.txtId.value));
        $formulario.txtId.value = "";
        const $btnEliminar = document.getElementById("btnDelete").classList.add("oculto");
        $formulario.reset();
    }
});

function cargarFormulario(auto){
    const {txtId, titulo, transaccion, descripcion, precio, puertas, kms, potencia} = $formulario;
    txtId.value = auto.id;
    titulo.value = auto.titulo;
    transaccion.value = auto.transaccion;
    descripcion.value = auto.descripcion;
    precio.value = auto.precio;
    puertas.value = auto.puertas;
    kms.value = auto.km;
    potencia.value = auto.potencia;

    const $submit = document.getElementsByClassName("submit")[0];
    $submit.value = "Modificar";
    const $btnEliminar = document.getElementById("btnDelete").classList.remove("oculto");

}

const $formulario = document.forms[0];

$formulario.addEventListener("submit", (e)=>{

    e.preventDefault();
    console.log("Enviando...");

    const {txtId, titulo, transaccion, descripcion, precio, puertas, kms, potencia} = $formulario;

    const formAuto = new Anuncio_Auto(txtId.value, titulo.value, transaccion.value, descripcion.value, precio.value, puertas.value, kms.value, potencia.value);

    if(formAuto.id === ''){
        //alta
        formAuto.id = Date.now();
        handlerCreate(formAuto);

    } else {

        //modificacion
        handlerUpdate(formAuto);
        const $btnEliminar = document.getElementById("btnDelete").classList.add("oculto");
        $formulario.txtId.value = "";
    }


    $formulario.reset();
});

const handlerCreate = (nuevoAuto)=>{

    autos.push(nuevoAuto);
    actualizarStorage(autos);
    agregarSpinner();
    setTimeout(()=>{
        actualizarTabla();
        eliminarSpinner();
    },2000);
    //actualizarTabla();
};

const handlerUpdate = (autoEditado)=>{
    let indice = autos.findIndex((auto)=>{
        return auto.id == autoEditado.id;
    });

    if(confirm("Confirma modificacion?")){

        autos.splice(indice, 1, autoEditado);
        actualizarStorage(autos);
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

    let indice = autos.findIndex((auto)=>{
        return auto.id == id;
    });

    if(confirm("Confirma eliminacion?")){

        autos.splice(indice, 1);
        actualizarStorage(autos);
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

    const data = JSON.parse(localStorage.getItem("autos"));
    if(data){
        data.sort(function(a,b){return b.precio - a.precio});
        $divTabla.appendChild(crearTabla(autos));
    }
    
};

const actualizarStorage = (data)=>{

    localStorage.setItem("autos", JSON.stringify(data));
    
};

// No tocar


function agregarSpinner(){
    let spinner = document.createElement("img");
    spinner.setAttribute("src","./assets/1493.gif");
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

