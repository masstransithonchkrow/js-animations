/*Where Is My Son? Khan Academy JS Animation by The Mass Transit Honchkrow
Find it here: https://www.khanacademy.org/computer-programming/where-is-my-son/4997917172580352
*/

/*Begin Code*/

var centerX = 200;
var centerY = 100;
var bodyLength = 118;
var bodyHeight = 74;
     //eye initialized params
var pupilSize = 15;

//initial color
var bodyColor = color(162, 0, 255);
var drawFish = function(centerX,centerY,bodyLength,bodyHeight)
{
    noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
fill(bodyColor);
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};

draw = function() {
    background(132, 211, 235);
//eye itself
fill(255,255,255);
ellipse(mouseX,mouseY,100,40);
fill(0,0,0);
ellipse(mouseX,mouseY,pupilSize,pupilSize);
drawFish(200,100,118,74);

//I'm a very good fan of purple fish, but what about other colors?
//like rusty red?
bodyColor = color(199, 55, 55);
drawFish(256,159,118,74);

//how about cream?
bodyColor = color(199, 189, 55);
drawFish(313,53,118,74);
//hear me out, washed out navy?
bodyColor = color(105, 127, 201);
drawFish(135,237,118,74);
//a bed
fill(76, 105, 54);
rect(0,344,400,60);

//how about a fish looking at us?
//let's establish the fish's proportions.
var fishHeadSize = 164;
fill(245, 147, 19);
ellipse(315,341,fishHeadSize,fishHeadSize);
//now, for its eyes.
var eyeSize = 15;
var eyeLine = 307;
var leftEye = 275;
fill(0,0,0);
ellipse(leftEye + 80, eyeLine, eyeSize, eyeSize);
ellipse(275, eyeLine, eyeSize, eyeSize);
//fins
fill(222, 141, 42);
triangle(234, 355, 196, 265, 244, 296);
triangle(576, 238, 434, 276, 311, 508);
//funny dialogue
fill(255,255,255);
textSize(20);
text("/",211,363);
text("Where is my son?", 73,382);


};

/*End Code*/

