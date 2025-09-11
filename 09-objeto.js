//CARLOS JULIAN OCAMPO GONZALEZ
//Objetos en JS

//CARLOS JULIAN OCAMPO GONZALEZ
//aqui tenemos tres variables
const productName = "Sensor de humedad";
const price = 300;
const available = true;

//CARLOS JULIAN OCAMPO GONZALEZ
//Este es un objeto llamado product que almacena las tres variables en una sola

const product = {
    productName :"sensor de humedad",
    price : 300,
    available : true,
}

console.log(product);
console.log(typeof product);
console.log(typeof productName);
console.log(typeof price);
console.log(typeof available);

//CARLOS JULIAN OCAMPO GONZALEZ
//Para acceder a las diferentes propiedades de un objeto lo hacemos de la 
// siguiente manera

console.log("el nombre del producto es: " + product.productName);
console.log("el precio del producto es: " + product.price);
console.log("el producto esta disponoble?: " + product.available);

//CARLOS JULIAN OCAMPO GONZALEZ
//Agregar propiedades al objeto
product.image = "image.jpg";
console.log(product);