var wide, high;

function setup() {
  wide = windowWidth;
  high = windowHeight;
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  noLoop();
}

function draw() {
  fill(random(255),random(255),random(255));
  triangle(mouseX,mouseY,random(-150,wide),random(-150,high),random(-150,wide),random(-150,high));
}
function mousePressed() {
  loop();
}
function mouseReleased() {
  noLoop();
}
function windowResized() {
  setup();
}