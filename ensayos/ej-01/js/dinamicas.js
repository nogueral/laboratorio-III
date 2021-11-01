
export const crearTabla = (data)=>{

    const tabla = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const cabecera = document.createElement("tr");
    cabecera.style.backgroundColor = "coral";
    //cargo el thead
    for (const key in data[0]) {

        if(key !== "id"){
            const th = document.createElement("th");
            //metodo
            const contenido = document.createTextNode(key);
            th.appendChild(contenido);
            cabecera.appendChild(th);
        }

    }

    thead.appendChild(cabecera);
    tabla.appendChild(thead);

    //cargo el tbody
    data.forEach((element, index) => {
        const tr = document.createElement("tr");

        for (const key in element) {

            if(key === "id"){
                tr.setAttribute("data-id", element[key]);
            }else{
                //propiedad
                const td = document.createElement("td");
                td.textContent = element[key];
                //td.innerText = element[key]; se usa solo p Explorer
                tr.appendChild(td);
            }

        }

        tbody.appendChild(tr);

        if(index % 2){
            //tr.style.backgroundColor = "#ccc";
            tr.setAttribute("style", "background-color:#ccc");
        }

    });

    tabla.appendChild(tbody);

    return tabla;
}