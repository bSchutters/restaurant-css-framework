import "/css/main.css";
import "/css/reset.css";
import "/css/tailwind.css";

const btnCookiesDesk = document.getElementById("btn-cookies-desk");
const popCookiesDesk = document.getElementById("pop-cookies-desk");

if (btnCookiesDesk) {
  btnCookiesDesk.onclick = function () {
    popCookiesDesk.classList.add("hide");
  };
}

// BURGER MENU
const iconBurger = document.getElementById("icon-burger");
const iconClose = document.getElementById("icon-close");
const navBurger = document.getElementById("nav-burger");
const body = document.getElementsByTagName("body")[0];

if (iconBurger) {
  iconBurger.onclick = function () {
    window.scrollTo(0, 0);
    body.classList.add("overflow-hidden");
    navBurger.classList.remove("hidden");
  };
}

if (iconClose) {
  iconClose.onclick = function () {
    body.classList.remove("overflow-hidden");
    navBurger.classList.add("hidden");
  };
}

//Collapse

const titreSignature = document.getElementById("title-signature");
const contentSignature = document.getElementById("menu-degustation-content");
const footer = document.getElementsByTagName("footer")[0];

if (titreSignature) {
  titreSignature.onclick = function () {
    contentSignature.classList.toggle("hidden");
    footer.classList.toggle("fixed");
  };
}
const titreStarters = document.getElementById("title-lacarte-starters");
const contentStarters = document.getElementById("content-lacarte-starters");

if (titreStarters) {
  titreStarters.onclick = function () {
    contentStarters.classList.toggle("hidden");
  };
}

const titreMain = document.getElementById("title-lacarte-main-courses");
const contentMain = document.getElementById("content-lacarte-main-courses");

if (titreMain) {
  titreMain.onclick = function () {
    contentMain.classList.toggle("hidden");
  };
}

const titreDesserts = document.getElementById("title-lacarte-desserts");
const contentDesserts = document.getElementById("content-lacarte-desserts");

if (titreDesserts) {
  titreDesserts.onclick = function () {
    contentDesserts.classList.toggle("hidden");
  };
}
