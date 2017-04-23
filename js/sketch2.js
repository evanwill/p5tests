var wide, high;
var clicks = 0;
var inc = 175;
var pg;
function setup() {
    wide = windowWidth - 50;
    high = 500;
    createCanvas(wide,high).parent('sketch');
    pg = createGraphics();

    for (var i = 0; i < 100; i++) {
        fill(random(255),random(255),random(255));
        var x = random(-20, wide + 50);
        var y = random(-10, high +10);
        triangle(x,y,x+random(-inc,inc),y+random(-inc,inc),x+random(-inc,inc),y+random(-inc,inc));
    };
    image(pg);

}
function windowResized() {
    setup();
}
