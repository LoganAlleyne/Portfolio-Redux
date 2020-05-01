// Implement Particleground plugin
document.addEventListener(
  "DOMContentLoaded",
  function () {
    particleground(document.getElementById("particles"), {
      dotColor: "rgba(255, 255, 255, 0.37)",
      lineColor: "rgba(255, 255, 255, 0.37)",
      density: "17000",
      parallaxMultiplier: "10",
      particleRadius: "5",
    });
    var intro = document.getElementById("landing-content");
    intro.style.marginTop = -intro.offsetHeight / 2 + "px";
  },
  false
);

// On load change the theme gradient at random
window.onload = function setGradient() {
  const gradients = [
    "linear-gradient(to right, #df89b5 0%, #bfd9fe 100%)",
    "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
    "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
    "linear-gradient(to right, #4f6ffe 0%, #00fefe 100%)",
    "linear-gradient(to right, #fa709a 0%, #fee140 100%)",
    "linear-gradient(to right, #e8198b 0%, #c7eafd 100%)",
    "linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%)",
  ];
  const randomGradient =
    gradients[Math.floor(Math.random() * gradients.length)];
  window.gradientX = String(randomGradient);
  document.getElementById("landingID").style.backgroundImage = window.gradientX;
  document.getElementById("about-titleID").style.backgroundImage =
    window.gradientX;
  document.getElementById("nameID").style.backgroundImage = window.gradientX;
  document.getElementById("devTopID").style.backgroundImage = window.gradientX;
  document.getElementById("desTopID").style.backgroundImage = window.gradientX;
  document.getElementById("othTopID").style.backgroundImage = window.gradientX;
  document.getElementById("skillsBorderID").style.backgroundImage =
    window.gradientX;
  document.getElementById("projectsTitleID").style.backgroundImage =
    window.gradientX;
  document.getElementById("footerID").style.backgroundImage = window.gradientX;
};

function navBackground(veiwX) {
  if (veiwX.matches) {
    document.getElementById("navID").style.backgroundImage = window.gradientX;
    console.log("match");
  } else {
    document.getElementById("navID").style.backgroundImage = "none";
    console.log("no");
  }
}

var veiwX = window.matchMedia("(max-width: 1350px)");
navBackground(veiwX);
veiwX.addListener(navBackground);

const menuButton = document.querySelector(".nav-toggle");
const menuDisplay = document.querySelector(".nav");
let menuOpen = false;
menuButton.addEventListener("click", () => {
  if (!menuOpen) {
    menuButton.classList.add("open");
    menuDisplay.classList.add("open");
    menuOpen = true;
    // document.getElementById("navID").style.display = "flex";
    navBackground(veiwX);
  } else {
    menuButton.classList.remove("open");
    menuDisplay.classList.remove("open");
    menuOpen = false;
    // document.getElementById("navID").style.display = "none";
    navBackground(veiwX);
  }
});
