/*Curtain Call Animation from Khan Academy by The Mass Transit Honchkrow*/

/*Begin code*/

noStroke();
var leftX = 3;
var rightX = 213;
var stageBright = 0;

draw = function() {
//stage background
    background(stageBright, stageBright, stageBright);
// left curtain
    fill(115, 34, 115); //an off-burgundy
    rect(leftX,0,205,337);
 // right curtain
    fill(115, 34, 115); //an off-burgundy
    rect(rightX,0,185,337);
    
//stage floor
    fill(150, 130, 71);
    rect(0,334,423,70);

//part curtains
leftX -=1;
rightX +=1;

//increase stage brightness
stageBright += 1;

};

/*End code*/
