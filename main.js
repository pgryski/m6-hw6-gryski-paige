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
  