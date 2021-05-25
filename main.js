sng="";
lwristx="";
lwristy="";
rwristx="";
rwristy="";
score_left_wrist="";
score_right_wrist="";
function preload(){
sng=loadSound("music.mp3")
}
function setup(){
canvas=createCanvas(600,500);
canvas.center();
v=createCapture(VIDEO);
v.hide();

pnet=ml5.poseNet(v , load)
pnet.on('pose',obj)
}
function load(){
console.log("posenet loaded")
}
function obj(result){
if (result.length>0){
console.log(result)
score_left_wrist=result[0].pose.keypoints[9].score;
console.log("score=" + score_left_wrist)
lwristx=result[0].pose.leftWrist.x;
lwristy=result[0].pose.leftWrist.y;
console.log("lx=" + lwristx + "ly=" + lwristy)
rwristx=result[0].pose.rightWrist.x;
rwristy=result[0].pose.rightWrist.y;
console.log("rx=" + rwristx + "ry=" + rwristy)
}
}
function draw(){
image(v,0,0,600,500)

fill("#FF0000")
stroke("#FF0000")

if(score_left_wrist>0.2){
circle(lwristx , lwristy , 20)
numlwy=Number(lwristy)
nodecimal=floor(numlwy)
volume=nodecimal/500
document.getElementById("volume").innerHTML="volume=" + volume;
sng.setVolume(volume)
}


}
function play(){
sng.play()
sng.setVolume(1)
sng.rate(1)
}