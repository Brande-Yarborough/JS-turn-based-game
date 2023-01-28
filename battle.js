class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }

  turn(playerMove) {
    //Player's turn
    //Attack
    this.enemy.hp -= playerMove.dmg;
    this.player.hp += playerMove.heal;

    if (this.enemy.hp < 1) {
      //Check if enemy is still alive
      //end game
      console.log("\nGame over! You win!\n");
      return;
    }
    //Enemy's turn
    // set timeout for delay
    let enemyMove = this.enemy.pickMove();
    //Player's turn
    //Attack
    this.player.hp -= enemyMove.dmg;
    this.enemy.hp += enemyMove.heal;

    if (this.player.hp < 1) {
      //Check if enemy is still alive
      //end game
      console.log("\nGame over!\nMonster wins!");
      return;
    }
  }
}
