// let fish1;
// let fish2;
let numFish = 5; 
let fishies = []; 
let net;
let netImg;
let points = 0;

function preload(){
  netImg = loadImage('net.png')
}
function setup() {
  createCanvas(600, 600);
  imageMode(CENTER)
  
//   fish1 = new Fish(500,200,1,"blue")
//   fish2 = new Fish(600,100,0.5,"red")
  
  for (let i = 0; i < numFish; i++){
    fishies[i] = new Fish(random(width), random(height), random(1), color(random(255), random(255), random(255))); 
  }
  net = new Net()
}

function draw() {
  background("lightcyan");
   for (let i = 0; i < numFish; i++){
    fishies[i].body()
    fishies[i].move()
    fishies[i].checkCollision(i); 
  }
  // fish1.body()
  // fish1.move()
  // fish1.checkCollision()
  // fish2.body()
  // fish2.move()
  // fish2.checkCollision()
  net.body()
  
  /*SCORE BOARD*/
  fill(0)
  textSize(50)
  text("score: "+points, 100,400)
}

/* NET */
class Net{
  constructor(){
    
  }
  body(){
    image(netImg, 50, mouseY - 30,100,100)
  }
}

/* FISH */
class Fish{
  constructor(x,y,r,c){
	this.x = x;
	this.y = y;
    this.r = r;
    this.c = c;
  }
  
  body(){
    fill(this.c)
    noStroke()
    ellipse(this.x, this.y, 70, 50)
    triangle(this.x, this.y, this.x + 50, this.y - 30, this.x + 50, this.y + 30);
    fill(255)
    ellipse(this.x - 10,this.y,10,10)
  }
  
  move(){
  	if(this.x == 0){
    this.x = 600
    }else{
        this.x = this.x - this.r
    }
  }
  remove(){
    
  }
  checkCollision(i) {
     let distFromNet = dist(50,mouseY, this.x, this.y); 
    //more on dist https://p5js.org/reference/#/p5/dist
     if(distFromNet <= 50){
       
       fishies.splice(i,1); 
       numFish = fishies.length; 
       console.log(fishies)
       // this.remove()
       points++
     }
  }
  

}