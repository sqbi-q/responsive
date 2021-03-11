//This script is without description.

function startDementia(){
    setTimeout(() => {
        document.getElementById('searcher').classList.toggle('fade');
        document.getElementById('logo').classList.toggle('old');
    }, 1000);
    setTimeout(() => {
        document.getElementById('rainbow').classList.toggle('fade');
    }, 8000);
    setTimeout(() => {
        document.getElementById('bar').classList.toggle('fade');
    }, 12000);
    setTimeout(() =>{
        document.getElementById('logo').classList.toggle('fade');
    }, 18000);
    setTimeout(() =>{
        document.getElementById('rainbow').remove();
    }, 24000);
    
    setTimeout(() => {
        document.getElementById("container").innerHTML = ""; 
    }, 32000);
    setTimeout(() => {
        document.body.style.backgroundImage = "";
        document.body.style.backgroundColor = "#707a5f";
    }, 34000);

    setTimeout(() =>{
        showCaretakerPlaylist();
    }, 45000);

    
}
function showCaretakerPlaylist(){
    var playlist = `
    <div id="TheEnd">
        <div id="takeCare">
            <audio src="" controls id="audioPlayer">
                Widzisz: pusto. (Odtwarzacz audio nie jest dostępny w Twojej przeglądarce)
            </audio>
            <ul id="playlist">
                <li><a href="music/Caretaker_Mix/The Caretaker - A1 - It_s just a burning memory.mp3">The Caretaker - A1 - It's just a burning memory</a></li>
                <li><a href="music/Caretaker_Mix/Any Time_ Anywhere.mp3">Any Time, Anywhere</a></li>
                <li><a href="music/Caretaker_Mix/The Caretaker - A4 - Childishly fresh eyes.mp3">The Caretaker - A4 - Childishly fresh eyes</a></li>
                
                <li><a href="music/Caretaker_Mix/Goodnight_ My Beautiful.mp3">Goodnight, My Beautiful</a></li>
                <li><a href="music/Caretaker_Mix/The Caretaker - B1 - All that follows is true.mp3">The Caretaker - B1 - All that follows is true</a></li>
                <li><a href="music/Caretaker_Mix/It All Depends On You.mp3">It All Depends On You</a></li>
                <li><a href="music/Caretaker_Mix/The Caretaker - B3 - Quiet internal rebellions.mp3">The Caretaker - B3 - Quiet internal rebellions</a></li>
                
                <li><a href="music/Caretaker_Mix/Lullaby Of The Leaves.mp3">Lullaby Of The Leaves</a></li>
                                        
                <li><a href="music/Caretaker_Mix/The Caretaker - B4 - The loves of my entire life.mp3">The Caretaker - B4 - The loves of my entire life</a></li>
                <li><a href="music/Caretaker_Mix/Maybe.mp3">Maybe</a></li>

                <li><a href="music/Caretaker_Mix/Room with a View.mp3">Room with a View</a></li>
                <li><a href="music/Caretaker_Mix/Beyond the Sea.mp3">Beyond the Sea</a></li>
                <li><a href="music/Caretaker_Mix/The Caretaker - B6 - My heart will stop in joy.mp3">The Caretaker - B6 - My heart will stop in joy</a></li>
                <li><a href="music/Caretaker_Mix/Al Bowlly - One Morning In May 1934 Ray Noble.mp3">Al Bowlly - One Morning In May 1934 Ray Noble</a></li>
            </ul>
        </div>
    </div>
    `;
    document.getElementById("container").innerHTML = playlist;
    setupAudioPlayer();
}