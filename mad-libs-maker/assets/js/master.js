/**
 * Master.js
 * Made for mad-libs-maker
 * By Harrison Steed
 * There is no liscense on this file,
 * but good luck using it elsewhere.
 */

let elements = [],
  punctStartCount = 0,
  punctEndCount = 0,
  inputTypes = ["Noun", "Plural Noun", "Verb", "Adjective", "Color", "Part Of The Body", "Part Of The Body (Plural)", "Person In Room", "Person In Room (Female)", "Person In Room (Male)", "Type Of Liquid", "Something Alive", "Something Alive (Plural)", "Verb Ending In \"Ing\"", "A Place", "Random Number"],
  Base64 = {
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
  },
  madlibs = {
    'createElement': (value, type, spacing) => {
      if (!/\S/.test(value)) return;
      if (type === "text" && elements.length > 0 && elements[elements.length - 1].type === type) {
        elements[elements.length - 1].value += madlibs.smartSpaces($("#newtextvalue").val());
        $("[data-id=" + (elements.length - 1) + "]").append(madlibs.smartSpaces($("#newtextvalue").val()));
        $("#new" + type + "value").val("");
      } else {
        if (spacing) {
          value = madlibs.smartSpaces(value);
        }
        $("#elements i").remove();
        elements.push(JSON.parse("{\"type\": \"" + type + "\", \"value\": \"" + value + "\"}"));
        $("#elements").append($("<div></div>").attr("data-id", (elements.length - 1)).attr("class", "view-item").text(type + ": " + value));
        $("#newtextvalue").val("");
      }
      $("[data-id=" + (elements.length - 1) + "]").dblclick(() => {
        $("#editvalue").val(elements[elements.length - 1].value);
        $("#newinput").dialog("close");
        $("#build").dialog("close");
        $("#newtext").dialog("close");
        $("#" + elements[(elements.length - 1)].type).attr("selected", true);
        $("#" + elements[(elements.length - 1)].type).siblings().attr("selected", false);
        $("#edit").data("id", (elements.length - 1)).dialog("open");
      });
    },
    'deleteElement': (id) => {
      elements.splice(id, 1);
      $("[data-id=" + id + "]").remove();
      for (var o = 0; o < elements.length; o++) {
        $($("#elements").children().get(o)).attr("data-id", o);
      }
    },
    'editElement': (id) => {
      if (!/\S/.test($("#editvalue").val())) {
        madlibs.deleteElement(id);
      } else {
        elements[id].type = $("#type").val();
        elements[id].value = $("#editvalue").val();
        if ($("#type").val() == "text") {
          $("#editvalue").val(madlibs.smartSpaces($("#editvalue").val(), id));
        } else if ($("#type").val() == "input") {
          if (elements[id].value.startsWith(" ")) {
            elements[id].value = elements[id].value.slice(1, elements[id].value.length);
          }
          if (elements[id].value.endsWith(" ")) {
            elements[id].value = elements[id].value.slice(0, elements[id].value.length - 1);
          }
        }
        $("[data-id=" + id + "]").html(elements[id].type + ": " + $("#editvalue").val());
        $("#editvalue").val("");
      }
    },

    'cleanStr': (str) => {
      return str
        .replace(/&/, "&amp;")
        .replace(/>/g, "&gt;")
        .replace(/</g, "&lt;")
        .replace(/'/g, "&apos;")
        .replace(/\\/g, "\\\\")
        .replace(/\"/g, "&quot;");
    },
    'buildProject': (title, download) => {
      $.ajax({
        url: "template.html",
        dataType: "html",
        success: (data) => {
          var output = data,
            items = "";
          for (var o = 0; o < elements.length; o++) {
            if (elements[o].type === "input") {
              items += "<input type=\"text\" placeholder=\"" + elements[o].value + "\">";
            } else if (elements[o].type === "text") {
              items += "<input type=\"hidden\" value=\"" + elements[o].value + "\">";
            }
          }
          output = output.replace("INPUTS GO HERE", items);
          output = output.replace(/TITLE GOES HERE/g, title);
          if (download) {
            var a = $("<a></a>");
            a.text("download");
            a.attr("href", "data:text/html;base64," + Base64.encode(output));
            a.attr("download", "Madlibs.html");
            a.attr("id", "downloadFile");
            $("body").append(a);
            document.getElementById("downloadFile").click();
            $("#downloadFile").remove();
          } else {
            window.open("preview#data:text/html;base64," + Base64.encode(output));
          }
        },
        error: (xhr, status, error) => {
          $("<div></div>").text("An error has occurred. Are You connected to the internet?").dialog({
            title: "Error",
            autoOpen: false,
            width: 400,
            buttons: [{
              text: "Close",
              click: function() {
                $(this).dialog("close");
              }
            }]
          }).dialog("open");
        }
      });
    },

    'smartSpaces': (str, e) => {
      if (!$("#smartspacestate").prop("checked")) return madlibs.cleanStr(str);
      var punctuation = ["-", "/", "_", "&", " "];
      for (i in punctuation) {
        if (!str.endsWith(punctuation[i])) {
          punctEndCount++;
        }
        if (!str.startsWith(punctuation[i])) {
          punctStartCount++;
        }
      }
      if (punctStartCount === punctuation.length && elements.length && e != 0) {
        str = " " + str;
      }
      if (punctEndCount === punctuation.length) {
        str += " ";
      }
      punctStartCount = 0;
      punctEndCount = 0;
      return madlibs.cleanStr(str);
    }
  };



  $("#smartspaces").click(() => {
    $("#smartspacestate").click();
    if ($("#smartspacestate").prop("checked")) {
      $("#smartspaces").html("<i class=\"ui-icon ui-icon-check\"></i> Smart Spaces");
    } else {
      $("#smartspaces").html("<i class=\"ui-icon ui-icon-closethick\"></i> Smart Spaces");
    }
  });
  $("#addinput").click(() => {
    $("#newinput").dialog("open");
    $("#build").dialog("close");
    $("#newtext").dialog("close");
  });
  $("#addtext").click(() => {
    $("#newinput").dialog("close");
    $("#build").dialog("close");
    $("#newtext").dialog("open");
  });
  $("#download").click(() => {
    if (elements.length <= 1) return;
    $("#build").dialog("open");
    $("#newinput").dialog("close");
    $("#newtext").dialog("close");
  });
  $("#newinputvalue").autocomplete({
    source: inputTypes
  });
  // $("#newinputvalue").on("keydown", (event) => {
  //   if(event.key == "Enter"){
  //     $("#newinput").dialog('option', 'buttons')[0].click.apply($("#newinput"));
  //     $("#newinput").dialog(opt).dialog("close");
  //   }});
  //   $("#newtextvalue").on("keydown", (event) => {
  //     if(event.key == "Enter"){
  //       $("#newtext").dialog('option', 'buttons')[0].click.apply($("#newtext"));
  //       $("#newtext").dialog(opt).dialog("close");
  //     }});
$("#newinput").dialog({
  dialogClass: "no-close",
  title: "New Input",
  autoOpen: false,
  width: 400,
  buttons: [{
      text: "Ok",
      click: function() {
        madlibs.createElement($("#newinputvalue").val(), "input", false);
        $(this).dialog("close");
      }
    },
    {
      text: "Cancel",
      click: function() {
        $("#newinputvalue").val("");
        $(this).dialog("close");
      }
    }
  ]
});


$("#newtext").dialog({
  dialogClass: "no-close",
  title: "New Text Section",
  autoOpen: false,
  width: 400,
  buttons: [{
      text: "Ok",
      click: function() {
        madlibs.createElement($("#newtextvalue").val(), "text", true);
        $(this).dialog("close");
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
      html: "<span class=\"ui-icon ui-icon-newwin\"></span> Preview",
      click: function() {
        if (!/\S/.test($("#buildtitlevalue").val())) return;
        madlibs.buildProject($("#buildtitlevalue").val(), false);
        $(this).dialog("close");
      }
    },
    {
      html: "<span class=\"ui-icon ui-icon-arrowthickstop-1-s\"></span> Download",
      click: function() {
        if (!/\S/.test($("#buildtitlevalue").val())) return;
        madlibs.buildProject($("#buildtitlevalue").val(), true);
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

$("#edit").dialog({
  dialogClass: "no-close",
  title: "Modify Item",
  autoOpen: false,
  width: 400,
  buttons: [{
    text: "Save Changes",
    click: function() {
      madlibs.editElement($(this).data("id"));
      $(this).dialog("close");
    }
  }, {
    text: "Delete Item",
    click: function() {
      madlibs.deleteElement($(this).data("id"));
      $(this).dialog("close");
    }
  }, {
    text: "Cancel",
    click: function() {
      $("#editvalue").val("");
      $(this).dialog("close");
    }
  }]
});

const mobileCheck = function() {
  let check = false;
  (function(a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

if (mobileCheck()) {
  $("#tapclick").text("(Double-Tap Items To Modify)");
}
