/**
 * Copyright (c) 2018 Eric Nguyen
 * License: MIT 
 **/

function hide() {
  confettiHolder.setAttribute("style", "display: none");
  overlay.setAttribute("style", "display: none");
  document.getElementsByTagName("header")[0].style.filter = "none";
  document.getElementsByTagName("main")[0].style.filter = "none";
  document.getElementById("intro").style.display = "none";
}

// Confetti
let confettiHolder = document.createElement("canvas");
confettiHolder.id = "confetti-holder";
confettiHolder.width = document.body.clientWidth;
confettiHolder.height = document.body.clientHeight;
document.body.insertBefore(confettiHolder, document.body.firstChild);
let confetti = new ConfettiGenerator();
confetti.render();

// Overlay
let overlay = document.createElement("div");
overlay.id = "happy-bday";
let message = document.createElement("h1");
// let name = location.hostname.substr(0, location.hostname.indexOf(".")); // Use URL hostname
message.innerHTML = "Happy 18<sup>th</sup> birthday to Oanh!";
overlay.appendChild(message);
document.body.insertBefore(overlay, document.body.firstChild);

document.body.setAttribute("onclick", "hide()");