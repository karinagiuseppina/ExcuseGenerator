/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let p = document.getElementById("excuse");

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whois = who[getRandomInt(0, who.length)];
  let actionis = action[getRandomInt(0, action.length)];
  let whatis = what[getRandomInt(0, what.length)];
  let whenis = when[getRandomInt(0, when.length)];

  let excuse = whois + " " + actionis + " " + whatis + " " + whenis;

  p.innerHTML = excuse;
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
