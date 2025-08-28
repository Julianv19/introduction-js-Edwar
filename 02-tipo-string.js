// String o cadena de texto
const sensor = "Temperetura";
const sensor2 = "PH";

console.log(sensor);
console.log(sensor2);


//Esatas dos formas no son tan comunes
const sensor3 = String("presion");
const sensor4 = new String("humedad");
console.log(sensor3);
console.log(sensor4);

//Para saber el tipo de dato de una variable
console.log(typeof sensor3);

let product = ("Televisor de 32\"");
let product2 = ("Televisor de 58\"");
console.log(product);
console.log(product2);

//FUNCTION una funcion es un bloque de codigo que hace una accion en especifico

{
        let a= 3;
        let b= 5;
        let suma= a+b;
        console.log(suma)

}
//Metodos con String
console.log(product2.length);

let nombre= ("Carlos Julian Ocampo Gonzalez")
console.log(nombre.length);

//Sirve para saber si una cadena de texto existe en una frase
// indexof nos muestra la posicion en la que se encuentra la cadena de texto
//Si la cadena No existe muestra un resultado menor que cero(0)
let phrase = "Aqui vamos a bucar la palabra SENA";
console.log(phrase.indexOf("SENA"));

// Hacer lo mismo de una forma mas moderna, el resultado es un true o un false
let phrase2 = "Aqui vamos a bucar la palabra SENA";
console.log(phrase.includes("SENA"));
console.log(phrase.includes("JULIAN"));



