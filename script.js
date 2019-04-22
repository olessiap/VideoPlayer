///ELEMENTS///
let playButton = document.querySelector(".toggle");
let vid = document.querySelector(".viewer");
let progressBar = document.querySelector(".progress__filled");
let progressStyle = window.getComputedStyle(progressBar);
let rewindVid = document.querySelector(".rewind");

///EVENT LISTENERS///
playButton.addEventListener("click", playFunction);
vid.addEventListener('timeupdate', updateProgressBar, false);
rewindVid.addEventListener('click', rewindVid);

//PLAY/PAUSE THE VIDEO///
window.keydown(function(e) {
    if(e.key === " " || e.key ==="Spacebar") {
        e.preventDefault();
        playFunction();
    }
}); 

function playFunction() {
    if(vid.paused) {
        vid.play();
        playButton.innerHTML="=";
        updateProgressBar();
    } else {
        vid.pause();
        playButton.innerHTML="►";
    }
}

///UPDATE PROGRESS BAR///
function updateProgressBar() {
    progressBar.style.flexBasis = "0%";
    let percentage = Math.floor((100 / vid.duration) * vid.currentTime);
    progressBar.style.flexBasis = percentage + "%";
    console.log(vid.currentTime);
}

//REWIND AND FASTFORWARD FUNCTIONALITY
function rewindVid() {
    vid.currentTime = vid.currentTime - 10;
}


//play/pause video by pressing play/pause button and space bar
//track the video playing and update progress bar
//skip forward/rewind back by 10 seconds  --> use currentTime = 10;
//click anywhere on progress bar to start video from there
//reset the player to 0 progress on refresh 
