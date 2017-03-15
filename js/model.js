var rabbit;
var wide;
function setup(){
  wide = windowWidth - 50;
  createCanvas(wide, 500, WEBGL).parent('sketch');
  //createCanvas(900, 500, WEBGL).parent('sketch');
  rabbit = loadModel('/p5tests/models/rabbit.obj', normalize='true');
}
function draw(){
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  scale(5);
  model(rabbit);
}
// https://github.com/processing/p5.js/wiki/Getting-started-with-WebGL-in-p5