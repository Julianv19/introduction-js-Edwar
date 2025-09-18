// Arrays en JS


const numbers = [10,20,30,80,100];
console.log(numbers);
// otra forma de visualizacion en tabla
console.table(numbers);

// Crear un arrreglo con el constructor
const months = new Array ('May', 'January', 'July', 'June');
console.table(months)

const myArray = ['Hello', 42, true, false, null, { myName: 'Edwar', myJob: 'Teacher'}, [3172293, 3147206, 303619]]
console.log(myArray)
// Consultar un elemento de un arreglo
console.log(typeof numbers[2]);
console.log(myArray[5]);
// Metodo para conocer la longitud  de un arreglo
console.log('Julian tu arreglo tiene: ', numbers.length, 'elementos');
// in iterador con forEach
numbers.forEach(function(number){
    console.log(number);
})
myArray.forEach(function(element){
    console.log(element)
})
months.forEach(function(month){
    console.log(month)
})