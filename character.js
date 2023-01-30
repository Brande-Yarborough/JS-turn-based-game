export class Move {
  constructor({ name, dmg, heal, audio } = {}) {
    this.name = name;
    this.dmg = dmg;
    this.heal = heal;
    this.audio = audio;
  }
}

export class Character {
  constructor({ type, img, hp, fullHp } = {}) {
    this.type = type;
    this.img = img;
    this.hp = hp;
    this.fullHp = fullHp;
  }
}
