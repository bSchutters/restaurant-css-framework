import "/css/main.css";
import "/css/reset.css";
import "/css/tailwind.css";

// BURGER MENU
const iconBurger = document.getElementById("icon-burger");
const iconClose = document.getElementById("icon-close");
const navBurger = document.getElementById("nav-burger");
const body = document.getElementsByTagName("body")[0];

iconBurger.onclick = function () {
  window.scrollTo(0, 0);
  body.classList.add("overflow-hidden");
  navBurger.classList.remove("hidden");
};

iconClose.onclick = function () {
  body.classList.remove("overflow-hidden");
  navBurger.classList.add("hidden");
};

//Collapse

const titreSignature = document.getElementById("title-signature");
const contentSignature = document.getElementById("menu-degustation-content");
const footer = document.getElementsByTagName("footer")[0];

titreSignature.onclick = function () {
  contentSignature.classList.toggle("hidden");
  footer.classList.toggle("fixed");
};

const titreStarters = document.getElementById("title-lacarte-starters");
const contentStarters = document.getElementById("content-lacarte-starters");

titreStarters.onclick = function () {
  contentStarters.classList.toggle("hidden");
};

const titreMain = document.getElementById("title-lacarte-main-courses");
const contentMain = document.getElementById("content-lacarte-main-courses");

titreMain.onclick = function () {
  contentMain.classList.toggle("hidden");
};

const titreDesserts = document.getElementById("title-lacarte-desserts");
const contentDesserts = document.getElementById("content-lacarte-desserts");

titreDesserts.onclick = function () {
  contentDesserts.classList.toggle("hidden");
};
