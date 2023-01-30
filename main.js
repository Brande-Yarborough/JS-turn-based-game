import { Battle } from "./battle.js";
import { Character } from "./character.js";
import {
  Game,
  Warrior,
  Rogue,
  Mage,
  Moblin,
  Mecharex,
  Sabertooth,
} from "./game.js";

var gameTest;
const playerHp = document.querySelector("#health-player");
const monHp = document.querySelector("#health-monster");
const infoWindow = document.querySelector("#window-text");
const playerDesc = document.querySelector("#player-description");
const monsterDesc = document.querySelector("#monster-description");
const playerImg = document.querySelector("#player-img");
const monsterImg = document.querySelector("#monster-img");

const selectPlayer = document.querySelector(".dropdown-menu");
selectPlayer.addEventListener("click", function (event) {
  //Player Name UI selectors
  const result = document.querySelector(".result");
  const name = document.querySelector(".name");
  //Prompt for name
  const namePrompt = prompt("Enter your name");
  const value = event.target.getAttribute("value");
  //Apply Name & Class name
  name.innerHTML = `${namePrompt} - ${value}`;
  // console.log(value);

  //Move everything below this into StartGame button event listener
  //Player UI selectors
  const move1 = document.querySelector("#move1");
  const move2 = document.querySelector("#move2");
  const move3 = document.querySelector("#move3");
  //Monster UI selectors
  const monName = document.querySelector("#monName");
  const monMove1 = document.querySelector("#monMove1");
  const monMove2 = document.querySelector("#monMove2");
  const monMove3 = document.querySelector("#monMove3");

  //generate random value, switch to build Monster
  let monPick = Math.floor(Math.random() * 3);
  switch (monPick) {
    case 0: {
      var mon = new Moblin();
      break;
    }
    case 1: {
      var mon = new Sabertooth();
      break;
    }
    case 2: {
      var mon = new Mecharex();
      break;
    }
  }
  // console.log("mon:", mon);

  //Character select builds new Game with respective character class
  if (value == "Rogue") {
    gameTest = new Game({ player: new Rogue(), monster: mon });
    // console.log(gameTest);
  } else if (value == "Warrior") {
    gameTest = new Game({ player: new Warrior(), monster: mon });
    // console.log(gameTest);
  } else if (value == "Mage") {
    gameTest = new Game({ player: new Mage(), monster: mon });
    // console.log(gameTest);
  }

  //Updating Player UI
  move1.innerHTML = `${gameTest.player.moves[0].name}`;
  move2.innerHTML = `${gameTest.player.moves[1].name}`;
  move3.innerHTML = `${gameTest.player.moves[2].name}`;
  playerDesc.innerHTML = `
  ${gameTest.player.moves[0].name}:
  
  Dmg: ${gameTest.player.moves[0].dmg} / Heal: ${gameTest.player.moves[0].heal}

  ${gameTest.player.moves[1].name}: Dmg: ${gameTest.player.moves[1].dmg} / Heal: ${gameTest.player.moves[1].heal}
  
  ${gameTest.player.moves[2].name}: Dmg: ${gameTest.player.moves[2].dmg} / Heal: ${gameTest.player.moves[2].heal}
  `;
  //img.src = player.img
  playerImg.src = gameTest.player.img;
  monsterImg.src = gameTest.monster.img;

  playerHp.innerHTML = `Player's HP: ${gameTest.player.hp}/${gameTest.player.fullHp}`;
  //Updating Enemy UI
  monName.innerHTML = `${gameTest.monster.role}`;
  monMove1.innerHTML = `${gameTest.monster.moves[0].name}`;
  monMove2.innerHTML = `${gameTest.monster.moves[1].name}`;
  monMove3.innerHTML = `${gameTest.monster.moves[2].name}`;
  monHp.innerHTML = `Monster's HP: ${gameTest.monster.hp}/${gameTest.monster.fullHp}`;
  monsterDesc.innerHTML = `
  ${gameTest.monster.moves[0].name}: Dmg: ${gameTest.monster.moves[0].dmg} / Heal: ${gameTest.monster.moves[0].heal}
  ${gameTest.monster.moves[1].name}: Dmg: ${gameTest.monster.moves[1].dmg} / Heal: ${gameTest.monster.moves[1].heal}
  ${gameTest.monster.moves[2].name}: Dmg: ${gameTest.monster.moves[2].dmg} / Heal: ${gameTest.monster.moves[2].heal}
  `;
});

// const startBtn = document.querySelector(".start-btn");
// startBtn.addEventListener("click", () => {
//This function would create a new game, doing most of the work that current player select event listener does
//Player select would create the player variable
// });

let attack = document.querySelectorAll(".player-moves");
attack.forEach((attack) =>
  attack.addEventListener("click", (e) => {
    // console.log("I attacked", e.target.innerHTML, gameTest);
    //Selecting player move from move list - using innerHTML of move element to select the move
    const moveAudio = new Audio('assets/ESM_Ambient_Game_Player_Alchemy_Potion_Failure_2_Glass_Shatter_Clink_Button_Magic.wav');
    moveAudio.play();
    let playerMove;
    gameTest.player.moves.forEach((move) => {
      let currMove = Object.values(move);
      if (currMove.includes(e.target.innerHTML)) {
        playerMove = currMove;
        // console.log("player move is:", playerMove);
      }
    });

    //Player's turn
    //Attack
    gameTest.monster.hp -= playerMove[1];
    gameTest.player.hp += playerMove[2];
    if (gameTest.player.hp > gameTest.player.fullHp) {
      gameTest.player.hp = gameTest.player.fullHp;
    }

    // console.log("Mon HP", gameTest.monster.hp);

    if (gameTest.monster.hp < 1) {
      //Check if enemy is still alive
      //end game
      playerHp.innerHTML = `Player's HP: ${gameTest.player.hp}/${gameTest.player.fullHp}`;
      monHp.innerHTML = `Monster's HP: ${gameTest.monster.hp}/${gameTest.monster.fullHp}`;
      infoWindow.innerHTML = "Victory!! You win!";
      // console.log(gameTest.monster.hp);
      // console.log("\nGame over! You win!\n");
      return;
    }

    //Enemy's turn
    // set timeout for delay
    setTimeout(() => {
      let rnd = Math.floor(Math.random() * gameTest.monster.moves.length);
      let enemyMove = gameTest.monster.moves[rnd];
      //Player's turn
      //Attack
      gameTest.player.hp -= enemyMove.dmg;
      gameTest.monster.hp += enemyMove.heal;
      if (gameTest.monster.hp > gameTest.monster.fullHp) {
        gameTest.monster.hp = gameTest.monster.fullHp;
      }

      if (gameTest.player.hp < 1) {
        //Check if enemy is still alive
        //end game
        playerHp.innerHTML = `Player's HP: ${gameTest.player.hp}/${gameTest.player.fullHp}`;
        monHp.innerHTML = `Monster's HP: ${gameTest.monster.hp}/${gameTest.monster.fullHp}`;
        infoWindow.innerHTML = "Game over! Monster wins!";
        // console.log("\nGame over!\nMonster wins!");
        return;
      }
      //update UI hp values
      playerHp.innerHTML = `Player's HP: ${gameTest.player.hp}/${gameTest.player.fullHp}`;
      monHp.innerHTML = `Monster's HP: ${gameTest.monster.hp}/${gameTest.monster.fullHp}`;
    }, 500);
  })
);
