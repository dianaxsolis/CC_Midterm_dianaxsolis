/*

Diana Solis - Section A - Creative Coding - Midterm Project: The Unexpected Machine: Performance Adjective

Resources used to complete project: 
1. The Coding Train: 6.2: Classes in JavaScript with ES6 - p5.js tutorial
2. The Coding Train: 6.3: Constructor Agreements with Classes in JavaScript - p5.js tutorial
3. xin xin: 3.6: frameRate(), frameCount, millis() - p5.js Tutorial https://www.youtube.com/watch?v=B-N-isc31Z0&ab_channel=xinxin
4. The Coding Train: 1.3: Random Vectors - The Nature of Code
5. The Coding Train: 2.5: The random() Function - p5.js Tutorial
6. The Coding Train: Coding Challenge #134.2: Heart Curve GIF Loop

Note: Obviously, this is nowhere near anything that I wanted to create and I had a lot of difficulty finishing the project. I submitted the Midterm Self-Assessment to hopefully give you a better insight on my work with the project and such.


*/

let sweat;
let heart; 
var option = 1;
let size = 0.0; // Credit given to p5.js example to imitate a heartbeat growth: https://p5js.org/examples/transform-scale.html
let growth = 0.0;



function setup() {
  createCanvas(1500,800); // Tried to use windowWidth, windowHeight but it seemed to always cut off my drawings
  rectMode(CENTER); // Trying to center the heart, did not work 

  sweat1 = new sweatDrops(500,0);
  sweat2 = new sweatDrops(900,0);
  heart = new heartBeat();
  
}

function draw() {

  let time = millis();
  // Worked with Shentong on finding a way to display different scenes given time!
  // Decided to use conditionals as a way to generate each scene, changing/slower time frames in between to show the petrified "FAST" movement!

  if (time / 1000 < 5){
    background (255);
    sweat1.display(); // Displays slow sweatdrops
    sweat1.move();
    sweat1.checkEdges();
    sweat2.display();
    sweat2.move();
    sweat2.checkEdges();
  }

  else if (time / 1000 < 10){ // A slower heartbeat, I had trouble trying to center it like my previous draft. Whenever I did scale, it always went off to (0,0) and loop back around
    background (255);

    size = size + 0.02;
    growth = cos(size) * 2;
    scale(growth);


    heart.display();

  }

  else if (time / 1000 < 12){ // Medium sweatdrops beat
    background (255);
    sweat1.display();
    sweat1.move();
    sweat1.checkEdges();
    sweat2.display();
    sweat2.move();
    sweat2.checkEdges();

  }

  else if (time / 1000 < 14){ // Medium heartbeat speed

    background(255);

    size = size + 0.04;
    growth = cos(size) * 2;
    scale(growth);
    heart.display();

  }

  else if (time / 1000 < 16){ // More faster sweatdrops speed
    background(255);

    sweat1.display();
    sweat1.move();
    sweat1.checkEdges();
    sweat2.display();
    sweat2.move();
    sweat2.checkEdges();
  }

  else if (time / 1000 < 17){ // Faster heartbeat
    background(255);

    size = size + 0.06;
    growth = cos(size) * 2;
    scale(growth);
    heart.display();
  }

  else if (time / 1000 < 18){ // This begins a cycle of fast-moving heartbeats, going back and forth rapidly to show that petrified feeling of a fight or flight response where it moves frame to frame
    background(255);

    sweat1.display();
    sweat1.move();
    sweat1.checkEdges();
    sweat2.display();
    sweat2.move();
    sweat2.checkEdges();
  }

  else if (time / 1000 < 19){
    background(255);

    size = size + 0.08;
    growth = cos(size) * 2;
    scale(growth);
    heart.display();
  }

  else if (time / 1000 < 20){
    background(255);

    sweat1.display();
    sweat1.move();
    sweat1.checkEdges();
    sweat2.display();
    sweat2.move();
    sweat2.checkEdges();
  }

  else if (time / 1000 < 21){
    background(255);

    size = size + 0.08;
    growth = cos(size) * 2;
    scale(growth);
    heart.display();
  }

  else if (time / 1000 < 22){
    background(255);

    sweat1.display();
    sweat1.move();
    sweat1.checkEdges();
    sweat2.display();
    sweat2.move();
    sweat2.checkEdges();
  }
  else if (time / 1000 < 23){ // Black screen for an ominous feeling.
    background (0);

  }

}