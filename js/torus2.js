var rr = 300;
var tr = 100;
var img;

function setup(){
  img = loadImage('/p5tests/models/lib-header-brand.png');
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  texture(img);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(rr, tr);
  rr = rr - 0.5;
  tr = tr - 0.1;
}

function windowResized() {
  setup();
}