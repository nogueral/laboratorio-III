class Anuncio{

    constructor(id,titulo,transaccion,descripcion,precio){
        this.id = id ;
        this.titulo = titulo ;
        this.transaccion = transaccion ;
        this.descripcion = descripcion ;
        this.precio = precio ;
        
    }
}

export default class AnuncioAuto extends Anuncio {

    constructor(id,titulo,transaccion,descripcion,precio,num_puertas,num_kmh,potencia) {
        super(id,titulo,transaccion,descripcion,precio);
        this.num_puertas = num_puertas ;
        this.num_kmh = num_kmh ;
        this.potencia = potencia;
    }
  }

