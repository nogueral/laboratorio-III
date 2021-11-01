import Persona from "./persona.js";

class Empleado extends Persona{

    legajo;

    constructor(nombre,edad,hambre, legajo){
        super(nombre,edad,hambre);
        this.legajo=legajo;
    }

    saludar(){
        console.log("Hola me llamo " + this.nombre + " y mi legajo es " + this.legajo);
    }
}


export default Empleado;