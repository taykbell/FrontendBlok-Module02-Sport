// Smooth Scroll

const links = document.querySelectorAll(".nav-link");

for (const link of links) {
link.addEventListener("click", clickHandler);
}

const links2 = document.querySelectorAll(".footer-nav-link");

for (const link of links2) {
link.addEventListener("click", clickHandler);
}
     
const links3 = document.querySelectorAll(".hero-arrow");

for (const link of links3) {
link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
e.preventDefault();
const href = this.getAttribute("href");

document.querySelector(href).scrollIntoView({
    behavior: "smooth"
});
}

// Cursor

function myFunction() {
    document.getElementById("hero-arrow").style.cursor = "pointer";
    document.getElementById("sport-menu").style.cursor = "pointer";
    document.getElementById("close").style.cursor = "pointer";
  }

 // Menu

 function openModal() {
    document.getElementById("modal").style.top = "0px";
}

function closeModal() {
    document.getElementById("modal").style.top = "-500px";
}
