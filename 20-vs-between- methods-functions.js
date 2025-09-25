// Diferencia entre mertodos y funciones
const num1 = 10;
const num2 = '20';

console.log(num1);
console.log(num2);
console.log(typeof num1);
console.log(typeof num2);

// parsear es convertir de un tipo de variable  a otro tipo "FUNCION "

console.log(num1);
console.log(parseInt(num2));

// Este metodo convierte de numero a String "METODO"
console.log(num1.toString());
console.log(num1);

function greet(){
    console.log('Hello');

};
greet();

// ====================================
const person = {
    userName: 'Julian',
    greet: function(){
        console.log(`Hello, I'm ${this.userName}`);

    }
}

person.greet();//Metodo por que pertenece a person
console.log(typeof person);

// Una funcion existe por si sola
// Un metodo es una funcion dentro de un objeto
