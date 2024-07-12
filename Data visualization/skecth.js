var i = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  i++;
  background(255);
  fill(0,160,0);
  ellipse(50,50+i,50)
}