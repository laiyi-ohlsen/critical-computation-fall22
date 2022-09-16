let r,g,b; 
let x,y;  

function setup() {
  createCanvas(400, 400);
  
  
}

function draw() {
  background(220);
  r = random(0,255)
  g = 0;
  b = 0;

  x = mouseX/1.8;
  y = mouseY/1.5; 
  
  fill (r,g,b); 
  rectMode(CENTER);
  translate(width/2,height/2);
  rect(0,0,x,y); 
  
}