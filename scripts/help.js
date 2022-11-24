var btn = document.getElementById("helpbtn");
var modal = document.getElementById("helpModal");
//open
btn.onclick = function() {
  modal.style.display = "block";
}

//close if click outside
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}