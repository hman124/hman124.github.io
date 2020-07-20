var hasAchievement = false, achieveId, storedAchieve = JSON.parse(window.localStorage.getItem("achievements")), achievePage = "https://hman124.ml/achievements";
var achievements = {

"grantAchievement": (a) => {
var updatedList = storedAchieve.push(a);
window.localStorage.setItem("achievements", updatedList);
if(window.location.href = achievePage){
achievements.checkAchievements();
}},

"checkAchievements": () => {
for(var i = 0; i < storedAchieve.length; i++){
achieveId = "achievement" + storedAchieve[i];
document.getElementById(achieveId).style.backgroundColor = "white";}},

"hasAchievement": (a) => 
for(var i = 0; i < storedAchieve.length; i++){
if(storedAchieve[i] == a){
hasAchievement = true;
break;}}
return hasAchievement;
}};

/* if (typeof(Storage) !== "undefined") {
 // Store
  localStorage.setItem("achievements-" + a, "achieved");
  // Retrieve
  document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
} */
