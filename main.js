/*hover color change*/
var changeBackground = document.querySelector("#buttons");

changeBackground.addEventListener('mouseenter', newColor)
function newColor () {
    document.getElementById("button1").style.backgroundColor = "#FFFFFF";
    document.getElementById("button2").style.backgroundColor = "#FFFFFF";
    document.getElementById("button3").style.backgroundColor = "#FFFFFF";
};

changeBackground.addEventListener('mouseleave', oldColor)
function oldColor () {
    document.getElementById('button1').style.backgroundColor = "#FCFF00";
    document.getElementById('button2').style.backgroundColor = '#54FFC8';
    document.getElementById('button3').style.backgroundColor = '#A5FF00';
};

/*message when button 1 is clicked*/
  function buttonMessage1() {
        var text = document.getElementById("button1message");
        if (text.style.display == "none"){
          text.style.display = "block";
        }
        else {
          text.style.display = "none";
        }
      }
  
      document.getElementById("button1").addEventListener("click", function() {
        buttonMessage1();
        }, false);

/*message when button 2 is clicked*/
function buttonMessage2() {
    var text = document.getElementById("button2message");
    if (text.style.display == "none"){
      text.style.display = "block";
    }
    else {
      text.style.display = "none";
    }
  }

  document.getElementById("button2").addEventListener("click", function() {
    buttonMessage2();
    }, false);

/*message when button 3 is clicked*/
function buttonMessage3() {
    var text = document.getElementById("button3message");
    if (text.style.display == "none"){
      text.style.display = "block";
    }
    else {
      text.style.display = "none";
    }
  }

  document.getElementById("button3").addEventListener("click", function() {
    buttonMessage3();
    }, false);

/*start over button appears when any button is clicked*/
function startOverButton() {
    var text = document.getElementById("startover");
    if (text.style.display == "none"){
      text.style.display = "inline";
    }
    else {
      text.style.display = "none";
    }
  }

  document.getElementById("button1").addEventListener("click", function() {
    startOverButton();
    }, false);

 document.getElementById("button2").addEventListener("click", function() {
    startOverButton();
     }, false);

 document.getElementById("button3").addEventListener("click", function() {
    startOverButton();
    }, false);