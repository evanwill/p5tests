var rr = 300;
var tr = 100;
var wide;

function setup(){
  wide = windowWidth;
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(rr, tr);
  rr = rr - 0.5;
  tr = tr - 0.1;
}
function windowResized() {
  setup();
}