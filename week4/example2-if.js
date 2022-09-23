//example of if statement running every draw loop


let r,g,b; 
function setup() {
  createCanvas(400, 400);
  
  r = 0; 
  g = 0; 
  b = 0; 
}

function draw() {
  background(220);
  
  rectMode(CENTER)
  translate(width/2,height/2)
  fill(r,g,b)
  rect(0,0, width, 10)
  
  if (r <= 255){
    r += 1; 
  }
  
}
