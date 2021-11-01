import {movies} from "./peliculas.js";

//console.log(movies);

const $lista = document.getElementById("lista");

const crearItems = (lista)=>{

const $fragment = document.createDocumentFragment();

lista.forEach((movie)=>{
    const $li = document.createElement("li");
    const $texto = document.createTextNode(movie.first_name);
    $li.appendChild($texto);
    $li.setAttribute("data-id", movie.id.toString());
    $fragment.appendChild($li);
})

    return $fragment;
}



$lista.appendChild(crearItems(movies));