// Funciones paramentros y argumentos

function add(num1, num2){
    return console.log(num1 + num2);
};
add (5, 15);//Estos valores que se envian a la funcion se llaman argumentos
add (87, 85);
add (3, 20);
add (7, 7);
add (5, 5);

let add1 = (function(num1, num2){
    return console.log(num1 + num2)
});
add1 (87, 85);
add1 (3, 20);
add1 (7, 7);
add1 (5, 5);

// ===================================
// Ejemplo cuando NO ae colocan argumentoss, se coloca por defecto los valores en los parametros
function add2(num7 =35, num8 = 10){
    return console.log(num7 - num8);
};
add2();

// Funcion que retorna un valor
function add4(num9, num10){
    return num9 * num10
};

const result = add4(4, 5);
console.log(result);

// 

function calculatetax(total){
    return 1.19 * total
}
let total = 0;
function addShoppingcart(price){
    return total += price;
};
total = addShoppingcart(800);
total = addShoppingcart(500);
total = addShoppingcart(200);
total = addShoppingcart(900);
console.log(`la suma de los productos es: ${total}`)
const totalToPay = calculatetax(total);
console.log(`la suma de los productos mas el impuesto es: ${totalToPay}`)
