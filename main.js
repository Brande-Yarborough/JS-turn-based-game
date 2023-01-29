import { Battle } from "./battle.js";
import { Character } from "./character.js";
const selectPlayer = document.querySelector(".dropdown-menu");
selectPlayer.addEventListener("click", function (event) {
  const result = document.querySelector(".result");
  const namePrompt = prompt("Enter your name");
  const value = event.target.getAttribute("value");
  console.log(value);
  const name = document.querySelector(".name");
  name.innerHTML = `${namePrompt}`;
  result.innerHTML = `${value}`;
  console.log(name);
});

let attack = document("attack buttons");
attack.addEventListener("click", () => {
  //calls turn function from new Battle object w/value of selected attack
  Battle.turn(e.target.value);
});
