var currentAchievement, seperatedAchievements, cookies = document.cookie;
var achievements = {

"grantAchievement": (a) => {
document.cookie = "achievement-" + a + "=achieved; expires=Thu, 18 Dec 2038 12:00:00 UTC; path=/ ";},

"checkAchievements": () => {
seperatedAchievements = cookies.split("; "); 
for(var i = 0; i < seperatedAchievements.length; i++){
currentAchievement = seperatedAchievements[i].replace("=achieved", "");
document.getElementById(currentAchievement).style.backgroundColor = "white";}},

"hasAchievement": (a) => {
seperatedAchievements = cookies.split("; "); 
return for(var i = 0; i < seperatedAchievements.length; i++){
currentAchievement = seperatedAchievements[i].replace("=achieved", "");
if(currentAchievement == "achievement-" + a){
	return true;
	break;}}}

};

var clickCount = 0;