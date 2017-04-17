var img;

function setup(){
  img = loadImage('/p5tests/models/lib-header-brand.png');
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  background(200);
  
  texture(img);

  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.01);
  ellipsoid(mouseX, mouseY, 80);
}
function windowResized() {
  setup();
}