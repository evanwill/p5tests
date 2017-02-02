
function setup() {
    createCanvas(900,500).parent('sketch');
    for (var i = 0; i < 100; i++) {
        fill(random(255),random(255),random(255));
        ellipse(random(900), random(500), random(200), random(200));
        //triangle(random(900),random(500),random(900),random(500),random(900),random(500));
    };
}

