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