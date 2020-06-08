var main = document.getElementById("main");
if(window.location.href.split('=').pop() == 'join'){
main.innerHTML = "<h3>Document</h3><h1>Join The NSAA</h1><hr><h3>Downloads:</h3><ul><li><a href=\"joinTheNSAA.docx\" download>Word Document (<i>.docx</i>)</a></li><li><a href=\"JoinTheNSAA.html\" download>HTML Webpage (<i>.html</i>)</a></li></ul><h3>Links:</h3><ul><li><a href=\"https://docs.google.com/document/d/16szflc17pVzudVodhALenzLEz9nw56v54x7-fSfQWTU/edit?usp=sharing\">View Online (Google Docs)</a></li></ul>";}
