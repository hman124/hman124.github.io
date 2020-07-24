var x = setInterval(color, 200)
function color(){
var color1 = Math.floor(Math.random() * 226);
var color2 = Math.floor(Math.random() * 226);
var color3 = Math.floor(Math.random() * 226);
document.getElementById("logo").style.color = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
}