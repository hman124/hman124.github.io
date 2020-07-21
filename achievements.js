//Variables
var hasAchievement = false,
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


    //Check If The Achievement has already been added
    for (var i = 0; i < storedAchieve.length; i++) {
      if (storedAchieve[i] == a) {
        hasAchievement = false;
        break;
      }
    }
    if (hasAchievement) {
      return;
    }


    //Check to see if achievements exist on the client's device. If it doesn't, set it up.
    if (!storedAchieve) {
      window.localStorage.setItem("achievements", "[" + a + "]");
    }
    //If it does, just update it.
    else {
      var updatedList = storedAchieve.push(a);
      window.localStorage.setItem("achievements", updatedList);
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
