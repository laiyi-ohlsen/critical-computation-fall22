//example of cleaner code for boolean lightswitch example

let r,g,b;
let w,h; 
let button; 
function setup() {
  createCanvas(400, 400);
  r=0;
  g=0;
  b=0;
  
  w=width/2;
  h=100;
  
  left = width/2 - w/2; 
  right = width/2 + w/2; 
  t = height/2 - h/2; 
  bottom = height/2 + h/2; 
}

function draw() {
  background(220);
  
  rectMode(CENTER)
  translate(width/2,height/2)
  
  if (button){
    fill(255,255,0)
  }
  else{ 
    fill(0,0,0)
  }
  rect(0,0,w,h)
}

function mouseClicked(){
  if (mouseX < right &&
      mouseX > left && 
      mouseY > t &&
      mouseY < bottom) {
   button = !button
  }
}