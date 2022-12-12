var usernamefield = document.getElementById("username");
var username = usernamefield.value;
var updateusername = document.getElementById("updateusername");
var usernamedisplayer = document.getElementById("usernamedisplayer");
var usernamevalue = localStorage.getItem("username");

window.onload = function () {
    usernamefield.value = usernamevalue;
    usernamedisplayer.innerHTML = "Username: " + usernamevalue;
}

updateusername.onclick = function() {
    localStorage.setItem("username",usernamefield.value);
    usernamevalue = usernamefield.value;
    usernamedisplayer.innerHTML = "Username: " + usernamevalue;
}