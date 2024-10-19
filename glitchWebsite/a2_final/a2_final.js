var dropdown;
let nokia;
let lime;
let black;
let sentence = "She paused and then deleted think,\nreplacing it with";
let glitches = [];
let triggerGlitch = false; // Flag to trigger glitches for other types
let song1;  // Declare song1 globally so it can be used in glitch2.js

function preload() {
    console.log("Preloading assets...");
    nokia = loadFont('data/nokiafc22.ttf', () => {
        console.log("Nokia font loaded successfully!");
    });
    song1 = loadSound('data/glitch2_audio.mp3');  // Load sound globally
    song2 = loadSound('data/glitch5_audio.mp3');  // Load sound globally
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    lime = color(0, 255, 0);
    black = color(0, 0, 0);
    background(black);

    // Create dropdown menu
    dropdown = createSelect();
    dropdown.position(50, 50);

    // Dropdown options
    dropdown.option('believe');
    dropdown.option('conclude');
    dropdown.option('feel');
    dropdown.option('reckon');
    dropdown.option('sense');
    dropdown.option('think');
    dropdown.option('find');

    // Dropdown styling
    dropdown.style('font-size', '38px');
    dropdown.style('font-family', 'nokia');
    dropdown.style('color', 'lime');
    dropdown.style('border', '1px solid lime');
    dropdown.style('background-color', 'black');
    dropdown.style('padding', '5px');

    // Text display
    fill(lime);
    textSize(38);
    textFont(nokia);
    textLeading(60);
    text(sentence, 100, 100);

    // Position dropdown in the text
    dropdown.position(textWidth(sentence) - 720, 114);

    // Add event listener for dropdown
    dropdown.changed(selectOption);  // Attach selectOption function to the dropdown
}

function windowResize() {
    resizeCanvas(windowWidth, windowHeight);
}

function selectOption() {
    let selectedOption = dropdown.value();
    switch (selectedOption) {
        case 'believe':
            triggerGlitch1();   // Activate glitch1 from glitch1.js
            break;
        case 'conclude':
            triggerGlitch2();   // Activate glitch2 from glitch2.js
            break;
        case 'reckon':
            triggerGlitch3();  // Activate glitch3 from glitch3.js
            break;
        case 'sense':
            triggerGlitch4();
            break;
        case 'find':
            triggerGlitch5();
            triggerGlitch = true;  // Start triggering glitches for these incorrect words
            break;
        case 'feel':
            clearGlitches();  // Correct answer clears the glitches
            console.log("Glitches cleared.");
            break;
        case 'think':  
            break;
        default:
            console.log("No action defined for this option.");
            break;
    }
}

function triggerGlitchEffect() {
    let rectGlitch = new RectangleGlitch(random(windowWidth), random(windowHeight));
    console.log("triggering glitch1");
    glitches.push(rectGlitch);

    let rectGlitch4 = new RectangleGlitch4(random(windowWidth), random(windowHeight));
    console.log("triggering glitch4");
    glitches.push(rectGlitch4);
}

function clearGlitches() {
    glitches = [];  // Clear all glitch effects
    triggerGlitch = false;  // Stop triggering glitches
    deactivateGlitch1();  // Deactivate glitch1 and reset frame rate
    deactivateGlitch2();  // Deactivate glitch2 and stop the sound
    deactivateGlitch3();
    deactivateGlitch4();
    deactivateGlitch5();

    console.log("All glitches cleared.");
}


function draw() {
    background(black);
    
    // Redraw text
    fill(lime);
    text(sentence, 100, 100);
    
    // Trigger glitches for other incorrect selections
    if (triggerGlitch) {
        triggerGlitchEffect();
    }
    
    // Continuously update glitch1 if it's active
    updateGlitch1();

    // Trigger glitch3 if active
    if (glitch3Active) {
        drawGlitch3();  // Call the draw loop for glitch3
    }

    // Continuously update glitch3 if it's active
    drawGlitch3();   // Call the glitch3 draw loop

    // Continuously update glitch4 if it's active
    updateGlitch4();

    // Display all regular glitches
    glitches.forEach(glitch => glitch.display());
}