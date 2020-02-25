function setup() {
 const cnvMain = createCanvas(640, 480);
 cnvMain.parent("mainArea");
 background(255, 255, 255);

 // フッターに最終更新時刻を表示する
 /*
 httpGet("template.js").then(
  (result)=>{alert(JSON.stringify(result));}
  ,
  (err)=>{alert(err);}
 );
*/
 select("footer").html(`最終更新 : ${getUpdate("template.js")}`);
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

function getUpdate(fileName) {
 var obj = createRequest(fileName);
 if (obj) {
  alert("Now ogj is not empty");
  obj.open("get",fileName);
  obj.onreadystatechange = ()=>{
   if (obj.readyState == 4 && obj.status == 200) {
    var date = new Date(obj.getResponseHeader("lastmodified"));
    alert("OK");
    return date; 
   } else {
    alert("Status is not 200");
   }
  }
 } else {
  alert("No no obj obtained");
 }
}

function createRequest() {
 try {
 return new XMLHttpRequest();
 } catch (e) {
 try {
 return new ActiveXObject("Microsoft.XMLHTTP");
 } catch (e) {
 return null;
 }
 }
 return null;
 }