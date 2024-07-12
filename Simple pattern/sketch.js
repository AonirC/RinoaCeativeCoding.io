function setup() {
    createCanvas(windowWidth-20, windowHeight-50);
    let saveButton = createButton("save jpg");
    saveButton.position(10, height+15);
    saveButton.mousePressed(saveArt);
    background(255);
    let space = random(30,100)
    fill(0);
    for (x=0;x<width+50;x+=space){
      for (y=0;y<height+50;y+=space){
        triangle(x,y-30,x-3,y-10,x+3,y-10);
        triangle(x,y+30,x-3,y+10,x+3,y+10);
        triangle(x-30,y,x-10,y-3,x-10,y+3);
        triangle(x+30,y,x+10,y-3,x+10,y+3)
      }
    }
    for (x=space/2;x<width+50;x+=space){
      for (y=space/2;y<height+50;y+=space){
        triangle(x,y-30,x-3,y-10,x+3,y-10);
        triangle(x,y+30,x-3,y+10,x+3,y+10);
        triangle(x-30,y,x-10,y-3,x-10,y+3);
        triangle(x+30,y,x+10,y-3,x+10,y+3)
      }
    }
  }
  
  function saveArt() {
    save("myCanvas.jpg");
  }