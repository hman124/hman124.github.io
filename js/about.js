function checkurls(){
	var main = document.getElementById("main")
if(window.location.href.split('=').pop() == 'crabrave'){
main.innerHTML = "<h3>About</h3><br><h1>Crab Rave</h1><hr><h3>Dancing crabs</h3><h3><a  href='Crab Rave - Schoolsite.html'>View Page</a></h3>";}

else if(window.location.href.split('=').pop() == 'schoolsitesecure'){
main.innerHTML = "<h3>About</h3><br><h1>Schoolsite Secure</h1><hr><h3>A secure, teacher proof version of Schoolsite - Made for use in schools</h3><br><h3>What makes it better:</h3><h3>1. All links use a location.replace function, so they aren't recorded in the browser's history</h3><h3>2. All sites can't be accessed without a key in the URL</h3><h3>3. If the key in the URL is not there, the site redirects to Google Classroom</h3><h3>4. All sites have the Google Classroom logo and title, so they won't look suspicious</h3><h3>5. At any time if any key is pressed, the site redirects to Google Classroom</h3><h3>6. All of the website's files and assets have filenames completely unrelated to schoolsite";}

else if(window.location.href.split('=').pop() == 'checkboxdraw'){
main.innerHTML = "<h3>About</h3><br><h1>CheckBox Drawing</h1><hr><h3>Draw With Checkboxes!</h3><h3>Commands: F - Fill In the Whole Page C - Clear/Erase The whole Page</h3><h3><a href='Checkbox Drawing - Schoolsite.html'>View page</a></h3>";}

else if(window.location.href.split('=').pop() == 'radiodraw'){
main.innerHTML = "<h3>About</h3><br><h1>Radio Button Drawing</h1><hr><h3>Draw With Radio Buttons!</h3><h3><a href='Radio Button Drawing - Schoolsite.html'>View page</a></h3>";}

else if(window.location.href.split('=').pop() == 'bigcheckbox'){
main.innerHTML = "<h3>About</h3><br><h1>Super Checkbox</h1><hr><h3>A Really Big Checkbox</h3><h3><a href='Super Checkbox - Schoolsite.html'>View Page</a></h3>";}

else if(window.location.href.split('=').pop() == 'crabbomb'){
main.innerHTML = "<h3>About</h3><br><h1>Crab Bomb</h1><hr><h3>A Timed Player For Crab Rave</h3><h3><a href='javascript:yeet()'>View Page</a></h3>";}

else if(window.location.href.split('=').pop() == 'randomletters'){
main.innerHTML = "<h3>About</h3><br><h1>Random Letters</h1><hr><h3>A site that produces random letters.</h3><h3>What it does:<br>Line breaks on every letter Z<br>Resets every 50 seconds (for better preformance)<br>Stops if it spells the word 'yes'</h3><h3><a href='Random Letters - Schoolsite.html'>View Page</a></h3>";}

else if(window.location.href.split('=').pop() == 'randomcode'){
main.innerHTML = "<h3>About</h3><br><h1>Random Code</h1><hr><h3>A site that produces random code and resets every 50 seconds for better preformance</h3><h3><a href='Random Code - Schoolsite.htm'>View Page</a></h3>";}

else if(window.location.href.split('=').pop() == 'randomcolors'){
main.innerHTML = "<h3>About</h3><br><h1>Random Colors</h1><hr><h3>A site that produces random colors</h3><h3><a href='Random Colors - Schoolsite.html'>View Page</a></h3>";}

else if(window.location.href.split('=').pop() == 'schoolsitesecret'){
document.getElementById("logo").innerHTML = 'Schoolsite Secret';
document.getElementById('topmenu').style.display = 'none';
document.getElementById('title').innerHTML = 'Schoolsite Secret';
main.innerHTML = "<h1>Welcome to Schoolsite secret :)</h1><h3>This page is the \"backstage\"of Schoolsite</h3><h3><a target='_blank' href='https://discord.gg/CDaFmEq'>Enter The Lair</a></h3>";}


else{
main.innerHTML = "<h3>About</h3><br><h1>Schoolsite</h1><hr><h1>Schoolsite  X - Ver. 5.7</h1>";}}

function yeet(){window.location.replace("Crab Bomb - Schoolsite.html");}

function hi(){
document.getElementById("popup").style.display = 'none';
}
function popup(e){
var popup = document.getElementById("popup");
popup.style.display = "block";
if(e == 2){
	popup.innerHTML = "<ul><li><a href='javascript:hi()'>[&times;]</a></li><li><a href='?p=crabbomb'>Crab Bomb</a></li><li><a href='?p=crabrave'>Crab Rave</a></li></ul>";}
else if(e == 3){
popup.innerHTML = "<ul><li><a href='javascript:hi()'>[&times;]</a></li><li><a href='javascript:popup(4)'>Checkbox Pages</a></li><li><a href='javascript:popup(5)'>Random Generating Pages</a></li></ul>"}

else if(e == 4){
	popup.innerHTML = "<ul><li><a href='javascript:hi()'>[&times;]</a>&nbsp;<a href='javascript:popup(3)'>[&lt;]</a></li><li><a href='?p=checkboxdraw'>Checkbox Drawing</a></li><li><a href='?p=radiodraw'>Radio Button Drawing</a></li><li><a href='?p=bigcheckbox'>Super Checkbox</a></li></ul>"
}
else if(e == 5){
	popup.innerHTML = "<ul><li><a href='javascript:hi()'>[&times;]</a>&nbsp;<a href='javascript:popup(3)'>[&lt;]</a></li><li><a href='?p=randomletters'>Random Letters</a></li><li><a href='?p=randomcolors'>Random Colors</a></li><li><a href='?p=randomcode'>Random Code</a></li></ul>"}}
