import UserAge from './../src/js/scripts.js'

describe('UserAge', () => {

  test('should register that the class UserAge is present', () => {
    const newUserAge = new UserAge();
  });

  test('should correctly create a user object with five properties', () => {

    const newUserAge = new UserAge("john", 42, 74, "mercury", "outpost");
    expect(newUserAge.userName).toEqual("john")
    expect(newUserAge.age).toEqual(42)
    expect(newUserAge.lifeExpect).toEqual(74)
    expect(newUserAge.planet).toEqual("mercury")
    expect(newUserAge.habitat).toEqual("outpost")
  });

  test('return newUserAge.age * (365/88)', () => {
    const newUserAge = new UserAge("john", 42, 74, "mercury", "outpost");
    expect(newUserAge.newPlanetAge()).toEqual(174);
  });

  test('return newUserAge.age * (365/225)', () => {
    const newUserAge = new UserAge("john", 42, 74, "venus", "outpost");
    expect(newUserAge.newPlanetAge()).toEqual(68);
  });

  test('return newUserAge.age * (365/687)', () => {
    const newUserAge = new UserAge("john", 42, 74, "mars", "outpost");
    expect(newUserAge.newPlanetAge()).toEqual(22);
  });

  test('return newUserAge.age * (365/4300)', () => {
    const newUserAge = new UserAge("john", 42, 74, "jupiter", "outpost");
    expect(newUserAge.newPlanetAge()).toEqual(3);
  });

  test('test how long the user could live in a spaceSuit', () => {
    const newUserAge = new UserAge("john", 42, 74, "jupiter", "spaceSuit");
    expect(newUserAge.newLifeExpect()).toEqual(1);
  });

  test('test how long the user could live in an outpost', () => {
    const newUserAge = new UserAge("john", 42, 74, "jupiter", "outpost");
    expect(newUserAge.newLifeExpect()).toEqual(7);
  });

  test('test how long the user could live in an advanced civilization', () => {
    const newUserAge = new UserAge("john", 42, 74, "jupiter", "advanced civilization");
    expect(newUserAge.newLifeExpect()).toEqual(740);
  });

  test('test how long the user could live with nothing on another planet', () => {
    const newUserAge = new UserAge("john", 42, 74, "jupiter", "");
    expect(newUserAge.newLifeExpect()).toEqual(0);
  });
})