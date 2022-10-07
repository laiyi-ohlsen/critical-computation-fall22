// red: 1, 4, 7, 10 rem = 1
// blue: 2, 5, 8, 11 rem = 2
// white: 3, 6, 9, 12 rem = 0

let stripeWidth =20;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  for(let x =0; x < width/stripeWidth; x++){
    
    if (x%3 == 1){
      redStripe(x*stripeWidth)
    }
    else if (x%3 == 2) {
      blueStripe(x*stripeWidth)
    }
    else if (x%3 ==0 ){
      whiteStripe(x*stripeWidth)
    }
  }
  
  
}

function redStripe(x){
  noStroke(); 
  fill(255,0,0)
  rect(x,0, stripeWidth, height)
}

function whiteStripe(x){
  noStroke(); 
  fill(255)
  rect(x,0, stripeWidth, height)
}

function blueStripe(x){
  noStroke(); 
  fill(0,0,255)
  rect(x,0, stripeWidth, height)
}