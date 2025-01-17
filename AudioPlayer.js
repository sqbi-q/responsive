var audioPlayer_elem;
var songIndex = 0;
var songs;

function playSong(index){
    audioPlayer_elem.src = document.getElementById("playlist").querySelectorAll("li a")[index];
    audioPlayer_elem.play();
    songs[songIndex].className = "";
    songIndex = index;
    songs[songIndex].className = "current-song";
}

function setupAudioPlayer(){
    audioPlayer_elem = document.getElementById("audioPlayer");
    songs = document.getElementById("playlist").querySelectorAll("li");

    for (let link of document.getElementById("playlist").querySelectorAll("li a")){
        link.onclick = function(e){
            e.preventDefault();
            var indexSelected = Array.from(songs).indexOf(this.parentNode);
            playSong(indexSelected);
        }
    }
    audioPlayer_elem.onended = function(){
        playSong((songIndex+1) % songs.length);
    }
    playSong(songIndex);
}




function* sawwave() {
    var index = 0;
    while(true)
        yield index=(index+0.1) % 1;
}
var savwave_gen = sawwave();
function funky(){
    audioPlayer_elem.volume = savwave_gen.next().value;
}