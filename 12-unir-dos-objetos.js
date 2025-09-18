// cuandos e unen dos objetos lo ideal es NO modificar ninguno de los objetos
const product = {
    productName :"sensor de humedad",
    price : 300,
    available : true
}

Object.freeze(product);

// objeto que almacena medidas
const measurements = {
    weight : "1 kg",
    measurement : "10cm"

}


// rest operator, consta de (...)
// const newProduct = {...product, ...measurements};

// console.log(product);
// console.log(newProduct);

const Motorcycle = {
    industry: "kawazaki",
    model : "2015",
    color : "black"
} 

const shoes = {
    name: "nike",
    modeling: "jordan",
    colors: "white"

}
const products = {...Motorcycle,...shoes};

console.log(Motorcycle);
console.log(products);
