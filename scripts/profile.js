var usernamefield = document.getElementById("username");
var username = usernamefield.value;
var updateusername = document.getElementById("updateusername");
var usernamedisplayer = document.getElementById("usernamedisplayer");
var usernamevalue = localStorage.getItem("username");


updateusername.onclick = function() {
    localStorage.setItem("username",usernamefield.value);
    usernamevalue = usernamefield.value;
    usernamedisplayer.innerHTML = "Username: " + usernamevalue;
}
