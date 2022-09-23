let savedTime=0; 
let timer = 5000; 
let passedTime; 
let r,g,b; 
function setup() {
  createCanvas(400, 400);
   background(220); 
}

function draw() {  
  passedTime = millis() - savedTime;
  
  if (passedTime > timer){
    r = random(0,255); 
    g = random(0,255); 
    b = random(0,255); 
    background(r,g,b);
    savedTime = millis(); 
    console.log(savedTime)
  }
  
}

