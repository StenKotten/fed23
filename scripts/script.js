
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






// pepsi man animatie
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



