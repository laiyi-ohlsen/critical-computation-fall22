//example using switch and interactively generating new objects

let circles = []; 
let xpos,ypos;
let scene = 0; 
function setup() {
  createCanvas(400, 400);

}

function draw() {

    switch (scene){ 
    case 0:
     
      background(224, 187, 228)
    break; 
    case 1:
     
      background(255, 223, 211)
    break; 
    case 2:
      
      background(254, 200, 216)
    break; 
  }
  
  for(let x=0; x < circles.length; x++){
    circles[x].display(); 
    circles[x].move();
    circles[x].checkCollision();
  } 
  

  
}
function mousePressed(){
  xpos = mouseX;
  ypos = mouseY; 
  
  circles.push(new Circle()); 
  
  if(scene < 2){
    scene++
  } else if (scene == 2){
    scene = 0; 
  }
}

class Circle {
  constructor() {
    this.x = xpos; 
    this.y = ypos;
    this.diam = 70;
    this.direction = 1; 
    this.speedX = random(-2.8,2.8)
    this.speedY = random(-2.5,2.5)
  }
  
  display(){
    noStroke()
    circle(this.x,this.y,this.diam)
  }
  
  move(){
    this.x += this.speedX*this.direction
    this.y += this.speedY*this.direction
    
    if(this.y > height-this.diam/2 ||
      this.y < this.diam/2){
       this.direction*=-1;
    }
    if(
      this.x < this.diam/2 ||
      this.x > width-this.diam/2){
      this.direction*=-1;
    }
    }
  
  checkCollision(){
    for(let i=0; i<circles.length; i++){
      let d = dist(this.x, this.y,circles[i].x, circles[i].y)
      
      if (d > 0 && d < this.diam){
        this.direction *= -1
      }
  
    }
  }
  
  
}