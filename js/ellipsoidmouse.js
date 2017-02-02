function setup(){
  createCanvas(900, 500, WEBGL).parent('sketch');
}

function draw(){
  background(200);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.01);
  ellipsoid(mouseX, mouseY, 80);
}
