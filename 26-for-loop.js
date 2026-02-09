// ForEach map son metodos esclusivos de arreglos
const shoopingCart = [
    {productName:'Smart TV 60", ', price: 900, color: "red"},
    {productName:'Smart TV 50", ', price: 700},
    {productName:'Tablet ', price: 500},
    {productName:'Smart phone ', price: 900},
    {productName:'Google assitand ', price: 600},
    {productName:'Sound-bar ', price: 400},
    {productName:'Play station ', price: 800},
    {productName:'Wii ', price: 450},
    {productName:'Mouse', price: 50},
]
// // Recorrer un arreglo por cada elemento
// shoopingCart.forEach(function(product){
// console.log(product)
// });
// // Acceder a un elemento especifico
// shoopingCart.forEach(function(product){
// console.log(product.price)
// });

//=====================================================

// Ahora forEach con arrow function

// Recorrer un arreglo por cada elemento
// shoopingCart.forEach((product) =>console.log(product));
// shoopingCart.forEach((product) =>console.log(product.productName));
// shoopingCart.forEach((product) =>console.log(product.color));
// shoopingCart.forEach((product) =>console.log(product.price));

const array = shoopingCart.map(product =>`${product.productName} - ${product.price}`);
console.log(array);
