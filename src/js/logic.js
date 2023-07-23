export class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  };

  name;
  type;
  xp = 100;

  get level() {
    return Math.floor(this.xp / 100)
  }

  get str() {
    return Math.floor(this.xp / 100)
  }

  get int() {
    return Math.floor(this.xp / 100)
  }

  get char() {
    return Math.floor(this.xp / 100)
  }

  addXP(xp) {
    this.xp += xp;
  }

}