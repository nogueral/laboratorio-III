import AnuncioAuto from "../Anuncio.js";

let idSeleccionado = "";

const anuncios = JSON.parse(localStorage.getItem("lista")) || [];

window.addEventListener("DOMContentLoaded", ()=>{

    document.forms[0].addEventListener("submit", handlerSubmit);

    document.addEventListener("click", handlerClick);


    if(anuncios.length > 0){
        handlerLoadList(anuncios);
    }

});

// No tocar


function handlerLoadList(e){
    renderizarLista(crearTabla(anuncios), document.getElementById("divLista"));
}

// No tocar


function renderizarLista(lista, contenedor){

    while(contenedor.hasChildNodes()){
        contenedor.removeChild(contenedor.firstChild);
    }

    if(lista){
       contenedor.appendChild(lista); 
    }
}

// No tocar


function crearTabla(items){

    const tabla = document.createElement("table");

    tabla.appendChild(crearThead(items[0]));

    tabla.appendChild(crearTbody(items));

    return tabla;
}

// No tocar


function crearThead(item){
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");


    for(const key in item){
        if (key !== "id"){
        const th = document.createElement("th");
        th.textContent = key;
        tr.appendChild(th);  
        }    
    }
    thead.appendChild(tr);
    return thead;
}

// No tocar

function crearTbody(items){
    const tbody = document.createElement("tbody");
    items.forEach(item=>{
        const tr = document.createElement("tr");
        
        for(const key in item){
            if (key == "id"){
                tr.setAttribute("data-id",item[key]);
            }else{
                const td = document.createElement("td");
                td.textContent = item[key];
                tr.appendChild(td);
            }
        }
        tbody.appendChild(tr);
    });
    return tbody;
}

function handlerClick(e){

    if(e.target.matches("td")){
        let id = e.target.parentNode.dataset.id;
        idSeleccionado = id;
        console.log("EL ID SELECCIONADO ES : " + id);
        cargarFormulario(idSeleccionado);
        
    }else if (e.target.matches("#btnEliminar")) {
        let id = document.forms[0].id.value;

        if (confirm("Confirma la eliminacion ?")){

            agregarSpinner();
            setTimeout(()=>{

                let index = anuncios.findIndex((el)=>el.id ==id);
                anuncios.splice(index,1);
                almacenarDatos(anuncios); 
              
                eliminarSpinner();
            },2000);
            
        }
        limpiarFormulario(document.forms[0]);
    }
}


function handlerSubmit(e){
    e.preventDefault();
    const frm = e.target;

    if(  document.getElementById("btnSubmit").value == "Modificar"){
        const anuncioEditado = new AnuncioAuto(
            parseInt(frm.id.value),
            frm.titulo.value,
            frm.transaccion.value,
            frm.descripcion.value,
            frm.precio.value,
            frm.num_puertas.value,
            frm.num_kmh.value,
            frm.potencia.value

        );
        
        if (confirm("Confirma Modificacion?")){
            agregarSpinner();
            setTimeout(()=>{
                modificarAnuncio(anuncioEditado);
                eliminarSpinner();
            },2000);
        }

    }else if (  document.getElementById("btnSubmit").value = "Guardar"){

        console.log("Dando de alta");

        const nuevoAnuncio = new AnuncioAuto(
            Date.now(),
            frm.titulo.value,
            frm.transaccion.value,
            frm.descripcion.value,
            frm.precio.value,
            frm.num_puertas.value,
            frm.num_kmh.value,
            frm.potencia.value
        );

            agregarSpinner();
            setTimeout(()=>{
                altaAnuncio(nuevoAnuncio);
                eliminarSpinner();
            },2000);

        }
        limpiarFormulario(e.target);
}


// No tocar


function agregarSpinner(){
    let spinner = document.createElement("img");
    spinner.setAttribute("src","./assets/spinner.gif");
    spinner.setAttribute("alt","Imagen spinner");
    document.getElementById("spinner-container").appendChild(spinner);
}

// No tocar

function eliminarSpinner(){
    document.getElementById("spinner-container").innerHTML="";
}

function altaAnuncio(a){
    anuncios.push(a);
    almacenarDatos(anuncios);
}

function  modificarAnuncio(a){
    let index = anuncios.findIndex((anuncio)=>{
        return anuncio.id == a.id;
    });

    anuncios.splice(index , 1 , a);
    almacenarDatos(anuncios);
}

// No tocar


function almacenarDatos(data){
    localStorage.setItem("lista",JSON.stringify(data));
    handlerLoadList();
}



function limpiarFormulario(frm){
    frm.reset();
    document.getElementById("btnEliminar").classList.add("oculto");
    document.getElementById("btnSubmit").value = "Guardar";

    document.forms[0].id.value = "" ;
}



function cargarFormulario(id){

    let Anuncio = null;

    const frm = document.forms[0];
    
    Anuncio = anuncios.filter(p => p.id == id)[0];

    frm.id.value = Anuncio.id;
    frm.titulo.value= Anuncio.titulo;
    frm.transaccion.value= Anuncio.transaccion;
    frm.descripcion.value= Anuncio.descripcion;
    frm.precio.value= Anuncio.precio;
    frm.num_puertas.value= Anuncio.num_puertas;
    frm.num_kmh.value= Anuncio.num_kmh;
    frm.potencia.value= Anuncio.potencia;


    document.getElementById("btnSubmit").value = "Modificar";
    document.getElementById("btnEliminar").classList.remove("oculto");
}
