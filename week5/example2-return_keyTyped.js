//example using mousePressed and mouseReleasd functions with return statements 

let xloc=-100, yloc=-100; 
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(255);
  textSize(24);
  text(`${key}`, 200,200)
  
}

function keyPressed() {
  return key; 
}

function drawCircle(x,y){
  fill(255,204,0,80); 
  noStroke(); 
  circle(x,y,100);
}
