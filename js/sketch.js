var wide, high;

function setup() {
    wide = windowWidth - 50;
    high = 500;
    createCanvas(wide,high).parent('sketch');
    for (var i = 0; i < 100; i++) {
        fill(random(255),random(255),random(255));
        ellipse(random(wide), random(high), random(200), random(200));
        //triangle(random(900),random(500),random(900),random(500),random(900),random(500));
    };
}
function windowResized() {
    setup();
}
