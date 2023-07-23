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
  str = 0;
  int = 0;
  char = 0;
  xp = 100;

  get level() {
    return Math.floor(this.xp / 100)
  }

  addXP(xp) {
    this.xp += xp;
  }

}