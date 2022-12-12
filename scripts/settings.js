var settingsimagelink = document.getElementById("settingsimagelink");
var settingsmodal = document.getElementById("settingsModal");

settingsimagelink.onclick = function() {
    settingsmodal.style.display = "block";
}

window.onclick = function(event1) {
    if (event1.target == settingsmodal) {
        settingsmodal.style.display = "none";
    }
}