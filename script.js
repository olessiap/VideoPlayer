///ELEMENTS///
let playButton = document.querySelector(".toggle");
let vid = document.querySelector(".viewer");
let progressBar = document.querySelector(".progress__filled");
let progressStyle = window.getComputedStyle(progressBar);
let rewindVidButton = document.querySelector(".rewind");
let skipVidButton = document.querySelector(".skip");

///EVENT LISTENERS///
playButton.addEventListener("click", playFunction);
vid.addEventListener('timeupdate', updateProgressBar, false);
rewindVidButton.addEventListener('click', handleRewindVid); 
skipVidButton.addEventListener("click", handleSkipVid)

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
function handleRewindVid() {
    vid.currentTime = vid.currentTime - 10;
}

function handleSkipVid() {
    vid.currentTime = vid.currentTime + 25;
}


//play/pause video by pressing play/pause button and space bar
//track the video playing and update progress bar
//skip forward/rewind back by 10 seconds  --> use currentTime = 10;
//click anywhere on progress bar to start video from there
//reset the player to 0 progress on refresh 
