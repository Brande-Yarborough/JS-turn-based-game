export class Move {
  constructor({ name, dmg, effect } = {}) {
    this.name = name;
    this.dmg = dmg;
    this.effect = effect;
  }
}

export class Character {
  constructor({ name, moves, img, hp, fullHp } = {}) {
    this.name = name;
    this.img = img;
    this.hp = hp;
    this.fullHp = fullHp;
    this.moves = [];
  }
}
