// https://pixabay.com/sound-effects/exotic-intro-167256/

let glitch5Active = false;
let glitch5Glitches = [];  // To store multiple glitches

function triggerGlitch5() {
    glitch5Active = true;  // Activate glitch2
    // Play the song when glitch2 is triggered
    if (!song2.isPlaying()) {
        song2.play();
    }
}

function deactivateGlitch5() {
    glitch5Active = false;
    song2.stop();  // Stop the sound when glitch2 is deactivated
    glitch5Glitches = [];  // Clear the glitch array
}

// Expose the functions to a2_final.js
window.triggerGlitch5 = triggerGlitch5;
window.deactivateGlitch5 = deactivateGlitch5;