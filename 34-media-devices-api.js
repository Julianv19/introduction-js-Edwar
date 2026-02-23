// Solicitar permisos para uso de camara y microfono

const button = document.querySelector(".button");

button.addEventListener('click', async()=>{
    try{
        await navigator.mediaDevices.getUserMedia({video: true, audio : true});

    const permission = await Notification.requestPermission();
    console.log(`Estado del permiso ${permission}`);
    

    if(permission ==='granted'){
        new Notification ('Permiso concedido',{
            body: 'Camara y Microfono Activados',
            icon : '/assets/icons/img1.jpg'
        })
    }else{
        console.log(`permiso denegado`)
    }
}catch(error){
        console.log(`Error al solicitar el permisos`, error);
        alert(`No se concedieron los permisos solicitados`)
        

    }
});