//CARLOS JULIAN OCAMPO GONZALEZ
//Metodos para los objetos
//Con esta linea de codigo garantizo buenas practicas
"use strict";
const product ={
 ProductName : "sensor de humedad",
 price : 300,
 avaliable : true,

}
   const speedMax = 80;
   // speedMax = 70;
   console.log(speedMax);

   //CARLOS JULIAN OCAMPO GONZALEZ
   //Aunque el objeto product este declarado como constante 
   // permite agregar propiedades.
   product.Quantity =10;
   console.log(product);
//CARLOS JULIAN OCAMPO GONZALEZ
//con el metodo o funcion freeze bloqueamos el objeto para
//que no se puedan agregar mas propiedades o eliminarlas o modificarlas (editarlas).
//    Object.seal(product);
   //CARLOS JULIAN OCAMPO GONZALEZ
   //vamos a agregar una nueva propiedad "color"
  // product.color = "red"
  //forma para saber si el objeto esta bloqueado
  console.log("El objeto esta bloqueado? " + Object.isFrozen(product));

  let response;
  if (Object.isFrozen(product)){
     response = "Si";

  }else {
    response = "No";
  }
  console.log ("El objeto esta bloqueado? " + response)
  
//   delete product.price;
//   console.log(product);
  
  //Modificar o editar las propiedades de un objeto
  product.productName = "sensor de Ph";
  console.log(product);

  //para saber si un elemento esta sellado
  console.log("El elemento esta sellado? " + Object.isSealed(product));
