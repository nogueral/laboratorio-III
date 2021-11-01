class Anuncio{

    constructor(id, titulo, transaccion, descripcion){
        this.id = id;
        this.titulo = titulo;
        this.transaccion = transaccion;
        this.descripcion = descripcion;
    }
}

export class Anuncio_Auto extends Anuncio{

    constructor(id, titulo, transaccion, descripcion, precio, puertas, km, potencia){
        super(id, titulo, transaccion, descripcion);
        this.precio = precio;
        this.puertas = puertas;
        this.km = km;
        this.potencia = potencia;
    }
}