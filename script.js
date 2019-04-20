let playButton = document.querySelector(".toggle");
let videoFile = document.querySelector(".viewer");

playButton.addEventListener("click", playFunction);

window.keydown(function(e) {
    if(e.key === " " || e.key ==="Spacebar") {
        e.preventDefault();
        playFunction();
    }
});


function playFunction() {
    if(videoFile.paused) {
        videoFile.play();
        playButton.innerHTML="=";
    } else {
        videoFile.pause();
        playButton.innerHTML="►";
    }
}
