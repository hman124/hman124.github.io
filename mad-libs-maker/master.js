//Master.js - Made for mad-libs-maker By Harrison Steed

//Main Array. Holds all of the text sections and inputs
var elements = [];

//Open jqueryui dialogs when the buttons are clicked
$("#addinput").click(() => {
  $("#newinput").dialog("open");
});
$("#addtext").click(() => {
  $("#newtext").dialog("open");
});
$("#download").click(() => {
  if(elements.length <= 1)return;
  $("#build").dialog("open");
});
//Turn the elements into a dialog
$("#newinput").dialog({
  //Hide the close "X"
  dialogClass: "no-close",
  //Title shown in the top bar of the dialog
  title: "New Input",
  //don't open automatically
  autoOpen: false,
  width: 400,
  //defines the buttons at the bottom of the dialog. Normally, it's "Ok" and "Cancel"
  buttons: [{
      text: "Ok",
      click: function() {
        //what to do when ok is clicked
        //If value is empty, don't do anything
        if (!/\S/.test($("#newinputvalue").val())) {
            $(this).dialog("close");
          return;
        }
        //add the new input into the array
        elements.push(JSON.parse("{\"type\": \"input\", \"value\": \"" + cleanStr($("#newinputvalue").val()) + "\"}"));
        //add a visual representaion in the "view" part of the page
        $("#elements").append($("<div></div>").attr("class", "view-item").attr("data-id", (elements.length - 1)).append($("<div></div>").attr("class", "view-content").text("Input: " + $("#newinputvalue").val())));
        //reset the text box
        $("#newinputvalue").val("");
        //close the dialog
        $(this).dialog("close");
        //reset all previous view elements
        $(".view-content").off("click");
        //set the new view to delete itself if clicked
        $(".view-content").click((e) => {
          elements = elements.splice($(e.target).parent().attr("data-id"), $(e.target).parent().attr("data-id"));
          $(e.target).parent().remove();
        });
      }
    },
    {
      text: "Cancel",
      click: function() {
        //what to do when cancel is clicked
        //reset the text box
        $("#newinputvalue").val("");
        //close the dialog
        $(this).dialog("close");
      }
    }
  ]
});

//New textbox dialog - same as above but different dialog
$("#newtext").dialog({
  dialogClass: "no-close",
  title: "New Text Section",
  autoOpen: false,
  width: 400,
  buttons: [{
      text: "Ok",
      click: function() {
        if (!/\S/.test($("#newtextvalue").val())) {
            $(this).dialog("close");
          return;
        }
        elements.push(JSON.parse("{\"type\": \"text\", \"value\": \"" + cleanStr($("#newtextvalue").val()) + "\"}"));
        $("#elements").append($("<div></div>").attr("class", "view-item").attr("data-id", (elements.length - 1)).append($("<div></div>").attr("class", "view-content").text("Text: " + $("#newtextvalue").val())));
        $("#newtextvalue").val("");
        $(this).dialog("close");
        $(".view-content").off("click");
        $(".view-content").click((e) => {
          elements = elements.splice($(e.target).parent().attr("data-id"), $(e.target).parent().attr("data-id"));
          $(e.target).parent().remove();
        });
      }
    },
    {
      text: "Cancel",
      click: function() {
        $("#newtextvalue").val("");
        $(this).dialog("close");
      }
    }
  ]
});

$("#build").dialog({
  dialogClass: "no-close",
  title: "Finalize This Project",
  autoOpen: false,
  width: 400,
  buttons: [{
      html: "<span class=\"ui-icon ui-icon-arrowstop-1-s\"></span> Download",
      click: function() {
        build(  $("#buildtitlevalue").val());
        $(this).dialog("close");
      }
    },
    {
      text: "Cancel",
      click: function() {
        $("#buildtitlevalue").val("");
        $(this).dialog("close");
      }
    }
  ]
});

//escape \ and " to prevent errors
function cleanStr(e) {
  //uses regex with /g to replace all occurrances
  return e.replace(/\\/g, "\\\\").replace(/\"/g, "\\\"");
}

//Build the .html file with the user input
function build(title) {
  //final output - stores the file until download includes initial content
  var output, items;
try {
  $.ajax({
      url: "/template.html",
      context: document.body
    })
    .done((data) => {
      alert(data);
    });}
    catch(e){
      alert("An error has occurred. Are You connected to internet?")
      return;
    }
  //loop through the items in the elements array and put them in html form into output
  for (var o = 0; o < elements.length; o++) {
    if (elements[o].type == "input") {
      items += "<input type=\"text\" placeholder=\"" + elements[o].value + "\">";
    } else if (elements[o].type == "text") {
      items += "<input type=\"hidden\" value=\"" + elements[o].value + "\">";
    }
  }

  //add closing html tags
  output.replace("INPUTS GO HERE", items);
  output.replace("TITLE GOES HERE", title);

  //encode to base64 for download
  // https://scotch.io/tutorials/how-to-encode-and-decode-strings-with-base64-in-javascript#toc-cross-browser-method-compressed-
  var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(e) {
      var t = "";
      var n, r, i, s, o, u, a;
      var f = 0;
      e = Base64._utf8_encode(e);
      while (f < e.length) {
        n = e.charCodeAt(f++);
        r = e.charCodeAt(f++);
        i = e.charCodeAt(f++);
        s = n >> 2;
        o = (n & 3) << 4 | r >> 4;
        u = (r & 15) << 2 | i >> 6;
        a = i & 63;
        if (isNaN(r)) {
          u = a = 64
        } else if (isNaN(i)) {
          a = 64
        }
        t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
      }
      return t
    },
    decode: function(e) {
      var t = "";
      var n, r, i;
      var s, o, u, a;
      var f = 0;
      e = e.replace(TEST, "");
      while (f < e.length) {
        s = this._keyStr.indexOf(e.charAt(f++));
        o = this._keyStr.indexOf(e.charAt(f++));
        u = this._keyStr.indexOf(e.charAt(f++));
        a = this._keyStr.indexOf(e.charAt(f++));
        n = s << 2 | o >> 4;
        r = (o & 15) << 4 | u >> 2;
        i = (u & 3) << 6 | a;
        t = t + String.fromCharCode(n);
        if (u != 64) {
          t = t + String.fromCharCode(r)
        }
        if (a != 64) {
          t = t + String.fromCharCode(i)
        }
      }
      t = Base64._utf8_decode(t);
      return t
    },
    _utf8_encode: function(e) {
      e = e.replace(/\r\n/g, "n");
      var t = "";
      for (var n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n);
        if (r < 128) {
          t += String.fromCharCode(r)
        } else if (r > 127 && r < 2048) {
          t += String.fromCharCode(r >> 6 | 192);
          t += String.fromCharCode(r & 63 | 128)
        } else {
          t += String.fromCharCode(r >> 12 | 224);
          t += String.fromCharCode(r >> 6 & 63 | 128);
          t += String.fromCharCode(r & 63 | 128)
        }
      }
      return t
    },
    _utf8_decode: function(e) {
      var t = "";
      var n = 0;
      var r = c1 = c2 = 0;
      while (n < e.length) {
        r = e.charCodeAt(n);
        if (r < 128) {
          t += String.fromCharCode(r);
          n++
        } else if (r > 191 && r < 224) {
          c2 = e.charCodeAt(n + 1);
          t += String.fromCharCode((r & 31) << 6 | c2 & 63);
          n += 2
        } else {
          c2 = e.charCodeAt(n + 1);
          c3 = e.charCodeAt(n + 2);
          t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          n += 3
        }
      }
      return t
    }
  }

  //create link to download
  var a = $("<a></a>");
  //needs content in order to download
  a.text("download");
  //insert base64
  a.attr("href", "data:text/html;base64," + Base64.encode(output));
  //tell the browser we want to download
  a.attr("download", "Madlibs.html");
  //set an id to refer to it later
  a.attr("id", "downloadFile");
  //add the element
  $("body").append(a);
  //click the element - Triggers download
  document.getElementById("downloadFile").click();
  //remove the element
  $("#downloadFile").remove();
}
