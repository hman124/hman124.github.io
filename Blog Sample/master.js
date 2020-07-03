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
