//https://editor.p5js.org/robert0504/sketches/OTBqTTLJ (ref for rectangle class)

class RectangleGlitch4 {
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
            [255, 255, 255], // white
            [0, 0, 255], // neon blue
            [255, 0, 0], // red
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

let glitch4Active = false;
let glitch4Glitches = [];  // To store multiple glitches

function triggerGlitch4() {
    frameRate(5);  // Slow down the frame rate to 5 FPS
    glitch4Active = true;  // Activate glitch1
}

function deactivateGlitch4() {
    glitch4Active = false;
    frameRate(60);  // Reset frame rate to default
    glitch4Glitches = [];  // Clear the glitch array
}

function updateGlitch4() {
    if (glitch4Active) {
        // Add a new glitch each time `updateGlitch1` is called
        let rectGlitch4 = new RectangleGlitch4(random(windowWidth), random(windowHeight));
        glitch4Glitches.push(rectGlitch4);
        
        // Display all glitches stored in the array
        glitch4Glitches.forEach(glitch => glitch.display());
    }
}
// only need this function if i have classes

// Expose the functions and class globally for a2_final.js
window.RectangleGlitch = RectangleGlitch4;
window.triggerGlitch4 = triggerGlitch4;
window.deactivateGlitch4 = deactivateGlitch4;
window.updateGlitch4 = updateGlitch4;