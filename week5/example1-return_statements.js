//example using mousePressed and mouseReleasd functions with return statements 

let mouse = false; 
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(255);
  
  if (mouse == true){
  drawCircle(xloc,yloc); 
  }
}

//draw circle where mouse is

function mousePressed() {
  mouse = true; 
  xloc = mouseX; 
  yloc = mouseY; 
  return xloc, yloc; 
} 

function mouseReleased() {
  mouse = false;  
}

function drawCircle(x,y){
  fill(255,204,0,80); 
  noStroke(); 
  circle(x,y,100);
}
