export class Character {
  constructor(name, type, str, int, char) {
    this.name = name;
    this.type = type;
    this.str = str;
    this.int = int;
    this.char = char;
  };

  name;
  type;
  xp = 100;

  get level() {
    return Math.floor(this.xp / 100)
  }

  // get str() { }

  // get int() { }

  // get char() { }

  addXP(xp) {
    this.xp += xp;
  }

}