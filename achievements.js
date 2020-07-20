//Variables
var hasAchievement = false, achieveId, achievePage = "https://hman124.ml/achievements";

if(window.localStorage.getItem("achievements") != undefined){
var storedAchieve = JSON.parse(window.localStorage.getItem("achievements"));}
//Inserting placeholder text to prevent errors 
else{
var storedAchieve = ["a", "b", "c"];}

var achievements = {
//Give a user an achievement
"grantAchievement": (a) => {
//Check to see if achievements exist on the client's device. If it doesn't, set it up
if(window.localStorage.achievements === undefined){
window.localStorage.setItem("achievements", "[" + a + "]");}
//If it does, just update it.
else{
var updatedList = storedAchieve.push(a);
window.localStorage.setItem("achievements", updatedList);
if(window.location.href = achievePage){
achievements.checkAchievements();
}}},

//Update the achievements page
"checkAchievements": () => {
for(var i = 0; i < storedAchieve.length; i++){
achieveId = "achievement-" + storedAchieve[i];
document.getElementById(achieveId).style.backgroundColor = "white";}},

//Check To See if an achievement is set
"hasAchievement": (a) => {
for(var i = 0; i < storedAchieve.length; i++){
if(storedAchieve[i] == a){
hasAchievement = true;
break;}}
return hasAchievement;
}};


//Sample Script I used 
/* if (typeof(Storage) !== "undefined") {
 // Store
  localStorage.setItem("achievements-" + a, "achieved");
  // Retrieve
  document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
} */
