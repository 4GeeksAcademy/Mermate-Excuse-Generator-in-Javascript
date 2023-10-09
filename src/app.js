/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("excuse").innerHTML = generateExcuse;
};

let who = ["My goat", "My grandma", "The monkey", "The robot"];
let action = ["ate", "smelled", "crushed", "broke"];
let what = ["my homework", "the apple", "my neighbor's truck", "the pond"];
let when = [
  "before lunch",
  "four days ago",
  " this morning",
  "when I was three"
];

function bringPosition(array) {
  let thePosition;
  thePosition = array[Math.floor(Math.random() * array.length)];
  return thePosition;
}

function bringElement(who, action, what, when) {
  let theElement = "";
  theElement =
    bringPosition(who) +
    " " +
    bringPosition(action) +
    " " +
    bringPosition(what) +
    " " +
    bringPosition(when) +
    " ";
  return theElement;
}

let generateExcuse = bringElement(who, action, what, when);
