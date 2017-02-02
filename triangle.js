
function setup() {
    createCanvas(900,500);
    frameRate(10);
    noLoop();
}

function draw() {
    fill(random(255),random(255),random(255));
    triangle(mouseX,mouseY,random(900),random(500),random(900),random(500));
}
function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}
