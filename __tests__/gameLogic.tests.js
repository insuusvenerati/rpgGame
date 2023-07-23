import { Character } from "../src/js/logic";

describe("Character", () => {

  it("should should create a character with a name, class and stats", () => {
    const char = new Character("Bob", "Warrior", 0, 0, 0);
    expect(char.name).toBe("Bob")
    expect(char.type).toBe("Warrior")
    expect(char.str).toBe(0)
    expect(char.int).toBe(0)
    expect(char.char).toBe(0)
    expect(char.xp).toBe(100)
    expect(char.level).toBe(1)
  })

  it("should add to xp", () => {
    const newChar = new Character("Bob", "Warrior", 0, 0, 0);
    newChar.addXP(100);
    expect(newChar.xp).toBe(200)
  })


  it("should increase level every 100 xp", () => {
    const char = new Character("Bob", "Warrior", 0, 0, 0)
    char.addXP(300)
    expect(char.level).toBe(4)
  })

  it("should increase stats for every level", () => {
    const char = new Character("Bob", "Warrior", 0, 0, 0)
    char.addXP(200)
    expect(char.str).toBe(3)
    expect(char.int).toBe(3)
    expect(char.char).toBe(3)
  })
})

