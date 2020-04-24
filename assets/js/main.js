"use strict";

function showMobileNav() {
  let navElement = document.getElementById("main-nav");
  if (navElement.className === "main-nav") {
    navElement.className += " responsive-nav";
  } else {
    navElement.className = "main-nav"
  }
}
