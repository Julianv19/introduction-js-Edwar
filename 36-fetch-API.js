// fetch API: Es una funcion JS que oermite hacer peticiones HTTP, incluyendo GET, POST, PUSH, DELETE, etc. Es una API moderna.

function getEmployees(){
    // fetch ('Aqui se copia la URL,https://open.spotify.com/intl-es/track/1');
    // aunque para este caso lo estamos haciiiedno una peticion a un archivo local
const file = "/data/employees.json";
fetch(file)
// Obtenemos los datos
.then((result) =>{
    return result.json();
})

// Este then es para acceder a los datos
.then(data =>{
    const {employees} = data;
    employees.forEach( employe =>{
        console.log(employe.user);
        console.log(employe.job);
        console.log(employe.id);
        
    });

    document.querySelector('.content').textContent = employees.user;
    console.log(data);
    
});

}

getEmployees();