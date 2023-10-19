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
var sluitButton = document.querySelector("nav button");

// stap 2 - laat die button luisteren naar kliks
sluitButton.onclick = sluitMenu;

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}