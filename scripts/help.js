var helpbtn = document.getElementById("helpbtn");
var helpmodal = document.getElementById("helpModal");

helpbtn.onclick = function() {
  helpmodal.style.display = "block";
}

helpmodal.onclick = function() {
  helpmodal.style.display = "none";
}