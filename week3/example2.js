let r,g,b;
let w=100, h=100; 
function setup() {
  createCanvas(400, 400);
  //frameRate(2)
  
  
}

function draw() {
  background(220);
  
  r = 210;
  g = mouseX/3; 
  b = mouseY/3;
  
  x = mouseX;
  y = mouseY; 
  
  rectMode(CENTER);
  translate(width/2,height/2);
  fill(r,g,b)
  rect(0,0,w,h)
}


function mousePressed () {
  w = w+100;
  h = h+100; 
 
}

function mouseClicked() {
  w = w-100;
  h = h-100; 
}