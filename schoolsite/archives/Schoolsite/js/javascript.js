var teachermode = 1
var menustate = 1
var crabmode = 1
var login = 1
function menu(){
if (menustate == 1){
document.getElementById("menu").style.display = "block"
menustate = 2
document.getElementById("command").style.display = "none"
document.getElementById("button").style.display = "none";}
else{
document.getElementById("menu").style.display = "none"
menustate = 1;}}
function teacher(){
if(teachermode == 1){
document.getElementById("crab").style.display = "none"
crabmode = 1
document.getElementById("crab1").style.color = "white"
document.getElementById("hide").style.display = "block"
teachermode = 2
document.getElementById("crab1").href = "javascript:teacher()"
document.getElementById("menu").style.display = "none"
menustate = 1;}
else{
document.getElementById("crab").style.display = "block"
document.getElementById("crab1").style.color = "green"
document.getElementById("crab1").href = "javascript:menu()"
document.getElementById("menu").style.marginLeft = "490px"
teachermode = 1;}
}
function custom(){
document.getElementById("command").style.display = "block"
document.getElementById("button").style.display = "block"
document.getElementById("menu").style.display = "none"
menustate = 1
document.getElementById("text").value = '';
document.getElementById("button").addEventListener("click", submit);}
function submit(){
if(document.getElementById("text").value == "!clear"){
document.getElementById("command").style.display = "none"
document.getElementById("button").style.display = "none"
body.style.backgroundImage = "url('image.png')";
}
else if(document.getElementById("text").value == "!background-trees"){
document.getElementById("body").style.backgroundImage = "url('tree.png')"
document.getElementById("command").style.display = "none"
document.getElementById("button").style.display = "none";}

else if(document.getElementById("text").value == "!background-flowers"){
document.getElementById("body").style.backgroundImage = "url('flowers.png')"
document.getElementById("command").style.display = "none"
document.getElementById("button").style.display = "none";}

else if(document.getElementById("text").value == "!background-circles"){
document.getElementById("body").style.backgroundImage = "url('cool1.png')"
document.getElementById("command").style.display = "none"
document.getElementById("button").style.display = "none";}

else if(document.getElementById("text").value == "!background-squares"){
document.getElementById("body").style.backgroundImage = "url('image.png')"
document.getElementById("command").style.display = "none"
document.getElementById("button").style.display = "none";}

else{
document.getElementById("p").innerHTML = document.getElementById("text").value
document.getElementById("command").style.display = "none"
document.getElementById("button")
.style.display = "none";}
}
function crabview(){
if(crabmode == 1){
document.getElementById("crab").style.display = "block"
document.getElementById("crab1").style.display = "block"
document.getElementById("hide").style.display = "none"
crabmode = 2
document.getElementById("menu").style.display = "none"
menustate = 1
document.getElementById("menu").style.marginLeft = "88px";}
else{
document.getElementById("hide").style.display = "block"
document.getElementById("menu").style.marginLeft = "490px"
crabmode = 1
menustate = 1
document.getElementById("menu").style.display = "none";}
}
