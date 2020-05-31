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
 background(200); //Grayscale

 //line(0, 50, 400,300);
 rectMode(CENTER);

 // スイッチの箱を描く
 fill(160);
 noStroke();
 rect(200,310, 40,80);

 // シリアルデータをデバッグ用に表示
 fill(32);
 text(latestData, 10, 20);

 // 可変抵抗の値を表示する
 angleMode(DEGREES);
 let iAngleRectangleRotation = map(latestData.split(",")[1], 0, 1023, 0, 360);
 fill(32);
 text(iAngleRectangleRotation, 10, 50);
 // 青の縁の緑の四角形を描く
 fill(200);
 stroke(160);
 strokeWeight(10);
 push();              // 原点を一旦保存
 translate(200, 150); // 原点を開店する中心に移動
// rect(200, 150, 150, 150);
 rotate(iAngleRectangleRotation);
 rect(0, 0, 100, 100);
 pop();               // 原点を 0,0 に戻す

 const iWidthCamImage = 300;
 // if (latestData == 0) {
 if (latestData.split(",")[0] == 0) {
 }else{
 // キャプチャを表示する
 image(capCam, 300, 150, iWidthCamImage, iWidthCamImage*capCam.height/capCam.width);
 }

 // スイッチのトグルを描く
// fill(255,0,0, 175);            // 色を変える
 fill(200);            // 色を変える
 noStroke();
// ellipse(200,310-(latestData-0.5)*40, 40,40);
 ellipse(200,310-(latestData.split(",")[0]-0.5)*40, 40,40);
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