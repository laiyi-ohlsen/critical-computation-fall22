//example of using mouse position to change color on gradient 
//alos demonstrates wrapped if statement

let r,g,b; 
function setup() {
  createCanvas(400, 400);
  r=0;
  g=0;
  b=0;
}

function draw() {
  background(220);
  
  rectMode(CENTER)
  translate(width/2,height/2)
  
  if ((height/2 - 50 < mouseY) && (mouseY <= height/2 + 50)){
  if(mouseX > width/2){
    r=map(mouseX, 0, width, 0, 255);
    b=map(mouseX, 0, width, 0, 255);
    g=map(mouseX, 0, width, 0, 255);
  } 
  else if((mouseX <= width/2)){
    r=map(mouseX, 0, width, 0, 255); 
    b=map(mouseX, 0, width, 0, 255);
    g=map(mouseX, 0, width, 0, 255);
  }
}
  fill(r,g,b)
  rect(0,0, width, 100)
  
}
