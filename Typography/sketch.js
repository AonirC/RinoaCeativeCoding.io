let myFont;

function preload() {
  myFont = loadFont('Cardo-Bold.ttf')
}

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textSize(36)
  //textStyle(ITALIC);
  
  textFont(myFont);
}

function draw() {
  background(32);
  
  fill(255);
  
  text('KiRi!', width / 2, height / 2);
}