var timeout1;
var timerlength;
var interval;
var e;
var after;
var returnorder;
function timer(){
var p2 = document.getElementById("p2")
if(timerlength == 0){
clearInterval(interval);}
else{
timerlength--;
p2.innerHTML = timerlength;}}

function cancel(){ 
clearInterval(interval);
clearTimeout(timer1);
next(2);}

function updateafter(){
if(document.getElementById('after').value == "google"){
after = 'google';}
else{
after = 'close';}}
	
function updatetimeout(){
var timeout = document.getElementById("timeout");
if(timeout.value == "10 seconds"){
timerlength = 10;}
else if(timeout.value == "30 seconds"){
timerlength = 30;}
else if(timeout.value == "1 minute"){
timerlength = 60;}
else if(timeout.value == "2 minutes"){
timerlength = 120;}
else if(timeout.value == "5 minutes"){
timerlength = 300;}
document.getElementById("p2").innerHTML = timerlength;}

function detonation(){
if(after == 'google'){
document.getElementById("crabnoise").play();
setTimeout(function(){window.location.replace("https://classroom.google.com/u/0/h")}, 2000)
}
else{
document.getElementById("crabnoise").play();
setTimeout(function(){window.close();}, 2000)}}

function next(e){
var p1 = document.getElementById("p1");
if(e == 1){
document.getElementById("home").style.display = "none";
document.getElementById("next").style.display = "block";}
else if(e == 2){
document.getElementById("home").style.display = "block";
document.getElementById("next").style.display = "none";
document.getElementById("timer").style.display = "none";}}

function start(){
document.getElementById("home").style.display = "none";
document.getElementById("next").style.display = "none";
if(document.getElementById('stealthmode').checked == true){
document.getElementById("all").style.display = "none";
if(timerlength == 10){
timer1 = setTimeout(detonation, 10000);}
else if(timerlength == 30){
timer1 = setTimeout(detonation, 30000);}
else if(timerlength == 60){
timer1 = setTimeout(detonation, 60000);}
else if(timerlength == 120){
timer1 = setTimeout(detonation, 120000);}
else if(timerlength == 300){
timer1 = setTimeout(detonation, 300000);}}
else{
document.getElementById("timer").style.display = "block";
if(timerlength == 10){
timer1 = setTimeout(detonation, 10000);
interval = setInterval(timer, 1000);}
else if(timerlength == 30){
timer1 = setTimeout(detonation, 30000);
interval = setInterval(timer, 1000);}
else if(timerlength == 60){
timer1 = setTimeout(detonation, 60000);
interval = setInterval(timer, 1000);}
else if(timerlength == 120){
timer1 = setTimeout(detonation, 120000);
interval = setInterval(timer, 1000);}
else if(timerlength == 300){
timer1 = setTimeout(detonation, 300000);
interval = setInterval(timer, 1000);}
}}