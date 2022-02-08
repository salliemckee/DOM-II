import "./less/index.less";

// Your code goes here!
//1//
const navLinks = document.querySelectorAll("a.nav-link");

navLinks.forEach((element) => {
  element.addEventListener(
    "mouseover",
    function (event) {
      event.target.style.color = "red";
      setTimeout(function () {
        event.target.style.color = "black";
      }, 500);
    },
    false
  );
});
console.log(navLinks);

//2//
navLinks.forEach((element) => {
  element.addEventListener(
    "focus",
    function (event) {
      event.target.style.background = "yellow";
      setTimeout(function () {
        event.target.style.background = "white";
      }, 500);
    },
    false
  );
});
//3//
const signUpBtn = document.querySelectorAll("div.btn");

signUpBtn.forEach((element) => {
  element.addEventListener("click", function (event) {
    console.log("SIGN ME UP!!!");
  });
});

//4//
function escKey(event) {
  if (event.key === "Escape") {
    console.log("THERE IS NO ESCAPE!!!");
  }
}

document.addEventListener("keydown", escKey);

//5//
const homePage = document.querySelector("div.text-content");

homePage.addEventListener("scroll", function (event) {
  event.target.style.color = "pink";
});

console.log(homePage);
//6//
const title = document.querySelector("h1");

title.addEventListener("pointerleave", (event) => {
  console.log("Pointer Left Header");
});
//7//
function dKey(event) {
  if (event.key === "D") {
    console.log("Delta");
  }
}

document.addEventListener("keyup", dKey);

//8//
title.addEventListener("pointerenter", (event) => {
  event.target.style.color = "pink";
});

//9//
title.addEventListener("dblclick", function () {
  console.log("FUN BUS");
});
//10//
const footer = document.querySelector(".footer");

footer.addEventListener("blur", (event) => {
  event.target.style.background = "purple";
});

console.log(footer);

//prevent default//
Array.from(document.links).forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(`No ${event.target.textContent} for you!`);
  });
});
