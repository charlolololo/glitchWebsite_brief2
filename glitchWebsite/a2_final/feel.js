let nokia;
let lime;
let black;
let sentence = "Congratulations!";
let sentence2 = "You are an amazing texter!";

function preload() {
    nokia = loadFont('data/nokiafc22.ttf', () => {
        console.log("Nokia font loaded successfully!");
    });
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    lime = color(0, 255, 0);
    black = color(0, 0, 0);
    background(black);
    fill(lime);
    textSize(80);
    textFont(nokia);
    textAlign(CENTER, CENTER);
    text(sentence, width/2, height/2 - 100);
    text(sentence2, width/2, height/2 + 30);

    // Create a button that leads back to index.html
    let backButton = createButton('<');
    backButton.position(width / 2 - 50, height -150);
    backButton.style('font-family', 'nokia');
    backButton.style('font-size', '20px');
    backButton.style('color', 'lime');
    backButton.style('border', '1px solid black');
    backButton.style('background-color', 'black');
    backButton.style('padding', '10px');
    backButton.mousePressed(() => {
        window.location.href = 'index.html';
    });

    console.log("Button font family:", window.getComputedStyle(backButton.elt).fontFamily);
}


