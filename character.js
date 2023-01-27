export class Character {
  constructor({ name, type, moves, img, hp } = {}) {
    (this.name = name),
      (this.type = type),
      (this.img = img),
      (this.hp = hp),
      (this.move = []);
  }
}
