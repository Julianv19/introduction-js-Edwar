const numbers = [0 ,5, 8, 9, 5, 800, 120, 300];

// // Agregar elementos a mi arreglo, pero con este metodo se requiere conocer la longitud del arreglo
// const numberslenght = numbers.length
// numbers [5] = 100;
// console.log(numbers);
// console.log(numberslenght);

//Con el método push se agregan elementos al final del arreglo
// numbers.push(700, 800);
// console.log(numbers);

//Método unshift  para agregar elementos al inicio de un arreglo
numbers.unshift(-3, -2, -1);
console.table(numbers);

// Método pop para eliminar el ultimo elemento de mi arreglo
numbers.pop();

//Método shift para eliminar el primer elemento de mi arreglo
numbers.shift();
console.table(numbers);

// Método splice elimina todos los elementos a partir del indice asignado
numbers.splice(3)
console.table(numbers);