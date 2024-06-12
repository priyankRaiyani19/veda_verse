// Get references to the button and audio element
const playButton = document.getElementById("playButton");
const audioElement = document.getElementById("audioElement");

// Add a click event listener to the button
playButton.addEventListener("click", function() {
    // Check if the audio is currently paused or ended
    if (audioElement.paused || audioElement.ended) {
        // Play the audio
        audioElement.play();
        playButton.textContent = "Pause"; // Change the button text to "Pause"
    } else {
        // Pause the audio
        audioElement.pause();
        playButton.textContent = "Play"; // Change the button text to "Play"
    }
});