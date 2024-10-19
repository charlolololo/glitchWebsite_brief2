let buttons = [];
let buttonCount = 0;
let totalButtons = 105;
let buttonsPerFrame = 7;
let lastButtonCreationTime = 0;  // Timing control for button creation

function setup() {
    console.log("Setting up the canvas...");
    createCanvas(windowWidth, windowHeight);
    lime = color(0, 255, 0);
    black = color(0, 0, 0);
}


function drawGlitch3() {
    console.log("Running glitch3 draw loop...");
    if (glitch3Active && buttonCount < totalButtons) {
        console.log("Creating buttons...");  // Debug message
        if (millis() - lastButtonCreationTime > 500) {
            for (let i = 0; i < buttonsPerFrame; i++) {
                if (buttonCount < totalButtons) {
                    let button = createButton('error 404');
                    button.position(random(width), random(height));
                    button.style('font-family', 'nokia');
                    button.style('font-size', '12px');
                    button.style('color', 'lime');
                    button.style('border', '1px solid lime');
                    button.style('background-color', 'black');
                    button.style('padding', '7px');
                    buttons.push(button);
                    buttonCount++;
                }
            }
            lastButtonCreationTime = millis();  // Update the last button creation time
        }
    }
}


let glitch3Active = false;

function triggerGlitch3() {
    console.log("Glitch3 triggered!");  // Debug message
    glitch3Active = true;  // Activate glitch3
    buttonCount = 0;  // Reset button count each time glitch3 is activated
    buttons = [];  // Clear previous buttons
    lastButtonCreationTime = millis();  // Reset the timer for button creation
}

function deactivateGlitch3() {
    glitch3Active = false;  // Deactivate glitch3
    // Remove all buttons from the screen
    for (let button of buttons) {
        button.remove();
    }
    buttons = [];  // Clear the button array
    buttonCount = 0;  // Reset button count
}

// Expose the functions globally for a2_final.js
window.triggerGlitch3 = triggerGlitch3;
window.deactivateGlitch3 = deactivateGlitch3;
window.drawGlitch3 = drawGlitch3;  // Expose drawGlitch3 to the main script