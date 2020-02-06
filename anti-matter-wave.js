/*Anti-Matter Wave JS Animation by The Mass Transit Honchkrow*/

/*Between December 15, 2019 and January 15, 2020, the Arrowverse
held a Five-Part event called "Crisis On Infinite Earths."
An Anti-Matter wave destroyed countless Earths across the 
multiverse, costing trillions of lives. With the help of a 
revived Oliver Queen, he and the Seven Paragons from various
earths help restart the universe. This animation depicts the 
coming of an anti-matter wave.*/

/*Begin code*/

noStroke();
    //ground destruction
    var groundR = 45;
    var groundG = 64;
    var groundB = 43;
    //reddening variable
    var reddening = 0;
    background(0,0,0);
    //moon size
var moonSize = 82;
    //static wave sizes
var novaZ = 20;  
    //nova intensity
var novaI = 255;
//anti matter post wave
var novaS = 0.5;
    //little dipper
fill(255,255,255);
ellipse(359,90,5,5);
ellipse(244,144,5,5);
ellipse(259,82,5,5);
ellipse(334,172,5,5);
ellipse(97,80,5,5);
ellipse(184,84,5,5);
  //sky reddening
    background(reddening, 0, 0);
draw = function() {
        background(reddening,0,0);
         // The moon, there for show
fill(240, 204, 84);
ellipse(31,20,moonSize,moonSize);

 //draw command to simulate anti matter wave
    fill(novaI, 0, 0);
ellipse(300,50,novaZ,novaZ);
 //draw command to simulate secondary wave
    fill(192,192,192);
ellipse(300,50,novaS,novaS);
    //anti matter lead wave and reddening of sky, destruction of ground
        reddening += 1;
        novaS += 3;
        novaI -= 0.5;
        groundR += 1;
        groundG += 1;
        groundB += 1;
            // The land, blocking half of the scene
fill(groundR, groundG, groundB);
rect(0, 300, 400, 100); 

    };
/*End Code*/
