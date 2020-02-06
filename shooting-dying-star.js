/*Shooting and Dying Star on Khan Academy by The Mass Transit Honchkrow
Find the project here: https://www.khanacademy.org/computer-programming/shooting-and-dying-star/5092509949640704*/

/*Begin code*/

noStroke();
    // the beautiful night sky
background(0, 0, 0);
    //moon size
var moonSize = 82;
    //comet size
var cometSize = 20;
    //static supernova size
var novaZ = 50;  
    //nova intensity
var novaI = 255;
    //the comet's horizontal position (tail)
var cometHpos = 15;
    //the comet's vertical position (tail)
var cometTailHpos = 0;
draw = function() {
 //draw command to simulate dying star
    fill(novaI, 0, 0);
ellipse(300,50,novaZ,novaZ);
    //little dipper
fill(255,255,255);
ellipse(359,90,5,5);
ellipse(244,144,5,5);
ellipse(259,82,5,5);
ellipse(334,172,5,5);
ellipse(97,80,5,5);
ellipse(184,84,5,5);
     // The moon, there for show
fill(240, 204, 84);
ellipse(31,20,moonSize,moonSize);
     //comet tail which is light teal
fill(215, 250, 244);
ellipse(cometTailHpos,131,cometSize,cometSize);
    // draw the comet with pale yellow fill
fill(255, 255, 184);
    arc(cometHpos, 131, cometSize,cometSize, -90,90);
    // shooting star horizontal head
cometHpos +=1;
    //shooting star horizontal tail end
cometTailHpos +=0.5;
    //this causes the comet to warp
cometSize *= 144/145;
    //supernova death
        novaZ += 1;
        novaI -= 1;
    // The land, blocking half of the scene
fill(45, 64, 43);
rect(0, 300, 400, 100); 
};


/*End Code*/
