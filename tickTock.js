/*

Diana Solis - Section A - Creative Coding - Midterm Project: The Unexpected Machine: Performance Adjective

Resources used to complete project: 
1. The Coding Train: 6.2: Classes in JavaScript with ES6 - p5.js tutorial
2. The Coding Train: 6.3: Constructor Agreements with Classes in JavaScript - p5.js tutorial


*/

let sweat1;
let sweat2;
let sweat3;

let sweat4;
let sweat5;
let sweat6;

let sweat7;

function setup() {
  createCanvas(1500,800);
  // background(255);

  sweat1 = new sweatDrops(480,50,5);
  sweat2 = new sweatDrops(500,50,8);
  sweat3 = new sweatDrops(460,20,12);
  
  sweat4 = new sweatDrops (900,50,12);
  sweat5 = new sweatDrops (950,20,8);
  sweat6 = new sweatDrops (955,50,5);
  
  sweat7 = new sweatDrops(650,20,15);
  
  
}

function draw() {
          
  background(255);
  
  sweat1.display();
  sweat2.display();
  sweat3.display();
  
  sweat4.display();
  sweat5.display();
  sweat6.display();
  
  sweat7.display();
  
  sweat1.move();
  sweat2.move();
  sweat3.move();
  
  sweat4.move();
  sweat5.move();
  sweat6.move();
  
  sweat7.move();
  
  
  
  /*

  for (let j = 0; j < 1200; j++){
    sweat[j].update();
    sweat[j].display();
    sweat[j].checkEdges();
  }
  */

}