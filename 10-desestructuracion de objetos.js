//CARLOS JULIAN OCAMPO GONZALEZ
//Desestructuracion de objetos

const product = {
    productName : "sensor de humedad",
    price : 300,
    avaliable : true,

}
//CARLOS JULIAN OCAMPO GONZALEZ
//Aqui un ejemplo de desestructuracion de objetos
const productPrice = product.price;
const producName = product.productName;

console.log(productPrice);
console.log(product.productName);

//Para que sirve el destructuring? sirve para extraer los valores de un objeto.
const {price, avaliable,productName} = product;

console.log(price, avaliable,productName);