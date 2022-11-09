/*

Diana Solis - Section A - Creative Coding - Midterm Project: The Unexpected Machine: Performance Adjective

Resources used to complete project: 
1. The Coding Train: 6.2: Classes in JavaScript with ES6 - p5.js tutorial
2. The Coding Train: 6.3: Constructor Agreements with Classes in JavaScript - p5.js tutorial


*/

let sweat
let heart;

var option = 1;

function setup() {
  createCanvas(1500,800); // Tried to use windowWidth, windowHeight but it seemed to always cut off my drawings

  sweat = new sweatDrops();
  heart = new heartBeat();
  
}

function draw() {


  if (millis () < 10000){
    background(255);
    sweat.run();



  if (option == 2){
    scale(random(1,1.05));
    heart.display();
  }

}


function keyPressed(){
  if (keyCode === RIGHT_ARROW){
    option++;
  } else if (keyCode === LEFT_ARROW){
    option--;
  }
  }
}
  