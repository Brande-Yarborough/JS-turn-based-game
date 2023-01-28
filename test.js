import { Game, Warrior } from "./game.js";
// import { Character, Move } from "./character.js";

const testPlayer = new Warrior();
const test = new Game({ player: testPlayer });

console.log("player:", testPlayer);
console.log("game", test);
