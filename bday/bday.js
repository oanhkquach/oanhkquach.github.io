function toggle() {
  overlay.setAttribute("onclick", "popup.style.display = 'none'; confettiHolder.style.display = 'none'");
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
let name = location.hostname.substr(0, location.hostname.indexOf("."));
message.innerHTML = "Happy birthday to " + name + "!";
overlay.appendChild(message);
document.body.insertBefore(overlay, document.body.firstChild);