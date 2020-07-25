//Achievements.js - Harrison Steed - Designed And Built For Hman124.ml

//Variables
var hasAchievement = false, clickCount = 0, storedAchieve, achieveId;
  
//Seeing if the local storage has been set
try {
  var storedAchieve = JSON.parse(window.localStorage.getItem("achievements"));
} catch {
  var storedAchieve = false;
}

var achievements = {
  //Give a user an achievement
  "grantAchievement": (a) => {
    if (!isValid(a)) {
      return "Nice try";
    }
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
        achievements.checkAchievements();
	}
  },

  //Update the achievements page
  "checkAchievements": () => {
    if (storedAchieve) {
		try{
      for (var i = 0; i < storedAchieve.length; i++) {
        achieveId = "achievement-" + storedAchieve[i];
        document.getElementById(achieveId).style.backgroundColor = "white";
		}
	   }
		catch(e){
			return;
	 }
    } else {
      return;
    }
  }
};

//12:00 PM Achievement
var date = new Date();
if (date.getHours() == "12" && date.getMinutes() == "00") {
  achievements.grantAchievement(4);
}

//100x click achievement
window.onclick = () => {
  clickCount++;
  if (clickCount == 100) {
    achievements.grantAchievement(1);
  }
}

//Secret TextBox Concept
//If a user Types a certian word, it will appear.

const word = ["t", "e", "s", "t"];
var wordIndex = 0;
window.onkeypress = (event) => {
  var key = event.key;
  if (word[wordIndex] == key.toLowerCase()) {
    wordIndex++;
    if (wordIndex == word.length) {
      var cmdPrompt = document.createElement("TEXTAREA");
      document.getElementById("container").appendChild(cmdPrompt);
    }
  } else {
    if (!cmdPrompt) {
      wordIndex = 0;
    }
  }
}

//Check function - validates all of the achievements to prevent false grants from the console
const isValid = (achievement) => {
  if (achievement == 1) {
    if (clickCount == 100 || clickCount > 100) {
      return true;
    } else {
      return false;
    }
  } else if (achievement == 2) {
    if (window.location.href != "https://hman124.ml/" && window.location.href != "https://hman124.ml/achievements/") {
      return true;
    } else {
      return false;
    }
  } else if (achievement == 3) {
    if (window.location.href == "https://hman124.ml/achievements/dns1892") {
      return true;
    } else {
      return false;
    }
  } else if (achievement == 4) {
    var date = new date();
    if (date.getHours() == "12" && date.getMinutes() == "00") {
      return true;
    } else {
      return false;
    }
  }
};
