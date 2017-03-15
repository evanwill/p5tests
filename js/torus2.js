var rr = 300;
var tr = 100;
var wide;
var img;
function preload(){
  img = loadImage('/p5tests/models/lib-header-brand.png');
}
function setup(){
  wide = windowWidth - 50;
  createCanvas(windowWidth, windowHeight, WEBGL);
  //createCanvas(wide, 500, WEBGL).parent('sketch');
}

function draw(){
  //background(200);
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