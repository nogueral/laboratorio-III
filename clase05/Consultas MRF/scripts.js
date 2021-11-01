//console.log(data);

/*
    realizar las operaciones usando los metodos map,  reduce y filter y combinaciones entre ellos
  */
var soluciones = {};

// Retornar un array con los nombres de los usuarios femeninos

soluciones.usuariosFemeninos = function(usuarios){
  return usuarios.filter(elemento=>elemento.genero == "Female");
  }
//console.log("Usuarios femeninos: ");
//console.log(soluciones.usuariosFemeninos(data));

// Retornar un array de strings (el email de los usuarios de sexo masculino)

soluciones.mailsVarones = function(usuarios){
   usuarios = usuarios.filter(elemento=>elemento.genero == "Male");
   return usuarios.map(elemento=>elemento.email);
}
//console.log("Email de users masculinos: ");
//console.log(soluciones.mailsVarones(data));

// Retornar un array de objetos que solo contengan las claves nombre, email y edad, de todos los usuarios mayores que 'edad'

soluciones.usuariosMayores = function(usuarios, edad){
  usuarios = usuarios.filter(elemento=>elemento.edad > edad);
  return usuarios.map((elemento)=>{
    return{
      nombre:elemento.nombre,
      email:elemento.email,
      edad:elemento.edad
    }
  })
};
//console.log("Retornar un array de objetos que solo contengan las claves nombre, email y edad, de todos los usuarios mayores que 'edad: ");
//console.log(soluciones.usuariosMayores(data, 40));

  // Retornar un objeto que contenga solo el nombre y la edad del usuario mas grande.

soluciones.usuarioMasGrande = function(usuarios){
  let edades = usuarios.map(elemento=>elemento.edad);
  usuarios = usuarios.map(elemento=>{return{nombre:elemento.nombre, edad:elemento.edad}});
  return usuarios.filter(elemento=>elemento.edad==Math.max(...edades));

}
//console.log("Retornar un objeto que contenga solo el nombre y la edad del usuario mas grande.");
//console.log(soluciones.usuarioMasGrande(data));

// Retornar el promedio de edad de los usuarios (number)

soluciones.promedio = function(usuarios){
  
let suma = usuarios.reduce((anterior, actual)=>{return anterior + actual.edad}, 0);

return Math.round(suma / usuarios.length);

}

//console.log("Promedio edad usuarios " + soluciones.promedio(data));

// Retornar el promedio de edad de los usuarios hombres (number)

soluciones.promedioVarones = function(usuarios){
   
  usuarios = usuarios.filter(elemento=>{return elemento.genero == "Male"});

  return soluciones.promedio(usuarios);
   
}

//console.log("Promedio edad Varones " + soluciones.promedioVarones(data));

 // Retornar el promedio de edad de los usuarios mujeres (number)

soluciones.promedioMujeres = function(usuarios){
   
  usuarios = usuarios.filter(elemento=>{return elemento.genero == "Female"});

  return soluciones.promedio(usuarios);
}

console.log("Promedio edad Mujeres " + soluciones.promedioMujeres(data));

