var savedList = localStorage.getItem("todolist");
if (savedList) {
  myUL.innerHTML = savedList;
}

// close button added to every list
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// close hides list items
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function() {
    var div = this.parentElement;
    div.style.display = "none";
  })
}

// checking off code
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// new list item from add button click
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("add a task!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // close button added to every list
  var myNodelist = document.getElementsByTagName("li");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }

  // close hides list items
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function() {
      var div = this.parentElement;
      div.style.display = "none";
    })
  }

  localStorage.setItem("todolist", myUL.innerHTML);
  savedList = localStorage.getItem("todolist");
  if (savedList) {
    myUL.innerHTML = savedList;
  }}


function deletelistitem() {
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function() {
      var div = this.parentElement;
      div.style.display = "none";
      localStorage.setItem("todolist", myUL.innerHTML);
      savedList = localStorage.getItem("todolist");
      if (savedList) {
        myUL.innerHTML = savedList;
      }
    })
  }
}