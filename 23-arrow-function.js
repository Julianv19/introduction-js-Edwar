// Arrow Function
// En  es una forma mas corta de escribir funciones usando la sintaxis() =>

// Sintaxis mas breve, ideal para funciones pequeñas
// NO tiene su propio this, hereda el this del contexto donde se define.

const add = function(){
    console.log(3 + 16);
}
add();

// Funcion con parametros
const add2 = function(num1, num2){
    console.log(num1 + num2);
}
add2(4,2);
// Las llaves son opcionales cuando despues de la flecha solo tengo una sentecia 
const add3 = (num3, num4) =>  console.log(num3 + num4);
add3 (6, 9);

// Otro ejemplo
const learn = (tecnology) => {
    console.log(`Aprendiendo ${tecnology}`);
}
    learn("Javascript")

const months = new Array('May', 'January', 'July', 'June', 'December', 'November', 'February');
    // Este no tiene constuctor
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

    // months.forEach(function(month){
    //     if(month =='November'||month == 'December'){
    //         console.log('Se verifico el arreglo y el mes si existe');
    //     }else{
    //         console.log('El mes No existe');
    //     }
    //     })
    months.forEach(function(month){
        if(month =='November'||month == 'December'){
            console.log('Se verifico el arreglo y el mes si existe');
        }else{
            console.log('El mes No existe');
        }
        })

        // const result = shoopingCart.some(function(product){
        //     return product.price === 800;

        // })
        // console.log(result);
        const result = shoopingCart.some(product => product.price=== 800);
        console.log(result)

        // const result3 = shoopingCart.reduce(function(total, product){
        //     return total + product.price;
        // }, 0)
        // console.log(result3);
        const result3 = shoopingCart.reduce((total, product)=> total + product.price, 0)
        console.log(result3);

        // const result6 = shoopingCart.filter(function(product){
        //     return product.price <600;
    
        // })
        // console.log(result6);
        const result6 = shoopingCart.filter(product => product.price <600);
    
        
        console.log(result6);
        // function greet (userName){
        //     console.log(`Hello${userName}`);
        // }
        // console.log(greet("Julian"));

   const greet = userName => 
    console.log(`Hello${userName}`)
    greet("Julian");

    // const boost = num=> num * num;
    const boost = num => Math.pow(num, 2);
    console.log(boost(4));

// Arrow function con retorno explicito

// Se usa cuando el cuerpo de una funccion tiene llaves[]

const add10 = (num4, num5) =>{
    const result7 = num4 + num5;
    return result7

}
console.log(add10(15,7));

// Retorno implicito, cuando la funcion no tiene llaves realiza el retorno implicitamente.

const add11 = (num6, num7) => num6 + num7;

console.log(add11(4, 6));