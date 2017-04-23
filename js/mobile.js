function setup(){
  wide = windowWidth - 50;
  high = 500;
  createCanvas(wide, high).parent('sketch');
}
var value = 0;
function draw() {
  fill(value);
  ellipse(wide/2,high/2,wide/2,high/2)
}
function deviceShaken() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}