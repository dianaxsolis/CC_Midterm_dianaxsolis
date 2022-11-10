class heartBeat {

	//Variables

	constructor (x,y,s){
	this.x_ = x;
	this.y_ = y;
	this.speed = s

	}

	display(){

	// heart drawing

	fill (192,240,246);
	noStroke();
	beginShape();
	curveVertex(0,0);
	curveVertex(1000,0);
	curveVertex(950, 400);
	curveVertex(1000,500);
	curveVertex(1000,800);
	curveVertex(0,800);
	endShape();

	stroke(0);
	strokeWeight(2);
	fill (246,178,180)
	beginShape();
	curveVertex(450, 800);
	curveVertex(450, 470);
	curveVertex(330, 350);
	curveVertex(375, 275);
	curveVertex(450, 300);
	curveVertex(450, 500);
	endShape();

	beginShape();
	curveVertex(450, 500);
	curveVertex(450, 300);
	curveVertex(525, 275);
	curveVertex(570, 350);
	curveVertex(450, 470);
	curveVertex(450, 800);
	endShape();
	}

	// end of heart drawing

}