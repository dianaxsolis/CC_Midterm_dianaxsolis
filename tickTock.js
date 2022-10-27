/*

Diana Solis - Section A - Creative Coding - Midterm Project: The Unexpected Machine: Performance Adjective

Resources used to complete project: 
1. The Coding Train: 6.2: Classes in JavaScript with ES6 - p5.js tutorial


*/

let sweat

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);

  sweat = new sweatDrops();
  
}

function draw() {
  
  sweat.display();


}
