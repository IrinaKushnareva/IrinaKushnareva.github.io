var time = 0;
var running = 0;

function startPause(){
 if(running == 0){
  running = 1;
  increment();
 document.getElementById("start").innerHTML = "Pause";
 document.getElementById("startPause").style.backgroundColor = "#6699FF";
 document.getElementById("startPause").style.borderColor = "#6633FF";
 }
 else{
  running = 0;
 document.getElementById("start").innerHTML = "Cont..";
 document.getElementById("startPause").style.backgroundColor = "#66CC66";
 document.getElementById("startPause").style.borderColor = "#33FF66";
 }
}
function reset(){
 running = 0;
 time = 0;
 document.getElementById("start").innerHTML = "Start";
 document.getElementById("output").innerHTML = "0:00:00</br><span>000</span>";
}
function increment(){
 if(running == 1){
  setTimeout(function(){
  time++;
  var hours = Math.floor(time / (3600*1000));
  var minutes = Math.floor((time -= hours*60*60*1000) / (60*1000));
  var seconds = Math.floor((time -= minutes*60*1000) / 1000 );
  var milli = Math.floor(time -= seconds*1000);
  // var milli = time - minutes*3600 - seconds*1000;

  if (hours < 10) hour = '0'+ hours;
	if (minutes < 10) minutes = '0'+minutes;
	if (seconds < 10) seconds = '0'+seconds;
	if (milli < 10) milli = '0'+milli;

  document.getElementById("output").innerHTML = hours + ":" + minutes + ":" + seconds + "</br>" + "<span>" + milli + "0" + "</span>";
   increment();
 })
 }
}﻿
