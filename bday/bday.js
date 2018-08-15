function newPopUp(message) {
  let popUp = document.createElement("div");
  popUp.appendChild(message);
  popUp.id = "happy-bday";
  popUp.setAttribute("onclick", "popup.style.display = 'none'; document.body.removeChild(confettiHolder);");
  return popUp;
}

function newMessage() {
  let msg = document.createElement("h1");
  let hostname = location.hostname;
  let name = hostname.substr(0, hostname.indexOf("."));
  msg.innerHTML = "Happy birthday to " + name + "!";
  return msg;
}

function addFonts(url) {
  let fonts = document.createElement("link");
  fonts.href = url;
  fonts.rel = "stylesheet";
  document.head.appendChild(fonts);
  return fonts;
}

function stylePopUp(popup) {
  popup.style.width = "100%";
  popup.style.height = "100vh";
  popup.style.color = "white";
  popup.style.fontFamily = "'Asap', sans-serif";
  popup.style.textAlign = "center";
  popup.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  popup.style.position = "fixed";
  popup.style.display = "inline";
  return popup;
}

let confettiHolder = document.createElement("canvas");
confettiHolder.id = "confetti-holder";
confettiHolder.style.position = "fixed";
confettiHolder.width = document.body.clientWidth;
confettiHolder.height = document.body.clientHeight;
document.body.insertBefore(confettiHolder, document.body.firstChild);

let confetti = new ConfettiGenerator();
confetti.render();

let popup = newPopUp(newMessage());
document.body.insertBefore(popup, document.body.firstChild);
addFonts("https://fonts.googleapis.com/css?family=Asap|Old+Standard+TT");
stylePopUp(popup);