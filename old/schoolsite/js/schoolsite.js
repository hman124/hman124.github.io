var creepystate = 0;
var color;
var colorstate = 1;
var state = 1;
var key;
var keystate = 0;
var titlescroll;
var animateheight;
var animateinterval;


function titlescroll(){
if(state == 1){
document.getElementsByTagName("title")[0].innerHTML = "Schoolsite";
state = 2;}
else if(state == 2){
document.getElementsByTagName("title")[0].innerHTML = "A Harrison";
state = 3;}
else{
document.getElementsByTagName("title")[0].innerHTML = "Production";
state = 1;}}

function theme(e){
hide();
if(e == 'nocss'){
document.getElementById("style2").href = ' ';
document.getElementById("style").href = ' ';
document.getElementsByTagName('body')[0].background = ' ';
colorstate = 1;
document.getElementsByTagName('body')[0].style.backgroundColor = 'white';}
else if(e == 'color'){
colorstate = 2;
document.getElementById("style2").href = '../css/schoolsite.css';
document.getElementById("style").href = '../css/menu.css';
document.getElementsByTagName('body')[0].background = ' ';}
else if(e == 'confusion'){
document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
document.getElementById("style2").href = '../css/schoolsite.css';
document.getElementById("style").href = '../css/menu.css';
colorstate = 1;
document.getElementsByTagName('body')[0].background = '../media/confusion.gif';}
else if(e == 'none'){
document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
document.getElementById("style2").href = '../css/schoolsite.css';
document.getElementById("style").href = '../css/menu.css';
colorstate = 1;
document.getElementsByTagName('body')[0].background= ' ';}
else if(e == 'confusion2'){
document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
document.getElementById("style2").href = '../css/schoolsite.css';
document.getElementById("style").href = '../css/menu.css';
colorstate = 1;
document.getElementsByTagName('body')[0].background = '../media/confusion 2.gif';}}

function hide(){
  document.getElementById("menu").style.display = "none";}

function color(){
var harson = Math.floor(Math.random() * 226);
var harsoon = Math.floor(Math.random() * 226);
var harsooon = Math.floor(Math.random() * 226);
if(colorstate == 1){
document.getElementById("logo").style.color = "rgb(" + harson + "," + harsoon + "," + harsooon + ")";}
else if(colorstate == 2){
document.getElementById("logo").style.color = "rgb(" + harson + "," + harsoon + "," + harsooon + ")";
document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(" + harson + "," + harsoon + "," + harsooon + ")";}}

function popup(e){
document.getElementById("menu").style.display = "block";
if(e == 1){
document.getElementById("menu").innerHTML = "<ul><li><a href='javascript:hide()'>[&times;]</a></li><li><a href='javascript:popup(5)'>Checkbox Pages</a></li><li><a href='javascript:popup(6)'>Random Pages</a></li><li><a href='javascript:popup(7)'>Mad libs</a></li><li><a href='Crash My Browser - Schoolsite.html'>Crash My browser</a></li><li><a href=\"javascript:popup(22)\">Super Shapes</a></li><li><a href=\"../archives/Edgenuity.html\" target=\"_blank\">Edgenuity Archive</a></li></ul>";}
else if(e == 3){
document.getElementById("menu").innerHTML = '<ul><li><a href="javascript:hide()">[&times;]</a></li><li><a target="_blank" href="About - Schoolsite.html">About schoolsite</a></li><li><a target="_blank" href="../archives/Schoolsite/html/Main page.html">Classic Schoolsite (Ver. 3.3)</a></li><li><a target="_blank" href="../archives/Legacy schoolsite/html/Schoolsite - a Harrison production.html">Classic Schoolsite (Ver 1.1)</a></li></ul>';}
else if(e == 4){
document.getElementById("menu").innerHTML = '<ul><li><a href="javascript:hide()">[&times;]</a></li><li><a href="javascript:theme(\'nocss\')">No CSS</a></li><li><a href="javascript:theme(\'color\')">Color Changing Effects</a></li><li><a href="javascript:theme(\'confusion\')">Confusion</a></li><li><a href="javascript:theme(\'confusion2\')">Confusion 2</a></li><li><a href="javascript:theme(\'none\')">None</a></li></ul>';}
else if(e == 5){
document.getElementById("menu").innerHTML = '<ul><li><a href="javascript:hide()">[&times;]</a>&nbsp;&nbsp;<a href="javascript:popup(1)">[&lt;]</a></li><li><a target="_blank" href="Checkbox Drawing - Schoolsite.html">Checkbox Drawing</a></li><li><a target="_blank" href="Radio Button Drawing - Schoolsite.html">Radio Button Drawing</a></li><li><a target="_blank" href="Super Checkbox - Schoolsite.html">Super Checkbox</a></li><ul>';}
else if(e == 6){
document.getElementById("menu").innerHTML = '<ul><li><a href="javascript:hide()">[&times;]</a>&nbsp;&nbsp;<a href="javascript:popup(1)">[&lt;]</a></li><li><a target="_blank" href="Random Letters - Schoolsite.html">Random Letters</a></li><li><a target="_blank" href="Random Code - Schoolsite.htm">Random Code</a></li><li><a target="_blank" href="Random Colors - Schoolsite.html">Random Colors</a></li></ul>';}
else if(e == 22){
document.getElementById("menu").innerHTML = '<ul><li><a href="javascript:hide()">[&times;]</a>&nbsp;&nbsp;<a href="javascript:popup(1)">[&lt;]</a></li><li><a target="_blank" href="Super Shapes - Schoolsite.html">Super Shapes 1</a></li><li><a target="_blank" href="Super Shapes 2 - Schoolsite.html">Super Shapes 2</a></li></ul>';}


else if(e == 7){
var math44 = Math.floor(Math.random() * 27);
if(math44 == 20){
document.getElementById("menu").innerHTML = '<ul><li><a href="javascript:hide()">[&times;]</a>&nbsp;&nbsp;<a href="javascript:popup(1)">[&lt;]</a>&nbsp;<a href="About - Schoolsite.html?p=schoolsitesecret">[:)]</a></li><li><a target="_blank" href="../archives/Mad libs/A sincere apology (17).html">A Sincere Apology</a></li><li><a target="_blank" href="../archives/Mad libs/School Cafeteria (10).html">School Cafeteria</a></li><li><a target="_blank" href="../archives/Mad libs/The Duck Song (4).html">The Duck Song</a></li><ul>';}
else{
document.getElementById("menu").innerHTML = '<ul><li><a href="javascript:hide()">[&times;]</a>&nbsp;&nbsp;<a href="javascript:popup(1)">[&lt;]</a></li><li><a target="_blank" href="../archives/Mad libs/A sincere apology (17).html">A Sincere Apology</a></li><li><a target="_blank" href="../archives/Mad libs/School cafeteria (10).html">School Cafeteria</a></li><li><a target="_blank" href="../archives/Mad libs/The duck song (4).html">The Duck Song</a></li><ul>';}}
else if(e == 8){
document.getElementById("menu").innerHTML = '<ul><li><a href="javascript:hide()">[&times;]</a></li><li><a href="https://www.classroom.google.com">Google Classroom</a></li><li><a href="https://www.quizlet.com/live">Quizlet Live</a></li><li><a href="https://www.kahoot.it">Kahoot</a></li><li><a href="https://www.cfisd.net/en">cfisd.net</a></li><li><a href="https://my.cfisd.net">my.cfisd.net</a></li></ul>';}}
function hi(){
alert("hi");}

function ding(){
key = event.key;
if(key == 1){
document.getElementById('correct').pause();
document.getElementById('correct').currentTime = 0;
document.getElementById("correct").play();}
else if(key == 2){
document.getElementById('incorrect').pause();
document.getElementById('incorrect').currentTime = 0;
document.getElementById('incorrect').play();}
else if(key == 3){
document.getElementById('creepy').play();}}

function animate(h){
if(animateheight != h){
animateheight++;
document.getElementById('menu').style.height = animateheight;}
else{
clearInterval(animateinterval);}}
color = setInterval(color, 200);
titlescroll = setInterval(titlescroll, 1000);

