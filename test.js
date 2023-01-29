import { Character, Move } from "./character.js";
import { Battle } from "./battle.js";
import { Warrior, Rogue, Mage, Moblin } from "./game.js";

// const test = new Game({ player: testPlayer });

// console.log("game", test);

// turn(testPlayer, testEnemy);

//  JC: A basic test to check Battle Logic
/*
    JC: Theoretically, the player will be set as whatever role they click on.
    E.g. if they select "Mage", an event listener will pick up on that and create 
    an instance of a character and assign it as a new Mage.
    Enemy will be assigned a random Monster-type character.
*/
const testPlayer = new Rogue();
const testEnemy = new Moblin();

//  JC: Player selecting an attack will run this turn function.
//JT - this can be put into and Event Listener callback function
const testTurn = () => {
  //Player's turn

  /*
    JC: Enemy's HP will be subtracted and reassigned by the Player's move's damage.
    If the player's move has a heal property, their HP will increase by that amount.
  */
  testEnemy.hp -= testPlayer.moves[3].dmg;
  testPlayer.hp += testPlayer.moves[3].heal;

  //JC: console.log's included to make sure moves are affecting HP appropriately.
  document.getElementById(
    "window-text"
  ).innerHTML = `Player Used ${testPlayer.moves[0].name}`;

  document.getElementById(
    "health-enemy"
  ).innerHTML = `Enemy's HP: ${testEnemy.hp}`;

  document.getElementById(
    "health-player"
  ).innerHTML = `Enemy's HP: ${testPlayer.hp}`;

  if (testEnemy.hp < 1) {
    //Check if enemy is still alive
    //end game
    console.log("\nGame over! You win!\n");
    return;
  }

  //Enemy's turn
  // JC: Will theoretically randomize enemy's attack array. Mutates array order each time function is run.
  for (let i = testEnemy.moves.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let randomMoves = testEnemy.moves[i];
    testEnemy.moves[i] = testEnemy.moves[j];
    testEnemy.moves[j] = randomMoves;
  }

  // JC: console.log's included to make sure moves are affecting HP appropriately and that enemy's attacks are random.
  console.log(`Enemy's Moves: ${testEnemy.moves[0].name}`);
  testPlayer.hp -= testEnemy.moves[0].dmg;
  testEnemy.hp += testEnemy.moves[0].heal;
  console.log(`Enemy Used ${testEnemy.moves[0].name}`);

  // JC: Updates Player's HP Value, but also takes away heart
  // document.getElementsByClassName("health-player")[0].innerHTML = `Player: ${testPlayer.hp}`;

  if (testPlayer.hp < 1) {
    //Check if enemy is still alive
    //end game
    console.log("\nGame over!\nMonster wins!");
    return;
  }
};

testTurn();
// JC: Will need to make sure the turn function only runs when a move button is pressed.
const $moveOptions = document.querySelectorAll(".move-button");

// $moveOptions.addEventListener("click", testTurn());
