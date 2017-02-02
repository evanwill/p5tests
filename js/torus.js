var rr = 300;
var tr = 100;

function setup(){
  createCanvas(900, 500, WEBGL).parent('sketch');
}

function draw(){
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(rr, tr);
  rr = rr - 0.5;
  tr = tr - 0.1;
}