function setup() {
    createCanvas(400, 400);
    background(220);
  }
  
  function draw() {
    // Set the drawing style
    strokeWeight(2);
    stroke(225);
    fill(100, 200, 100)
    
    // Move the origin to the center of the canvas
    translate(width / 2, height / 2);
    
    // Draw the body
    beginShape();
    curveVertex(-50, -100);
    curveVertex(-50, -100);
    curveVertex(-30, 0);
    curveVertex(30, 0);
    curveVertex(50, -100);
    curveVertex(50, -100);
    endShape(CLOSE)
    
    // Draw the head
    fill(150, 100, 200);
    ellipse(0, -120, 100, 80);
    
    // Draw the left eye
    fill(255);
    ellipse(-25, -140, 20, 20);
    
    // Draw the right eye
    ellipse(25, -140, 20, 20);
    
    // Draw the mouth
    noFill();
    stroke(255, 0, 0);
    beginShape();
    vertex(-20, -110);
    bezierVertex(-10, -100, 10, -100, 20, -110);
    endShape();
    
    // Draw the antenna
    fill(255, 0, 255);
    ellipse(0, -160, 10, 40);
    ellipse(0, -180, 20, 20);
    }
  