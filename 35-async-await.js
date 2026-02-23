/**
 * Async await 
 * 
 * Son características de JS que facilitan trabajar con funciones asíncronas, permitiendo escribir código que se parece más al sincrono y es más facil de leer
 * Antes del 2015 se usaba .then() y catch(), pero ahora se usa async y await, que internamente siguen usando promesas.
 * 
 *  async: Declara una función asincrónica, que siempre devuelve una promesa.
 *  await: Pausa la ejecución de la función async hasta que una promesa se resuelve o rechaza, devolviendo como resultado una promesa.
 * 
 */

//=======================================================================

//Ejemplo con una función que se cumple

function downloadNewClients(){

    return new Promise(resolve =>{
        console.log("Descargando clientes... espere por favor")

        setTimeout(() => {
           resolve ("Los clientes fueron descargados")
        }, 2000);
    })
};

async function app() {
    try {
        // const result = await downloadNewClients();

        // Codigo bloqueado hasta que se resuelva la promesa
        //console.log("Codigo que si se bloquea");
        // console.log(result);

        // Ahora se va a intentar una forma mas eficiente sin que dependa una de la otra
        
        const result = await Promise.all ([downloadNewClients(), downloadlastOrders()])
        // console.log("Codigo si se bloquea");
        console.log(result[0]);
        console.log(result[1]);



    } catch (error) {
        console.log(error);
    }
    
}

app();
console.log("Codigo que no se bloquea");

//================================================================

function downloadlastOrders(){

    return new Promise(resolve =>{
        console.log("Descargando ultimas ordenes... espere por favor")

        setTimeout(() => {
           resolve ("Las ordenes fueron descargadas")
        }, 7000);
    })
};

// async function order() {
//     try {
//         const result = await downloadlastOrders();
//         console.log("Codigo que si se bloquea");
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
    
// }

// order();
// console.log("Codigo que no se bloquea");