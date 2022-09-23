  let rectW=100
  let rectH=10
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}


function draw() {
  background(255); 
   
  let h = hour()
  let m = minute()
  let s = second()
  
  translate(width/2,height/2);

  
  //seconds
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}


function draw() {
  background(255); 
   
  let h = hour()
  let m = minute()
  let s = second()
  
  translate(width/2,height/2);

  
  //seconds
  fill(0);
  push(); 
  rotate(s*6)
  line(0,0, 0, -150);
  pop(); 
  
  //minutes
  push(); 
  rotate(m*6);
  strokeWeight(2);
  line(0,0,0,-150); 
  pop(); 
  
  //hour
  push();
  strokeWeight(5); 
  rotate(h*(360/24)); 
  line(0,0,0,-150);   
  pop(); 
  
  //console.log(`${h}:${m}:${s}`)
  
  
}


  fill(0);
  push(); 
  rotate(s*6)
  line(0,0, 0, -150);
  pop(); 
  
  //minutes
  push(); 
  rotate(m*6);
  strokeWeight(2);
  line(0,0,0,-150); 
  pop(); 
  
  //hour
  push();
  strokeWeight(5); 
  rotate(h*(360/24)); 
  line(0,0,0,-150);   
  pop(); 

  
  //console.log(`${h}:${m}:${s}`)
}

