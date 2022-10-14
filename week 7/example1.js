//uses arrays to generate random values and then references the array to draw them (once)

let xCoordinates = [];
let yCoordinates = [];
let squareWidths = [];
let squareColors = []; 

function setup() {
  createCanvas(400, 400);
  
  for(let i=0; i<200; i++){
    xCoordinates.push(random(0,350));
    yCoordinates.push(random(0,350));
    squareWidths.push(random(10,50));
    squareColors.push(color(random(0,255),
                            random(0,255),random(0,255),random(100,255)));
  }

}

function draw() {
  background(200,200);
  for(let i=0; i<100; i++){
    fill(squareColors[i]);
    square(xCoordinates[i],yCoordinates[i],squareWidths[i]);
  }
}

/* Sample of drawing randomly every time draw executes


function setup() {
  createCanvas(400, 400);
  

}

function draw() {
  background(200,200);
  for(let i=0; i<100; i++){
    fill(random(0,255), random(0,255), random(0,255),random(100,255))
    square(random(0,350),random(0,350), random(10,50));
  }
}

*/ 