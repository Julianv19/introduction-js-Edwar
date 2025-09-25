//  More methodes for arrays
// Este arreglo se creo usando el cosntructor
const months = new Array('May', 'January', 'July', 'June');
// Este NO tiene constructor
const shoopingCart = [
    {productName:'Smart TV 60", ', price: 900},
    {productName:'Smart TV 50", ', price: 700},
    {productName:'Tablet ', price: 500},
    {productName:'Smart phone ', price: 900},
    {productName:'Google assitand ', price: 600},
    {productName:'Sound-bar ', price: 400},
    {productName:'Play station ', price: 800},
    {productName:'Wii ', price: 450},
    {productName:'Mouse', price: 50},
]
// Recorre el arreglo con un forEach para que muestre todos los elementos
// En este caso months es un parametro
months.forEach(function(month){
    console.log(month);
});
// Verificar si un  mes existe con un forEach
months.forEach(function(month1){
    if (month1 == 'June'){
        console.log ('The month of June exist in the array')
    } else {
        console.log("Doesn't Exist")
    }
    
});
//  Buscar en un arreglo si algo existe, si existe devuleve un true si no un false.
const result = months.includes('June');
console.log(result);

// ==========================================================

// En JS includes no funciona bien con los objetos
const result2 = shoopingCart.includes('Tablet');
console.log(result2);
// Con igualacion doble solo compara el valor por eso en la consola tenemos un true.
const num = 5 ==5 ;
console.log('igualacion doble', num);
// Con igualacion triple verifica si es del mismo valor y tipo.
const num2 = 5 ==='5' ;
console.log('igualacion triple', num2);

// ============================================================
// En conclusión para un arreglo plano se usa includes y para un arreglo con objetos se usa some
const result5 = shoopingCart.some(function(product){
return product.productName === "Mouse"
});
console.log(result5);

// Hace lo mismo que el codigo anterior pero mas corto con Arrow Function

let result6 = shoopingCart.some(product => product.productName === "Play station");
console.log (result6);

// ========================================================================
// Metodo reduce
// Sumar todos los precios del carrito de compras
let result7 =  shoopingCart.reduce(function(total, product){
    return total + product.price
}, 0)
console.log(result7);

let result8 =  shoopingCart.reduce((total,product)  => total + product.price, 0);
console.log(result8);


//===================================================
// filtrar los valores menores a 700

let result9 = shoopingCart.filter(function(product){
    return product.price < 700
});

console.log(result9)

let result10 = shoopingCart.filter((product) => product.price < 700);
console.log(result10);

// Filtar los del mismo producto
let result11 = shoopingCart.filter(function(product){
    return product.productName ==='Mouse'
});
console.log(result11);

let result14 = shoopingCart.filter(function(product){
    return product.productName !=='Mouse'
});
console.log(result14);

// Lo mismo pero con Arrow Fuction
let result12 = shoopingCart.filter(product => product.productName === 'Mouse')
console.log(result12)

let result13 = shoopingCart.filter(product => product.productName !== 'Mouse')
console.log(result13)