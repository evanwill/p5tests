var rx = 120;
var ry = 60;
var rz = 80; 

function setup(){
  createCanvas(900, 500, WEBGL);
}

function draw(){
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.03);
  ellipsoid(rx, ry, rz);
  rx = rx - random(-10,10);
  ry = ry - random(-10,10);
  rz = rz - random(-10,10);
}
