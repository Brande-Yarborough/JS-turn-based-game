import { Character } from "./character.js";

export class Game {
  constructor({} = {}) {
    this.player = new Character({
      name: "Player",
    });
    this.monster = new Character({
      name: "Monster",
    });
  }
}

class Warrior extends Character {
  constructor(type) {
    super(type);
    type = "T-Rex";
    hp;
    fullHp = 100;

    // "Dream" Stat
    // this.hasBulk = true;
  }
}

class Rogue extends Character {
  constructor(type) {
    super(type);
    type = "Raptor";
    fullHp = 70;
  }
}

class Mage extends Character {
  constructor(type) {
    super(type);
    type = "T-Rex";
    fullHp = 60;
  }
}

const selectPlayer = document.querySelector(".dropdown-menu");
selectPlayer.addEventListener("click", function (event) {
  const result = document.querySelector(".result");
  console.log(event.target.value);
});
