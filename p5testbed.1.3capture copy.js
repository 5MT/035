let capCam;

function setup() {
 const cnvMain = createCanvas(640, 480);
 capCam = createCapture(VIDEO);
 capCam.hide();
// createCapture(VIDEO);
 cnvMain.parent("mainArea");
 background(255, 255, 255);
}

function draw() {
// background(100, 100, 100); //R, G, B
 background(100); //Grayscale

 //line(0, 50, 400,300);
 rectMode(CENTER);
 
 fill(0, 255, 0);
 stroke(0,0,255);
 strokeWeight(50);
 rect(200, 150, 150, 150);

 fill(255, 0, 0, 175);            // 色を変える
 //stroke(255);
 noStroke();
 ellipse(150, 250, 100, 75); // 円を描く

 const iWidthCamImage = 300;
 image(capCam, 300, 200, iWidthCamImage, iWidthCamImage*capCam.height/capCam.width);

// Image(capture);



 /* if (mouseIsPressed) {
  fill(0);
 } else {
  fill(255);
 }
 ellipse(mouseX, mouseY, 80, 80);
*/
// ellipse(50, 50, 80, 80);
}
