/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("excuse").innerHTML = excuseGenerator();
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

function excuseGenerator() {
  let whorandom = who[Math.floor(Math.random() * who.length)];
  let actionrandom = action[Math.floor(Math.random() * action.length)];
  let whatrandom = what[Math.floor(Math.random() * what.length)];
  let whenrandom = when[Math.floor(Math.random() * when.length)];

  return whorandom + " " + actionrandom + " " + whatrandom + " " + whenrandom;
}
