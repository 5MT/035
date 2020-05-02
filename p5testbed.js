let capCam;
let serial; // variable for the serial object
let latestData = "waiting for data"; // variable to hold the data

function setup() {
 const cnvMain = createCanvas(640, 480);
 capCam = createCapture(VIDEO);
 capCam.hide();
// createCapture(VIDEO);
 cnvMain.parent("mainArea");
 background(255, 255, 255);

 // シリアルポート関連
 serial = new p5.SerialPort();
  // get a list of all connected serial devices
  serial.list();
  // serial port to use
  serial.open('COM3');
  // callback for when the sketchs connects to the server
  serial.on('connected', serverConnected);
  // callback to print the list of serial devices
  serial.on('list', gotList);
  // what to do when we get serial data
  serial.on('data', gotData);
  // what to do when there's an error
  serial.on('error', gotError);
  // when to do when the serial port opens
  serial.on('open', gotOpen);
  // what to do when the port closes
  serial.on('close', gotClose);
}

function draw() {
// background(100, 100, 100); //R, G, B
 background(100); //Grayscale

 //line(0, 50, 400,300);
 rectMode(CENTER);
 
 // 青の縁の緑の四角形を描く
 fill(0, 255, 0);
 stroke(0,0,255);
 strokeWeight(50);
 rect(200, 150, 150, 150);

 // スイッチの箱を描く
 fill(160);
 noStroke();
 rect(200,310, 40,80);

 const iWidthCamImage = 300;
 if (latestData == 0) {
 }else{
 // キャプチャを表示する
 image(capCam, 300, 200, iWidthCamImage, iWidthCamImage*capCam.height/capCam.width);
 }

 // スイッチのトグルを描く
 fill(64, 175);            // 色を変える
 noStroke();
 ellipse(200,310-(latestData-0.5)*40, 40,40);
// ellipse(200,310, 40,40);


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


function serverConnected() {
 print("Connected to Server");
}

// list the ports
function gotList(thelist) {
 print("List of Serial Ports:");

 for (let i = 0; i < thelist.length; i++) {
   print(i + " " + thelist[i]);
 }
}

function gotOpen() {
 print("Serial Port is Open");
}

function gotClose() {
 print("Serial Port is Closed");
 latestData = "Serial Port is Closed";
}

function gotError(theerror) {
 print(theerror);
}

// when data is received in the serial buffer

function gotData() {
 let currentString = serial.readLine(); // store the data in a variable
 trim(currentString); // get rid of whitespace
 if (!currentString) return; // if there's nothing in there, ignore it
 console.log(currentString); // print it out
 latestData = currentString; // save it to the global variable
}