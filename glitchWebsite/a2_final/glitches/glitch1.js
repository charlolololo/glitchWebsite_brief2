//https://editor.p5js.org/robert0504/sketches/OTBqTTLJ (ref for rectangle class)

class RectangleGlitch {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        const minWidth = windowWidth / 8;
        const maxWidth = windowWidth / 2;
        const minHeight = 2;
        const maxHeight = 10;
        
        this.width = random(minWidth, maxWidth);
        this.height = random(minHeight, maxHeight);

        this.colors = [
            [0, 255, 0], // Lime green
            [255, 0, 196], // Neon pink
            [255, 255, 0], // Yellow
        ];

        const selectedColor = random(this.colors);
        this.color1 = selectedColor[0];
        this.color2 = selectedColor[1];
        this.color3 = selectedColor[2];
    }
    
    display() {
        noStroke();
        fill(this.color1, this.color2, this.color3);
        rect(this.x, this.y, this.width, this.height);
    }
}

let glitch1Active = false;
let glitch1Glitches = [];  // To store multiple glitches

function triggerGlitch1() {
    frameRate(5);  // Slow down the frame rate to 5 FPS
    glitch1Active = true;  // Activate glitch1
}

function deactivateGlitch1() {
    glitch1Active = false;
    frameRate(60);  // Reset frame rate to default
    glitch1Glitches = [];  // Clear the glitch array
}

function updateGlitch1() {
    if (glitch1Active) {
        // Add a new glitch each time `updateGlitch1` is called
        let rectGlitch = new RectangleGlitch(random(windowWidth), random(windowHeight));
        glitch1Glitches.push(rectGlitch);
        
        // Display all glitches stored in the array
        glitch1Glitches.forEach(glitch => glitch.display());
    }
}
// only need this function if i have classes

// Expose the functions and class globally for a2_final.js
window.RectangleGlitch = RectangleGlitch;
window.triggerGlitch1 = triggerGlitch1;
window.deactivateGlitch1 = deactivateGlitch1;
window.updateGlitch1 = updateGlitch1;
