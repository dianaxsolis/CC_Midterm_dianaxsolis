class sweatDrops {

	constructor(){
	}

	
	display(){

	// face structure

	fill (248, 179, 143);
	arc (700,0,700,1000,0,PI+QUARTER_PI,CHORD);

	// right eye structure

	fill (159,64,83) - // color eye
	stroke (137,48,49);
	// fill(0); // black eye color fill
	strokeWeight(4);
	ellipse (820,0,50,200);

	}

}