var searcherInput_elem = document.getElementById("searcher").getElementsByTagName("input")[0];
var searcher_resp_elem = document.getElementById("searcher-resp");
var about_elem = document.getElementById("about");
var funky_interval;

function changeMusicSrc(path){
    if(audioPlayer_elem.src != new URL(path, document.baseURI).href){
        audioPlayer_elem.src = path;
        return true;
    }
    return false;
}

var secretes = {
    "amogus": function(){        
        about_elem.classList.add("amogus");
        if (changeMusicSrc("./eastereggs/amogus.mp3"))
            audioPlayer_elem.play();
    },
    "bydgocz": function(){
        about_elem.classList.add("bydgocz");
    },
    "morshu": function(){
        about_elem.classList.add("morshu");
    },
    "gruzja": function(){
        var gruzja_playlist = 
        `
            <li><a href="music/Gruzja_Playlist/800 Zł.mp3">800 Zł</a></li>
            <li><a href="music/Gruzja_Playlist/Grues.mp3">Grues</a></li>
            <li><a href="music/Gruzja_Playlist/Jeszcze nie mamy na was pomysłu III.mp3">Jeszcze nie mamy na was pomysłu III</a></li>
            <li><a href="music/Gruzja_Playlist/Jeszcze nie mamy na was pomysłu II.mp3">Jeszcze nie mamy na was pomysłu II</a></li>
            <li><a href="music/Gruzja_Playlist/Jeszcze nie mamy na was pomysłu I.mp3">Jeszcze nie mamy na was pomysłu I</a></li>
            <li><a href="music/Gruzja_Playlist/Kamera Dionizosa.mp3">Kamera Dionizosa</a></li>
            <li><a href="music/Gruzja_Playlist/Królowie zwierząt.mp3">Królowie zwierząt</a></li>
            <li><a href="music/Gruzja_Playlist/Masz rozmienić.mp3">Masz rozmienić</a></li>
            <li><a href="music/Gruzja_Playlist/Niedostatkiem W Piekny Rejs.mp3">Niedostatkiem W Piekny Rejs</a></li>
        `;
        document.getElementById("playlist").innerHTML = gruzja_playlist;
        document.getElementById("rainbow").classList.add("gruzja");
        setupAudioPlayer();
    },
    "funky": function(){
        funky_interval = setInterval(function(){ 
            funky(); 
        }, 20);
    },
    "catboy": function(){
        about_elem.classList.add("catboy");
        if (changeMusicSrc("./eastereggs/Trololo_Song.mp3"))
            audioPlayer_elem.play();
    },
    "spooky": function(){
        about_elem.classList.add("spooky");
        if (changeMusicSrc("./eastereggs/Spookeez - Friday Night Funkin_ OST.mp3"))
            audioPlayer_elem.play();  
    },
    "sayonara": function(){
        if (changeMusicSrc("./eastereggs/Artemisia - S A Y O N A R A _DDLC LoFi Remix_.mp3"))
            audioPlayer_elem.play();
    }
};

function oninput_searcher(){
    var results = 0;
    for (var secret_key in secretes){
        var search = searcherInput_elem.value.toLocaleLowerCase();
        if (secret_key.startsWith(search)) {
            results++;
            if (secret_key == search){
                secretes[secret_key]();
            }else{
                about_elem.className = "";
                clearInterval(funky_interval);
            }
        }
    }
    searcher_resp_elem.innerText = "Respone: "+results;
}