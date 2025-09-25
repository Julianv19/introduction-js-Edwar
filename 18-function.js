// Functions in JS
// ¿Que es el Hoisting?
// Hoisting en JS es el comportamiento por defecto en el que el interprete "MUEVE" las declaraciones(de variables y funciones) a la parte superiorde su ambito (scope) antes de ejecutar el codigo.
// Esto significa que puedes usar una funcion o variable declarada, antes de escribirla en el codigo.

// Declaracion de una funcion 
// Como esta funcion esta declarada se puede llamar antes o despues de creacion.

add();

function add(){
    console.log(10+10);
};

// =========================================
// La expresion de una funcion
// la espresion de la funcion solo puede llamarse despues de su creacion
const sumar2 = function(){
    console.log(3 +3);
};

sumar2();

// ===========================================
// IIFE (Inmediately Invoked Function Expression), esta funcion se llama a si misma.
// son utiles para proteger las variables para que no se mezclen con las variables de otros archivos.
(function(){
    console.log("Esta es una funcion IIFE");
})();

(function(name){
    console.log(`Hello ${name}`);
})('Julian')
console.log(client);