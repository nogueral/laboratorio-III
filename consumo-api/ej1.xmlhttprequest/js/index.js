const url = "http://localhost:3000/personas";
const divSpinner = document.querySelector(".spinner");

const getSpinner = () => {

    const spinner = document.createElement('img');
    spinner.setAttribute('src', './assets/spinner.gif');
    spinner.setAttribute('alt', 'loader');

    return spinner;
}

const clearDivSpinner = () => {

    while(divSpinner.hasChildNodes()){
        divSpinner.removeChild(divSpinner.firstChild);
    }
}

const getPersonasAjax = ()=>{



    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", ()=>{

        if(xhr.readyState == 4){

            if(xhr.status >=200 && xhr.status < 300){

                const data = JSON.parse(xhr.responseText);

                console.log(data);

            } else {
                
                console.error(`Error: ${xhr.status} : ${xhr.statusText}`);
            }

            clearDivSpinner();

        } else {

            divSpinner.appendChild(getSpinner());
        }
    });

    xhr.open("GET", url);
    xhr.send();
};


const getPersonasFetch = () => {

    divSpinner.appendChild(getSpinner());
    fetch(url)
    .then((res)=>res.ok ? res.json() : Promise.reject(`Error: ${res.status} : ${res.statusText}`))
    .then((data)=>{

        console.log(data);
    })
    .catch((err)=>{
        console.error(err);
    })
    .finally(()=>{
        clearDivSpinner();
    });

};

const getPersonasFetchAsync = async () => {

    try {

        divSpinner.appendChild(getSpinner());

        const res = await fetch(url);

        if(!res.ok){
            throw new Error(`Error: ${res.status} : ${res.statusText}`);
            
        }

        const data = await res.json();

        console.log(data);
        
    } catch (err) {
        console.error(err.message);
    } finally{
        clearDivSpinner();
    }

};

const getPersonasAxios = ()=>{

    divSpinner.appendChild(getSpinner());
    axios.get(url)
    .then((res)=>{
        const {data} = res; // desestructuro la respuesta
        console.log(data);
    })
    .catch((err)=>{
        console.error(err.response);
    })
    .finally(()=>{
        clearDivSpinner();
    });

};

const getPersonasAxiosAsync = async ()=>{

    try {
        divSpinner.appendChild(getSpinner());
        const {data} = await axios.get(url);
        console.log(data);
    } catch (err) {
        console.error(err);
    } finally{
        clearDivSpinner();
    }

};

const createPersonasAjax = () => {
    const nuevaPersona = {nombre:"Juana",apellido:"Perez"};
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", ()=>{

        if(xhr.readyState == 4){

            if(xhr.status >=200 && xhr.status < 300){

                const data = JSON.parse(xhr.responseText);

                alert(`${data.id}, ${data.nombre}, ${data.apellido}`);

            } else {
                
                console.error(`Error: ${xhr.status} : ${xhr.statusText}`);
            }

            clearDivSpinner();

        } else {

            divSpinner.appendChild(getSpinner());
        }
    });

    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type","application/json;charset=utf8");
    xhr.send(JSON.stringify(nuevaPersona));

};

const createPersonasFetch = () => {

    const nuevaPersona = {nombre:"Miguel",apellido:"Dominguez"};
    const options = {
        method:"POST",
        headers: {
            "Content-Type":"application/json",
        },
        body:JSON.stringify(nuevaPersona)
    }
    divSpinner.appendChild(getSpinner());
    fetch(url, options)
    .then((res)=>res.ok ? res.json() : Promise.reject(`Error: ${res.status} : ${res.statusText}`))
    .then((data)=>{

        alert(`${data.id}, ${data.nombre}, ${data.apellido}`);
    })
    .catch((err)=>{
        console.error(err);
    })
    .finally(()=>{
        clearDivSpinner();
    });

};

const createPersonasAxiosAsync = async ()=>{

    const nuevaPersona = {nombre:"Lucia",apellido:"Suarez"};
    const options = {
        method:"POST",
        headers: {
            "Content-Type":"application/json",
        },
        data:JSON.stringify(nuevaPersona)
    };

    try {
        divSpinner.appendChild(getSpinner());
        const {data} = await axios(url, options);
        alert(`${data.id}, ${data.nombre}, ${data.apellido}`);
    } catch (err) {
        console.error(err);
    } finally{
        clearDivSpinner();
    }

};

const deletePersonasAjax = (id) => {

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", ()=>{

        if(xhr.readyState == 4){

            if(xhr.status >=200 && xhr.status < 300){

                alert(xhr.responseText);

            } else {
                
                console.error(`Error: ${xhr.status} : ${xhr.statusText}`);
            }

            clearDivSpinner();

        } else {

            divSpinner.appendChild(getSpinner());
        }
    });

    xhr.open("DELETE", url + "/" + id);
    xhr.send();

};

const deletePersonaFetch = (id) => {

    const options = {
        method:"DELETE"
    }
    divSpinner.appendChild(getSpinner());
    fetch(url + "/" + id, options)
    .then((res)=>res.ok ? res.json() : Promise.reject(`Error: ${res.status} : ${res.statusText}`))
    .then((data)=>{

        alert(data);
    })
    .catch((err)=>{
        console.error(err);
    })
    .finally(()=>{
        clearDivSpinner();
    });

};

const deletePersonaAxiosAsync = async (id)=>{

    /*const options = {
        method:"DELETE"
    };*/

    try {
        divSpinner.appendChild(getSpinner());
        //const {data} = await axios(url + "/" + id, options);
        //puede pasarle el objeto options o directamente llamar a axios.delete
        const {data} = await axios.delete(url + "/" + id);
        alert(data);
    } catch (err) {
        console.error(err);
    } finally{
        clearDivSpinner();
    }

};

const updatePersonaAjax = () => {

    const nuevaPersona = {id:14, nombre:"Luciana",apellido:"Suarez"};
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", ()=>{

        if(xhr.readyState == 4){

            if(xhr.status >=200 && xhr.status < 300){

                alert(xhr.responseText);

            } else {
                
                console.error(`Error: ${xhr.status} : ${xhr.statusText}`);
            }

            clearDivSpinner();

        } else {

            divSpinner.appendChild(getSpinner());
        }
    });

    xhr.open("PUT", url + "/" + nuevaPersona.id);
    xhr.setRequestHeader("Content-Type","application/json;charset=utf8");
    xhr.send(JSON.stringify(nuevaPersona));

};

const updatePersonaFetch = () => {

    const nuevaPersona = {id:14, nombre:"Mariana",apellido:"Suarez"};
    const options = {
        method:"PUT",
        headers: {
            "Content-Type":"application/json",
        },
        body:JSON.stringify(nuevaPersona)
    }
    divSpinner.appendChild(getSpinner());
    fetch(url + "/" + nuevaPersona.id, options)
    .then((res)=>res.ok ? res.json() : Promise.reject(`Error: ${res.status} : ${res.statusText}`))
    .then((data)=>{

        alert(data);
    })
    .catch((err)=>{
        console.error(err);
    })
    .finally(()=>{
        clearDivSpinner();
    });

};

const updatePersonasAxiosAsync = async ()=>{

    const nuevaPersona = {id:14, nombre:"Lucia",apellido:"Suarez"};
    const options = {
        method:"PUT",
        headers: {
            "Content-Type":"application/json",
        },
        data:JSON.stringify(nuevaPersona)
    };

    try {
        divSpinner.appendChild(getSpinner());
        const {data} = await axios(url + "/" + nuevaPersona.id, options);
        alert(data);
    } catch (err) {
        console.error(err);
    } finally{
        clearDivSpinner();
    }

};

/*const vec = [2,2,5,4,6,7,8,2,2];

const x = new Set(vec);
console.log(x);
const y = [...x];
console.log(y);*/