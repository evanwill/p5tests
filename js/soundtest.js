var mic;
function setup(){
    wide = windowWidth - 50;
    high = 500;
    createCanvas(wide,high).parent('sketch');
    frameRate(135);
    mic = new p5.AudioIn()
    mic.start();
}
/* function draw(){
  micLevel = mic.getLevel(0.25); // Volume level (between 0.0 and 1.0)
  fill(random(255*micLevel),random(255*micLevel),random(255*micLevel));
  rect(0,0,wide*micLevel,high*micLevel);
}*/
function draw(){
  micLevel = mic.getLevel(0.25); // Volume level (between 0.0 and 1.0)
  fill(random(255*micLevel),random(255*micLevel),random(255*micLevel));
  ellipse(wide/2,high/2,2*wide*micLevel,2*high*micLevel);
}
