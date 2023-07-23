export class Character {
  name;
  type;
  xp = 100;
  weaponSwings = 0;
  spellCasts = 0;
  distanceStealthed = 0;

  /**
   * @type {Item[]}
   */
  inventory = [];

  /**
   * @param {string} name Characters name
   * @param {string} type Characters type ie Warrior, Mage, Rogue
   * 
   * @example 
   */
  constructor(name, type) {
    this.name = name;
    this.type = type;
  };

  get level() {
    return Math.floor(this.xp / 100)
  }

  get str() {
    let str = this.level
    this.inventory.forEach(item => str = str + item.str)
    return str
  }

  get int() {
    let int = this.level
    this.inventory.forEach(item => int = int + item.int)
    return int
  }

  get char() {
    let char = this.level
    this.inventory.forEach(item => char = char + item.char)
    return char
  }


  addXP(xp) {
    this.xp += xp;
  }

  addItem(item) {
    this.inventory.push(item)
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