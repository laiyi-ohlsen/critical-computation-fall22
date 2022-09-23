let r,g,b; 
function setup() {
  createCanvas(400, 400);
  
  r = 255; 
  g = 0; 
  b = 0; 
}

function draw() {
  background(220);
  
  rectMode(CENTER)
  translate(width/2,height/2)
  fill(r,g,b)
  rect(0,0, 100,100)
  
}

function keyTyped(){
  if (key == 'a'){
    r = 0; 
    g = 0; 
    b = 0; 
  }
  else if (key =='b'){
    r = 255; 
    g = 255; 
    b = 255;
  }
}