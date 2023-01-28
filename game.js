import { Character } from "./character.js";

export class Game {
  constructor({} = {}) {
    this.player = new Character({
      name: "Player",
    });
    this.monster = new Character({
      name: "Monster",
    });
    // This battle
  }
}

class Warrior extends Character {
  constructor(type) {
    super(type);
    type = "Warrior";
    hp: 100;
    fullHp = 100;

    // "Dream" Stat
    // this.hasBulk = true;
  }
}

class Rogue extends Character {
  constructor(type) {
    super(type);
    type = "Rogue";
    hp = 70;
    fullHp = 70;
  }
}

class Mage extends Character {
  constructor(type) {
    super(type);
    type = "Mage";
    hp = 60;
    fullHp = 60;
  }
}

const selectPlayer = document.querySelector(".dropdown-menu");
selectPlayer.addEventListener("click", function (event) {
  const result = document.querySelector(".result");
  console.log(event.target.value);
});
// const warrior1 = new Warrior(type)
