var rx = 120;
var ry = 60;
var rz = 80;
var z = 0;
/*
var img;
function preload(){
  img = loadImage('/p5tests/models/7055599731_80ffac7583_o.jpg');
}
*/

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  //texture(img);
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.03);
  translate(-width/2 + winMouseX,-height/2 + winMouseY,z);
  ellipsoid(rx, ry, rz);
  rx = rx - random(-10,10);
  ry = ry - random(-10,10);
  rz = rz - random(-10,10);
}
function windowResized() {
  //preload();
  setup();
}
