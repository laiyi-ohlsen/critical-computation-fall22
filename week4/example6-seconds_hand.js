let r=0; 
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES); 

}


function draw() {
  background(220); 
   
  translate(width/2, height/2)
  rotate(r); 
  r = second()*6;
  line(0,0,width/4,-150)
  
  
}

