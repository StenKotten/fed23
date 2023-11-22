// JavaScript Document
console.log("hi");


// voor openen
var openButton = document.querySelector("header > button");

openButton.onclick = openMenu;

function openMenu() {  // bron https://codepen.io/shooft/pen/MWZYoqa?editors=0010
    var deNav = document.querySelector("nav");
    deNav.classList.add("toonMenu");
  }


// voor sluiten
var sluitButton = document.querySelector("nav > button");

// stap 2 - laat die button luisteren naar kliks
sluitButton.onclick = sluitMenu;

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}




// openen van ontdek in menu
var openOntdekButton = document.querySelector("#ontdek");

openOntdekButton.onclick = openOntdek;

function openOntdek() {
  var Ontdek = document.querySelector("#ontdeklist");

  if( openOntdekButton.classList.contains("open")) {
    Ontdek.classList.remove("toonOntdek");
    openOntdekButton.classList.remove("open");
  } else {
    Ontdek.classList.add("toonOntdek");
    openOntdekButton.classList.add("open");
  }

  
}


// openen van impact in menu
var openImpactButton = document.querySelector("#impact");

openImpactButton.onclick = openImpact;

function openImpact() {
  var Impact = document.querySelector("#impactlist");

  if( openImpactButton.classList.contains("open")) {
    Impact.classList.remove("toonImpact");
    openImpactButton.classList.remove("open");
  } else {
    Impact.classList.add("toonImpact");
    openImpactButton.classList.add("open");
  }

  
}


// // openen van impact in menu
// var openImpactButton = document.querySelector("#impact");

// openImpactButton.onclick = openImpact;

// function openImpact() {
//   var Impact = document.querySelector("#impactlist");
//   Impact.classList.add("toonImpact");

//   console.log("Impact gemaakt");

//   document.getElementById("chev2").style.transform = "rotate(0deg)"; //https://www.w3schools.com/jsref/prop_style_transform.asp
// }


// SCROLL ANIMATIE van https://alvarotrigo.com/blog/css-animations-scroll/
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight; //hoogte vd viewport
    var elementTop = reveals[i].getBoundingClientRect().top; //verschil tussen reveal element en de top van de viewport
    var elementVisible = 120; //wanneer de img verschijnt

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();





// speel audio af bij hover, bron: https://css-tricks.com/play-sound-on-hover/
// var audio = document.getElementById("mySoundClip");
// audio.play();

// var audio = $("#mySoundClip")[0];
// $("#pepsi").mouseenter(function() {
//   audio.play();   
// });

function sleep(ms) { // https://www.sitepoint.com/delay-sleep-pause-wait/
  return new Promise(resolve => setTimeout(resolve, ms));
}


var cocacolalogo = document.querySelector(".cola.reveal");
cocacolalogo.onclick = speelMuziek;
function speelMuziek() {
  var muziek = document.querySelector("audio");
  muziek.play();

  var pepsi = document.querySelector("#pepsiman");
  pepsi.classList.add("start");

  var explosie = document.querySelector("#explosie");
  explosie.classList.add("start");

  sleep(8000).then(() => { // eerst 8 seconden wachten
  var colalogo = document.querySelector("#cola"); 
  colalogo.classList.add("start");

  var pepsilogo = document.querySelector("#pepsi");
  pepsilogo.classList.add("start");
  console.log("starten maar") });
  
  }



