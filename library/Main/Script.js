// Get references to the button and audio element
const playButton = document.getElementById("playButton2");
const audioElement = document.getElementById("audioElement2");



playButton.addEventListener("click", function() {

    if (audioElement.paused || audioElement.ended) {

        audioElement.play();
        playButton.textContent = "Pause";
    } else {

        audioElement.pause();
        playButton.textContent = "Play Audio";
    }
});
