//Achievements.js - Harrison Steed - Designed And Built For Hman124.ml

//Variables
var hasAchievement = false, clickCount = 0,
  storedAchieve, achieveId, achievePage = "https://hman124.ml/achievements/";
//Inserting placeholder text to prevent errors

try {
  var storedAchieve = JSON.parse(window.localStorage.getItem("achievements"));
} catch {
  var storedAchieve = false;
}

var achievements = {
//Give a user an achievement
  "grantAchievement": (a) => {
if(document.currentScript === null){
	console.log("DEV: Achievement Brute Force Grant Blocked From Script " + document.currentScript.src);
	return "Nice try";
	document.currentScript.remove();}	
    if (storedAchieve) {
      //Check If The Achievement has already been added
      for (var i = 0; i < storedAchieve.length; i++) {
        if (storedAchieve[i] == a) {
          hasAchievement = true;
          break;
        }
      }
      if (hasAchievement) {
        return "You Already Have That Achievement!";
      }


      //Set The Local Storage.
     storedAchieve.push(a);
	 var stringList = storedAchieve.toString()
      window.localStorage.setItem("achievements", "[" + stringList + "]");
      if (window.location.href == achievePage) {
        achievements.checkAchievements();
      }
    } else {
      //If the local storage var is not already set, create it.
      window.localStorage.setItem("achievements", "[" + a + "]");
	   if (window.location.href == achievePage) {
        achievements.checkAchievements();
      }
    }
  },

  //Update the achievements page
  "checkAchievements": () => {
    if (storedAchieve) {
      for (var i = 0; i < storedAchieve.length; i++) {
        achieveId = "achievement-" + storedAchieve[i];
        document.getElementById(achieveId).style.backgroundColor = "white";
      }
    } else {
      return;
    }
  }
};

//12:00 PM Achievement
var date = new Date();
if(date.getHours == "7" /* && date.getMinutes == "00" */ ){
	achievements.grantAchievement(4);}

//100x click achievement
window.onclick = () => {
	 clickCount++;
  if (clickCount == 100) {
      achievements.grantAchievement(1);
    }
  }
  
//Secret TextBox Concept
//If A user Types A certian word, it will appear.

const word = ["t", "e", "s", "t"];
var wordIndex = 0;
window.onkeypress = (event) => {
	var key = event.key;
if(word[wordIndex] == key.toLowerCase()){
wordIndex++;
if(wordIndex == word.length){
	var cmdPrompt = document.createElement("TEXTAREA");
document.getElementById("container").appendChild(cmdPrompt);
}}
else{
if(!cmdPrompt){
wordIndex = 0;}}}
