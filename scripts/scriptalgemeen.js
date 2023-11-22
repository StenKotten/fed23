// JavaScript Document 
console.log("hi");


// voor openen
var openButton = document.querySelector("header > button");

openButton.onclick = openMenu;

function openMenu() {  // bron https://codepen.io/shooft/pen/MWZYoqa?editors=0010
    var deNav = document.querySelector("nav");
    deNav.classList.add("toonMenu");
    document.querySelector('nav').setAttribute('aria-hidden', 'false');
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
  var chev1 = document.querySelector("#chev1")

  if( openOntdekButton.classList.contains("open")) {
    Ontdek.classList.remove("toonOntdek");
    openOntdekButton.classList.remove("open");
    chev1.classList.remove("draai");
  } else {
    Ontdek.classList.add("toonOntdek");
    openOntdekButton.classList.add("open");
    chev1.classList.add("draai");
  }

  
}


// openen van impact in menu
var openImpactButton = document.querySelector("#impact");

openImpactButton.onclick = openImpact;

function openImpact() {
  var Impact = document.querySelector("#impactlist");
  var chev2 = document.querySelector("#chev2")

  if(openImpactButton.classList.contains("open")) {
    Impact.classList.remove("toonImpact");
    openImpactButton.classList.remove("open");
    chev2.classList.remove("draai");
  } else {
    Impact.classList.add("toonImpact");
    openImpactButton.classList.add("open");
    chev2.classList.add("draai");
  }

 
}


