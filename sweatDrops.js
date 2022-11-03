class sweatDrops {

  constructor(x,y,s){

    // Variables

    this.x_ = x;
    this.y_= y;

    // Movement Variables

    this.speed = s;
    this.position = createVector(random(0,width), this.y_);
    this.velocity = createVector(this.speed, this.speed);
  }

  update(){
    
    this.position.add(this.velocity);

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

    // sweatdrop 

    fill (39,170, 226);
    noStroke();
    ellipse (this.x_,this.y_,50,50)
    triangle(this.x_-25,this.y_, this.x_-25,this.y_-50,this.x_+20,this.y_-15);
    fill (255);
    arc (this.x_,this.y_,15,25,0,PI+QUARTER_PI,PIE);

    stroke(0);
    strokeWeight(2);
    vertex(600,200);
    bezierVertex(700,180,750,200,780,180);

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

  checkEdges(){ // Repositions sweatdrops

    if(this.position.x_ > width){
      this.position.x_ = 0;

    }else if(this.position.x_ < 0){
      this.position.x_ = width;

    }
    if(this.position.y_ > height){
      this.position.y_ = 0;

    }else if(this.position.y_ < 0){
      this.position.y_ = height;
    }

  }

  move(){
    

  }
}

