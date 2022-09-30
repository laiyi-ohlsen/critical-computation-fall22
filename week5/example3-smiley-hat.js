//example of using function to draw shape and add on another shape based on event

let hat = false; 
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(255);
  
  drawSmiley(200,200,200);  
  drawSmiley(50,50,100); 
  drawSmiley(350,350, 100);
  drawSmiley(350,50, 100);
  drawSmiley(50,350, 100);

}

function drawSmiley(x,y,d){
  
  //draw yellow circle
  fill(255,204,0,90); 
  noStroke(); 
  circle(x,y,d);
  
  //draw eyes
  fill(0);
  //right eye
  
  rightEyeX = x-(d/5)
  rightEyeY = y-(d/10)
  eyeDiam = d/10
  circle(rightEyeX,rightEyeY, eyeDiam); 

  //left eye
  leftEyeX = x+(d/5)
  leftEyeY = y-(d/10)
  eyeDiam = d/10
  circle(leftEyeX, leftEyeY, eyeDiam)
  
  //smile
  arc(x,y+(d/10),d*.5,d*.5, 2*PI, PI)
  
  //hat
  if (hat == true){ 
  drawHat(x,y,d); 
  } 
}

function drawHat(x,y,d){
  push(); 
  fill(0, 107, 182); 
  arc(x,y-(d*.325),d*.75,d*.7, PI, 2*PI)
  fill(245, 132, 38)
  ellipse(x+(d*.125),y-(d*.325), d,d*.15); 
  pop(); 
}

function mousePressed(){ 
  hat = true; 
}

function mouseReleased(){
  hat = false; 
}