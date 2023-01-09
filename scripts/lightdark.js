var lightdarkselect = document.getElementById("lightdarktoggle");
var selection = lightdarkselect.value;
var darktrue = localStorage.getItem("darktrue");
lightdarkselect.value = darktrue;

var r = document.querySelector(':root');

//Listens for change in theme settings
lightdarkselect.addEventListener('input', (event) => {
    selection = lightdarkselect.value;
    localStorage.setItem("darktrue",selection);
    darktrue = localStorage.getItem("darktrue");
    detectChromiumTheme();
    lightdarktogglefunction();
})

function detectChromiumTheme() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log('Dark theme is enabled');
      darktrue ="Dark"; //This works better for debuging rather than leaving it blank
  } else {
    console.log('Light theme is enabled');
      darktrue ="Light";
  }
}

function lightdarktogglefunction() {
    if (darktrue=="Light"){
        r.style.setProperty('--primarybackgroundcolor', '#ebecef');
        r.style.setProperty('--secondarybackgroundcolor','#fff');
        r.style.setProperty('--textcolor','#070707');
        r.style.setProperty('--hoveraccentcolor','#cccdcf');
        r.style.setProperty('--otherothertextcolor', '#070707')
    } else {
        r.style.setProperty('--primarybackgroundcolor', '#1E1E1E');
        r.style.setProperty('--secondarybackgroundcolor','#2C2E31');
        r.style.setProperty('--textcolor','#D1D1D1');
        r.style.setProperty('--hoveraccentcolor','#333333');
        r.style.setProperty('--otherothertextcolor', '#fff')
    }
}
