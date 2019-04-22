///ELEMENTS///
let playButton = document.querySelector(".toggle");
let vid = document.querySelector(".viewer");
let progressBar = document.querySelector(".progress__filled");
let progressStyle = window.getComputedStyle(progressBar);


///EVENT LISTENERS///
playButton.addEventListener("click", playFunction);
vid.addEventListener('timeupdate', updateProgressBar, false);

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
        pauseProgressBar();
    }
}

///UPDATE PROGRESS BAR///
function updateProgressBar() {
    progressBar.style.flexBasis = "0%";
    let percentage = Math.floor((100 / vid.duration) * vid.currentTime);
    console.log(percentage);
    progressBar.style.flexBasis = percentage + "%";
}

function pauseProgressBar() {
    console.log("paused");
}


//play/pause video by pressing play/pause button and space bar
//track the video playing and update progress bar
//click anywhere on progress bar to start video from there
//skip forward/rewind back by 10 seconds  --> use currentTime = 10;
//reset the player to 0 progress on refresh 
