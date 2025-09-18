// Rest operator o spread operator
// Lo que se busca es no modificar el arreglo original.

const months = ['December', 'November', 'March'];
console.table(months);

// Se crea un nuevo arreglo y lo unimos con otro.
const newArray = [...months, 'January'];
console.table(newArray)

//El nuevo arreglo se puede agregar al final o al inicio
const newArray2 = ['January', ...months];
console.log(newArray2)

months.push('January');


months.unshift('January');
console.table(months)