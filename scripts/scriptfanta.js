// JavaScript Document
console.log("hi");



// openen van Orange voedingswaarden
var openOrangeButton = document.querySelector("#Orange");

openOrangeButton.onclick = openOrange;

function openOrange() {
  var Orange = document.querySelector("#orangeList");
  var chevOrange = document.querySelector("#chevOrange")

  if( openOrangeButton.classList.contains("open")) {
    Orange.classList.remove("toonOrange");
    openOrangeButton.classList.remove("open");
    chevOrange.classList.remove("draai")
  } else {
    Orange.classList.add("toonOrange");
    openOrangeButton.classList.add("open");
    chevOrange.classList.add("draai")
  }

  
}


// openen van Pomelo voedingswaarden
var openPomeloButton = document.querySelector("#Pomelo");

openPomeloButton.onclick = openPomelo;

function openPomelo() {
  var Pomelo = document.querySelector("#pomeloList");
  var chevPomelo = document.querySelector("#chevPomelo")

  if( openPomeloButton.classList.contains("open")) {
    Pomelo.classList.remove("toonPomelo");
    openPomeloButton.classList.remove("open");
    chevPomelo.classList.remove("draai")
  } else {
    Pomelo.classList.add("toonPomelo");
    openPomeloButton.classList.add("open");
    chevPomelo.classList.add("draai")
  }

  
}