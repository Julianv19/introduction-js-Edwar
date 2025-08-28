//alert ("estoy en hello world")
//convenciones para nombrar variables
//Camelcase
//Uppercamelcase => se usa para nombrar clases en JS
//Lowercamelcase => se usa para nombrar variables en JS
//SCREAMING_SNAKE_CASE => se usa para nombrar las variables constantes
//snake_case => generealmente uasdo para nombrar varibles en el lenguaje Phyton.
//kebab-case => se usa para nombrar archivos multimedia en JS
//Train-Case => variante del kebab-case

// Ya NO se usa var para declarar variables, actualmente se usa Let
// En JS No es obligatorio indocar el tipo de variable 
// JS se puede o NO uasr el punto y coma al final de una sentencia
var producto = "sensor-1";
var producto2 = "sensor-1";
console.log(producto);
console.log(producto2);

//NO se puede iniciar una variable con un sensor medio
// var -sensor = "sensor-3";

//NO se puede inicar una variable con numero
// var 1sensor = "sensor-5"

//SI esta permitido iniciar una variable con guion al piso
//console.log(_sensor);

//Crear una variable de las tres formas distintas
//var sensor10 = "sensor de Lluvia";
let sensor10 = "sensor de Lluvia";
//const sensor10 = "sensor de Lluvia";

console.log(sensor10);

//Ejemplop con var
//NO me indica error por duplicidad de variables
//var sensor11 = "sensor de humedad";
//var sensor11 = "sensor de calor";

//console.log(sensor11);

//Let no permite duplicidad al decalrar variables
//let sensor12 = "sensor de velocidad";
//let sensor12 = "sensor de luz";

//NO muestra error por falta de inicailizacion
//var userName = "Julian"
//console.log(userName);

// Let muestra error por falta de inicailizacion
let userName = "Julian"

//usando la declaracion const no se puede cambiar su valor
const maxSize = 1024;
maxSize = 2048;
console.log(maxSize);
