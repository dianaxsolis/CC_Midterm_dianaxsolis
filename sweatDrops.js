class sweatDrops {

  constructor(x,y,s){

    // variables 

    this.x_ = x;
    this.y_= y;

    // movement variables

    this.speed = s;
    this.position = createVector(random(0,width), this.y_);
    this.velocity = createVector(this.speed, this.speed);
  }

  update(){
    
    this.position.add(this.velocity);

  }

  // drawing out the structure of the first scene

  display (){

  // creating the base face structure

  // face structure

  // fill (248, 179, 143);
  fill (192,240,246);
  arc (700,0,700,1000,0,PI+QUARTER_PI,CHORD);

  // right eye structure

  // fill (159,64,83); - // color eye
  // stroke (137,48,49);
    stroke(255);
  fill(0); // black eye color fill
  strokeWeight(4);
  ellipse (820,0,50,200);

  // left eye structure

  // fill (159,64,83);
  fill(0);
  // stroke(137,48,49);
    stroke(255);
  strokeWeight(4);
  ellipse (600,0,50,200);
    
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
      
    stroke(0);
    noFill();
    strokeWeight(2);
    beginShape();
    // line (600,300,800,300);
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

  // end of drawing structure

  checkEdges(){ // repositions fire
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
      this.y_=this.y_+this.speed;
      
        
      if (this.y_>600){
        this.y_ = 0;
    }
}

/*
function droplet (x, y){

  noStroke();
  fill (39,170, 226);
  // vertex(500,50);
  // bezierVertex(this.position.x_ + 300, this.position.y -150, this.position.x +250, this.position.y -100, this.position.x +300, this.position.y -100, this.position.x +400, this.position.y -100,600);
  ellipse (200,200,50,100);
    
    */

}
