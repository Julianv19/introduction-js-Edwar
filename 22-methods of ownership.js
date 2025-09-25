// Metodos de propiedad

const player = {
    play : function(id){
        console.log('Playing Song...',id);
    },
    pause : function(id){
        console.log(`Paused....,${id}`);


    },
    deleated: function(id){
        console.log(`Deleate song: ${id}`)
    }
}
console.log(player);
player.play(217);
player.pause(217);
player.deleated(217);

const playlist = {
    song1 : function (id){
        console.log(`Song...${id}`)
    },
    song2 : function (id){
        console.log(`Song..${id}`)
    }
}
playlist.song1('Insainted By Slipknot')
playlist.song2('The Devil in I By Slipknot')