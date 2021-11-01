//import {personas as people} from "./persona.js";
import {crearTabla} from "./dinamicas.js";
import {Persona} from "./persona.js";
/*const objeto = {nombre:"Jose",edad:30};
localStorage.setItem("Nombre",JSON.stringify(objeto));
const x = JSON.parse(localStorage.getItem("Nombre"));
localStorage.removeItem("Nombre");*/
//console.log(x.edad);

//localStorage.setItem("personas", JSON.stringify(people));
//localStorage.clear();
const $divTabla = document.getElementById("divTabla");
const personas = JSON.parse(localStorage.getItem("personas")) || [];
actualizarTabla();

//console.log(personas);

window.addEventListener("click", (e)=>{

    if(e.target.matches("td")){

        console.log(e.target.parentElement.dataset.id);
        let id = e.target.parentElement.dataset.id;
        cargarFormulario(personas.find((persona)=> persona.id == id));
    }else if(e.target.matches("#btnDelete")){
        handlerDelete(parseInt($formulario.txtId.value));
        $formulario.txtId.value = "";
        $formulario.reset();
    }
});

function cargarFormulario(persona){
    const {txtId, txtNombre, txtEdad, txtMail, rdoGenero} = $formulario;
    txtId.value = persona.id;
    txtNombre.value = persona.nombre;
    txtEdad.value = persona.edad;
    txtMail.value = persona.email;
    rdoGenero.value = persona.genero;
}

const $formulario = document.forms[0];

$formulario.addEventListener("submit", (e)=>{

    e.preventDefault();
    console.log("Enviando...");

    const {txtId, txtNombre, txtEdad, txtMail, rdoGenero} = $formulario;

    const formPersona = new Persona(txtId.value, txtNombre.value, txtEdad.value, txtMail.value, rdoGenero.value);

    if(formPersona.id === ''){
        //alta
        formPersona.id = Date.now();
        //console.log(formPersona);
        handlerCreate(formPersona);
        //actualizarTabla(personas);
        //actualizarStorage(personas);

    } else {

        //modificacion
        handlerUpdate(formPersona);
        $formulario.txtId.value = "";
    }


    $formulario.reset();
});

const handlerCreate = (nuevaPersona)=>{

    personas.push(nuevaPersona);
    actualizarStorage(personas);
    actualizarTabla();
};

const handlerUpdate = (personaEditada)=>{
    let indice = personas.findIndex((persona)=>{
        return persona.id == personaEditada.id;
    });

    personas.splice(indice, 1);
    personas.push(personaEditada);

    actualizarStorage(personas);
    actualizarTabla();
};

const handlerDelete = (id)=>{

    let indice = personas.findIndex((persona)=>{
        return persona.id == id;
    });

    personas.splice(indice, 1);

    actualizarStorage(personas);
    actualizarTabla();
};

function actualizarTabla(){

    while($divTabla.hasChildNodes()){
        $divTabla.removeChild($divTabla.firstElementChild);
    }

    const data = JSON.parse(localStorage.getItem("personas"));
    if(data){
        $divTabla.appendChild(crearTabla(personas));
    }
    
};

const actualizarStorage = (data)=>{

    localStorage.setItem("personas", JSON.stringify(data));
    
};

//actualizarTabla(personas);

