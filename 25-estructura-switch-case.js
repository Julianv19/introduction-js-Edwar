// Estructura switch
// Permite evaluar una experesion y ejecutar diferentes bloques de codigo,segun el caso que coincida.


const paymentMethod= String(prompt('ingrese metodo de pago'));
switch (paymentMethod) {
    case 'card':
        console.log('Pagaste con tarjeta')
        
        break;
    case 'bitCoin':
         console.log('Pagaste con bitCoin')
        
        break;
    case 'debitCard':
         console.log('Pagaste con tarjeta debito')
        break;
    case 'creditCard':
         console.log('Pagaste con tarjeta de credito')
        break;
    
    default:
        break;
}