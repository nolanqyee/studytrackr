var btn = document.getElementById("helpbtn");
var modal = document.getElementById("helpModal");
var span = document.getElementsByClassName("helpclose")[0];
//open
btn.onclick = function() {
  modal.style.display = "block";
}
//close
span.onclick = function() {
  modal.style.display = "none";
}
//close if click outside
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}