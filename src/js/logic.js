export class Character {
  name;
  xp = 100;
  weaponSwings = 0;
  spellCasts = 0;
  distanceStealthed = 0;
  health = 100;

  /**
   * @type {Item[]}
   */
  inventory = [];

  /**
   * @param {string} name Characters name
   * 
   * @example const char = new Character("Bob")
   */
  constructor(name) {
    this.name = name;
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

  get type() {
    const stats = { str: this.str, int: this.int, char: this.char }
    const highestStat = Object.keys(stats).reduce((a, b) => stats[a] > stats[b] ? a : b)
    switch (highestStat) {
      case "str":
        return "Warrior"
      case "int":
        return "Mage"
      case "char":
        return "Rogue"
      default:
        break;
    }
  }

  get health() {
    healthLevel = this.level
    healthLevel.forEach()
    // return Math.floor(this.xp / 2)
  }

  swingWeapon() {
    this.weaponSwings++
  }

  travelStealthed() {
    this.distanceStealthed++
  }

  castSpell() {
    this.spellCasts++
  }

  addXP(xp) {
    this.xp += xp;
  }

  addItem(item) {
    this.inventory.push(item)
  }
}

export class Item {
  constructor(name, str, int, char) {
    this.name = name;
    this.str = str || 0;
    this.int = int || 0;
    this.char = char || 0;
  }
}