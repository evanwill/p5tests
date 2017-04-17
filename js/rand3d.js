function setup(){
  createCanvas(900, 500, WEBGL).parent('sketch');
  
}
function draw(){
    background(255);
    box();
    beginShape();
    vertex(100,23,10);
    vertex(200,23,50);
    vertex(150, 45,100);
    endShape(CLOSE);
}