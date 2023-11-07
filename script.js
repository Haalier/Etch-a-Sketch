"use strict";

const container = document.querySelector(".container");
const btn = document.querySelector(".quantity");

function etchASketch() {
  let ask = prompt("Please enter the number of squares", 256);
  if (isNaN(ask)) {
    console.log("You have to enter a number!");
  } else if (ask >= 1000) {
    window.alert("The number of squares can't be more than 1000");
  } else {
    for (let i = 0; i < ask; i++) {
      let div = document.createElement("div");
      div.classList.add("div");
      container.appendChild(div);
    }
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

let color = function() {
  let rgb = Math.floor(Math.random() * 255);
  return rgb;
};




btn.addEventListener("click", () => {
  removeAllChildNodes(container);
  etchASketch();
});

container.addEventListener("mouseover", (e) => {
  console.log(e.target);
  e.target.style.cssText = `background-color: rgb(${color()}, ${color()}, ${color()})`;

});
