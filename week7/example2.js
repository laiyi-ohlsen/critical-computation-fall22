//uses array to specify coordinates and then reference those coordinates when deciding how to fill them


let circlesX= []; 
let circlesY = [];

function setup() {
  createCanvas(800,400);
  
  //divide canvas into 12 x 5 grid 
  let boxWidth = width/12
  let boxHeight = height/5
  
  //specify coordinates in the middle of each grid 
  let i = 0; 
  for(let x = boxWidth/2;x <= width; x += boxWidth){
    for(let y = boxHeight/2; y <= height;y += boxHeight){
      circlesX[i] = x
      circlesY[i] = y
      i += 1; 
    }
  }
}

function draw() {
  background(220);
  


  
  //draw ellipses based off of array coordinates
  //for every index in the x coordinate array draw circle at that index's coordinates
  for (let a = 0; a < circlesX.length; a++){
      if (second() >= a) {
        drawCircle(circlesX[a], circlesY[a], "dark")
      }
      else {
        drawCircle(circlesX[a], circlesY[a], "white")
      }
  }

}

function drawCircle(xloc,yloc,color){
  noStroke(); 
  //set diameter of circles to 90% of grid box
  let circleDiam = width/12*.90
  if(color == 'dark'){
    fill(0)
  }
  else if(color == 'white'){
    fill(255)
  }
  circle(xloc,yloc,circleDiam)
}
