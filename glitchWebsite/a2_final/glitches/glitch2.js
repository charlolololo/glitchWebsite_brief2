// audio source: https://pixabay.com/sound-effects/paft-drunk-ring-the-alarms-206689/
// https://editor.p5js.org/p5/sketches/Sound:_Load_and_Play_Sound
// https://editor.p5js.org/codingtrain/sketches/yjCG9FncG

// glitch2.js
let glitch2Active = false;
let glitch2Glitches = [];  // To store multiple glitches

function triggerGlitch2() {
    glitch2Active = true;  // Activate glitch2
    // Play the song when glitch2 is triggered
    if (!song1.isPlaying()) {
        song1.play();
    }
}

function deactivateGlitch2() {
    glitch2Active = false;
    song1.stop();  // Stop the sound when glitch2 is deactivated
    glitch2Glitches = [];  // Clear the glitch array
}

// Expose the functions to a2_final.js
window.triggerGlitch2 = triggerGlitch2;
window.deactivateGlitch2 = deactivateGlitch2;