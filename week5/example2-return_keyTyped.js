//example using return with keyPressed
let phrase =""; 
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(255);
  textSize(24);
  text(`${phrase}`, 100,200)
  
}

function keyPressed() {
  phrase = "I am pressing the "+ key+ " key";
  return phrase; 
}
