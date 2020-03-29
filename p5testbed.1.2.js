function setup() {
 const cnvMain = createCanvas(640, 480);
 cnvMain.parent("mainArea");
 background(255, 255, 255);
}

function draw() {
 if (mouseIsPressed) {
  fill(0);
 } else {
  fill(255);
 }
 ellipse(mouseX, mouseY, 80, 80);

// ellipse(50, 50, 80, 80);
}
