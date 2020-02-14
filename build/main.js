"use strict";
var mainDiv = document.querySelector(".menu__items");
var menuBtn = document.querySelector(".menu__btn");
menuBtn.addEventListener("click", openBtn);

function openBtn() {
  this.classList.toggle("active");
  mainDiv.classList.toggle("active");
}
