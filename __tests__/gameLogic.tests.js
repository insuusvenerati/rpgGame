import { Character, Item } from "../src/js/logic";

describe("Character", () => {

  it("should should create a character with a name and class", () => {
    const char = new Character("Bob");
    expect(char.name).toBe("Bob")
  })

  it("should create a character with inital xp", () => {
    const char = new Character("Bob");
    expect(char.xp).toBe(100)
  })

  it("should add to xp", () => {
    const newChar = new Character("Bob");
    newChar.addXP(100);
    expect(newChar.xp).toBe(200)
  })

  it("should create a character with inital level as 1", () => {
    const newChar = new Character("Bob");
    expect(newChar.level).toBe(1)
  })


  it("should increase level every 100 xp", () => {
    const char = new Character("Bob")
    char.addXP(300)
    expect(char.level).toBe(4)
  })

  it("should create a character with initial stats", () => {
    const char = new Character("Bob");
    expect(char.str).toBe(1)
    expect(char.int).toBe(1)
    expect(char.char).toBe(1)
  })

  it("should increase stats for every level", () => {
    const char = new Character("Bob")
    char.addXP(200)
    expect(char.str).toBe(3)
    expect(char.int).toBe(3)
    expect(char.char).toBe(3)
  })

  it("should create a character with intially empty inventory", () => {
    const char = new Character("Bob")
    expect(char.inventory).toEqual([])
  })

  it("should take in an item from addItem method", () => {
    const char = new Character("Bob")
    const newItem = new Item("Sword", 3, 1, 1)
    char.addItem(newItem)
    expect(char.inventory[0].name).toBe("Sword")
  })

  it("should have increased stats for each item", () => {
    const char = new Character("Bob")
    const newItem = new Item("Sword", 3, 1, 1)
    char.addItem(newItem)
    expect(char.str).toBe(4)
    expect(char.int).toBe(2)
    expect(char.char).toBe(2)
  })

  it("should create a character with initially no training modifiers", () => {
    const char = new Character("Bob")
    expect(char.weaponSwings).toBe(0)
    expect(char.spellCasts).toBe(0)
    expect(char.distanceStealthed).toBe(0)
  })

  it("should add to weaponSwings every time swingWeapon is called", () => {
    const char = new Character("Bob")
    char.swingWeapon()
    char.swingWeapon()
    expect(char.weaponSwings).toBe(2)
  })

  it("should add to spellCasts every time castSpell is called", () => {
    const char = new Character("Bob")
    char.castSpell()
    char.castSpell()
    expect(char.spellCasts).toBe(2)
  })

  it("should add to distanceStealthed every time travelStealthed is called", () => {
    const char = new Character("Bob")
    char.travelStealthed()
    char.travelStealthed()
    expect(char.distanceStealthed).toBe(2)
  })

  it("should turn the type as Warrior if str is the highest stat", () => {
    const char = new Character("Bob")
    const item = new Item("Test Item", 100)
    char.addItem(item)
    expect(char.type).toBe("Warrior")
  })

  it("should return their health as experience/2", () => {
    const char = new Character("Bob")
    char.addXP(200)
    expect(char.health).toBe(150)
  })
})

// "should change the Character class to Warrior if strength is more than 10"
// Character class changes depending on amount of each skill

describe("Item", () => {
  it("should create a new item with initial stats", () => {
    const item = new Item("Sword", 0, 0, 0);
    expect(item.name).toBe("Sword")
    expect(item.str).toBe(0)
    expect(item.int).toBe(0)
    expect(item.char).toBe(0)
  })
})



