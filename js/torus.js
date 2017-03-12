var rr = 300;
var tr = 100;
var wide;

function setup(){
  wide = windowWidth - 50;
  createCanvas(wide, 500, WEBGL).parent('sketch');
}

function draw(){
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(rr, tr);
  rr = rr - 0.5;
  tr = tr - 0.1;
}
function windowResized() {
  setup();
}