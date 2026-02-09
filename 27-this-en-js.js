// This es una palabra reservada del sistema , o sea que NO se puede crear ni funciones ni variables con este nombre.

const Reservation = {
    userName :'Julian',
    lastName : 'Ocampo',
    userAge : '22',
    total : 10000,
    isPaid: false,


// los objetos puede contener funciones 
 information : function (){
    console.log(`El cliente ${this.userName} reservo y la cantidad  a pagar es ${this.total}, hasta el momento el estado del pago es ${this.isPaid}`);
    
}
};
Reservation.information();

const Reservation2 = {
    userName :'Pedro',
    lastName : 'Cardona',
    userAge : '22',
    total : 30000,
    isPaid: true,

 
 information : function (){
    console.log(`El cliente ${this.userName} reservo y la cantidad  a pagar es ${this.total}, hasta el momento el estado del pago es ${this.isPaid}`);
    
}
};

const Reservation3 = {
    userName :'Juan',
    lastName : 'Ramirez',
    userAge : '22',
    total : 15000,
    isPaid: true,

 
  information : ()=>{
    console.log(`El cliente ${this.userName} reservo y la cantidad  a pagar es ${this.total}, hasta el momento el estado del pago es ${this.isPaid}`);
    
    
}
};


// This en este contexto hace referencia al objeto sobre el cual se esta mandando a llamar.
// Es obligatorio usar la funcion de esta manera, por esta hacer referencia al objeto que se esta usando 
Reservation2.information();

// si se usa arrow function no es capaz de leer los datos del contxto, dondo como resultado undefied
Reservation3.information();