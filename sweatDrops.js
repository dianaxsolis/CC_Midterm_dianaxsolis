class sweatDrops {

  constructor(x1,y1,x2,y2,s){

    this.x1 = x1;
    this.y1 = y1;

    // Movement Variables
    
    this.slowSpeed = 3;
    this.mediumSpeed = 10;
    this.highSpeed = 15;


    // I was trying to use vectors as a way to move the heartbeat faster, but I was having trouble with it and it seemed like it wasn't working despite adding the position to the ellipse and such.
    // this.velocity = createVector(random(-1,1), random(-1,0));
    // this.acceleration = createVector(0,0.05)

    
  }

  display (){

    // face 

    fill (192,240,246);
    arc (700,0,700,1000,0,PI+QUARTER_PI,CHORD);

    // right eye 

    stroke(255);
    fill(0); 
    strokeWeight(4);
    ellipse (820,0,50,200);

    // left eye

    fill(0);
    stroke(255);
    strokeWeight(4);
    ellipse (600,0,50,200);

    // sweatdrop 1

    fill (39,170, 226);
    noStroke();
    ellipse (this.x1,this.y1,50,50)
    triangle(this.x1-25,this.y1, this.x1-25,this.y1-50,this.x1+20,this.y1-15);
    fill (255);
    arc (this.x1,this.y1,15,25,0,PI+QUARTER_PI,PIE);

    // sweatdrop 2

    fill (39,170, 226);
    noStroke();
    ellipse (this.x2,this.y2,50,50)
    triangle(this.x2-25,this.y2, this.x2-25,this.y2-50,this.x2+20,this.y2-15);
    fill (255);
    arc (this.x2,this.y2,15,25,0,PI+QUARTER_PI,PIE);

    // mouth 

    stroke(0);
    noFill();
    strokeWeight(2);
    beginShape();
    vertex(600,250);
    curveVertex(600,300);
    curveVertex(625,290);
    curveVertex(650,280);
    curveVertex(675,260);
    curveVertex(700,250);
    curveVertex(725,260);
    curveVertex(750,280);
    curveVertex(800,290);
    curveVertex(825,300);
    endShape();

} 

  move(){
    if (millis() / 1000 < 5){ // Moves the speed of the sweatdrop downward
      this.y1 += this.slowSpeed;
    }

    else if (millis() / 1000 < 12){
      this.y1 += this.mediumSpeed;
    }

    else if (millis() / 1000 < 22){
      this.y1 += this.highSpeed;
    }

  }

  checkEdges(){ // Repositions sweatdrops so that it can reloop

    if(this.x1 > width){
      this.x1 = 0;

    }else if(this.x1 < 0){
      this.x1 = width;

    }
    if(this.y1 > height){
      this.y1 = 0;

    }else if(this.y1 < 0){
      this.y1 = height;
    }

  }
}

