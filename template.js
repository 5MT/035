function setup() {
 const cnvMain = createCanvas(640, 480);
 cnvMain.parent("mainArea");
 background(255, 255, 255);

 // フッターに最終更新時刻を表示する
 const FileObj
 select("footer").html(`最終更新 : ${document.lastModified}`);
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

var FileObj = $('fileSelect').files;
function writeLastModifiedDate(FileObj) {
 var fDate;
 fDate = FileObj[i].lastModifiedDate;
}
