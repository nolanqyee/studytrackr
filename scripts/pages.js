var stopwatchimagelink = document.getElementById("stopwatchimagelink");
var timerimagelink = document.getElementById("timerimagelink");
stopwatchimagelink.addEventListener("click", () => {
  stopwatchimagelink.src = "res/stopwatchbuttonclicked.png";
  timerimagelink.src = "res/timerbutton.png";
})
timerimagelink.addEventListener("click", () => {
  stopwatchimagelink.src = "res/stopwatchbutton.png";
  timerimagelink.src = "res/timerbuttonclicked.png";
})

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
  