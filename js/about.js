var wide, high;
var clicks = 0;
var inc = 175;
function setup() {
    wide = windowWidth - windowWidth*.5;
    high = 100;
    createCanvas(wide,high).parent('sketch');
    if (clicks%2 == 0) {
        for (var i = 0; i < 50; i++) {
            fill(random(255),random(255),random(255));
            ellipse(random(wide), random(high), random(200), random(200));
            };
    } else  {
        for (var i = 0; i < 50; i++) {
            fill(random(255),random(255),random(255));
            var x = random(-20, wide + 50);
            var y = random(-10, high +10);
            triangle(x,y,x+random(-inc,inc),y+random(-inc,inc),x+random(-inc,inc),y+random(-inc,inc));
        };
    }  
    clicks++;
}
function windowResized() {
    setup();
}
function mouseClicked() {
  setup();
}
