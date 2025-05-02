var miFuncion2 = function(valor)
{
return valor;
}

let miFuncion1 = valor => valor +" juanjo";
console.log(miFuncion1("Hola"));


var sum= function(a,b){
    return a+b;
}
console.log(sum(2,3));

let sum2 = (a,b) => a+b;
console.log(sum2(2,8));

//ECM5

var saludarPersona = function(nombre){
    var salida = "Hola " + nombre;
    return salida;
}

//ECM6

let saludaPersona2 = nombre => {
    let salida = "Hola " + nombre;
    return salida;
}

let obtenerLibro = id => ({id:id, nombre: "El libro de la selva"});
console.log(obtenerLibro(12));