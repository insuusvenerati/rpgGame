describe("Character", () => {

  it("should should create a character with a name, class and stats", () => {
    const char = new Character("Bob", "Warrior", 0, 0, 0);
    expect(char.name).toBe("Bob")
    expect(char.class).toBe("Warrior")
    expect(char.str).toBe(0)
    expect(char.int).toBe(0)
    expect(char.char).toBe(0)
  })

})