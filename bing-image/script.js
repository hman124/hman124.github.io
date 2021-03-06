//Variables
var url,
  imgIndex = 0;
//DOM Objects
var loading = $("#loading"),
  image = $("#image"),
  title = $("#title"),
  copyright = $("#copyright"),
  learn = $("#learn"),
  count = $("#count"),
  options = $("#options"),
  pre = $("#pre"),
  next = $("#next"),
  description = $("#description"),
  time = $("#time");

//Change the image with  the next and previous buttons
function changeImg(r) {
  if (r) {
    getContents(imgIndex + 1);
  } else {
    getContents(imgIndex - 1);
  }
}

//Get the image. e is the "index" which tells us whick image to use
function getContents(e) {
  if (e < 0) {
    e = 0;
    return;
  } else if (e == 8) {
    e = 7;
    return;
  }
  if (e == 0) {
    next.css("opacity", "0.3");
    next.css("cursor", "not-allowed");
  } else if (e == 7) {
    pre.css("opacity", "0.3");
    pre.css("cursor", "not-allowed");
  } else {
    next.css("opacity", "1");
    next.css("cursor", "pointer");
    pre.css("opacity", "1");
    pre.css("cursor", "pointer");
  }
  imgIndex = e;
loading.show();
 fetch("https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&n=1&mkt=en-US&idx=" + e, {headers:{"X-Requested-With":"hman124"}})
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      url = "https://www.bing.com" + data.images[0].url;
      image.attr("src", url);
      title.text(data.images[0].copyright
        .split("(")
        .shift()
        .toString());
      copyright.text(data.images[0].copyright
          .split("(")
          .pop()
          .toString()
		  .replace(")", ""));
      learn.attr("href", data.images[0].copyrightlink + "#b_results");
      learn.text("Learn More");
      count.text("Image " + (imgIndex + 1) + "/8");
      time.text(parseDate(data.images[0].startdate));
      loading.hide();
   });}


//Mobile responsive script
function checkMobile() {
  if (window.innerWidth < 820) {
    options.css("zIndex", "0");
    options.css("position", "initial");
    options.css("height", "100%");
    description.css("paddingRight", "0px");
    description.css("textAlign", "left");
  } else if (window.innerWidth >= 820) {
    description.css("textAlign", "center");
    description.css("paddingRight", "5px");
    options.css("zIndex","1");
    options.css("position", "absolute");
    options.css("height", "initial");
  }

}
window.onresize = () => {
  checkMobile();
};


//Only allow https://
if (window.location.protocol == "http:") {
  window.location.protocol = "https:";
}

var da = new Date();
function parseDate(str) {
  var y = str.slice(0, 4),
    m = str.slice(4, 6),
    d = str.slice(6, 8),
 first = new Date(y, (m-1), d),
 today = new Date(da.getFullYear(), da.getMonth(), da.getDate()),
 relative = Math.round((today-first)/(1000*60*60*24));
 if(relative == 0){
return "Today's Image";}
else if(relative == 1){
return "Yesterday's Image";}
else if(relative > 1){
return relative + " days ago";
}
return relative;
}

//refresh browser if it's 12 AM
if(da.getHours() == 24){
  window.location.refresh();
}

getContents(0);
$(document).ready(() => {checkMobile();});
