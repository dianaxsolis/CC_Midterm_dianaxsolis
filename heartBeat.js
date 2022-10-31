class heartBeat {
	constructor (x,y,s){
	this.x_ = x;
	this.y_ = y;
	this.speed = s
	}

	display(){


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

}