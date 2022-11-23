function setup() {
    createCanvas(1350, 650);
    textSize(100);
    strokeWeight(8);
}

function draw() {
    let x = mouseX;
    let y = mouseY;
    let ix = width - mouseX;
    let iy = height - mouseY;
    background(196, 247, 230);
    fill(150, 212, 192);
    ellipse(x, height/2, y, y);
    fill(100, 164, 144);
    ellipse(ix, height/2, iy, iy);
    text(key, 675, 325);

}