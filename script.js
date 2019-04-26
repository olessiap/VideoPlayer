///ELEMENTS///
let playButton = document.querySelector(".toggle");
let vid = document.querySelector(".viewer");
let progressBar = document.querySelector(".progress__filled");
let progressStyle = window.getComputedStyle(progressBar);
let wholeProgressBar = document.querySelector(".progress");
let rewindVidButton = document.querySelector(".rewind");
let skipVidButton = document.querySelector(".skip");

///EVENT LISTENERS///
playButton.addEventListener("click", handlePlay);
vid.addEventListener('timeupdate', updateProgressBar, false);
wholeProgressBar.addEventListener('click', handleClickOnProgressBar);
rewindVidButton.addEventListener('click', handleRewindVid); 
skipVidButton.addEventListener("click", handleSkipVid)

//PLAY/PAUSE THE VIDEO///
window.keydown(function(e) {
    if(e.key === " " || e.key ==="Spacebar") {
        e.preventDefault();
        handlePlay();
    }
}); 

function handlePlay() {
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


function handleClickOnProgressBar(e) {
    let x = e.pageX - 400;
    let xPercent = Math.floor((100 / 640) * x);
    console.log(xPercent);
    progressBar.style.flexBasis = xPercent + "%";
   // vid.currentTime 
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
