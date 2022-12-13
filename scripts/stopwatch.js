window.onload = function () {
    // variables printed on actual timer
    var hours = 00;
    var minutes = 00;
    var seconds = 00; 
    
    var totalhours = 00;
    var totalminutes = 00;
    var totalseconds = 00;
      
    // gets data from HTML
    var appendHours = document.getElementById("hours")
    var appendMinutes = document.getElementById("minutes")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonDone = document.getElementById('button-done');
    var buttonReset = document.getElementById('button-reset');
    var appendTotalHours = document.getElementById("totalhours");
    var appendTotalMinutes = document.getElementById("totalminutes");
    var appendTotalSeconds = document.getElementById("totalseconds");
    // initial for interval
    var Interval;

    
    usernamefield.value = usernamevalue;
    usernamedisplayer.innerHTML = "Username: " + usernamevalue;
    welcomemessage.innerHTML = "welcome back, " + usernamevalue;

    
  
    // when start button is clicked
    buttonStart.onclick = function() {
      clearInterval(Interval);
       Interval = setInterval(startTimer, 1000);
    }
    // when stop button clicked
    buttonDone.onclick = function() {
         clearInterval(Interval);
        if (hours == "00")
          hours = 0;
        if (minutes == "00")
          minutes = 0;   
        if (seconds == "00")
          seconds = 0;
        
        totalseconds += seconds;
        totalminutes += minutes;
        totalhours += hours;
        
        var secondsresidue = totalseconds%60;
        totalminutes += Math.trunc(totalseconds/60);
  
        var minutesresidue = totalminutes%60;
        totalhours += Math.trunc(totalminutes/60);
        appendTotalHours.innerHTML = totalhours;
        if (totalhours == 0){
          appendTotalHours.innerHTML = "00";
        }
        
        // calculating the remaining seconds after transferring the multiples of 60 into minutes
          if (totalseconds > 60){
            if (secondsresidue <= 9){
              totalseconds = "0" + secondsresidue;
              appendTotalSeconds.innerHTML = totalseconds;
            } else {
              totalseconds = secondsresidue;
              appendTotalSeconds.innerHTML = totalseconds;
            }
            totalseconds = secondsresidue;  
        } else if (totalseconds == 60){
            totalseconds = "00"
            appendTotalSeconds.innerHTML = totalseconds;
            totalseconds = 0;
        } else if (totalseconds < 60){
            if (secondsresidue <= 9){
              totalseconds = "0" + secondsresidue;
              appendTotalSeconds.innerHTML = totalseconds;
            } else {
              totalseconds = secondsresidue;
              appendTotalSeconds.innerHTML = totalseconds;
            }
            totalseconds = secondsresidue;
        }
  
        // same thing but for hours
          if (totalminutes > 60){  
            if (minutesresidue <= 9){
              totalminutes = "0" + minutesresidue;
              appendTotalMinutes.innerHTML = totalminutes;
            } else{
              totalminutes = minutesresidue;
              appendTotalMinutes.innerHTML = totalminutes;
            }
            totalminutes = minutesresidue;
  
        } else if (totalminutes == 60){
            totalminutes = "00"
            appendTotalMinutes.innerHTML = totalminutes;
            totalminutes = 0;
        } else if (totalminutes < 60){
            
            if (minutesresidue <= 9){
              totalminutes = "0" + minutesresidue;
              appendTotalMinutes.innerHTML = totalminutes;
            } else{
              totalminutes = minutesresidue;
              appendTotalMinutes.innerHTML = totalminutes;
            }
            totalminutes = minutesresidue;
        }     
    }
    buttonDone.addEventListener("click", () => {
      buttonDone.style.display = "none";
      buttonStart.style.display = "none";
      buttonReset.style.display = "inline";
    })
    
  // when reset button clicked
    buttonReset.onclick = function() {
       clearInterval(Interval);
      hours = "00";
      minutes = "00";
      seconds = "00";
      appendHours.innerHTML = hours;
      appendMinutes.innerHTML = minutes;
      appendSeconds.innerHTML = seconds;
      hours = 0;
      minutes = 0;
      seconds = 0;
      //test
    }
    buttonReset.addEventListener("click", () =>{
      buttonStart.style.display = "inline";
      buttonDone.style.display = "inline";
      buttonReset.style.display = "none";
    })
    // this is what happens when you click start
    function startTimer () {
      seconds++; 
      if(seconds <= 9){
        appendSeconds.innerHTML = "0" + seconds;
      }
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      } 
      if (seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
      }
      if (minutes > 9){
        appendMinutes.innerHTML = minutes;
      }
      if (minutes > 59) {
        hours++;
        appendHours.innerHTML = "0" + hours;
        minutes = 0;
        appendMinutes.innerHTML = "0" + 0;
      }
    }


    
    //declaring timer variables lol
    var timerinput;
    var timepassed;
    var colorchangelol = document.getElementsByClassName("clock");
    var timerminutes = document.getElementById("nminutes");
    var timerseconds = document.getElementById("nseconds");
    var timerstart = document.getElementById("timer-button-start");
    var timerstop = document.getElementById("timer-button-stop");
    var timerreset = document.getElementById("timer-button-reset");
    var timerset = document.getElementById("timer-button-set");
    //timer buttons appearing/disappearing
    timerstart.addEventListener("click", () => {
      timerstart.style.display="none";
      timerstop.style.display="inline";
      timerset.style.display="none";
    })

    timerstart.onclick = function() {
      clearInterval(Interval);
      Interval = setInterval(countdown, 1000);
    }

    timerstop.addEventListener("click", () =>{
      timerstop.style.display="none";
      timerreset.style.display="inline";
      for(i=3; i<=5; i++){
        colorchangelol[i].style.color = "#50C878";
      }
    })
    
    timerstop.onclick = function(){
      clearInterval(Interval);
      timepassed = Number(timerinput)*60 - Number(timerminutes.innerHTML)*60 - Number(timerseconds.innerHTML);
      minutes = Math.trunc(timepassed/60);
      seconds = timepassed-minutes*60;
      totalseconds += seconds;
      totalminutes += minutes;
      
      var secondsresidue = totalseconds%60;
      totalminutes += Math.trunc(totalseconds/60);

      var minutesresidue = totalminutes%60;
      totalhours += Math.trunc(totalminutes/60);
      appendTotalHours.innerHTML = totalhours;
      if (totalhours == 0){
        appendTotalHours.innerHTML = "00";
      }
      
      // calculating the remaining seconds after transferring the multiples of 60 into minutes
        if (totalseconds > 60){
          if (secondsresidue <= 9){
            totalseconds = "0" + secondsresidue;
            appendTotalSeconds.innerHTML = totalseconds;
          } else {
            totalseconds = secondsresidue;
            appendTotalSeconds.innerHTML = totalseconds;
          }
          totalseconds = secondsresidue;  
      } else if (totalseconds == 60){
          totalseconds = "00"
          appendTotalSeconds.innerHTML = totalseconds;
          totalseconds = 0;
      } else if (totalseconds < 60){
          if (secondsresidue <= 9){
            totalseconds = "0" + secondsresidue;
            appendTotalSeconds.innerHTML = totalseconds;
          } else {
            totalseconds = secondsresidue;
            appendTotalSeconds.innerHTML = totalseconds;
          }
          totalseconds = secondsresidue;
      }

      // same thing but for hours
        if (totalminutes > 60){  
          if (minutesresidue <= 9){
            totalminutes = "0" + minutesresidue;
            appendTotalMinutes.innerHTML = totalminutes;
          } else{
            totalminutes = minutesresidue;
            appendTotalMinutes.innerHTML = totalminutes;
          }
          totalminutes = minutesresidue;

      } else if (totalminutes == 60){
          totalminutes = "00"
          appendTotalMinutes.innerHTML = totalminutes;
          totalminutes = 0;
      } else if (totalminutes < 60){
          
          if (minutesresidue <= 9){
            totalminutes = "0" + minutesresidue;
            appendTotalMinutes.innerHTML = totalminutes;
          } else{
            totalminutes = minutesresidue;
            appendTotalMinutes.innerHTML = totalminutes;
          }
          totalminutes = minutesresidue;
      }     
    }

    timerreset.addEventListener("click", () => {
      timerreset.style.display="none";
      timerstart.style.display="inline";
      timerset.style.display="inline";
      minutes = "00";
      seconds = "00";
      timerminutes.innerHTML = minutes;
      timerseconds.innerHTML = seconds;
      minutes = 0;
      seconds = 0;
    })
    
    //setting the timer function
    timerset.addEventListener("click", () =>{
      timerinput = prompt("Enter a number of minutes:");
      minutes = timerinput;
      if (minutes==""){
        minutes=0;
        timerminutes.innerHTML = "00";
      }
      else if (minutes<10){
        timerminutes.innerHTML = "0" + minutes;
      }
      else {
        timerminutes.innerHTML = minutes;
      }
      timerstart.style.display = "inline";
      timerset.style.display = "none";
    })

    //the counting down function
    function countdown() {
      if (seconds==0){
        if ((minutes == "" || minutes == 0)||minutes==null){
          minutes = "00"
          if (seconds==0 && minutes == "00"){
            for(i=3; i<=5; i++){
              colorchangelol[i].style.color = "#f44336";
            }
            return;
          }
        }
        else {
          minutes--;
          if (minutes<10){
            timerminutes.innerHTML = "0" + minutes;
          }
          else {
            timerminutes.innerHTML = minutes;
          }
        }
      }
      if (seconds<1){
        seconds = 59;
        timerseconds.innerHTML = seconds;
      }
      else if (seconds <= 10){
        seconds--;
        timerseconds.innerHTML = "0" + seconds;
      }
      else if (seconds<60) { 
        seconds--;
        timerseconds.innerHTML = seconds;
      }
    }
}
