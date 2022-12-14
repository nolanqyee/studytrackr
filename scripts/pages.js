var stopwatchimagelink = document.getElementById("stopwatchimagelink");
var timerimagelink = document.getElementById("timerimagelink");

stopwatchimagelink.onclick = function() {
  stopwatchimagelink.style.color = "#50C878";
  timerimagelink.style.color = "#888";
}
timerimagelink.onclick = function() {
  timerimagelink.style.color = "#50C878";
  stopwatchimagelink.style.color = "#888";
}
function openTab(evt, idtype) {
    var i, tabcontent, imagelinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    imagelinks = document.getElementsByClassName("imagelinks");
    for (i = 0; i < imagelinks.length; i++) {
      imagelinks[i].className = imagelinks[i].className.replace(" active", "");
    }
    
    document.getElementById(idtype).style.display = "block";
    evt.currentTarget.className += " active";
  }
  