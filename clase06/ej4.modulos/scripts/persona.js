export default class Persona{

    hambre;
    nombre;
    edad;

    constructor(nombre,edad,hambre = false){
        this.nombre = nombre;
        this.edad = edad;
        this.hambre = hambre;
    }

    saludar(){
        console.log("Hola me llamo " + this.nombre);
    }

    set Nombre(value){
        this.nombre = value;
    }

    get Nombre(){
        return this.nombre;
    }

    static sumar(a, b){
        return a + b;
    }
}

//export default Persona