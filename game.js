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

// Warrior, Rogue, and Mage are all roles the player character can take on.
class Warrior extends Character {
  constructor(role) {
    super(img, hp, fullHp, moves);
    role = "Warrior";
    img = "imggobrr";
    hp: 100;
    fullHp = 100;
    moves = [];
    // "Dream" Stat: this.hasBulk = true;
  }
}

class Rogue extends Character {
  constructor(role) {
    super(img, hp, fullHp, moves);
    role = "Rogue";
    img = "imggobrr";
    hp = 70;
    fullHp = 70;
    moves = [];
  }
}

class Mage extends Character {
  constructor(role) {
    super(img, hp, fullHp, moves);
    role = "Mage";
    img = "imggobrr";
    hp = 60;
    fullHp = 60;
    moves = [];
  }
}

// Monster is a character that computer takes control of.
class Monster extends Character {
  constructor() {
    super(img, hp, fullHp, moves);
    img = "imggobrr";
    hp = 60;
    fullHp = 60;
    moves = [];
  }
}

const selectPlayer = document.querySelector(".dropdown-menu");
selectPlayer.addEventListener("click", function (event) {
  const result = document.querySelector(".result");
  const value = event.target.getAttribute("value");
  console.log(value);
});
// const warrior1 = new Warrior(type)
