//do this tomorrow but rename everything to button 2 so that it doesn't overlap with glitch3.js

let button2 = [];
let buttonCount2 = 0;
let totalButtons2 = 105;
let buttonsPerFrame2 = 7;
let lastButtonCreationTime2 = 0;  // Timing control for button creation

function setup() {
    console.log("Setting up the canvas...");
    createCanvas(windowWidth, windowHeight);
    lime = color(0, 255, 0);
    black = color(0, 0, 0);
}


function drawGlitch6() {
    console.log("Running glitch3 draw loop...");
    if (glitch6Active && buttonCount2 < totalButtons2) {
        console.log("Creating buttons...");  // Debug message
        if (millis() - lastButtonCreationTime2 > 500) {
            for (let i = 0; i < buttonsPerFrame2; i++) {
                if (buttonCount2 < totalButtons2) {
                    let button2 = createButton("Oops, something wasn't right");
                    button2.position(random(width), random(height));
                    button2.style('font-family', 'nokia');
                    button2.style('font-size', '12px');
                    button2.style('color', 'lime');
                    button2.style('border', '1px solid lime');
                    button2.style('background-color', 'black');
                    button2.style('padding', '7px');
                    buttons2.push(button2);
                    buttonCount2++;
                }
            }
            lastButtonCreationTime2 = millis();  // Update the last button creation time
        }
    }
}


let glitch6Active = false;

function triggerGlitch6() {
    console.log("Glitch6 triggered!");  // Debug message
    glitch6Active = true;  // Activate glitch3
    buttonCount2 = 0;  // Reset button count each time glitch3 is activated
    buttons2 = [];  // Clear previous buttons
    lastButtonCreationTime2 = millis();  // Reset the timer for button creation
}

function deactivateGlitch6() {
    glitch6Active = false;  // Deactivate glitch3
    // Remove all buttons from the screen
    for (let button2 of buttons2) {
        button2.remove();
    }
    buttons2 = [];  // Clear the button array
    buttonCount2 = 0;  // Reset button count
}

// Expose the functions globally for a2_final.js
window.triggerGlitch6 = triggerGlitch6;
window.deactivateGlitch6 = deactivateGlitch6;
window.drawGlitch6 = drawGlitch6;  // Expose drawGlitch3 to the main script