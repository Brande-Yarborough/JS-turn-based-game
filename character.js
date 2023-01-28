export class Move {
  constructor({ name, dmg, heal, effect } = {}) {
    this.name = name;
    this.dmg = dmg;
    this.heal = heal;
  }
}

export class Character {
  constructor({ name, moves, img, hp, fullHp } = {}) {
    this.name = name;
    this.img = img;
    this.hp = hp;
    this.fullHp = fullHp;
    this.moves = moves;
  }
}
