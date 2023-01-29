import { Character } from "./character.js";
import { Move } from "./character.js";
import { Battle } from "./battle.js";

export class Game {
  constructor({ player } = {}) {
    this.player = player;
    this.monster = new Moblin();
    // This battle
  }
}

// PLAYER CHARACTER CHOICES
// Warrior, Rogue, and Mage are all roles the player character can take on.
// Player's button selection decided which type of player gets made.
export class Warrior extends Character {
  constructor() {
    super({
      type: "Player",
      img: "warrior.jpg",
      hp: 100,
      fullHp: 100,
    });

    this.role = "Warrior";
    this.moves = [
      new Move({ name: "Stomp", dmg: 10, heal: 0 }),
      new Move({ name: "Crunch", dmg: 15, heal: 0 }),
      new Move({ name: "Charge", dmg: 30, heal: 0 }),
    ];
    // "Dream" Stat: this.hasBulk = true;
  }
}

export class Rogue extends Character {
  constructor() {
    super({
      type: "Player",
      //
      img: "rogue.jpg",
      hp: 70,
      fullHp: 70,
    });

    this.role = "Rogue";
    this.moves = [
      new Move({ name: "Slice", dmg: 12, heal: 0 }),
      new Move({ name: "Pounce", dmg: 25, heal: 0 }),
      new Move({ name: "Rend", dmg: 15, heal: 5 }),
    ];
    // "Dream" Passive: causes bleeding;
  }
}

export class Mage extends Character {
  constructor() {
    super({
      type: "Player",
      img: "Mage.jpg",
      hp: 60,
      fullHp: 60,
    });

    this.role = "Warrior";
    this.moves = [
      new Move({ name: "Swoop", dmg: 20, heal: 0 }),
      new Move({ name: "Asteroid", dmg: 45, heal: 0 }),
      new Move({ name: "Nest", dmg: 0, heal: 25 }),
    ];
    // "Dream" Component: magic shield;
  }
}

// Monsters Generated
// Monster is a character that computer takes control of.
export class Moblin extends Character {
  constructor() {
    super({
      type: "Monster",
      img: "moblin.jpg",
      hp: 40,
      fullHp: 40,
    });

    this.role;
    this.moves = [
      new Move({ name: "Swipe", dmg: 5, heal: 0 }),
      new Move({ name: "Bite", dmg: 10, heal: 0 }),
      new Move({ name: "Chug", dmg: 0, heal: 10 }),
    ];
  }
}

class Mecharex extends Character {
  constructor() {
    super({
      type: "Monster",
      img: "mecharex.jpg",
      hp: 100,
      fullHp: 100,
    });

    this.role;
    this.moves = [
      new Move({ name: "Atomic Breath", dmg: 30, heal: 0 }),
      new Move({ name: "Tail Slap", dmg: 15, heal: 0 }),
      new Move({ name: "Claw Smash", dmg: 10, heal: 10 }),
    ];
  }
}

class Sabertooth extends Character {
  constructor() {
    super({
      type: "Monster",
      img: "sabertooth.jpg",
      hp: 60,
      fullHp: 60,
    });

    this.role;
    this.moves = [
      new Move({ name: "Shred", dmg: 45, heal: 0 }),
      new Move({ name: "Pin", dmg: 10, heal: 0 }),
      new Move({ name: "Choke", dmg: 15, heal: 0 }),
    ];
  }
}

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
// const warrior1 = new Warrior(type)
