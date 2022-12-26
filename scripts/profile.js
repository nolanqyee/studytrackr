var usernamefield = document.getElementById("username");
var updateusername = document.getElementById("updateusername");
var usernamedisplayer = document.getElementById("usernamedisplayer");
var usernamevalue = localStorage.getItem("username");
var welcomemessage = document.getElementById("welcomemessage");

updateusername.onclick = function() {
    localStorage.setItem("username",usernamefield.value);
    usernamevalue = usernamefield.value;
    usernamedisplayer.innerHTML = "Username: " + usernamevalue;
    welcomemessage.innerHTML = "welcome back, " + usernamevalue;
}

var onboardname = document.getElementById("onboardname");
var setusername = document.getElementById("setusername");

setusername.onclick = function() {
    localStorage.setItem("username", onboardname.value)
    usernamevalue = onboardname.value;
    usernamedisplayer.innerHTML = "Username: " + usernamevalue;
    welcomemessage.innerHTML = "welcome back, " + usernamevalue;
    onboardingModal.style.display = "none";
}
