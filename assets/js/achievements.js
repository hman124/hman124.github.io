//Variables
var hasAchievement = false, clickCount,
  storedAchieve, achieveId, achievePage = "https://hman124.ml/achievements";
//Inserting placeholder text to prevent errors

try {
  var storedAchieve = JSON.parse(window.localStorage.getItem("achievements"));
} catch {
  var storedAchieve = false;
}

var achievements = {
//Give a user an achievement
  "grantAchievement": (a) => {

    if (storedAchieve) {
      //Check If The Achievement has already been added
      for (var i = 0; i < storedAchieve.length; i++) {
        if (storedAchieve[i] == a) {
          hasAchievement = false;
          break;
        }
      }
      if (hasAchievement) {
        return "You Already Have That Achievement!";
      }


      //Set The Local Storage.
     storedAchieve.push(a);
      window.localStorage.setItem("achievements", "[" + storedAchieve + "]");
      if (window.location.href == achievePage) {
        achievements.checkAchievements();
      }
    } else {
      //If the local storage var is not already set, create it.
      window.localStorage.setItem("achievements", "[" + a + "]");
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
if(date.getHours == "12"){
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

const word = ["h", "t", "m", "l", "5"];
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
wordIndex = 0;}}
