var wide, high;

function setup() {
  wide = windowWidth - 50;
  high = 500;
  createCanvas(wide,high).parent('sketch');
  frameRate(10);
  noLoop();
}

function draw() {
  fill(random(255),random(255),random(255));
  triangle(mouseX,mouseY,random(wide),random(high),random(wide),random(high));
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