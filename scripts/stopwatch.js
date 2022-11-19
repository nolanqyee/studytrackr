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
    var buttonClearWhole = document.getElementById("button-clear-whole");
    var appendTotalHours = document.getElementById("totalhours");
    var appendTotalMinutes = document.getElementById("totalminutes");
    var appendTotalSeconds = document.getElementById("totalseconds");
    // initial for interval
    var Interval ;
  
    // when start button is clicked
    buttonStart.onclick = function() {
      clearInterval(Interval);
       Interval = setInterval(startTimer, 1000);
      buttonStart.addEventListener("click", () =>{
        buttonDone.style.display = "inline";  
      })
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
        document.getElementById("totalhours").innerHTML = totalhours;
        if (totalhours == 0){
          document.getElementById("totalhours").innerHTML = "00";
        }
        
        // calculating the remaining seconds after transferring the multiples of 60 into minutes
          if (totalseconds > 60){
            if (secondsresidue <= 9){
              totalseconds = "0" + secondsresidue;
              document.getElementById("totalseconds").innerHTML = totalseconds;
            } else {
              totalseconds = secondsresidue;
              document.getElementById("totalseconds").innerHTML = totalseconds;
            }
            totalseconds = secondsresidue;
            console.log("seconds first")
  
        } else if (totalseconds == 60){
            totalseconds = "00"
            document.getElementById("totalseconds").innerHTML = totalseconds;
            totalseconds = 0;
            console.log("seconds middle")
        } else if (totalseconds < 60){
            if (secondsresidue <= 9){
              totalseconds = "0" + secondsresidue;
              document.getElementById("totalseconds").innerHTML = totalseconds;
            } else {
              totalseconds = secondsresidue;
              document.getElementById("totalseconds").innerHTML = totalseconds;
            }
            totalseconds = secondsresidue;
            console.log("seconds last")
        }
  
        // same thing but for hours
          if (totalminutes > 60){  
            if (minutesresidue <= 9){
              totalminutes = "0" + minutesresidue;
              document.getElementById("totalminutes").innerHTML = totalminutes;
            } else{
              totalminutes = minutesresidue;
              document.getElementById("totalminutes").innerHTML = totalminutes;
            }
            totalminutes = minutesresidue;
            console.log("hours first")
  
        } else if (totalminutes == 60){
            totalminutes = "00"
            document.getElementById("totalminutes").innerHTML = totalminutes;
            totalminutes = 0;
            console.log("hours middle")
        } else if (totalminutes < 60){
            
            if (minutesresidue <= 9){
              totalminutes = "0" + minutesresidue;
              document.getElementById("totalminutes").innerHTML = totalminutes;
            } else{
              totalminutes = minutesresidue;
              document.getElementById("totalminutes").innerHTML = totalminutes;
            }
            totalminutes = minutesresidue;
            console.log("hours last")
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
        console.log("minutes");
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
      }
      
      if (minutes > 9){
        appendMinutes.innerHTML = minutes;
      }
      
      if (minutes > 59) {
        console.log("hours");
        hours++;
        appendHours.innerHTML = "0" + hours;
        minutes = 0;
        appendMinutes.innerHTML = "0" + 0;
      }
    
    }
    
  }