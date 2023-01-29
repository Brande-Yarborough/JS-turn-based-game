import { Character, Move } from "./character.js";
import { Battle } from "./battle.js";
import { Warrior, Rogue, Mage, Moblin } from "./game.js";

const testPlayer = new Warrior();
const testEnemy = new Moblin();
// const test = new Game({ player: testPlayer });

console.log("player:", testPlayer);
console.log("Enemy", testEnemy);
// console.log("game", test);

// turn(testPlayer, testEnemy);

const $moveOptions = document.querySelectorAll(".move-button");

// selectPlayer.addEventListener("click", function (event) {
//   const result = document.querySelector(".result");
//   const namePrompt = prompt("Enter your name");
//   const value = event.target.getAttribute("value");
//   console.log(value);
//   const name = document.querySelector(".name");
//   name.innerHTML = `${namePrompt}`;
//   result.innerHTML = `${value}`;
//   console.log(name);
// });

const testTurn = () => {
  //Player's turn
  //Attack
  testEnemy.hp -= testPlayer.moves[0].dmg;
  testPlayer.hp += testPlayer.moves[0].heal;
  console.log(`Player Used ${testPlayer.moves[0].name}`);
  console.log(`Enemy's HP: ${testEnemy.hp}`);
  if (testEnemy.hp < 1) {
    //Check if enemy is still alive
    //end game
    console.log("\nGame over! You win!\n");
    return;
  }
  //Enemy's turn
  // Will theoretically randomize enemies attacks
  for (let i = testEnemy.moves.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let randomMoves = testEnemy.moves[i];
    testEnemy.moves[i] = testEnemy.moves[j];
    testEnemy.moves[j] = randomMoves;
  }
  //Player's turn
  //Attack
  console.log(`Enemy's Moves: ${testEnemy.moves}`);
  testPlayer.hp -= testEnemy.moves[0].dmg;
  testEnemy.hp += testEnemy.moves[0].heal;
  console.log(`Enemy Used ${testEnemy.moves[0].name}`);
  console.log(`Player's HP: ${testPlayer.hp}`);

  if (testPlayer.hp < 1) {
    //Check if enemy is still alive
    //end game
    console.log("\nGame over!\nMonster wins!");
    return;
  }
};

$moveOptions.addEventListener("click", testTurn());
