/* centering on window 
https://github.com/processing/p5.js/wiki/Positioning-your-canvas
*/
var cnv, wide, high, x, y;
/*
// absolute centered
function setup() {
    wide = windowWidth - 25;
    high = windowHeight - 25;
    cnv = createCanvas(wide,high);
    //cnv.parent('sketch');
    x = (windowWidth - wide) / 2;
    y = (windowHeight - high) / 2;
    cnv.position(x,y);
    for (var i = 0; i < 100; i++) {
        fill(random(255),random(255),random(255));
        ellipse(random(wide), random(high), random(200), random(200));
        //triangle(random(900),random(500),random(900),random(500),random(900),random(500));
    };
}

function windowResized() {
  setup();
  //centerCanvas();
}*/
// responsive width, position in element
function setup() {
    wide = windowWidth - 50;
    high = 500;
    cnv = createCanvas(wide,high);
    cnv.parent('sketch');
    //x = (windowWidth - wide) / 2;
    //y = (windowHeight - high) / 2;
    //cnv.position(x,y);
    for (var i = 0; i < 100; i++) {
        fill(random(255),random(255),random(255));
        ellipse(random(wide), random(high), random(200), random(200));
        //triangle(random(900),random(500),random(900),random(500),random(900),random(500));
    };
}

function windowResized() {
  setup();
}
/*
var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(100, 100);
  centerCanvas();
  background(255, 250, 200);
}

function windowResized() {
  centerCanvas();
}*/