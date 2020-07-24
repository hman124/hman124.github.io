//Andimating The Apperance of The Image/Video At The Top Of The Page
var opacity = 0;
const video = document.getElementById("background-video").style.opacity;
var anim;
const animate = () => {
opacity += 0.01;
if(opacity < 1.1){
document.getElementById("background-video").style.opacity = opacity;}
else{
clearInterval(anim);
}}
var anim = setInterval(animate, 15);

//Estimating The Read Time
const average = 300;
const contents = document.getElementsByClassName("contents")[0].innerHTML;
const words = contents.split(" ");
const unrounded = words.length / average;
var rounded = Math.round(unrounded);
if(rounded < 1){
  rounded = "Less Than 1";}
document.getElementById("time").innerHTML = rounded + " Minute Read";
