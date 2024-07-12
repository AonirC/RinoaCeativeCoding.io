function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    
    //body of the car 
    // rect ( x, y, width, height)
    fill(148, 0, 211);
    rect(50, 200, 300, 50);
    rect ( 100, 150, 200, 50);
    
    // wheels 
    fill (255);
    // ellipse ( x, y, width, height)
    ellipse ( 100, 250, 50, 50);
    ellipse ( 300, 250, 50, 50);
    ellipse ( 100, 250, 20, 20);
    ellipse ( 300, 250, 20, 20);
    
    // roof 
    // triangle ( x1, y1, x2, y2, x3, y3 )
    triangle ( 100, 150, 300, 150, 200, 100);
    
    // headlights
    fill ( 255);
    ellipse ( 50, 200, 20, 20);
    ellipse ( 350, 200, 20, 20);
    
    //taillights
    fill ( 255, 0, 0);
    ellipse ( 50, 250, 20, 20);
    ellipse ( 350, 250, 20, 20);
    
  }