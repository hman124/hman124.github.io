//Achievements.js - Harrison Steed

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
    if (!achievements.isValid(a)) {
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
      achievements.checkAchievements();
    } else {
      //If the local storage var is not already set, create it.
      window.localStorage.setItem("achievements", "[" + a + "]");
      achievements.checkAchievements();
    }
  },

  //Update the achievements page
  "checkAchievements": () => {
    if (storedAchieve) {
      try {
        for (var i = 0; i < storedAchieve.length; i++) {
          achieveId = "achievement-" + storedAchieve[i];
          document.getElementById(achieveId).style.backgroundColor = "white";
        }
      } catch (e) {
        return;
      }
    } else {
      return;
    }
  },

  //Clear The achievements if a user clicks the link at the bottom of the achievements page
  "clearAchievements": () => {
    if (confirm("Are you sure you want to clear all achievements?")) {
      window.localStorage.removeItem("achievements");
      window.location.reload();
    }
  },

  //Determine if an achievement is eligible to be granted. If not, it must be from the console
  "isValid": (achievement) => {
    var date = new Date();
    if (achievement == 1 && clickCount == 100 || clickCount > 100) {
      return true;
    } else if (window.location.href != "https://hman124.ml/" && window.location.href != "https://hman124.ml/achievements/" && achievement == 2) {
      return true;
    } else if (window.location.href == "https://hman124.ml/achievements/dns1892" && achievement == 3) {
      return true;
    } else if (achievement == 4 && date.getHours() == "12" && date.getMinutes() == "00") {
      return true;
    } else {
      return false;
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
};

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
      document.getElementsByClassName("container")[0].appendChild(cmdPrompt);
    }
  } else {
    if (!cmdPrompt) {
      wordIndex = 0;
    }
  }
}
