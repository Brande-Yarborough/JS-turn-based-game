class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }

  turn(playerMove) {
    //Player's turn
    if (playerMove.effect === "off") {
      //Attack
      this.enemy.hp = this.enemy.hp - playerMove.value;
    } else if (playerMove.effect === "def") {
      //Defend
      this.player.hp = this.player.hp + playerMove.value;
    }
    if (this.enemy.hp < 1) {
      //Check if enemy is still alive
      //end game
      console.log("\nGame over!\n");
      return;
    }
    //Enemy's turn
    // set timeout for delay
    let enemyMove = this.enemy.pickMove();
    if (enemyMove.effect === "off") {
      //Attack
      this.player.hp = this.player.hp - enemyMove.value;
    } else if (enemyMove.effect === "def") {
      //Defend
      this.enemy.hp = this.enemy.hp + enemyMove.value;
    }
    if (this.player.hp < 1) {
      //Check if enemy is still alive
      //end game
      console.log("\nGame over!\n");
      return;
    }
  }
}
