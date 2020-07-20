var currentAchievement, seperatedAchievements, cookies = document.cookie;
var achievements = {

"grantAchievement": (a) => {
cookies = "achievement-" + a + "=achieved; expires=Thu, 18 Dec 2038 12:00:00 UTC; path=/ ";},

"checkAchievements": () => {
seperatedAchievements = cookies.split("; "); 
for(var i = 0; i < seperatedAchievements.length; i++){
currentAchievement = seperatedAchievement[i].replace("=achieved", "");
document.getElementById(currentAchievement).style.backgroundColor = "white";}},

"hasAchievement": (a) => {
seperatedAchievements = cookies.split("; "); 
for(var i = 0; i < seperatedAchievements.length; i++){
currentAchievement = seperatedAchievement[i].replace("=achieved", "");
if(currentAchievement == "achievement-" + a){
	return true;
	break;}}}

};

var clickCount = 0;

achievements.checkAchievements();