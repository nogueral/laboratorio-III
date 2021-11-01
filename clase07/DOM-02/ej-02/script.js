import {movies} from "./peliculas.js";

//console.log(movies);

const $tabla = document.getElementById("tabla");


function crearThead(item){
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");

    for (const key in item) {
        if(key !== "id"){
            const th = document.createElement("th");
            th.textContent = key;
            tr.appendChild(th);
        }
    }

    thead.appendChild(tr);
    return thead;
}

function crearTbody(items){
    const tbody = document.createElement("tbody");
    items.forEach(item => {
        const tr = document.createElement("tr");

        for (const key in item) {
            if(key == "id"){
                tr.setAttribute("data-id", item[key]);
            } else {
                const td = document.createElement("td");
                td.textContent = item[key];
                tr.appendChild(td);
            }
        }

        tbody.appendChild(tr);
    });

    return tbody;
}

function crearTabla(items){

    $tabla.appendChild(crearThead(items[0]));
    $tabla.appendChild(crearTbody(items));
}


crearTabla(movies);