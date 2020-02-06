/*Subway Car Graffiti Cleaner by The Mass Transit Honchkrow*/

/*Begin Code*/

//subway cars are typically grey.
background(192,192,192);
//eraser variable
var eraserSize =35;
noStroke();
//window size
var window = 100;
//window height
var winHeight = 128;
//drawn images
image(getImage("avatars/aqualine-seed"), -5, 30);
image(getImage("avatars/duskpin-seedling"), 54, 216, 80, 80);

//the grafitti shapes
fill(255, 74, 183);
beginShape();
vertex(37, 120);
bezierVertex(489, 10, 334, 175, 347, 175);
bezierVertex(92, 88, 77, 125, 420, 120);
endShape();
fill(140, 224, 255);
beginShape();
vertex(130, 120);
bezierVertex(32, 10, 463, 136, 493, 175);
bezierVertex(86, 325, 456, -43, 420, 120);
endShape();
fill(237, 230, 21);
beginShape();
vertex(130, 120);
bezierVertex(180, 100, 19, 15, 130, 175);
bezierVertex(114, 190, 77, 125, 62, 288);
endShape();



draw = function() {
    // clean up that grafitti by a return to grey
fill(192,192,192);
ellipse(mouseX, mouseY,eraserSize,eraserSize);

//platform edge (because we don't want to erase that)
fill(255, 225, 0);
rect(0,385,400,15);

//ceiling
fill(100,100,100);
rect(0,1,400,49);

//subway doors
fill(130, 130, 130);
rect(271,112,128,233);
fill(130, 130, 130);
rect(138,112,128,233);

//subway windows
fill(219, 254, 255);
rect(284,winHeight,window,window);
fill(219, 254, 255);
rect(150,winHeight,window,window);

};

/*End Code*/
