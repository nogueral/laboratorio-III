


const PI = 3.14;

export function sumar (a,b){
    return a+b;
}

export function dividir (a,b){
    if(validarCero(a))
    return a/b;
}

function validarCero(a){
    let esValido = 1;
    if(a == 0){
        esValido = 0;
    }

    return esValido;
}

export function calcularPerimetro(diametro){
    return PI * diametro;
}

//export {sumar, dividir, calcularPerimetro};

/* 
export default{
    sumar,
    dividir,
    calcularPerimetro
}

*/