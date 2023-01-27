export class Move {
  constructor({ name, action, effect } = {}) {
    this.name = name;
    this.action = action;
    this.effect = effect;
  }
}

export class Character {
  constructor({ name, type, move, img, hp, fullHp } = {}) {
    this.name = name;
    this.type = type;
    this.img = img;
    this.hp = hp;
    this.fullHp = fullHp;
    this.move = new Move();
  }
}

const playerMoves = [];
const monsterMoves = [];
