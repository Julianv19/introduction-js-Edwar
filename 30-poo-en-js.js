// POO Programacion Orientada a Objetos
// Una clase en JS es una plantillapara crear objetos, que comparten mismas propiedades y metodos
// Una calse es como un molde que describe como seran los objetos y que podran hacer 
class Product {
constructor (productName, producPrice){
    this.productName = productName;
    this.producPrice = producPrice;
}
formatProduct(){
    return `El producto ${this.productName} tiene un precio de ${this.producPrice}`
}
};

const product1 = new Product('Remote Control', 15000)
const product2 = new Product('SSD', 220000)

console.log(product1.formatProduct());
console.log(product2.formatProduct());

// La herencia en JS
// La herencia en JS permite que los objetos reutilicen propiedades y metodos de otros

class Book extends Product {
    constructor(bookName, bookPrice, isbn){
super(bookName , bookPrice)
this.isbn = isbn;

    }

    formatBook(){
        return`${super.formatProduct()} y su ISBN es ${this.isbn}`
    }
}

const book1 = new  Book('El perfume', 20000, 13579);
console.log(book1);
console.log(book1.formatBook());

