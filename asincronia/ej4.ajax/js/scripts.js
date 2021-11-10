const cargarImagenes = (data)=>{

    const info = document.getElementById("info");

    data.forEach(personaje => {
        
        const imagen = document.createElement('img');
        imagen.setAttribute('src', personaje.image);
        imagen.setAttribute('alt', personaje.name);
        info.appendChild(imagen);
    });
}

const getPersonajes = ()=>{

    const URL = "https://rickandmortyapi.com/api/character";

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = ()=>{
       
        if(xhr.readyState == 4){

            if(xhr.status == 200){
                let data = JSON.parse(xhr.responseText);
                cargarImagenes(data.results);
                console.log(data);
            }
        }
    }

    xhr.open("GET", URL);
    xhr.send();

}

getPersonajes();