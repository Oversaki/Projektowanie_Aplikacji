function setup() {
    createCanvas(1350, 650);
}

function draw() {
    if (mouseIsPressed) {
        erase();
    } else {
        fill(202, 255, 183);
    }
    ellipse(mouseX, mouseY, 100, 100);
    fill(238, 255, 183)
    circle(mouseX, mouseY, 80, 80);
    fill(255, 236, 183)
    circle(mouseX, mouseY, 60, 60);
    fill(255, 200, 183)
    circle(mouseX, mouseY, 40, 40);
    fill(255, 183, 202)
    circle(mouseX, mouseY, 20, 20);
    fill(255, 183, 238)
}