// Estructura de control IF
// const score = String(prompt('Ingrese puntaje'));
// if (score == 100){
//     console.log(`Si el puntaje es 100`);
    
// } else{
//     console.log(`Si el puntaje es diferente de 100`);
// }

//====================================================================
// const score = String(prompt('Ingrese puntaje'));

// prompt("ingrese numero");
// if (score != 100){
//     console.log(`Si el puntaje es 100`);
    
// } else{
//     console.log(`Si el puntaje es diferente de 100`);
// // }
// // ====================================================================
const rol = String(prompt('Ingrese rol'));

if (rol == 'admin'){
    console.log('Tienes acceso a todo el sistema');

}else if(rol == 'editor'){

    console.log('Puedes editar funciones basicas');

}else{
    console.log('No tienes acceso al sistema');
}

