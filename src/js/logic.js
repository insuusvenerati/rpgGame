export class Character {
  name;
  type;
  xp = 100;
  inventory = [];

  constructor(name, type) {
    this.name = name;
    this.type = type;
  };

  get level() {
    return Math.floor(this.xp / 100)
  }

  get str() {
    return this.level
  }

  get int() {
    return this.level
  }

  get char() {
    return this.level
  }

  addXP(xp) {
    this.xp += xp;
  }

}

export class Item {
  name;
  str = 0;
  int = 0;
  char = 0;

  constructor(name, str, int, char) {
    this.name = name;
    this.str = str;
    this.int = int;
    this.char = char;
  }
}