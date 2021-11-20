const URL = "http://localhost:3000/personas";

const getPersonas = ()=>{

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange',()=>{

        if(xhr.readyState == 4){

            if(xhr.status >= 200 && xhr.status > 300){

                const data = JSON.parse(xhr.responseText);
            }

        } else {

        }
    })
}