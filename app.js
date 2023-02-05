"use strict";
const digit = document.querySelectorAll(".dig");
const operators = document.querySelectorAll(".op");

let string = "";

let buttons = document.querySelectorAll(".num");

console.log(buttons);

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.innerHTML === "=") {
      string = eval(string);
      console.log(string);
      document.querySelector(".display_area").value = string;
    } else if (e.target.innerHTML === "C") {
      string = "";
      document.querySelector(".display_area").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector(".display_area").value = string;
    }
  });
});
